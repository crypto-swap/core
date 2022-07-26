# Introduction

Whitepaper: [https://cryptoswap.org/whitepaper.pdf](https://cryptoswap.org/whitepaper.pdf)

#### Two-fold Protection:

**CryptoSwap has two goals:**

1. Protect Liquidity Providers from impermanent loss and wide spreads.
2. Protect Traders from MEV (frontrunning) and wide spreads.

#### What we do:

1. **CryptoSwap allows liquidity providers to choose their impermanent loss (liquidity options)**
2. **CryptoSwap has more accurate prices (with liquidity options)**
3. **More accurate prices -> Thinner spreads -> Less Arbitrage Opportunities -> Liquidity Providers bleed less money -> Liquidity Providers earn more money**

#### MEV Aware DEX Design:

Transactions go from:

User -> Wallet -> Searcher -> Builder/Miner -> Validator

Problems: Front/Back Running and Sandwich Attacks

We are still in the process of figuring out how to solve this.

1. Slippage tolerance
2. Time locked encryption to prevent front-running attacks. [https://vsekar.me/assets/diss.pdf](https://vsekar.me/assets/diss.pdf)
3. Batched Sub-Orders
4. ⛏️ We mine your orders ⛏️

But one thing is for certain: **we are aware of this issue.**
