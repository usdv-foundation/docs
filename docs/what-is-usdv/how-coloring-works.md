---
description: A complete guide to coloring in USDV.
---

# How Coloring Works

## What is Coloring?

**Coloring** in USDV is a way of _tagging_ or _marking_ a token's metadata to identify which Verified Minter they originate from. Think of it like a label or a signature. USDV utilizes a novel [ColorTrace algorithm](../concepts/coloring.md) in order to accomplish this.&#x20;

Each Verified Minter is assigned a unique **Color ID**. This Color ID is stored in the token contract as a positive integer value.

### Key Concepts

1. **Verified Minter**: Only certain trusted entities, known as Verified Minters, can have and assign colors. These minters each have a unique color, referred to as their _Default Color_.
2. **Contract Addresses and Colors**: Each contract address (e.g., pools, pairs, wallets, vaults, etc.) can only hold USDV tokens of one color at a time.
3. **Coloring**: Verified Minters can [set the color](../verified-minters/setting-default-color.md) of a contract or wallet address. Users may also change the color of tokens in a wallet with no direct impact on the amount of USDV in circulation, as it only changes the marking stored in the token's metadata.

## How USDV Recoloring Works

USDV changes colors based on one of two policies: _Default Color_ or _Weight-based_.

<figure><img src="../.gitbook/assets/recoloring (1).png" alt=""><figcaption><p>If Default Color is set, all transfers are recolored to the Default Color. Otherwise, the higher quantity color is chosen.</p></figcaption></figure>

1. **By Default Color**: If a receiver account (like a pool or a wallet) has a **Default Color** set, any USDV tokens sent to that account will automatically be recolored to match that account's Default Color.

* **Example**: A pool with a Default Color of <mark style="color:blue;">**USDV\_BLUE**</mark> has <mark style="color:blue;">**$100 USDV\_BLUE**</mark>. It receives <mark style="color:red;">**$120 USDV\_RED**</mark>. The incoming <mark style="color:red;">**$120 USDV\_RED**</mark> is recolored to <mark style="color:blue;">**USDV\_BLUE**</mark>, making the pool’s final balance <mark style="color:blue;">**$220 USDV\_BLUE**</mark>.

2. **By Weight**: If the receiver account doesn’t have a **Default Color**, the color of the majority balance (heavier weight) determines the color. The smaller balance is recolored to match the larger one.

*   **Example**: A pool has <mark style="color:blue;">**$100 USDV\_BLUE**</mark> and receives <mark style="color:red;">**$120 USDV\_RED**</mark>.&#x20;

    Since <mark style="color:red;">**$120 USDV\_RED**</mark> is greater than <mark style="color:blue;">**$100 USDV\_BLUE**</mark>, the pool's <mark style="color:blue;">**$100 USDV\_BLUE**</mark> is recolored to <mark style="color:red;">**USDV\_RED**</mark>, resulting in a final balance of <mark style="color:red;">**$220 USDV\_RED**</mark>.

## Other Coloring Properties

* **Fungible**: all USDV tokens are fully fungible, regardless of color. This allows users and DApps to transact using any colored USDV tokens interchangeably.
* **Long-lived**: Tokens withdrawn from Pools maintain their designated color until they undergo a recoloring . This characteristic allows protocols with high transaction volumes, such as decentralized exchanges (DEX), to better capture attribution. Here, users often deposit and withdraw tokens rapidly through liquidity provisions or swaps. The significance is that the colored USDV will persist in users' wallets until a recoloring action takes place, enabling minters to gain more attribution than the Total Value Locked (TVL) in their respective pools.
