# Remint

Remint is a one-step function for the **burning-and-minting of existing USDV,** resulting with USDV in your color which was originally minted by another Verified Minter. Verified Minters use this function to increase their vault share without having to lock any new assets (i.e., recycling existing USDV).

Remint **does not** change the total circulation of USDV.

Remint can be called by the Verified Minter if their color's [delta](delta.md) is positive on any blockchain.

<figure><img src="../.gitbook/assets/remint (1).png" alt=""><figcaption><p>Reminting is a convenient one-step operation for applications to burn other colored USDV and mint it in the application's color.</p></figcaption></figure>

The above example shows how Verified Minters can leverage high volume low TVL applications such as pools to gain additional vault shares.

1. A $100 balance starts initially as <mark style="color:red;">**USDV\_RED**</mark>
2. By chance, this balance passes through a pool with Default Color <mark style="color:blue;">**USDV\_BLUE**</mark>.
3. The pool (USDV Pool) recolors $100 <mark style="color:red;">**USDV\_RED**</mark> to $100 <mark style="color:blue;">**USDV\_BLUE**</mark>.
4. The owner (Verified Minter) of <mark style="color:blue;">**USDV\_BLUE**</mark> calls Remint on the <mark style="color:blue;">**USDV\_BLUE**</mark> delta of +$100
5. <mark style="color:blue;">**USDV\_BLUE**</mark> gains $100 additional vault share, and some other color that was recolored (e.g., <mark style="color:red;">**USDV\_RED**</mark>) loses $100 vault share.

A reminting fee is applicable. See [Fees](parameters.md) for more details.
