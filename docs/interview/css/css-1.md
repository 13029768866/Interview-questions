# CSS面试题汇总
##  1、三栏自适应布局（左右宽度固定，中间自适应）

### 1、浮动方案

1. 兼容性好
2. 三栏高度互不影响
3. 需要清除浮动

```html
<section class="layout float">
  <style>
    .layout.float .left { float: left; width: 300px; background-color: gray; }
    .layout.float .right { float: right; width: 300px; background-color: gray; }
    .layout.float .center { margin: 0 300px; background-color: #ddd; }
  </style>
  <article class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center">
      <p>三栏布局 左右宽度固定 中间自适应</p>
      <p>浮动解决方案</p>
    </div>
  </article>
</section>
```

### 2、绝对定位

1. 兼容性好，
2. 三栏高度互不影响，
3. 内容脱离文档流
4. 适用范围不广

```html
<section class="layout absolute">
  <style>
  .layout.absolute .container { height: 100px; position: relative; }
  .layout.absolute .left { position: absolute; left: 0; top: 0; width: 300px; background-color: gray; }
  .layout.absolute .right { position: absolute; right: 0; top: 0; width: 300px; background-color: gray; }
  .layout.absolute .center { position: absolute; left: 300px; right: 300px; top: 0; background-color: #ddd; }
  </style>
  <article class="container">
    <div class="left"></div>
    <div class="center">
      <p>三栏布局 左右宽度固定 中间自适应</p>
      <p>绝对定位解决方案</p>
    </div>
    <div class="right"></div>
  </article>
</section>
```

### 3、flex布局

1. 适用于移动端布局，
2. 使用简单
3. 兼容性较差，
4. 如果未设置高度，三栏高度由内容撑开，始终等高

```html
<section class="layout flexbox">
      <style>
        .layout.flexbox .container { display: flex; }
        .layout.flexbox .left { width: 300px; background-color: gray; }
        .layout.flexbox .right { width: 300px; background-color: gray; }
        .layout.flexbox .center { flex: 1; background-color: #ddd; }
      </style>
      <article class="container">
        <div class="left"></div>
        <div class="center">
          <p>三栏布局 左右宽度固定 中间自适应</p>
          <p>flexbox 解决方案</p>
        </div>
        <div class="right"></div>
      </article>
    </section>
```

### 4、table大法

1. 兼容性好
2. 如果未设置高度，三栏高度由内容撑开，始终等高
3. 设置 vertical:middle 可以使内联元素/文本内容垂直居中
4. 三栏高度由内容撑开，始终等高

```html
<section class="layout table">
  <style>
    .layout.table .container { display: table; width: 100%; }
    .layout.table .container > div { display: table-cell; }
    .layout.table .left { width: 300px; background-color: gray; }
    .layout.table .right { width: 300px; background-color: gray; }
    .layout.table .center { background-color: #ddd; }
  </style>
  <article class="container">
    <div class="left"></div>
    <div class="center">
      <p>三栏布局 左右宽度固定 中间自适应</p>
      <p>table 解决方案</p>
    </div>
    <div class="right"></div>
  </article>
</section>
```

#### 4.1、设为 flex 属性之后，子元素的哪些属性会失效

**float、clear 和 vertical-align**

### 5、grid方案

1. 兼容性性差，只支持高本版浏览器，工作中暂时没找使用方向

```html
<section class="layout grid">
  <style>
    .layout.grid .container { display: grid; grid-template-columns: 300px auto 300px; }
    .layout.grid .left { background-color: gray; }
    .layout.grid .right { background-color: gray; }
    .layout.grid .center { background-color: #ddd; }
  </style>
  <article class="container">
    <div class="left"></div>
    <div class="center">
      <p>三栏布局 左右宽度固定 中间自适应</p>
      <p>grid 解决方案</p>
    </div>
    <div class="right"></div>
  </article>
</section>
```

## 2、实现一个自适应的正方形

### 1、padding大法

```html
<style>
    .square1 {
        width: 30%;
        padding-bottom: 30%;/* padding百分比相对父元素宽度计算,用padding去填充height*/
        height: 0;/*避免被内容撑开多余的高度 */
        background: skyblue;
    }
</style>    
<div class="square1">使用padding-bottom实现正方形</div>
```

### 2、vw实现

```html
<style>
    .square2 {
        width: 30%;
        height: 30vw;
        background: skyblue;
    }
</style>
<div class="square2">使用css3单位vw实现正方形</div>
```

### 3、伪元素实现

```html
<style>
    .square3{
        width: 30%;
        overflow: hidden;
        background: skyblue;
    }
    .square3:after {
        content:'';
        display: block;
        margin-top: 100%;
    }
</style>
<div class="square3">使用伪类margin</div>
```

## 3、用css实现一个三角形

```html
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    .triangle{        
        margin: 20px auto;
        width: 0;
        height: 0;
        border:50px solid transparent;
        border-left-color:red;
        border-right-color:yellow;
        border-top-color:skyblue;
        border-bottom-color:green;
    }
</style>
<div class="triangle"></div>
```






