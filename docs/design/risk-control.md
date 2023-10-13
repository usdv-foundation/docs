# Risk Control

### Mint/Redeem Rate Limiter

To limit the worst case exposure of USDV to the technical issues of underlying assets, we install a rate limiter to both the minting and redemption process of assets. The Rate Limiter is designed as a token bucket with a capacity and per second refill rate.&#x20;

```
limiter_budget = min(capacity, remaining + refill_rate * time_lapsed)
```

Rate limiter parameters can be found [here](../contracts/parameters.md).

For example, if the underlying asset (e.g. X token) contract has a bug that create Y X tokens on chain for once, and the minting rate limiter's capacity is Z, then its maximum impact to USDV is Z plus the time-based refilling before we noticed the problem and pause the asset.&#x20;



### Cross-chain Rate Limiter

To limit the exposure USDV has on any single chain, especially relatively new chains, we install a rate limiter to limit their Net Outbound. The rate limiter works the same as [Mint/Redeem Rate Limiter](risk-control.md#mint-redeem-rate-limiter). Rules:

* Outbound from the chain will consume the rate limiter
* Inbound will refill the rate limiter

