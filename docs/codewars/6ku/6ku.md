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

##  第四题、数字递归求乘积单位数次数

题目示例

```js
 persistence(39) === 3 	// because 3*9 = 27, 2*7 = 14, 1*4=4
                       	// and 4 has only one digit
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
 persistence(4) === 0 	// because 4 is already a one-digit number
```

答案（计数器）

```js
const persistence = num => {
  return `${num}`.length > 1?
        1 + persistence(`${num}`.split('').reduce((a,b) => a * b))
        : 0
}
```

## 第五题、数组按规则转化成电话字符串

题目示例

```js
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

答案

```js
const createPhoneNumber = num => num.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
```

## 第六题、Counting Duplicates（重复计算）

题目示例

```js
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

个人答案

```js
const duplicateCount = text => {
 let arr = []
 text = text.toLowerCase().split('')
 text.map(item => {
   !(text.indexOf(item) == text.lastIndexOf(item))?
     arr.push(item):
     '';   
 })
 return [...new Set(arr)].length
}
```

优秀答案

```js
let duplicateCount = text => (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length
```

## 第七题、Array.diff（获取两个数组不同项）

题目示例

```js
array_diff([1,2],[1]) == [2]
array_diff([1,2,2,2,3],[2]) == [1,3]
```

答案

```js
const array_diff = (a,b) => a.filter(item => !(b.includes(item)))
```

## 第八题、Unique In Order(独特排序)

题目示例

```js
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

思路

1. 传参数据类型不同，解构赋值同意处理成数组
2. 通过过滤筛选出相邻的不同项

答案

```js
const uniqueInOrder = it => [...it].filter((item,idx) => item != it[idx - 1])
```

## 第九题、Your order, please（根据字符串中数字顺序重排字符串）

题目示例

```js
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

思路

1. 根据空格拆分成数组
2. 循环数组根据数字大小重新排序

答案（个人）

```js
const order = words => {
  let arr = [];
   for(let i = 1; i <=  words.length;i++){
     words.split(' ').map((item,idx) => {
       item.includes(i)?arr.push(item): '';
     })
   }
  return arr.join(' ')
}
```

答案（优秀）

```js
const order = words => words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ')

通过正则比较数据中的数字
```

## 第十题、Replace With Alphabet Position（字符串转换成字母表位置的数组）

题目示例

```js
Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
```

思路

1. 统一字符大小写
2. 去除非字母的符号
3. 通过空格转换成数组
4. 遍历通过charCodeAt获取字母位数
5. 在通过空格转化成字符串

答案

```js
const alphabetPosition = text => text.toUpperCase().replace(/[^A-Z]/g,'').split('').map(item => item.charCodeAt() - 64).join(' ')
```

