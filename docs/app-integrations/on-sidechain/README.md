---
description: Swap stablecoins into USDV via SidechainLP
---

# On Sidechain

To integrate with SidechainLP, App will need to:

* Complete color KYC.
* Deploy contract, either:
  * [Default](./#default-bridgerecolor.sol), which will be deployed by the Operator, OR&#x20;
  * Custom Minter Contract implementation and provide address to Operator (to be compatible with the [Widget](../minter-widget.md), make sure it matches the interface of BridgeRecolor.sol).
* After above, the contract will be:
  * Whitelisted on SidechainLP.

### Default: [BridgeRecolor.sol](https://bscscan.com/address/0x5B1d0467BED2e8Bd67c16cE8bCB22a195ae76870#code)

The BridgeRecolor contract is an example implementation for Minters to provide a way for their users to swap stablecoins into USDV via SidechainLPs, facilitated by the [RecolorHelper.sol](recolor-helper.md). The BridgeRecolor allows Minter to over incentivize their users.

Minter can configure:

* User reward bps: if the user reward bps is set higher than the reward received from SidechainLP, USDV stored on the contract will be used to subsidize the difference.
* Tolerance bps: a safeguard to prevent rewarding users more than reward than received from the LP.

Please visit [Contract Addresses](../../technical-reference/mainnet.md#contract-addresses) for SidechainLP.sol addresses on each chain.
