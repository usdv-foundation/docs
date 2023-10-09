# Reminting

As the minted USDV move on all the connected Blockchains, tokens will be recolored and the system would accumulate divergence of the attributions (e.g. who mints how much), as described in the [Architecture](../design/architecture.md) section.

For example, a color Blue (B) may accumulate a lot of delta surplus (positive ∆B), which are the yield potential of color B. To realize the potential, users can pay to remint more of color B from other colors that have delta deficit (negative ∆). This reminting operation is [fee](../contracts/parameters.md) applicable and permissionless.&#x20;

### Mechanism

A reminting operation can happen on any chain and a reminting message will be sent to the Vault contract on Ethereum for the action to take effect.&#x20;

The reminting operation must be Delta-Zero, which requires that sum of delta in the reminting payload to be zero. Specifically, the reminting operation should provide&#x20;

* The remint\_to color and its surplus
* A list of remint\_from colors for constructing the Delta-Zero payload&#x20;
