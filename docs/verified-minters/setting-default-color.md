# Setting Default Color

Every Verified Minter has the right to set the Default Color of contract addresses (i.e pools) by configuring directly on blockchain explorers.

Take an example of Verified Minter 1 setting Default Color by using the [**USDV contract on Arbitrum.**](https://arbiscan.io/address/0x323665443cef804a3b5206103304bd4872ea4253)&#x20;

First, go to Arbiscan (Arbitrum Blockchain Explorer) and search for the designated contract address. Click '**Contract**', then click '**Write as Proxy**'.

<figure><img src="../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

Click **'Connect to Web3'** and connect to your wallet. Use the whitelisted wallet approved by KYC.

<figure><img src="../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>

## Set Colorer

First time Verified Minters must assign an address as the contract's Colorer. Click **'Write'** to confirm. This is for coloring EOA and does not apply for smart contract addresses.

<figure><img src="../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

## Set Default Color

The Colorer may now configure and set Default Color for this contract address. Here, we assign the value 1, which is our Verified Minter's unique Color ID. This operation is limited to EOA only.&#x20;

To set Default Color of smart contracts, please contact the Operator.&#x20;

<figure><img src="../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

## Confirm setting

You should confirm the correct contract color settings by reviewing userStates.&#x20;

First, click **'Read as Proxy'**.

<figure><img src="../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>

Check userStates by querying our Verified Minter address. Confirm defaultColor value (here, it is correct as it equals 1).

<figure><img src="../.gitbook/assets/image (28).png" alt=""><figcaption></figcaption></figure>

Verified Minters may appoint the USDV Operator to set Default Color on their behalf.
