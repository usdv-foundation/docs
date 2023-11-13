# ColorTrace Algorithm

The ColorTrace Algorithm tags each USDV with a color and safely tracks/synchronizes the corresponding yield shares in the Vault. This page describes several features of ColorTrace ([whitepaper](https://layerzero.network/publications/ColorTrace.pdf)).

ColorTrace is a novel algorithm that implements efficient tagging of tokens with color attributes to enable the fair allocation of yield sharing.

## Token and Wallet Properties

Every USDV token is marked with exactly one color, and each address holds tokens of up to one color. This allows ColorTrace to color tokens efficiently (constant space complexity) and with deterministic gas usage.

Tokens are **fungible**, allowing DeFi applications and users to use USDV tokens interchangeably regardless of color.

Token colors are **long-lived**, meaning tokens withdrawn from DeFi pools will maintain the pool's color until a different application or Verified Minter acquires and recolors them.

Tokens are [**recolored**](coloring.md#recoloring) as they flow through contracts or wallets owned by Verified Minters.

## Attribution

The ColorTrace algorithm tracks, in the vault, how many tokens of each color have been minted and the total supply of tokens across all colors. This data is used to fairly calculate proportional yield sharing.

As tokens are recolored, these changes in colored circulation are captured in [**Delta**](delta.md)**,** where a negative delta (deficit) implies a decrease in a color's circulation and a positive delta (surplus) implies an increase in the corresponding color's circulation.

Updates to the attribution data in the vault are made by calling [remint](remint.md), which atomically burns tokens of a color that has lost circulation and mints tokens of a color that has gained circulation. Reminting is made fair and safe by delta and the delta-zero invariant (See [ColorTrace Safety](global-invariants.md)).

