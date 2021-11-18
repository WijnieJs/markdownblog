---
title: "Agruniek schedule creator"
date: "2020-10-15"
image: ar.png
excerpt: This Arr-app is made  for sharing schedules convenient from excel to json to read and sort online.
isFeatured: true
---

NextJS is a **framework for ReactJS**.

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

## Why would we then need NextJS?

Because NextJS makes building React apps easier - especially React apps that should have server-side rendering (though it does way more than just take care of that).

In this article, we'll dive into the core concepts and features NextJS has to offer:

- File-based Routing
- Built-in Page Pre-rendering
- Rich Data Fetching Capabilities
- Image Optimization
- Much More

## Solving the challenge with fliar

Write a function that accepts a string.

```js
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  // const a = str.split(" ");

  // let q = "";
  // let b = "";
  // a.forEach((word) => {
  //   let bar = word[0].toUpperCase();
  //   q = q + " " + bar + word.slice(1);
  //   b = q.split(" ");
  //   b.shift();
  // });
  // return b.join(" ");
}
```
