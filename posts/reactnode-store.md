---
title: Reactnode Store
excerpt: Blazing fast Ecommerce shop with react and express.js
image: reacts.jpg
isFeatured: true
date: "2021-10-01 "
---

Custom Ecommerce shop made to be different from the others shops that powers the web - it's **the** at mobile version only for now.
Made need to show my preferences as a web developer.

## Wat did i learn making this?

- Created api's that filter on the serverside and returning the filterproducts.
- Rich Data Fetching Capabilities
- Image Optimization
- Much More

## The hardest thing i had encountered:

I should have started... with the "usercart" on the front end.
Now i got into some issues in retrieving the products after login while also updating the react side.

The solution i used, was a single getCart constructor after authentication.
And then update with wat was in the cart or replace.

```js
exports.getCart = async (req, res, next) => {
  const userId = req.userId;
  let loadedUserProducts;
  let totalQ;
  let quantity = 0;
  let totalP;

  let productCounter = 0;
  try {
    loadedUserProducts = await User.findById(userId).populate(
      "cart.items.productId"
    );
    totalQ = await loadedUserProducts.cart.items.forEach((item) => {
      productCounter = productCounter + 1;
      quantity = quantity + item.quantity;
      totalP = item.quantity * item.productId.prijs;
    });

    res.status(200).json({
      userCart: loadedUserProducts,
      totalQuantity: quantity,
      totalPrice: totalP,
      productCounter: productCounter,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
```

## We learn the most when were struggling right ?

See the store - If in your browsers switch to mobileview - [here](https://merwinkel.herokuapp.com).
