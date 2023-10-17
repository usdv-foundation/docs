---
description: Every role can rotates its own wallet
---

# Vault

<table data-header-hidden><thead><tr><th width="180"></th><th></th></tr></thead><tbody><tr><td>Role</td><td>Functions</td></tr><tr><td>Operator</td><td><ol><li>Set Operator Fee</li><li>Set the Redemption_Fee_Cap in the range of [0, Redemption_Fee_Cap]</li><li>register/pause colors and rotate color's minter address</li><li>Adjust mint/redeem rate limiter</li></ol></td></tr><tr><td>Foundation</td><td><ol><li>Change the Operator if the Operator forfeits the right by transferring to an empty address, or the Operator has yet to interact with the Vault contract for 30 days. </li><li>set the Redemption_Fee_Cap in the range of [10 bps ,10000 bps]</li></ol></td></tr><tr><td>Owner</td><td><ol><li>Upgrade Contract</li><li>Register/pause-mint new assets</li><li>Withdraw from Reserve Wallet</li><li>Set global pause</li><li><p>Set boundary parameters:</p><ol><li>reserve yield bps (capped at 3%)</li><li>Operator Fee Cap</li><li>Liquidity Provider Fee Cap</li></ol></li></ol></td></tr><tr><td>Liquidity Provider</td><td><ol><li>Set LP Fee</li></ol></td></tr><tr><td>Donor</td><td><ol><li>Donate backing assets to the vault wihtout minting the USDV</li></ol></td></tr></tbody></table>
