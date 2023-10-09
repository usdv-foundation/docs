# Minter Widget

Minter Widget is a frontend tool to facilitate minting USDV with alternative stable coins (e.g. USDC/USDT/DAI) should the minter choose to support it. The minter can configure the Minter Widget with its own registered color and all newly minted USDV through this widget will be colored accordingly.

## Architecture

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

## Onboarding Guide

### Deploy Minter Contract

A minter must complete KYC to be assigned a unique color. The operator will deploy a **Minter Contract** for each new minter and register into the Minter Proxy Contract. The ownership of the Minter Contract will be transferred to an address provided by the minter in the KYC process. Owner can configure&#x20;

* supported tokens (e.g. USDC)&#x20;
* blacklist certain callers

### Deploy Minter Widget

Here is an example of how to deploy a minter widget on your website with the React framework.

1. Add `@usdv/usdv-widget` to the dependencies of your package.

```
yarn add @usdv/usdv-widget
```

or

```
 npm install @usdv/usdv-widget
```

2. In your page file

```
import '@usdv/usdv-widget'

customElements.whenDefined('usdv-bridge').then((Bridge) => {
    Bridge.mintStore.setColor(5);  // FIXME: Change the color number to the one that the operator assigned to you.
    Bridge.bootstrap({});
}).catch((err) => console.error);

```

3. declare elements in the DOM. `usdv-tracker` and `usdv-bridge` are custom HTML elements. `usdv-tracker` is used for displaying transaction status, and `usdv-bridget` is used for minting and transferring.

```
function App() {
return (
    <div className="center">
        <div className="container">
            <usdv-tracker></usdv-tracker>
            <usdv-bridge></usdv-bridge>
        </div>
    </div>
    );
}
```

4. Also, you can customize the theme of the widget.

```
Bridge.uiStore.theme.setTheme(themeConfig.dark)
```

### Request Mint

This is the interface to mint USDV :

```
    function mint(
        address _token, // must be whitelisted assets like STBT
        address _receiver, // receiver of the minted USDV
        uint64 _usdvAmount, // target USDV amount to mint
        uint32 _color, // color of the USDV
        bytes32 _memo // a reserved field to record meaning extra data for mint
    ) public {}
```

Widget can also provide a minting memo for this minting action for extensibility,  such as keeping record or external attributions.&#x20;
