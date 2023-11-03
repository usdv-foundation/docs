---
description: Flexibility to rotate between roles within a wallet
---

# Contract Governance



## **Vault**

<table><thead><tr><th width="180">Role</th><th>Functions</th></tr></thead><tbody><tr><td>Operator</td><td><ol><li>Set Operator Fee</li><li>Set the Redemption_Fee in the range of [0, Redemption_Fee_Cap]</li><li>Register/rotate minter address</li><li>Pause color</li><li>Adjust mint/redeem rate limiter</li></ol></td></tr><tr><td>Foundation</td><td><ol><li>Change the Operator if the Operator forfeits the right by transferring to an empty address, or the Operator has yet to interact with the Vault contract for 30 days. </li><li>Set the Redemption_Fee_Cap in the range of [10 bps ,10000 bps]</li></ol></td></tr><tr><td>Owner</td><td><ol><li>Upgrade Contract</li><li>Register/pause-mint new assets</li><li>Withdraw from Reserve Wallet</li><li>Set global pause</li><li>Set Rate Limiter contract</li><li>Set Role</li><li><p>Set parameters:</p><ol><li>Reserve yield bps (capped at 3%)</li><li>Operator Fee Cap</li><li>Liquidity Provider Fee Cap</li></ol></li></ol></td></tr><tr><td>Liquidity Provider</td><td><ol><li>Set LP Fee</li></ol></td></tr><tr><td>Donor</td><td><ol><li>Donate backing assets to the vault without minting the USDV</li></ol></td></tr></tbody></table>



## USDV

<table><thead><tr><th width="180">Role</th><th>Functions</th></tr></thead><tbody><tr><td>Foundation</td><td><ol><li>Blacklist users from mint/burn/transfer/transferFrom</li></ol></td></tr><tr><td>Operator</td><td><ol><li>Pause the contract</li><li>Change the Remint/Sync Fee</li><li>Adjust cross-chain rate limiter</li><li>Set Colorer and Default Color</li></ol></td></tr><tr><td>Vault</td><td><ol><li>Mint </li><li>Burn </li></ol></td></tr><tr><td>Owner </td><td><ol><li>Upgrade Contract</li><li>Set Role</li></ol></td></tr></tbody></table>
