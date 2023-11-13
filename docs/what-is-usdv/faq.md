---
description: The most common questions asked about USDV.
---

# FAQ

## General

1. **What is USDV?**

Verified USD (USDV) is a stablecoin pegged 1:1 with the US Dollar, fully backed by a basket of tokenized US Treasury securities.

Compatible with the ERC-20 standard, USDV is a native omnichain stablecoin integrated with LayerZero’s Omnichain Fungible Token (OFT) Standard.

USDV is powered by ColorTrace, a novel value attribution algorithm invented by LayerZero Labs, allowing community participants to receive rewards transparently and equitably for their contributions to the ecosystem.

2. **What gives USDV its value?**

USDV is backed by a reserve of tokenized Real World Assets. Specifically, the initial reserve asset is Short-term Treasury Bill Tokens (STBT). This reserve backing gives USDV its value and pegs it to the US dollar. In the future, USDV will expand support for the inclusion of other highly secure tokenized Real World Assets in underlying reserves.

3. **Who can buy and use USDV?**

USDV can be minted by approved entities called Minters through agreements with the issuing entity. Once purchased by Minters, USDV can circulate freely to anyone. There are no restrictions on who can hold or use USDV. For example, a user could swap ETH for USDV on a DEX.

4. **STBT backs USDV. What is STBT?**

STBT (Short-term Treasury Bill Token) is the first reserve asset underlying USDV.

Exclusively designed for accredited investors, STBT follows the ERC-1400 standard, allowing holders to tap into risk-free US T-bill yields. STBT is daily rebased to peg to 1 USD.&#x20;

STBT pegged 1:1 USD (in NAV net-asset value), fully backed by the US dollar and US Treasury securities with maturities within six months and reverse repurchase agreements.

STBT is issued by Matrixdock, a digital asset platform that provides access to Real World Assets (RWA) through tokenization, a brand wholly owned by Matrixport.

5. **How does USDV handle large redemption requests?**

USDV is redeemed for STBT via smart contract; since STBT is on-chain, it is 100% transparent and can be redeemed regardless of the request size.

6. **What is being paid out as rewards to Verified Minters?**

Contributors are incentivized to mint as they receive a portion of the yield from the underlying asset of STBT. Mechanically, STBT is daily rebased to peg 1:1 to USD and additional STBT is daily generated as yield.

A portion of the STBT yield (converted into USDV) will be shared with Verified Minters as rewards for their contribution.

7. **How does the USDV circulation peg to the underlying rebasing assets?**

When the underlying assets, like STBT, rebase, the Vault’s balance increases. The protocol will then mint the same amount of new USDV, from which a portion of which will be allocated as verified minter rewards.&#x20;

The amount of USDV in circulation will naturally increase at the rebasing rate of its underlying assets while keeping the peg to 1 US dollar.

8. **What is the difference between USDV and STBT?**

USDV is an omnichain native stablecoin backed by STBT.&#x20;

STBT is backed by real-world assets of cash and US treasury securities. STBT rebases daily based on the yield earned on these underlying real-world assets; USDV does not rebase and is always pegged 1:1 with the US Dollar.

9. **Does USDV have a rebasing mechanism?**

USDV does not have a rebasing mechanism.

10. **Why was STBT chosen as the first reserve asset?**

STBT is fully backed and entirely transparent, utilizing Chainlinks Proof of Reserves. It is also verifiable on-chain with timely minting and redemption pathways and has also undergone rigorous checks and audits by reputable security firms.

STBT is 100% backed by US Dollars and short-term US treasury bills, including more than 90% of overnight repo and short-term T-bills with maturity of within six months. This enhanced stability and transparency reduces the risk associated with USDV.

11. **Where can users acquire or interact with USDV?**

