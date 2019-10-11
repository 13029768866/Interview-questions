# codewars的7ku题目

## 第一题、获取字符串中原因字符的个数？

```js
const getCount = str => (str.match(/[aeiou]/ig) || []).length
```

注意：**match返回的是一个满足正则条件的数组，如果没有满足条件的则返回null**

## 第二题、获取单词中间字符，奇数获取一个，偶数获取两个？

题目示例

```js
Test.assertEquals(getMiddle("test"),"es");
Test.assertEquals(getMiddle("testing"),"t");
Test.assertEquals(getMiddle("middle"),"dd");
Test.assertEquals(getMiddle("A"),"A");
```

答案

```js
const getMiddle = (s) => s.substr(Math.ceil(s.length / 2 - 1),(s.length % 2)?1:2)
```

## 第三题、accum("abcd") -> "A-Bb-Ccc-Dddd"

题目示例

```js
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
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

## 第五题、删除字符串中原因字符？

题目示例

```js
Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
```

答案

```js
const disemvowel = str => str.replace(/[aeiou]/ig,"")
```

