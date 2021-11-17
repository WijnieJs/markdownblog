---
title: Mastering JavaScript
excerpt: JavaScript is the most important programming language for web development. You probably don't know it well enough!
image: mastering-js-thumb.png
isFeatured: false
date: "2021-10-30"
---

JavaScript powers the web - it's **the** most important programming language you need to know as a web developer.

For example, you should understand code like this:

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

```js
const basics = "Okay, that should not be too difficult actually";

function chunk(array, size) {
  let emptyStart = [];
  let index = 0;
  let sliceSize = size;

  while (index <= array.length - 1) {
    emptyStart.push(array.slice(index, sliceSize));

    index = index + size;
    sliceSize = sliceSize + size;
  }

  return emptyStart;
}

printBasics();
```

Learn more about it [here](https://academind.com).
