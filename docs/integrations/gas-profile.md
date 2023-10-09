# Gas Profile

Below shows the gas profile of functions for composability.&#x20;

* USDV behaviours like a normal ERC-20 tokens with slightly more gas in transfer for recording the coloring metadata.&#x20;
* The gas cost of the remint function of USDV on Ethereum is a function of the number of colors involved in the reminting operations. It grows linearly to the colors involved. The avg 151k is a good estimate of use cases.&#x20;
* VaultManager is the vault responsible for USDV issuance.&#x20;

```
·--------------------------------------|---------------------------|---------------|
|         Solc version: 0.8.19         ·  Optimizer enabled: true  ·  Runs: 10000  ·
·······································|···························|···············|
|  Methods                                                                          
·················|·····················|·············|·············|···············|
|  Contract      ·  Method             ·  Min        ·  Max        ·  Avg          ·
·················|·····················|·············|·············|···············|
|  USDV          ·  approve            ·      46288  ·      46324  ·        46309  ·
·················|·····················|·············|·············|···············|
|  USDV          ·  remint             ·     125267  ·     245566  ·       151237  ·
·················|·····················|·············|·············|···············|
|  USDV          ·  setEnforceColor    ·      31238  ·      51244  ·        47404  ·
·················|·····················|·············|·············|···············|
|  USDV          ·  transfer           ·      30587  ·      55522  ·        50933  ·
·················|·····················|·············|·············|···············|
|  USDV          ·  transferFrom       ·      35914  ·      58035  ·        54763  ·
·················|·····················|·············|·············|···············|
|  VaultManager  ·  distributeReward   ·     132092  ·     217592  ·       133494  ·
·················|·····················|·············|·············|···············|
|  VaultManager  ·  mint               ·     120399  ·     246955  ·       145789  ·
·················|·····················|·············|·············|···············|
|  VaultManager  ·  redeem             ·     135947  ·     240663  ·       159321  ·
·················|·····················|·············|·············|···············|
|  VaultManager  ·  withdrawReward     ·      74335  ·      79202  ·        78608  ·
·--------------------------------------|-------------|-------------|---------------|

```
