# Monitoring & Reminting

Navigate to the **‘Coloring’** page. This page is structured into two main parts: 1) Monitoring and 2) Reminting.

## 1) Monitoring

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

### Vault Shareholding

In the example, the Verified Minter owns is **colour 16**.&#x20;

Here you can see the ‘Verified Minter’s USDV contract address, as well as their Vault shareholding. Vault Share is calculated is the number of USDV under Verified Minter's color as a % of all circulating USDV. As Vault Share % increases, the Verified Minter is eligible for greater potential yield.

### Unclaimed Reward

A 'Verified Minter's claim to yield rewards is proportional to its Vault shareholding. Tokenized RWA yield is accrued and re-based daily, and immediately converted into USDV rewards to maintain its 1:1 peg.

‘Verified Minter’ can claim rewards attributed to their own colour any time by clicking the ‘Claim Reward’ button. See [**Claiming Rewards**](claim-rewards.md) section for more information.

### Reward Per Day

Reward Per Day is calculated based on the Verified Minter's current minted USDV amount and 7-day average APR of underlying tokenized RWA. This figure is an estimate only and may be different from the actual amount distributed.

### Colored and Minted USDV

A bar chart comparing quantities of Colored USDV and Minted USDV owned by the Verified Minter.&#x20;

Note that rewards are calculated based on **minted USDV**. In the above graphic, Verified Minter 16 has the potential to capture greater yields by realising the remint opportunity on positive [delta](../concepts/delta.md).

## 2) Reminting

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

**Part (2)** reveals the balance of colored and minted USDV under Verified Minter’s colour across different chains.

In the case when Colored > Minted, also defined as Delta Positive, the Verified Minter may remint to capture greater yield. For more details on how it works, please read [Delta](../concepts/delta.md) section.

See the above example of Verified Minter 16,&#x20;

* There is $600 USDV colored 16 on Goerli, but only $200 minted USDV
* This presents a Positive Delta of +$400 and the possibility to remint, as confirmed by the activation of the 'Remint' button.

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

After clicking 'Remint', the Verified Minter can adjust how much to remint by deciding on speciifc percentage allocations. Here we set 'Remint' percentage to 75% (remint $300). Click **‘Remint’** to initiate the transaction.

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

If **‘Remint’** is executed on Ethereum, the transaction is directly processed and submitted. If **‘Remint’** is executed on any other chain (non Ethereum), there will be extra time required for cross chain message delivery before **‘Remint’** success.

After this transaction, Verified Minter has $500 minted USDV and can earn more yield rewards without any additional STBT->USDV minting.

