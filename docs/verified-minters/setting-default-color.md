# Setting Default Color

Every Verified Minter has the right to set the Default Color of contract addresses (i.e pools) by configuring directly on blockchain explorers.

Take an example of Verified Minter 1 setting Default Color to a contract on Arbitrum.&#x20;

First, go to Arbiscan (Arbitrum Blockchain Explorer) and search for the designated contract address. Click '**Contract**', then click '**Write as Proxy**'.

<figure><img src="../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

Click **'Connect to Web3'** and connect to your wallet. Make sure this is the whitelisted wallet approved by KYC.

<figure><img src="../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>

## Set Colorer

First time Verified Minters must assign an address as the contract's Colorer. Click **'Write'** to confirm.

<figure><img src="../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

## Set Default Color

The Colorer may now configure and set Default Color for this contract address. Here, we assign the value 1, which is our Verified Minter's unique Color ID.

<figure><img src="../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

## Confirm setting

You should confirm the correct contract color settings by reviewing userStates.&#x20;

First, click **'Read as Proxy'**.

<figure><img src="../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>

Check userStates by querying our Verified Minter address. Confirm defaultColor value (here, it is correct as it equals 1).

<figure><img src="../.gitbook/assets/image (28).png" alt=""><figcaption></figcaption></figure>

Verified Minters may appoint the USDV Operator to set Default Color on their behalf.
