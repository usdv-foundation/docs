# USDV Issuance

The Vault contract has a list of whitelisted assets for backing USDV. Normally, these are assets are yield bearing for generating the income for the minters. The first whitelisted assets is STBT, a T-bill token.

### Minting

Issuing USDV from any backing asset 1:1. No minting fee.&#x20;

Minting Flow:

* STBT owner X deposits K STBT into the Vault Contract, which maintains the 1:1 peg of STBT and USDV.
* The specified receiver account will receive K USDV\_X from the minting.
* X will get K Vault Shares from the minting.

### Redemption

Destroying a USDV for any backing asset. Redemption fee applicable.

Redemption Flow:

* STBT users can deposit K USDV of any color (using USDV\_X as an example) to redeem.
* K STBT will be unlocked. Redemption Fee will go to the Operator. The rest go to the receiver.
* K Vault Shares will be removed from the redemption.
