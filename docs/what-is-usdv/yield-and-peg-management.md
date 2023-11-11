---
description: USDV is always pegged 1:1 to US Dollar.
---

# Yield & Peg Management

USDV is built upon tokenized Real World Assets (Tokenized RWA), which is backed **1:1** by cash and yield bearing, highly liquid risk-free financial instruments (i.e repos, short term T-bills).

Only whitelisted tokenized assets are allowed to supply to USDV. All tokenized assets are stored in a [Vault](../concepts/vault.md) on Ethereum.

**STBT (Short-term Treasury Bill Token) is the first reserve asset underlying USDV.**

## STBT (Short-term Treasury Bill Token)

Exclusively designed for accredited investors, STBT follows ERC-1400 standards, allowing holders to tap into risk-free US T-bill yields. Interest is rebased to holders' STBT balances on a daily basis.

STBT pegged 1:1 USD (in NAV net-asset value), fully backed by the US dollar and US Treasury securities with maturities within 6 months and reverse repurchase agreements.

STBT is issued by Matrixdock, a digital asset platform that provides access to Real World Assets (RWA) through tokenization, a brand fully owned by Matrixport.

Website: [https://stbt.matrixdock.com/](https://stbt.matrixdock.com/)

Proof of Reserve: [https://data.chain.link/ethereum/mainnet/reserves/stbt-](https://data.chain.link/ethereum/mainnet/reserves/stbt-por)

FAQ: [https://matrixdock.gitbook.io/matrixdock-docs/v/english/](https://matrixdock.gitbook.io/matrixdock-docs/v/english/)

## USDV is always pegged 1:1 to US Dollar

To maintain 1:1 peg, the total supply of the tokenized RWA (here, STBT) is adjusted to the Net Asset Value (NAV) of the underlying RWA portfolio on each Banking Day. Yield is then rebased, excluding any negative interest days.

(Rebase is where supply is **algorithmically adjusted to to control price**. In our case, this is the minting of new tokens to ensure constant 1:1 peg)

USDV's globally unique [Vault](../concepts/vault.md) holding all tokenized RWA will also receive the rebased yield.

<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption><p>Illustration on USD pegging and yield distribution</p></figcaption></figure>

### Fair, transparent and equitable yield distribution

Countless CeFi, DeFi and businesses across geographies, blockchains and domains will contribute to USDV circulation and its growth.

Logically, **players contributing to a greater share of USDV circulation should be eligible to a larger share of underlying yields.**

Given the unpredictable and permission-less nature of stablecoin flow, the difficult question is **how can we attribute USDV circulation precisely to each contributor to enable fair yield distribution?**&#x20;

This is solved by **ColorTrace**, a novel 'token coloring' technology and a core feature underlying USDV design.

