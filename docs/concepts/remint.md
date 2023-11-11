# Remint

Remint is a one-step function for the **burning-and-minting of existing USDV** marked with your color but minted by another Verified Minter. The Verified Minter uses this function to increase their vault share without having to lock any new assets by recycling existing USDV.

Impact on USDV circulation: **Nil (/)**

Remint can be called by the Verified Minter if their color's [delta](delta.md) is positive on any blockchain.

<figure><img src="../.gitbook/assets/remint (1).png" alt=""><figcaption><p>Reminting is a convenient one-step operation for applications to burn other colored USDV and mint it in the application's color.</p></figcaption></figure>

The above example shows how Verified Minters can leverage high volume low TVL applications such as pools to gain additional vault shares.

1. A $100 balance starts initially as USDV\_RED
2. By chance, this balance passes through a pool with Default Color USDV\_BLUE.
3. The pool (USDV Pool) recolors $100 USDV\_RED to $100 USDV\_BLUE.
4. The owner (Verified Minter) of USDV\_BLUE calls Remint on the USDV\_BLUE delta of +$100
5. USDV\_BLUE gains $100 additional vault share, and some other color that was recolored (e.g., USDV\_RED) loses $100 vault share.

Reminting fee is applicable. See [Fees](parameters.md) for more details.
