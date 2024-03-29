# Recolor Helper

The Recolor Helper is a generic helper contract we deploy on each USDV-supported chain to facilitate recoloring operations. This contract is **immutable and unowned** for long-term security.  &#x20;

* The Recolor Helper contracts support both local ERC20 and crosschain transfers. All transfers output USDV colored based on the \_toColor argument.
* EOA or contracts can interact with the Recolor Helper in the following ways:
  * Direct transfer USDV into the helper and send out **atomically.**&#x20;
  * ERC20 approved transfer.

<figure><img src="../../.gitbook/assets/recolor-helper (1).png" alt=""><figcaption><p>The Recolor Helper is an immutable and unowned contract that enforces USDV recoloring rules.</p></figcaption></figure>

```
interface IRecolorHelper {
    /// ------ local transfer function -----

    /// @dev send USDV into this account and then ATOMICALLY transfer out with color
    function transferWithColor(address _receiver, uint256 _amount, uint32 _toColor) external;

    /// @dev it requires the caller to approve this contract to spend their USDV
    function approvedTransferWithColor(address _receiver, uint256 _amount, uint32 _toColor) external;

    /// ------ crosschain transfer function transfer function -----

    /// @dev send USDV into this account and then ATOMICALLY send across-chain
    function sendWithColor(
        IOFT.SendParam calldata _param,
        uint32 _toColor,
        bytes calldata _extraOptions,
        MessagingFee calldata _msgFee,
        address payable _refundAddress,
        bytes calldata _composeMsg
    ) external payable returns (MessagingReceipt memory);

    /// @dev it requires the caller to approve this contract to spend their USDV
    function approvedSendWithColor(
        IOFT.SendParam calldata _param,
        uint32 _toColor,
        bytes calldata _extraOptions,
        MessagingFee calldata _msgFee,
        address payable _refundAddress,
        bytes calldata _composeMsg
    ) external payable returns (MessagingReceipt memory);
}
```

Example usage:

* Swap aggregator: send the swap output to the Recolor Helper and call transferWithColor with your color
* Bridge: have the EOA approve the Recolor Helper and send your color of USDV crosschain.

Please visit [Contract Addresses](../../technical-reference/mainnet.md#contract-addresses) for RecolorHelper.sol addresses on each chain.
