#!/usr/bin/env -S yarn ts-node --esm --compilerOptions={"module":"ESNext","target":"ESNext","moduleResolution":"node16"}

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { promisify } from 'node:util'

import { Command, Option } from 'commander'
import { findUpSync } from 'find-up'

const mkdir = promisify(fs.mkdir)
const writeFile = promisify(fs.writeFile)

function getRootPathSync(cwd: string) {
    // @ts-expect-error TS2769
    const lockfile = findUpSync('yarn.lock', { cwd, concurrency: 1 })
    if (!lockfile) {
        throw new Error('yarn.lock not found')
    }
    return path.dirname(lockfile)
}

function getPathInPackage(fullpath: string): string {
    const regex = /(?:@[^/]+\/)?([^/]+)\/(.*)/
    const match = fullpath.match(regex)

    return match ? match[2] : fullpath
}

function changeFileExt(filename: string, ext: string) {
    return filename.replace(/\.[^.]+$/, ext)
}

async function generate(root: string, contracts: string[], flat: boolean) {
    for (const fullpath of contracts) {
        const module = await import(fullpath, { assert: { type: 'json' } })
        const filepath = (flat ? path.basename : (x: any) => x)(getPathInPackage(changeFileExt(fullpath, '.abi')))
        const filename = path.join(root, filepath.replace('_Implementation', ''))
        await mkdir(path.dirname(filename), { recursive: true })
        const abi = module['default']['abi']
        const content = JSON.stringify(abi, null, 2)
        await writeFile(filename, content)
    }
}

const ROOT = getRootPathSync(process.cwd())
const DEFAULT_OUTPUT_DIR = path.join(ROOT, 'docs/.gitbook/assets/abis')

const CONTRACTs = [
    '@layerzerolabs/usdv-evm-sdk/deployments/ethereum-mainnet/USDVMain_Implementation.json',
    '@layerzerolabs/usdv-evm-sdk/deployments/bsc-mainnet/USDVSide_Implementation.json',
    '@layerzerolabs/usdv-evm-sdk/deployments/ethereum-mainnet/Operator.json',

    '@layerzerolabs/usdv-evm-sdk/deployments/ethereum-mainnet/VaultManager_Implementation.json',
    '@layerzerolabs/usdv-evm-sdk/deployments/ethereum-mainnet/VaultRateLimiter.json',

    '@layerzerolabs/usdv-evm-sdk/artifacts/contracts/integration/mm/Minter.sol/Minter.json',
    '@layerzerolabs/usdv-evm-sdk/artifacts/contracts/integration/mm/MinterProxy.sol/MinterProxy.json',

    '@layerzerolabs/usdv-evm-sdk/deployments/ethereum-mainnet/EthereumLP_Implementation.json',
    '@layerzerolabs/usdv-evm-sdk/deployments/bsc-mainnet/SidechainLP_Implementation.json',

    '@layerzerolabs/usdv-evm-sdk/deployments/ethereum-testnet/RecolorHelper.json',
    '@layerzerolabs/usdv-evm-sdk/deployments/bsc-testnet/BridgeRecolor.json',
]

const program = new Command('generate-abis')
    .addOption(new Option('--output <output>', 'output directory').default(DEFAULT_OUTPUT_DIR))
    .addOption(
        new Option('--flat', 'generate files in the output directory without keeping hierarchical structure').default(
            true
        )
    )
    .action(async (options: Record<any, any>, command: typeof Command) => {
        const { output, flat } = options
        await generate(output, CONTRACTs, flat)
    })

;(async () => {
    program.parse()
})()
