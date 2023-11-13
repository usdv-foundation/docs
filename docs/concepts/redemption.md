# Redemption

Redemption is defined as the destruction of USDV to redeem underlying tokenized RWA.

Impact on USDV circulation: **Reduce (-)**

By destroying USDV, the underlying asset is unlocked from the Vault. USDV of any color can be used for redemption.&#x20;

Redemption occurs in a single atomic transaction as follows:

* A user deposits $K USDV of any color (e.g., <mark style="color:blue;">**USDV\_BLUE**</mark>) to redeem.
* $K STBT is unlocked. A Redemption Fee is deducted from the unlocked STBT, and the remaining balance is sent to the receiver.
* $K Vault Shares are removed from <mark style="color:blue;">**USDV\_BLUE**</mark>.

Redemption is currently exclusive to the Ethereum network, and only STBT is available for redemption.

Redemption fee is applicable. See [Fees](parameters.md) for more details.
