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

### SidechainLP.sol

<table><thead><tr><th width="197">Chain</th><th>Address</th></tr></thead><tbody><tr><td>BSC</td><td>0x7F9A873cB57AF892e229b8EE445dde9372539fce</td></tr><tr><td>Avalanche</td><td>0x728A036fBBF66FD7b09807a8d605c929B44bDF9E</td></tr><tr><td>Arbitrum</td><td>0x4607432711D0A26Bdb9DfF61A6Ab1d32780690d2</td></tr><tr><td>Optimism</td><td>0x5cCFd72da5bd694CB6CD2919987Ced474F8E3Fb3</td></tr></tbody></table>
