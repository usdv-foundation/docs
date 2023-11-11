# Mint

Mint is defined as the **direct conversion of any whitelisted tokenized RWA into USDV.**&#x20;

Impact on USDV circulation: **Increase (+)**

Before minting, the tokenized asset is locked into the Vault to ensure collateralization. Currently, only STBT is whitelisted, hence minting means STBT locked to create USDV. This function is exclusive to the Ethereum network.

Only Verified Minters with KYC approval are eligible for minting. The above design ensures&#x20;

1. Each USDV minted is backed 1:1 with tokenized RWA (which is backed 1:1 with RWA)
2. Regulatory and KYC compliance

Minters can specify any color for the newly minted USDV. If the Minter owns a color, the newly minted USDV is configured to its own color by default.

## USDV Market Making

Tokenized RWA such as STBT may not be as readily and widely available vs mainstream stables (USDC/USDT/DAI), limiting USDV access.

Hence, USDV has partnered with external market makers to allow conversion of mainstream stables to USDV directly.&#x20;

Market making contracts have been set up as below:

1. Ethereum: USDC, USDT, DAI
2. BSC: USDC, USDT
3. Avalanche: USDC, USDT
4. Arbitrum: USDC, USDT
5. Optimism: USDC, USDT

LP contracts are also available to facilitate stable -> USDV swaps.

Read more in the [Liquidity Provision](../technical-reference/liquidity-provision.md) section.
