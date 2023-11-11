---
description: A complete guide to coloring in USDV.
---

# How Coloring Works

## What is Coloring?

**Coloring** in USDV is a way of _tagging_ or _marking_ a token's metadata to identify which Verified Minter they originate from. Think of it like a label or a signature. USDV utilizes a novel [ColorTrace algorithm](../concepts/coloring.md) in order to accomplish this.&#x20;

Each Verified Minter is assigned a unique **Color ID**. This Color ID is stored in the token contract as a positive integer value.

### Key Concepts

1. **Verified Minter**: Only certain trusted entities, known as Verified Minters, can have and assign colors. These minters each have a unique color, referred to as their "Default Color."
2. **Contract Addresses and Colors**: Each contract address (like pools, pairs, wallets, vaults, etc.) can only have one color at a time.
3. **Default Color**: The Default Color is the unique color owned by a Verified Minter. Minters can manually set this color on contract addresses, or authorize an Operator to set the color on whitelisted addresses on their behalf.
4. **Impact on USDV Circulation**: The process of coloring has no direct impact on the amount of USDV in circulation, only the marking of the token's metadata itself.

## How USDV Recoloring Works

USDV can be colored in two main ways:

1.  **By Default Color**: If a receiver account (like a pool or a wallet) has a **Default Color** set, any USDV tokens sent to that account will automatically be recolored to match that account's Default Color.



    * **Example**: A pool with a Default Color of <mark style="color:blue;">**BLUE**</mark> has <mark style="color:blue;">**$100 USDV**</mark>. It receives <mark style="color:red;">**$120 RED USDV**</mark>. The incoming <mark style="color:red;">**$120 RED USDV**</mark> is recolored to <mark style="color:blue;">**BLUE**</mark>, making the pool’s balance <mark style="color:blue;">**$220 BLUE USDV**</mark>.



    <figure><img src="../.gitbook/assets/image (4).png" alt="" width="563"><figcaption><p>When destination address has a Default Color</p></figcaption></figure>
2.  **By Weight**: If the receiver account doesn’t have a **Default Color**, the color of the majority balance (heavier weight) determines the color. The smaller balance is recolored to match the larger one.



    *   **Example**: A pool has <mark style="color:blue;">**$100 BLUE USDV**</mark> and receives <mark style="color:red;">**$120 RED USDV**</mark>.&#x20;

        Since <mark style="color:red;">**$120 RED USDV**</mark> is greater than <mark style="color:blue;">**$100 BLUE USDV**</mark>, the pool's <mark style="color:blue;">**$100 BLUE USDV**</mark> is recolored to <mark style="color:red;">**RED USDV**</mark>, resulting in a final balance of <mark style="color:red;">**$220 RED USDV**</mark>.

<figure><img src="../.gitbook/assets/image (5).png" alt="" width="563"><figcaption><p>When destination does not have a Default Color</p></figcaption></figure>

## Other Coloring Properties

* **Fungible**: all the tokens in an address are fully fungible, which allows DeFi to uniformly incentivize all the inbound tokens.
* **Long-lived**: Tokens withdrawn from DeFi Pools will maintain their designated color until they undergo a recolouring process. This characteristic is **crucial** for protocols experiencing high transaction volumes, such as decentralized exchanges (DEX). Here, users often deposit and withdraw tokens rapidly through liquidity provisions or swaps. The significance is that the colored USDV will persist in users' wallets until a recoloring action takes place, enabling minters to gain more attribution than the Total Value Locked (TVL) in their respective pools.
