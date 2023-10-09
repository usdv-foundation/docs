# Principles

## **Asset-circulation agreement**&#x20;

This principle requires that no operation change the total number of tokens in circulation without a corresponding change in the holdings of underlying assets. The token vault is assumed to correctly enforce the creation and destruction of tokens in exchange for underlying assets, and as such any transaction that involves the vault can be assumed safe, even if it changes the global supply of assets. Thus, we enforce asset-circulation agreement through the global supply invariant, which states any operations that changes the global supply of tokens must be fully contained within the vault. The global supply invariant is composable, meaning a sequence of operations will fulfill the global supply invariant if each operation individually preserves the global supply invariant.

## Conservation of error&#x20;

This principle states that any divergence between the circulation of each color and the mint recorded at the vault is accurately propagated across every operation; when combined with **asset-circulation agreement**, this guarantees that the net error in the system is always zero. This property is the most important safety property for our system, and we formalize it as the **delta-zero** invariant–within each domain and across the entire set of domains.

## Mint-holding guarantee

The third principle, requires that no operation ever reduce a minter’s mint below the number of minted tokens they hold across all chains. This property is guaranteed by an additional restriction on the delta-zero invariant, where (1) operations that do not involve the vault must not induce a movement in ∆C greater than the number of C-colored tokens involved in the operation, and (2) operations that do involve the vault must not change the sign of any ∆C.&#x20;
