# Mint

Mint is defined as the **direct conversion of a whitelisted tokenized RWA into USDV.**&#x20;

Impact on USDV circulation: **Increase (+)**

The tokenized asset (STBT) is locked up in the Vault, and the Vault issues a corresponding quantity of USDV. The minted USDV is colored based on the USDV coloring policy (See [How Coloring Works](../what-is-usdv/how-coloring-works.md)).

## USDV Market Making

Tokenized RWA such as STBT may not be as readily and widely available vs mainstream stables (USDC/USDT/DAI), limiting USDV access.

To solve this problem, USDV has partnered with external market makers to allow conversion of mainstream stables to USDV directly.&#x20;

Market making contracts have been set up as below:

1. Ethereum: USDC, USDT, DAI
2. BSC: USDC, USDT
3. Avalanche: USDC, USDT
4. Arbitrum: USDC, USDT
5. Optimism: USDC, USDT

LP contracts are also available to facilitate stable -> USDV swaps.

Read more in the [Liquidity Provision](../technical-reference/liquidity-provision.md) section.
