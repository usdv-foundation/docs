# Delta

Delta is defined as the **difference between the # of colored USDV and the # of minted USDV.**&#x20;

It is also a measure of how many USDV can potentially be re-minted, indicative of **potential yield** that the Verified Minter is **not realizing (+) / at risk of losing (-)**. Delta is calculated separately for each blockchain.

**Why potential?** This is because USDV is colored in Verified Minter's color but not minted by Verified Minter, and rights to yield share is attributable only to minted USDV.

Yield share is based on the number of minted USDV as part of total circulation (and **not** based on number of colored USDV). Any yield share gains or losses are unrealized until existing USDV is reminted to be Verified Minter's.

Recap: There are two ways to obtain minted USDV either by 1) [Mint](../verified-minters/mint.md) OR 2) by [Remint](remint.md).

### When Delta is Positive (# Colored > # Minted)

Verified Minter colors more USDV than it has minted (i.e large volumes of USDV pass through Verified Minter's pools, and is responsible for a larger share of USDV circulation than it has minted).

Result: Verified Minter has the potential of **increasing its yield share** by reminting the USDV that it has colored.

### When Delta is Negative (# Colored < # Minted)

Verified Minter minted tokens are being colored by others. Net flow of USDV to its ecosystem is negative and/or the minted USDV is not contributing to global circulation.

Result: Verified Minter is at risk of **reduced yield share** when other Color Owners opt to re-mint.



This design largely benefits protocols capable of attracting net positive USDV volumes and improving circulation with little capital, presenting the possibility to capture greater-than-minted yield share.
