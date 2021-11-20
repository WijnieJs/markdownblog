---
title: "Agruniek schedule creator"
date: "2020-10-28"
image: ar.png
excerpt: This Arr-app is made  for sharing schedules convenient from excel to json to read and sort online.
isFeatured: true
---

Schedule sharing made easy. **Sorting algoritm for all variables!**.

Wait wat..? Does this mean that the admin can update the files in excel,
Add more drivers , customers, ore duty's .
And all excell columns will be sorted and saved as json.

## Does it work?

Well ... It does work perfectly. It was kind of difficult to come up with an solution because every day has such many different variables.

- Linked Listss
- SearchTree
- Ques

```js
let empty = [];

for (let i = 0; i < cr.length; i++) {
  if (cr[i][0] === "" && cr[i][1] === "" && cr[i][11] === "") {
    empty.push(i - 1);
  }
}

const list = [];
empty.unshift(0);
for (let i = 0; i < empty.length - 1; i++) {
  let c = empty[i];
  let h = empty[i + 1];
  let r = h - c;
  list.push(r);
}
const final = [];
list[0] = list[0] + 1;

list.forEach((l) => {
  final.push(cr.splice(0, l));
});
final[0].unshift(["", "", "", "", "", "", "", "", "", "", "", ""]);
final.forEach((row) => {
  row.shift();
});
const lastone = [...final];
const b = {};
lastone.map((index) => {
  b[index[0][0]] = [...index];
  return [...lastone];
});

const STARTLIST = [];
const getCarList = (b) => {
  for (const [key] of Object.entries(b)) {
    STARTLIST.push(parseInt(key));
  }
};
getCarList(b);
```

## Send me a message if you would like to see more...

![Create routes via your file + folder structure](adminar.png)

## Want to see the result ?

- For privacy reasons only the front end side can be viewed.
- Available car numbers this date: 16 , 17 , 21 , 27 , 29

See the online version [here](https://wijzijnar.netlify.app/).
