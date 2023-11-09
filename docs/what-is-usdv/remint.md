# Remint

Remint is defined as **burning-and-minting of existing USDV** marked with your color but minted by another Verified Minter. After executing this function, Verified Minter is able to recycle existing USDV and increase its # of minted USDV without having to lock any new assets.

Impact on USDV circulation: **Nil (/)**

This is one of USDV's most important functions. It allows Verified Minter's to capture greater yield share (beyond initial mint) by increasing its minted USDV holdings. Reminting is typically executed when Delta is positive (# colored > # minted).

Take an example,

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>Example of Verified Minter 1 benefiting from other USDV passing by its pool</p></figcaption></figure>

* Two Minters: Verified Minter 1 with Color RED, Verified Minter 2 with Color BLUE
* Verified Minter 2 mints $100 USDV\_BLUE, and by chance it passes a pool with Default Color RED. $100 USDV\_BLUE minted by Verified Minter 2 is recolored RED and becomes $100 USDV\_RED
* Verified Minter 1 remints all $100 USDV\_RED that was initially minted by Verified Minter 2
* Verified Minter 1 gains $100 minted USDV\_RED and is eligible for greater yield share

Reminting allows Verified Minters contributing to USDV circulation (by coloring more USDV than it has minted) to be rewarded with greater yield share.

Reminting fee is applicable. See [Fees](parameters.md) for more details.
