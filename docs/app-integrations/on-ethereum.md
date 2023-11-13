---
description: Swap stablecoins into USDV via EthereumLP
---

# On Ethereum

To integrate with [EthereumLP](https://etherscan.io/address/0x3986D5C53cE965EA16EF66845AB56A9DdE9Cd210#code), App will need to:

* Complete color KYC
* Deploy contract, either:
  * [Default](on-ethereum.md#default-minter.sol), which will be deployed by the Operator, OR&#x20;
  * Custom Minter Contract implementation [interface](on-ethereum.md#interface-for-custom-implementation) and provide code hash and contract address to Operator
* After above, the contract will be:
  * STBT whitelisted
  * Registered to MinterProxy

### Default: [Minter.sol](https://etherscan.io/address/0x82832EcD112D466D97BE259c35B8A19FeE56b7B8#code)

Minter can configure:

* Supported tokens (e.g. USDV)
* Blacklisted caller
* Reward to user bps: if the LP contract returns a reward, the proportion to propagate to user. e.g. reward bps from LP = 5bps, if you want to keep 4 bps and propagate 1 bps, the configuration would be 2000

### Interface for Custom Implementation

```
import {MessagingFee} from "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/ILayerZeroEndpointV2.sol";

interface IMinter {
    struct SwapParam {
        address fromToken;
        uint fromTokenAmount;
        uint64 minUSDVOut;
    }

    function swapToUSDV(
        address _sender,
        address _toSTBTLp,
        SwapParam calldata _param,
        address _usdvReceiver
    ) external returns (uint usdvOut);

    function swapToUSDVAndSend(
        address _sender,
        address _toSTBTLp,
        SwapParam calldata _param,
        bytes32 _usdvReceiver,
        uint32 _dstEid,
        bytes calldata _extraOptions,
        MessagingFee calldata _msgFee,
        address payable _refundAddress
    ) external payable returns (uint usdvOut);

    function getSwapToUSDVAmountOut(
        address _toSTBTLp,
        address _fromToken,
        uint _fromTokenAmount
    ) external view returns (uint usdvOut);

    function getSwapToUSDVAmountOutVerbose(
        address _toSTBTLp,
        address _fromToken,
        uint _fromTokenAmount
    ) external view returns (uint usdvOut, uint fee, uint reward);

    function getSupportedFromTokens(address _lp) external view returns (address[] memory tokens);

    function color() external view returns (uint32);

    function minterProxy() external view returns (address);
}

```

