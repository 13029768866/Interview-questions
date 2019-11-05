# codewars的7ku题目

## 第一题、获取字符串中原因字符的个数？

```js
const getCount = str => (str.match(/[aeiou]/ig) || []).length
```

注意：**match返回的是一个满足正则条件的数组，如果没有满足条件的则返回null**

## 第二题、获取单词中间字符，奇数获取一个，偶数获取两个？

题目示例

```js
getMiddle("test"),"es"
getMiddle("testing"),"t"
getMiddle("middle"),"dd"
getMiddle("A"),"A"
```

答案

```js
const getMiddle = (s) => s.substr(Math.ceil(s.length / 2 - 1),(s.length % 2)?1:2)
```

## 第三题、accum("abcd") -> "A-Bb-Ccc-Dddd"

题目示例

```js
	accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu";
	accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb";
	accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu";
	accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm";
	accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc";
```

答案

```js
const accum = s => s.split('').map((item,idx) => item.toUpperCase() + item.toLowerCase().repeat(idx)).join('-')
```

## 第四题、获取字符串中最大值和最小值？

题目示例

```js
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

答案

```js
const highAndLow = str => {
  let arr = str.split(' ')
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}
```

## 第五题、删除字符串中元音字符？

题目示例

```js
disemvowel("This website is for losers LOL!"),	"Ths wbst s fr lsrs LL!"
```

答案

```js
const disemvowel = str => str.replace(/[aeiou]/ig,"")
```

## 第六题、获取字符串中长度最小的字符的个数？

题目示例

```js
findShort("bitcoin take over the world maybe who knows perhaps"), 3
findShort("turns out random test cases are easier than writing out basic ones"), 3
```

答案

```js
const findShort = str =>Math.min(...str.split(' ').map(item => item.length))
```

## 第七题、数字的每个位数平方拼接？

题目示例

```js
squareDigits(9119), 811181
```

答案

```js
const squareDigits = num => Number(num.toString().split('').map(item => Math.pow(item,2)).join(''))
```

## 第八题、dna对位替换？

题目示例

```
DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" 
```

答案

```js
mapObj ={"A":"T","T":"A","C":"G","G":"C"}
const DNAStrand = strDNA => strDNA.replace(/./g,item => mapObj[item])
```

## 第九题、多位数字数字从大到小排序

题目示例

```js
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221
```

答案

```js
const descendingOrder = num => Number(num.toString().split('').sort((a,b)=>b-a).join(''))
```

## 第十题、字符串的首字母大写

题目示例

```js
 "How can mirrors be real if our eyes aren't real"  => "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

答案 

```js
String.prototype.toJadenCase = function () {
 return this.toLowerCase().replace(/( |^)[a-z]/g,L => L.toUpperCase())
};
```

## 第十一题、任意两个整数之间所有整数的和

题目示例

```js
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

答案

```js
const GetSum = (a,b) => {
  let max = Math.max(a,b)
  let min = Math.min(a,b)
  return (max + min) * (max - min + 1) / 2
}
```

## 第十二题、数组中整数筛选

题目示例

```js
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```

答案

```js
const filter_list = l => l.filter(item => Number.isInteger(item))
```

## 第十三题、数组中最小2个数求和

题目示例

```js
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
```

答案

```js
const sumTwoSmallestNumbers = (arr) => {
  let [a,b] = arr.sort((a,b)=> a - b)
  return a+b
}
```

## 第十四题、字符串是否有相同字符判断（大小写也算相同）

题目示例

```js
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
```

个人答案

```js
let isIsogram = str => [...new Set(str.toLowerCase())].length == str.length
```

优秀答案

```js
let isIsogram = str => !/(\w).*\1/i.test(str)
```

## 第十五题、Is this a triangle?（三角形?）

题目示例

```js
Test.assertEquals(isTriangle(1,2,2), true);
Test.assertEquals(isTriangle(7,2,2), false);
```

答案

```js
const isTriangle = (a,b,c)  => (a+b>c && b+c>a && a+c>b)?true:false;
```

## 第十六题、Find the next perfect square!（寻找下一个完美的正方形）

题目示例

```js
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
```

答案

```js
const findNextSquare = sq => Number.isInteger(Math.sqrt(sq))?
 Math.pow(Math.sqrt(sq)+1,2):
 -1;
```

## 第十七题、Two to One（字符串拼接排序去重）

题目示例

```js
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

思路

1. 字符串拼接去重
2. 转化成数组排序
3. 再转化成字符串

答案

```js
const longest = (a,b) => [...new Set(a+b)].sort().join('')
```

## 第十八题、Printer Errors(获取字符串中[n-z]的个数)

题目示例

```js
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
```

思路

1. 正则筛选出非【a-m】的个数

答案

```js
const printerError = s => `${(s.match(/[^a-m]/g) || []).length}/${s.length}`
```

