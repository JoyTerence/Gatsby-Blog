---
title: Neurons? Explain it to me like 5 year old...
description: A very simple introduction to how Neurons works... minus the complex math!!
date: '2016-07-17'
image: ./neuron.jpg
topic: Tech
tags: ['deep learning','machine learning','neuron']
---
![](./neuron.png)

#### Neurons 
---
As a beginner to deep learning, I was concerned about the complex working of the neurons when I first heard about it. But as you might usually hear when learning anything online, trust me it is easier. 

This post briefly aims to help you in telling what made neurons to be considered as something that comes close to how the brain basic units might work. 

###### _Note:_ 
 _Readers are suggested to explore more using various sources and suggestions/corrections are more than welcome here. (Mail)_

###### Behind the scenes:
In simplest terms, Neuron is an unit that takes some input and gives out some output.

What are those inputs and outputs?? 
Lets try to understand it by an example.

We all make decisions in everyday life, we process the factors involved and use them to come up with a suitable decision for the situation.

Say, you are out one day taking a stroll in the evening and you happen to see a Chat stall on the road. 

![](mouthwatering.gif)

You see that they are serving mouth watering chats and you start arguing with yourself whether to have it or not. So now you are the neuron in this case, and the factors like cost, the location of the stall, the cleanliness, _spicy-ness_ ... are the inputs. And your decision on whether to gobble down a delicious chat is the output.

But these factors are not all equivalent. The money factor plays more important role in the decision than spicyness if you are more tolerant with the latter. So we need something that indicates the same, something that adds this 'weight' to the factor. That is, the weight should be more if the factor plays a significant role (like amount of money in this case).

So, with these two combination of factors and it's weights, we will get a output. Now to use that output to faciliate in decision making, we will compare it with a threshhold.(Which can also be changed based on our preferences). If the output value is more than threshhold then we take it as a green signal ✅ for the decision, red signal 🔴 if less.

A little Maths maybe helpful here to trace out the explanation above:

Let's call the amount of money as _x1_, and spicyness as _x2_, cleanliness as _x3_.

To get an idea,
* let _x1_ be 1 if the cost is reasonable and 0 otherwise.
* Similarly, _x2_ be 1 if not spicy, 0.5 if moderately spicy and 0 if very spicy. (with the assumption that you prefer non-spicy food).
* _x3_ be 1 if the stall is clean and 0 if not.

 We need variables that play as weights to their respective factors (_x1_, _x2_ , ...). Let these variables be _w1_, _w2_, _w3_.

As already concluded, with the above preferences, _w1_ should be big value numerically to indicate _x1_ is more important and _w2_ could be less and same with _w3_. 

With these, the left hand side of equation would be _x1_\*_w1_ + _x2_\*_w2_ + _x3_\*_w3_..(for each factor)

This would output a number when we insert the _x's_ and _w's_ with their values.


Now, mathematically the entire equation for a simple neuron output is:

<pre>
               0 if ∑<sub>j</sub>w<sub>j</sub>x<sub>j</sub> ≤ threshold
    output =
               1 if ∑<sub>j</sub>w<sub>j</sub>x<sub>j</sub> > threshold 
</pre>

![](./neural-neuron.jpg)

Don't get overwhelmed if you are a beginner to this, all this equation tells is that you take each factor and multiply it by its weight (makes sense as if the weight is more, then the product is also large as was desired). Now adding all these products if the sum is above a threshhold then output is 1 (Green signal ✅) or if the sum is less then output is 0 (red signal 🔴).

It was simple wasn't it?



