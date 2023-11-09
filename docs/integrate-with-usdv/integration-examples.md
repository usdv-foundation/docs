# Integration Examples

USDV is ERC-20 compatible and follows standard integration & deployment guidelines.&#x20;

Semantics may vary by protocol but processes are conceptually similar.

1. **DEX (deploy USDV pair / pool)**

* **Manually:** Go to DEX pool deployment page
* **Coding:** call createPair() or addLiquidity()
* Insert USDV token contract address as one of the options
* Provide Operator with pool/pair address -> Operator assigns color to provided address

2. **Lending/Borrowing (add USDV as an underlying option)**

* Insert USDV token contract address as one of collateral / borrow option
* Deploy lending product (i.e Vault). This should generate a Vault address.
* Provide Operator with Vault address -> Operator assigns color to provided address

3. **Wallet (import USDV as a new token option)**

* Connect crypto wallet of your choice
* Switch to 'Import Token' interface (or equivalent)
* Insert USDV token contract address. Token symbol and decimal should autofill.
* Click 'Add Custom Token'

4. **Minter Widget**

* Deploy Minter Widget contract.
* Provide Widget contract address to Operator. Operator will whitelist for LP and configure color to address.
* Integrate Widget to website

See next page for details on Minter Widget deployment.