Users can acquire or interact with USDV through various leading CeFi and DeFi platforms. For the list of partners please visit [USDV's official website.](https://usdv.money/)

12. **What is the process for minting and redeeming USDV?**

For minting USDV, the flow is as follows:

* Verified Minter X deposits STBT into the Vault Contract, which maintains the 1:1 peg of STBT and USDV.
* The specified receiver account will receive USDV\_X from the minting.
* USDV\_Z will be colored for reward allocation to Verified Minter X..

For redeeming USDV, the flow is as follows:

* STBT users can deposit USDV of any color (using USDV\_X as an example) to redeem.
* STBT will be unlocked. Redemption Fee will go to the Operator. The rest goes to the receiver.
* USDV\_X will be burned.

13. **How long does the minting/redemption process take?**

All minting and redemption processes are completed on-chain and typically take only one block.

14. **Where can a Minter Mint/Redeem USDV?**

Minter can operate Mint/Redeem applications in the following three places:

* The smart contract interface on the USDV website.
* USDV smart contract API.
* Partner platforms with interfaces for Mint/Redeem. (Our partner network will be continuously updated.)

## Legal and Regulatory

1. **Is USDV considered a security or regulated investment?**

USDV is **neither a security nor a regulated investment.**&#x20;

USDV does not represent ownership, equity, or rights to profits/losses in any company or legal entity. Holding USDV does not make you a shareholder or give you voting rights in any entity. USDV is not issued for investment purposes or to pool funds for collective investment. It is issued as a means of exchange and to facilitate transactions.&#x20;

Holders of USDV do not have any inherent contractual rights to redeem USDV from the issuing entity for assets or legal tender. Certain parties like "Minters" may have separate contractual redemption rights, but regular USDV holders have no such rights.&#x20;

While USDV aims to maintain a stable value through asset backing, holding it does not entitle you to any underlying assets. The assets are owned solely by the issuing entity.

The issuing company does not promote or market USDV as an investment opportunity or security. The nature of USDV is a method of payment rather than an investment.

In summary, USDV lacks the traditional features and characteristics that qualify it as a security. It represents a medium of exchange rather than ownership or investment in any entity.

2. **What regulations apply to USDV?**

The issuing company is subject to British Virgin Islands anti-money laundering laws. Though not formally required, the company plans to take measures to verify USDV Minters identities and sources of funds. USDV holders are responsible for their tax obligations and compliance with any regulations in their jurisdictions.

3. **Who manages USDV?**

USDV is owned and managed by the[ ](https://usdv.money/foundation)Verified USD Foundation, a non-profit organization committed to nurturing USDV’s global ecosystem of contributors, developers, and users.

4. **What is the Verified USD Foundation?**

The Verified USD foundation is a non-profit independent entity accountable for USDV, a community-based native omnichain stablecoin. It is dedicated to nurturing a progressive stablecoin ecosystem that enables equitable value sharing amongst its community of contributors.&#x20;

The Foundation is also responsible for onboarding new contributors and establishing the roadmap and governance of USDV.

5. **To mint USDV, do you need to be KYC’ed?**

You do not need to be KYC'ed to mint USDV. However, to receive yield as a Verified Minter, you need to KYC.

6. **Who serves as the custodian for the reserve assets?**

USDV is an on-chain stablecoin backed by tokenized real-world assets such as STBT, which is also 100% transparent with real-time insights of transactions on Etherscan and PoR powered by Chainlink.&#x20;

The STBT project offers 100% bankruptcy remoteness through its orphan SPV structure. STBT's underlying assets consist of US treasury securities under the custody of leading financial institutions.

7. **How does the rebasing mechanism function in regulating USDV’s value?**

USDV does not have a rebase mechanism. The underlying asset of STBT has a rebasing mechanism, a 1:1 peg with the US Dollar.

## Technology

1. **LayerZero uses an oracle and relayer model to move messages between blockchains. Which oracle and relayer are being used to enable USDV as an OFT?**

USDV uses LayerZero’s relayer and the Google Cloud Oracle to be enabled as an OFT.

2. **Which entities have the power to change the configuration of the LayerZero messaging (Oracle and Relayer)?**

The Verified USD Foundation is solely responsible for managing USDV and is the only entity that can change the configuration of LayerZero messaging.

3. **Can you elaborate on the technical mechanics that drive USDV?**

There are two key technical mechanisms driving USDV. 1) OFT and 2) ColorTrace.

**OFT:** USDV integrates with the OFT Standard for seamless operation across multiple blockchain networks. This omnichain functionality empowers USDV with extensive accessibility and versatility within the ever-evolving blockchain ecosystem.

**ColorTrace:** USDV’s integration of ColorTrace enables verified minters participating in USDV to receive equitable rewards for their contributions to the ecosystem. Similar to Bitcoin's UTXO structure, minters can mark USDV in their color, gaining the right to claim the rewards from their contributions to the USDV ecosystem without dispute.

4. **What problem is ColorTrace, and by extension USDV, designed to solve?**

It is designed to create an equitable stablecoin ecosystem through a fair rewards distribution system fostering an inclusive community-based approach to drive adoption and sustain growth.

5. **How about USDV?**

USDV aims to be a fast, secure, and transparent medium of exchange native to the Internet, solving problems inherent in the traditional banking ecosystem.

Through its native omnichain features, it avoids liquidity fragmentation across chains, increasing efficiency.&#x20;

Further, through ColorTrace, USDV aims to address the inequitable distribution of underlying yield that currently exists with stablecoins. USDV enables yield sharing with those who contribute the most to the growth of USDV.

6. **In what ways does USDV offer a competitive edge over existing market options?**

USDVs unique attribution mechanism enables the fair distribution of underlying rewards to contributors, such as Verified Minters. Furthermore, by using LayerZero’s messaging layer and Omnichain Fungible Token OFT Standard, USDV can be moved seamlessly between multiple chains at launch, with the ability to expand this capability to any chain enabled by LayerZero Endpoints.

7. **How is interoperability achieved? Is USDV supported across multiple blockchain networks currently?**

USDV is built on LayerZero’s Omnichain Fungible Token Standard. At launch, USDV will be available on Ethereum, BNB, Avalanche, Arbitrum and Optimism. Given LayerZero’s novel technology, USDV can be expanded to any chain supported by LayerZero (40+ chains).

## Transparency

1. **What measures are in place to ensure the integrity and verification of USDV?**

USDV is an on-chain stablecoin; its open-sourced smart contracts have undergone third-party audits by Paladin, OtterSec & Zellic.io.

Transparency is enabled by its initial reserve asset, STBT, with Daily Proof-of-Reserve and real-time monitoring on Etherscan, powered by Chainlink, offering an immutable record of ownership.

2. **Can you describe the strategy for token supply management and reserve maintenance?**

The supply of USDV is not fixed and may change due to variations in the reserved asset, primarily influenced by the quantity of assets such as STBT held in reserve. Should new USDV be minted, the total supply could increase. Conversely, redemption activities may decrease the total supply.

\
Information on the current USDV total supply and reserved asset amounts can be accessed by browsing the following[ website](https://usdv.money/transparency).

## Community

1. **Who are your community contributors, and how are they involved?**

USDV’s Community consists of Operators, Liquidity Providers, and Verified Minters:

* **Operators:** Provide technology and security backing the USDV ecosystem and support the promotion and branding of USDV.
* **Liquidity Providers:** bring stability and enable USDV to be distributed on demand.
* **Verified Minters:** contribute to USDV adoption and growth of liquidity in the ecosystem.



If you have any other questions, please feel free to contact us at support@usdv.money
