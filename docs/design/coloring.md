# Coloring

Eligible minters can go through the KYC procedures to be granted with a color, which is represented as a positive integer value in the token contracts.&#x20;

In the minting operation, users can specify a color and any freshly minted USDV is in the designated minting color.&#x20;

## Coloring Properties

**Coloring TLDR**: Lets say there is a pool with a **Enforced Color**, e.g. Green:&#x20;

* any USDV put into the pool will be recolored to Green
* any USDV withdrawn from the pool will stay Green until they are recolored.

Every address has only one color. This design enables 2 major properties:

* **Fungible**: all the tokens in an address are fully fungible, which allows DEFI to uniformly incentivize all the inbound tokens
* **Long-lived**: Tokens withdrawn from DeFi Pools will maintain their designated color until they undergo a recoloring process. This characteristic is **crucial** for protocols experiencing high transaction volumes, such as decentralized exchanges (DeX). Here, users often deposit and withdraw tokens rapidly through liquidity provisions or swaps. The significance is that the colored USDV will persist in users' wallets until a recoloring action takes place, enabling minters to gain more attribution than the Total Value Locked (TVL) in their respective pools.

## Recoloring

As users transfer their tokens, the tokens may be recolored and the ∆ of the associated colors will change. If k tokens of color B were recolored to G, then ∆B is increased by K and ∆G is decreased by K, respectively.&#x20;

#### Forced Recoloring

If the receiver account sets an Enforced Color, then the inbound tokens will always be reColored to the **Enforced Color**. Example: a pool has 100B, and receives an inbound transfer of 120G. The pool sets the Enforced Color to B, causing the 120G to be recolored to 120B, and the pool's final balance becomes 220B.

#### Weight Recoloring

If the receiver account does not set an Enforced Color, the color with a larger balance is implicitly chosen as the enforced color in each transaction. If the inbound token amount is smaller than the receiver balance, the inbound tokens will be reColored and vice versa. For example, a pool has 100B, and receives an inbound transfer of 120G.  The 100B is reColored to 100G, because 120 > 100, and the pool’s final balance becomes 220G.&#x20;

## Colorer and Enforced Color

The Enforced Color can only be set by the Colorer of the account, which defaults to the account itself. The default setting can be overwritten by setting the Colorer in the USDV contract. The operator of the USDV contract can also set a Colorer for any address given a KYC procedure to be compatible with address that are not supposed to interact with the custom interface of USDV contract directly. \
