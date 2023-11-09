# Color

Color is defined as **tagging/overriding** of token metadata (Color ID) when USDV is 'touched' or 'converted'.&#x20;

Each Color ID is unique to a specific Verified Minter and is stored as a positive integer value in the token contracts. Each contract address (Pools, pairs, wallets, vaults etc) can only have **one color.**

Impact on USDV circulation: **Nil (/)**

## Default Color

Only Verified Minters can own a color. This Verified Minter unique color is also known as **'Default Color'.** Verified Minters may own multiple Default Colors.

Only Verified Minters may set Default Color on contracts addresses. Verified Minter may also appoint the Operator to set Default Color on other whitelisted addresses on its behalf.&#x20;

## How to color USDV?

There are two ways that USDV can be colored.

### 1) By Default Color

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p>When destination address has a Default Color</p></figcaption></figure>

**Rule: Always follow Default Color**

If the receiver account sets an Default Color, then the inbound tokens will always be recolored to the **Default Color**. Example: a pool has $100 USDV\_BLUE, and receives an inbound transfer of $120 USDV\_RED.&#x20;

The pool sets the Default Color to BLUE, causing the $120 USDV\_RED to be recolored to $120 USDV\_BLUE, and the pool's final balance becomes $220 USDV\_BLUE.

### 2) By Weight

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption><p>When destination does not have a Default Color</p></figcaption></figure>

**Rule: The one with heavier weight wins**

If the receiver account does not set an Default Color, the color with a larger balance is implicitly chosen as the Default Color in each transaction. If the inbound token amount is smaller than the receiver balance, the inbound tokens will be recolored and vice versa.&#x20;

For example, a pool has $100 USDV\_BLUE, and receives an inbound transfer of $120 USDV\_RED.  The $100 USDV\_BLUE is recolored to $100 USDV\_RED, because $120 > $100, and the pool’s final balance becomes $220 USDV\_RED.&#x20;

## Other Coloring Properties

Coloring has two other major properties

* **Fungible**: all the tokens in an address are fully fungible, which allows DEFI to uniformly incentivize all the inbound tokens
* **Long-lived**: Tokens withdrawn from DeFi Pools will maintain their designated color until they undergo a recoloring process. This characteristic is **crucial** for protocols experiencing high transaction volumes, such as decentralized exchanges (DeX). Here, users often deposit and withdraw tokens rapidly through liquidity provisions or swaps. The significance is that the colored USDV will persist in users' wallets until a recoloring action takes place, enabling minters to gain more attribution than the Total Value Locked (TVL) in their respective pools.
