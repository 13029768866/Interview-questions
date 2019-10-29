# 6Ku

## 第一题、根据名字数量生成对应模板

题目示例

```js
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
```

答案

```js
const likes = names => [
  'no one likes this',
  `${names[0]} likes this`,
  `${names[0]} and ${names[1]} like this`,
  `${names[0]}, ${names[1]} and ${names[2]} like this`,
  `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
][Math.min(4,names.length)]
```

## 第二题、奇数数组的偶数项，偶数数组的奇数项

题目示例

```js
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

答案

```js
const findOutlier = arr =>{
  let oddArr = arr.filter(item => !(item % 2))
  let eveArr = arr.filter(item => item % 2)
  return oddArr.length === 1? oddArr[0] :eveArr[0]
}
```

## 第三题、获取一个正整数2进制值中'1'的个数

题目示例

```js
The binary representation of 1234 is 10011010010, so the function should return 5 in this case
Test.assertEquals(countBits(1234), 5);
```

答案

```js
let countBits = n => (n.toString(2).match(/[1]/g)|| []).length
```

