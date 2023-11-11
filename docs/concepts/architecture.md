# Architecture

## Overview

<figure><img src="../.gitbook/assets/image (4) (1).png" alt=""><figcaption><p>USDV contract interaction diagram</p></figcaption></figure>

## Vault

USDV is held in a globally unique vault, deployed on Ethereum only.&#x20;

The Vault issues, tracks and updates the mint of each color, which represents the sum of circulation for a given color across all chains.&#x20;

This mint can be used to calculate the contribution of a given color to the global demand across all blockchains, which can be used in turn by the token foundation to fairly distribute yields.&#x20;

After a token is minted at the vault, it is atomically transferred to the minter’s wallet on the primary chain, from where it can be transferred to other chains or wallets.

### Delta

It is prohibitively expensive to update mint on the vault every time a token is recolored on a chain other than the primary chain; however, relaxing this synchronicity requirement between mint and circulation causes them to diverge, and handling this divergence in an efficient, provably safe manner is one of the key novel contributions of our algorithm.

We introduce the concept of localMint (localMint\_C for color C), which represents the quantity of colored tokens on the local chain that are accounted for at the vault, and use delta (∆C) to describe the divergence between localMint and circulation.

## USDV

USDV contracts are compatible to the widely adopted token standards (e.g. ERC20 on EVM) with administrative features for compliance requirements. It will also include signature-based permit (EIP2612) interfaces on EVM chains.&#x20;

Each USDV contract manages local coloring state. The coloring information will be synchronised back to the Vault to reduce the divergence for proper attribution.

This contract is deployed omnichain.

### Cross-chain

USDV is built on the messaging protocol LayerZero for its immutability, permissionless-ness and censorship resistance properties.&#x20;

## Minter

This contract is deployed for each (new) Verified Minter. Each Verified Minter is assigned a unique color ID. This contract facilitates blacklisting of certain callers and allows configuration to facilitate minting by using alternative stablecoins.

For easy integration, please refer to [**Minter Widget**](../app-integrations/minter-widget.md).



Learn more about contract roles & functions at [**Contract Governance**](../technical-reference/contract-governance.md).
