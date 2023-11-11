# Delta

Delta is the difference, for each color, between the current supply of USDV and the quantity of USDV originally minted. For example, if USDV\_BLUE started with $100 tokens minted, but $50 were _recolored_ to USDV\_RED, Delta(USDV\_BLUE) = -50 (deficit) and Delta(USDV\_RED) = +50 (surplus).

Delta can also be thought of as _yield potential_, or how much the current vault shares of a given color may change in the near future. A **positive delta** (surplus) means there is potential yield that is not being collected. A **negative delta** (deficit) means there is the potential for yield reduction.

Delta is calculated separately for every color on every blockchain. Verified Minters choose when to remint based on their color's delta value on each blockchain.

## Volume vs TVL

A Verified Minter's delta can _**never**_ fall below its TVL (See [ColorTrace Safety](global-invariants.md) mint-holding guarantee). However, a Verified Minter can gain vault shares beyond its TVL by recoloring USDV that flows through its contracts (See [Remint](remint.md))
