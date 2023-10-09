# Architecture

## Overview

<table><thead><tr><th>Contracts</th><th width="293.3333333333333">Scope of Responsibility</th><th>Deployments</th></tr></thead><tbody><tr><td>Vault</td><td>Manages the USDV issuance, USDV minter’s vault shares, and the associated yield distribution</td><td>Ethereum only</td></tr><tr><td>USDV</td><td><p>Stable Coin contracts.</p><p>Manages the coloring states</p></td><td>Omnichain</td></tr></tbody></table>

## Vault

The globally unique vault, deployed on the designated primary chain, tracks and updates the mint of each color, which represents the sum of circulation for a given color across all chains. This mint can be used to calculate the contribution of a given color to the global demand across all blockchains, which can be used in turn by the token foundation to fairly distribute yields. After a token is minted at the vault, it is atomically transferred to the minter’s wallet on on the primary chain, from where it can be transferred to other chains or wallets.

### Delta

It is prohibitively expensive to update mint on the vault every time a token is recolored on a chain other than the primary chain; however, relaxing this synchronicity requirement between mint and circulation causes them diverge, and handling this divergence in an efficient, provably safe manner is one of the key novel contributions of our algorithm.

We introduce the concept of localMint (localMint\_C for color C), which represents the quantity of colored tokens on the local chain that are accounted for at the vault, and use delta (∆C) to describe the divergence between localMint and circulation.

## USDV

USDV contracts is compatible to the widely adopted token standards (e.g. ERC20 on EVM) with administrative features for compliance requirements. It will also include signature-based permit (EIP2612) interfaces on EVM chains.&#x20;

Each USDV contract manages its own local coloring state and the coloring information will be synchronised back to the Vault to reduce the divergence for proper attribution.

### Cross-chain

USDV is built on the messaging protocol LayerZero for its immutability, permissionlessness and censorship resistance properties.&#x20;
