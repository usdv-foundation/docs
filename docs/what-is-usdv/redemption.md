# Redemption

Redemption is defined as the destruction of USDV to redeem underlying tokenized RWA.

Impact on USDV circulation: **Reduce (-)**

By destroying USDV, the underlying asset is unlocked from the Vault. USDV of any color can be used for redemption.&#x20;

Redemption Flow:

* STBT users can deposit K USDV of any color (using USDV\_X as an example) to redeem.
* K STBT will be unlocked. Redemption Fee will go to the Operator. The rest go to the receiver.
* K Vault Shares will be removed from the redemption.

Note: Redemption is exclusive to the Ethereum network. Currently, only STBT is available for redemption.

Redemption fee is applicable. See [Fees](parameters.md) for more details.
