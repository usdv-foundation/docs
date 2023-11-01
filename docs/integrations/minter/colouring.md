# Colouring

Navigate to the **‘Coloring’** page. This page is structured into two main parts.

<figure><img src="https://lh7-us.googleusercontent.com/iiMzwynZGSASa6ZXcABrlBk0I1Aw-HqsOyrp6SxKKqUIU55BCy5G1MqoKtDA6gG9yAQdTIDS7uWEE6FIUdk5ulviAEpmJwLsTDMeslP-Cg5wd-SJZvSQ5XgpEgrrif-_3i9iqA1UrZsQ1jUzsMmLeMU" alt=""><figcaption></figcaption></figure>

## Colour Shareholding

By default, **Part (1)** shows # of USDV minted with ‘Verified Minter’s own colour. In the example, this is colour 14.&#x20;

Here you can see the ‘Verified Minter’s USDV contract address, as well as their colour shareholding. Colour shareholding is directly tied to Vault shareholding as a % of all circulating colour shares. A 'Verified Minter's claim to daily yield rewards is proportional to its Vault shareholding.

‘Verified Minter’ can claim rewards attributed to their own colour any time by clicking the ‘Claim Reward’ button. See ‘Claim Rewards’ section for more information.

## Reminting

**Part (2)** reveals the balance of USDV under Verified Minter’s colour across different chains, ‘Potential / Delta’, as well as the option for re-minting.

At a high level,

* **(+) Positive Delta** means someone minted USDV in your colour. You are receiving a larger yield share than minted
* **(-) Negative Delta** means someone minted your USDV in another colour. You are receiving a smaller yield share than minted.

As a Verified Minter, you may remint other‘s positive balances to recover your own negative balance.&#x20;

Take an example,

* We are a ‘Verified Minter’ who is assigned colour 14
* We mint $50 USDV in colour 16 on Goerli
* Owner of Colour 16 +$50 and we (Owner of colour 14) are -$50 on Goerli

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

Now, there is the possibility to remint ‘Verified Minter 16’s $50 back to colour ‘14’ on Goerli.

<figure><img src="https://lh7-us.googleusercontent.com/LXZIQM0Wnw0nQPHrizXE_4Flw41LYrVtNn6LSgKKvajQ7WJtXXmmIb24Cxq_OHwuiaF8uQSXakl6aA4_Ty9zYj4E0MW4_cIXBsS2zD1g9NeupRE3IgYiTI4lgD89mCV7vkaMJOBO5gHuVYX7PLaZ7R8" alt=""><figcaption></figcaption></figure>

You can adjust the remint amount by dragging the percentage slider. Here we set ‘Remint’ percentage to 100%.

<figure><img src="https://lh7-us.googleusercontent.com/A5TIKraO8ZfTwuECWgP6Q01ItyYXks9Tms_82DsMIKUKGUpiZ67whhd6j8XiPxEqqodjKTVy8dQ9lwR07abpdEainT3UcWmvMQSMC0QwFNsDmFYMoISgRtRx8nrPeaVznF6ac6KV66e3XBeAZCjt8tY" alt=""><figcaption></figcaption></figure>

Click **‘Remint’** to initiate the transaction for wallet sign-off. If **‘Remint’** is executed on Ethereum, the transaction is directly processed and submitted. If **‘Remint’** is executed on any other chain (non Ethereum), there will be extra time required for cross chain message delivery before **‘Remint’** success.

<figure><img src="https://lh7-us.googleusercontent.com/ra2w01_PxQYrZlUEDZp4RugFLcXT0-y0mRDel_d_p_eMw72VI9ya4b2DhVZPBcHnhFXuQaoDAhZ2kNrJHrSeFcUsU6K2wiCpiFW9kR6YoZR_gEVZXNsykUgKxUKVOo8XHEuDTe81USmPfPZnR7fQKf4" alt=""><figcaption></figcaption></figure>

After the above steps, you can see that **‘Remintable’** is fully cleared on Colour ‘16’. An equivalent amount is reduced from Colour ‘14’ negative balance on Goerli.

<figure><img src="https://lh7-us.googleusercontent.com/N23f0rVJw4XnSWYE4Ht1bpMHHCPdivr6DHk7GUWevQdR5AzrQzrN1soPsdhXFmiv-j06dhTG0Ui6HDgnxMs4jlXB32QbgE7P68O2vW-ExSBdLs7QKA6vSu3jS0_ky0Svb9_uU0zj6ncVPZzF4A1OOM0" alt=""><figcaption></figcaption></figure>

