# ColorTrace Safety

Safety in ColorTrace is guaranteed by several _invariants_ shown below. For more details and a formal analysis of safety, please read the whitepaper.

### Asset-Circulation Equivalence

The global supply of USDV is never increased or decreased other than by the Vault.

### Delta-Zero Invariant&#x20;

Delta-Zero: sum of delta of all colors on any chain or combination of chains is **zero**. The entire ColorTrace deployment is delta-zero, which guarantees vault share calculation is fair, precise, and accurate.

### Eventual Finality

Every operation in ColorTrace will eventually be reflected in the state of the system. However, some operations may have some latency for crosschain communication.

### Mint-holding preservation

A minter will _**never**_ have their vault shares reduced below their TVL. Note that if a minter's TVL increases, the vault shares may be lower than TVL until the minter calls Remint.
