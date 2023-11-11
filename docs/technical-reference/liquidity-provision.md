# Liquidity Provision

To facilitate low-slippage stable coins to USDV conversion, we deploy a list of Liqiudity Provision (LP) contracts on [different chains](deployments.md):

### Ethereum

Supports stable coins to STBT conversion

```
interface IToSTBTLp {
    function getSupportedTokens() external view returns (address[] memory tokens);

    function swapToSTBT(address _fromToken, uint _fromTokenAmount, uint _minStbtOut) external returns (uint stbtOut);

    function getSwapToSTBTAmountOut(address _fromToken, uint _fromTokenAmount) external view returns (uint stbtOut);
}
```

### Non Ethereum

Supports stable coins to USDV conversion

```
interface IToUSDVLp {
    function getSupportedTokens() external view returns (address[] memory tokens);

    function swapToUSDV(
        address _fromToken,
        uint _fromTokenAmount,
        uint _minStbtOut,
        address _receiver
    ) external returns (uint usdvOut);

    function getUSDVOut(address _fromToken, uint _fromTokenAmount) external view returns (uint usdvOut);
}
```
