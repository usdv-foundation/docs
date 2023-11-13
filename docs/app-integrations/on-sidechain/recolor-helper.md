# Recolor Helper

The Recolor Helper is a generic helper contract we deploy on each USDV-supported chain to facilitate recoloring operations. This contract is **immutable and unowned** for long-term security.  &#x20;

* The Recolor Helper contracts support both local ERC20 transfer and cross-chain transfer, and both transfer mode output the USDV of the desired color specified in the function argument&#x20;
* EOA or contracts can interact with the Recolor Helper with
  * Direct transfer USDV into the helper and send out **atomically.**&#x20;
  * ERC20 approved transfer. &#x20;

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

Example usages:

* Swap aggregator: send the swap output to the Recolor Helper and call transferWithColor with your color
* Bridge: have the EOA approve the Recolor Helper and send across-chain with your color

### RecolorHelper.sol

<table><thead><tr><th width="197">Chain</th><th>Address</th></tr></thead><tbody><tr><td>BSC</td><td>0x31691Fd2Cf50c777943b213836C342327f0DAB9b</td></tr><tr><td>Avalanche</td><td>0x9e36b95278C3af219d78B343168AdEDa7C59A7f3</td></tr><tr><td>Arbitrum</td><td>0xE7Af697C5A1cF059C98B50866f74B1d43C422258</td></tr><tr><td>Optimism</td><td>0x7F9A873cB57AF892e229b8EE445dde9372539fce</td></tr></tbody></table>
