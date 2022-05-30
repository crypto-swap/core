# Introduction

### Two-fold Protection:&#x20;

**CryptoSwap has two goals:**

1. Protect Liquidity Providers from impermanent loss and wide spreads.&#x20;
2. Protect Traders from MEV (frontrunning) and wide spreads.&#x20;

### What we do:&#x20;

1. **CryptoSwap allows liquidity providers to choose their impermanent loss (liquidity options)**
2. **CryptoSwap has more accurate prices (with liquidity options)**
3. **More accurate prices -> Thinner spreads -> Less Arbitrage Opportunities -> Liquidity Providers bleed less money -> Liquidity Providers earn more money**&#x20;

### MEV Aware DEX Design:

Transactions go from:

User -> Wallet -> Searcher -> Builder/Miner -> Validator&#x20;

1. Option 1: We become the searcher.
2. Option 2: We do the front-running.&#x20;
3. Option 3: We build a mechanism to prevent/reduce frontrunning.&#x20;

We are still in the process of figuring out how to solve this.&#x20;

But one thing is for certain: **we are aware of this issue.**
