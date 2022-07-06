---
description: Motivation behind the CryptoSwap protocol and Liquidity Options
---

# Motivation

### Motivation

AMMs use a formula in order to determine how assets are priced in a pool. These are called **Constant function market makers (CFMMs)** because the rules never change; regardless of the size of the trade or the assets being traded. Many notable protocols use CFMMs:

| Function          | Protocol   |
| ----------------- | ---------- |
| Constant Product  | Uniswap V2 |
| Constant Mean     | Balancer   |
| Hybrid            | Curve      |

Because **CFMMs** have very few underlying assumptions (typical just reserve amount), rely on just one input (liquidity), and the function is known, they almost never break down. Thus, they are extremely **reliable** regardless of market conditions.&#x20;



**Dynamic Market Makers (DMMs)** such as Kyber, Bancor, and Uniswap V3 change virtual balances depending on factors such as volatility. These are more capital **efficient**, but cost more gas, can sometimes increase impermanent loss, and make more **assumptions**. **** However, many protocols have failed due to their assumptions **breaking**, such as **Terra Luna**, Curve.fi UST pools (during UST collapse), and Time Wonderland.&#x20;



How can we achieve the same capital **efficiency** of dynamic market makers while retaining the **reliability** constant function market makers? That is where modular architecture comes in.&#x20;

Modular architecture is nothing new. In fact, Ethereum already has L2 scaling:

![Modular Architecture of Ethereum (cr: CoinYuppie)](../.gitbook/assets/1642506011395045.jpg)



In the case of the CryptoSwap protocol:&#x20;

![Better image once I have more time.](<../.gitbook/assets/Group 2 (1).jpg>)



The CryptoSwap protocol will initially entail the Constant Product market maker as the base layer, then have Liquidity Options built on top of it.&#x20;



With modular architecture of liquidity pools, we can have the base layer (constant product, Uniswap V2) deal with the **reliability** of the pool while the optimization layer (liquidity options, etc) deals with the capital **efficiency** of the pool.&#x20;
