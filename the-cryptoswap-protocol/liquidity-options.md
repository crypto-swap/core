---
description: A non-technical overview of liquidity options.
---

# Liquidity Options

Whitepaper: [https://cryptoswap.org/whitepaper.pdf](https://cryptoswap.org/whitepaper.pdf)

### **Liquidity Options**

Liquidity providers nowadays must risk facing **impermanent loss** which is loss resulting in flucations in the price of the underlying asset being traded. Many people see impermenant loss as a bad thing. But in fact, impermanent loss is **necessary** for this type of system to operate. By facilitating trades, liquidity providers willingly take the risk of impermanent loss in order to collect trading fees; hopefully, those fees will offset that loss. This is the way any market should operate, trying to remove impermanent loss entirely will only result in market inefficiencies that will eventually collapse the protocol.&#x20;

However, the current system of providing liquidity is flawed. Although liquidity providers are obligated to face impermenant loss, they must have the **option** to choose how much impermanent loss they are willing to take. That's where liquidity options come in.&#x20;

#### **Some Perspective**

Liquidity Options are a new concept, so an analogy with a familiar traditional finance concept might be helpful: stock options.&#x20;

Take a look at an options order book:

![A stock options order book](<../.gitbook/assets/Group 1 (4).png>)

Stock options have two sides: calls and puts. Holders of a call option make money when the price of a stock increases and holders of a put option make money when the price of a stock decreases. The strike price determines the "weight" of profit relative to the change in the underlying, in finance terms, this is known as the **delta**. However, calls and puts are just fancy titles for opposing sides of an option trade.

What does it mean for the price of a stock to increase? What does it mean for the price of a stock to decrease? It means that the price of the stock changes **relative** **to the price of the currency denominated**. For instance, on a given day, if the value of the US Dollar suddenly increases by 5% but the true value of a stock increases by 2.5%, then although the **value** of a stock increases, the **price** of the stock decreases.&#x20;

In liquidity pools, there is no concept of denominated currency. In a two asset liquidity pool, with asset X and asset Y. The price of asset X is only determined by the relationship between the amount of asset X and the amount of asset Y.&#x20;

Like stock options, liquidity options have two opposing and (often) symmetrical sides.&#x20;

#### **How it works**

Here is what a (very bad looking) dashboard for liquidity options may look like:

![Liquidity Options Dashboard](<../.gitbook/assets/Group 2.png>)

A liquidity options pair such as "ETH60-BTC40" means that the pool is weighted 60% Ethereum and 40% Bitcoin relative to the main pool (requires 50-50). So in constant product terms, as opposed to xy = k, liquidity providers would deposit x^(1.2) \* y^(0.8) = k.&#x20;

Notice that in this example, the TVL (total value locked) for pairs with higher ETH weight is greater than the TVL for pairs with higher BTC weight, like TVL(ETH60-BTC40) > TVL(ETH40-BTC60). In market terms, this suggests that ETH is overvalued relative to BTC in the main liquidity pool. Therefore, the CryptoSwap protocol will siphon TVL from the liquidity options pool in order to "rebalance" the main liquidity pool. &#x20;

#### **Features**

TVL in liquidity options will be much less than TVL in the main pool. We have just been discussing theoretically, but there is some work to do for the theoretical side to translate to the real side. Here are some things that we add:

**Time-Locked Liquidity** - liquidity providers lock in their liquidity for (1 day, 7 days, 15 days, ...) the longer they choose to lock their liquidity, the more risk that they are exposed to. Therefore, LPs who decide to lock it in longer will receive bonus rewards. Time locking liquidity for liquidity options is especially necessary. This is because a malicious actor can suddenly deposit 1 billion dollars into a liquidity options pair, which may alter the price of the main pool. After, they can quickly purchase an asset at a discount and then remove their liquidity. However, if they were forced to lock their liquidity for a day, then the market will punish the malicious actor, effectively making it unprofitable.

**Leverage** - the total TVL in the liquidity options subpools will likely be less than the TVL in the main pool. Therefore, similar to other highly optimized DEXs the CryptoSwap protocol will add leverage in the form of "virtual assets" which effectively increase the factor of profit and loss as well as help the liquidity options subpools be able to work as well as they do theoretically.&#x20;

**Routing** - we will have a routing smart contract that gas optimizes the necessary amount of funds to both adjust the main pool price while conducting trades. This will keep the liquidity options pool away from the main pool while saving the users as much gas as possible. It will take some work to try to optimize liquidity option providers' rewards + traders' fees + main liquidity providers' all at once. That being said, we can expect a 0.25% fee for main liquidity providers, a dynamic fee for liquidity options providers (probably 0.05% - 0.1%) which isn't a problem since there will be much fewer liquidity options providers. The routing perhaps needs to charge double routing fees (however, we can probably aggregate fees by block, making the fees unnoticeable).

![The CryptoSwap protocol overview (this does not fully describe architecture / not official)](../.gitbook/assets/CryptoSwap.png)

#### **Concluding Thoughts**

What if our initial implementation of liquidity options goes horribly wrong? \
We can just change the routing smart contract, then the protocol can just work off of the main pool, the liquidity options providers can withdraw their liquidity from the smart contracts, and they will not lose anything as long as we change the routing smart contract (we will have one for this kind of situation) quick enough.&#x20;

How is this better than other DEXs? Click the motivation tab.&#x20;

Is this implementable? Yes.&#x20;

How will liquidity option providers make money? The routing subsection of the features section.&#x20;

Is this efficient? \
All the routing here and there may seem like this system is really inefficient, however, there will probably be minimal routing since the protocol keeps the main liquidity pool's price so efficient anyways. Options liquidity providers can use this stability to decrease their impermanent loss.

What if someone attacks this system?

Scenario 1: Someone tries to manipulate prices through liquidity options. \
Outcome: Their funds get time-locked, the market punishes them, and they lose their money.

Scenario 2:  What if the price of one asset suddenly crashes?\
Outcome: The protocol is actually quite sturdy, if liquidity is deep enough, the price will crash far slower than a protocol like Uniswap V3, even Curve's stableswap algorithm breaks after a certain point, at a certain point of crashing, CryptoSwap becomes more efficient than these two, Uniswap's virtual liquidity will break before CryptoSwap's does.&#x20;

Scenario 3: What if someone tries to rug pull using one of our liquidity pools?\
Outcome: The rug pull will be slower compared to other protocols.&#x20;

Scenario 4: How much damage can a flash loan do? \
Outcome: not much, as much damage as it can do Uniswap V2.&#x20;

In the very worst case scenario, CryptoSwap is like Uniswap V2. At the very best, it's limitless.&#x20;

