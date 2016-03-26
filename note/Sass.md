# Sass

> 世界上最成熟、最稳定、最强大的专业级CSS扩展语言！
> 
> [官网](http://sass-lang.com/)
> 
> [中文网](http://www.sass.hk/)
> 
> [Sass参考手册](http://sass.bootcss.com/docs/sass-reference/)

## 概要

### 为什么要有预处理CSS

CSS基本上是设计师的工具，不是程序员的工具。在程序员的眼里，CSS是很头痛的事情，它并不像其它程序语言，比如说PHP、Javascript等等，有自己的变量、常量、条件语句以及一些编程语法，只是一行行单纯的属性描述，写起来相当的费事，而且代码难易组织和维护。

很自然的，有人就开始在想，能不能给CSS像其他程序语言一样，加入一些编程元素，让CSS能像其他程序语言一样可以做一些预定的处理。这样一来，就有了“CSS预处器（CSS Preprocessor）”。

### 什么是预处理CSS

CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

CSS预处理器技术已经非常的成熟，而且也涌现出了很多种不同的CSS预处理器语言，比如说：Sass（SCSS）、LESS、Stylus、Turbine、Swithch CSS、CSS Cacheer、DT CSS等。如此之多的CSS预处理器，那么“我应该选择哪种CSS预处理器？”也相应成了最近网上的一大热门话题，在Linkedin、Twitter、CSS-Trick、知呼以及各大技术论坛上，很多人为此争论不休。相比过计我们对是否应该使用CSS预处理器的话题而言，这已经是很大的进步了。

到目前为止，在众多优秀的CSS预处理器语言中就属Sass、LESS和Stylus最优秀，讨论的也多，对比的也多。本文将分别从他们产生的背景、安装、使用语法、异同等几个对比之处向你介绍这三款CSS预处理器语言。相信前端开发工程师会做出自己的选择——我要选择哪款CSS预处理器。

## 环境配置

### Windows系统

#### 安装Sass

1. 下载[Ruby](http://rubyinstaller.org/downloads/)并安装
2. 配置环境变量
3. 使用命令`gem install sass`安装Sass

## 基本使用

### 命令行编译

``` 
sass style.scss:style.css
```

### 单文件监听命令

``` 
sass --watch style.scss:style.css
```

### 文件夹监听命令

``` 
sass --watch sassFileDirectory:cssFileDirectory
```

### 使用工具编译

#### 使用Koala

将文件(夹)拖入Koala中，点击【编译】

![koala使用指南](./koala-setting.jpg)

### 输出格式

> 编译scss文件时，可`--style`指定输出样式，`sass --style expanded style.scss:style.css`，输出格式主要包含4种，nested、expanded、compact、compressed，默认使用nested。

scss代码

``` scss
#main {
	color: #fff;
	background-color: #000;
}

#main p {
	width: 10em;
}

.huge {
	font-size: 10em;
	font-weight: bold;
	text-decoration: underline;
}
```

#### Nested 嵌套(默认)

``` css
#main {
  color: #fff;
  background-color: #000; }
  #main p {
width: 10em; }

.huge {
  font-size: 10em;
  font-weight: bold;
  text-decoration: underline; }
```

#### Expanded 展开

``` css
#main {
  color: #fff;
  background-color: #000;
}
#main p {
  width: 10em;
}

.huge {
  font-size: 10em;
  font-weight: bold;
  text-decoration: underline;
}
```

#### Compact 紧凑

``` css
#main { color: #fff; background-color: #000; }
#main p { width: 10em; }
.huge { font-size: 10em; font-weight: bold; text-decoration: underline; }
```

#### Compressed 压缩

``` 
#main{color:#fff;background-color:#000}#main p{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}
```

### sass与scss区别

> Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

1. 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
2. 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

Sass 语法

``` sass
$font-stack: Helvetica, sans-serif  //定义变量
$primary-color: #333 //定义变量

body
  font: 100% $font-stack
  color: $primary-color
```

SCSS 语法

``` scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

编译出来的 CSS

``` css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

推荐使用scss

### Sass REPL环境

REPL(Read-Eval-Print Loop 交互式的开发环境),输入命令`sass -i`进入REPL运行环境

## 基本语法

### *变量 Variables

#### 变量声明

使用$定义变量，变量名可以是字母、下划线(_)、中划线(-),区分大小写，只能以下划线(\_)或字母开头

Sass 的变量包括三个部分：

1. 声明变量的符号“$”
   
2. 变量名称
   
3. 赋予变量的值
   
   ![定义变量](sass-var.jpg)

scss代码

``` scss
$primary-color: #333;
body {
  color: $primary-color;
}
```

生成的css

``` css
body {
  color: #333;
}
```

#### 默认变量

sass 的默认变量仅需要在值后面加上 `!default` 即可。

``` 
$baseLineHeight:1.5 !default;
body{
    line-height: $baseLineHeight; 
}
```

编译后的css代码：

``` 
body{
    line-height:1.5;
}
```

sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。

``` 
$baseLineHeight: 2;
$baseLineHeight: 1.5 !default;
body{
    line-height: $baseLineHeight; 
}
```

编译后的css代码：

``` 
body{
    line-height:2;
}
```

可以看出现在编译后的 line-height 为 2，而不是我们默认的 1.5。默认变量的价值在进行组件化开发的时候会非常有用。默认变量的优先级最低，只要为变量重新赋值，就会覆盖默认变量的值，此时不能再获取到变量的默认值。

#### 全局变量与局部变量

scss代码

``` scss
$color: orange;//定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)
.block {
  color: $color;//调用全局变量
}
em {
  $color: red;//定义局部变量
  a {
color: $color;//调用局部变量
  }
}
span {
  color: $color;//调用全局变量
}
```

css 的结果：

``` css
.block {
  color: orange;
}
em a {
  color: red;
}
span {
  color: orange;
}
```

### 数据类型 Data Types

> Sass 和 JavaScript 语言类似，也具有自己的数据类型，在 Sass 中包含以下几种数据类型：

- 数字 numbeer: 如，1、 .2、 13%、 10px；
- 字符串 string：有引号字符串或无引号字符串，如，"foo"、 'bar'、 baz；
- 颜色 color：如，blue、 #04a3f9、rgb(255,0,0)、 rgba(255,0,0,0.5)；
- 布尔型 bool：如，true、 false；
- 空值 null：如，null；
- 值列表 list：用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif。

SassScript 也支持其他 CSS 属性值（property value），比如 Unicode 范围，或 !important 声明。然而，Sass 不会特殊对待这些属性值，一律视为无引号字符串 (unquoted strings)。

### 注释 Comments

注释对于一名程序员来说，是极其重要，良好的注释能帮助自己或者别人阅读源码。在 Sass 中注释有两种方式

- 类似 CSS 的注释方式，使用 ”/* ”开头，结束使用 ”*/ ”，此注释会生成到非压缩的css。
- 类似 CSS 的注释方式，使用 ”/*! ”开头，结束使用 ”*/ ”，此注释会生成到任意的css。
- 类似 JavaScript 的注释方式，使用“//”，此注释不会生成到css。

两者区别，前者会在编译出来的 CSS 显示，后者在编译出来的 CSS 中不会显示，来看一个示例：

``` 
//定义一个占位符
%mt5 {
  margin-top: 5px;
}

/*调用一个占位符*/
.box {
  @extend %mt5;
}
```

编译出来的CSS

``` 
.box {
  margin-top: 5px;
}
/*调用一个占位符*/
```

### *嵌套 Nesting

#### 选择器嵌套

scss代码

``` scss
header {
  color: blue;
  nav {
    color: red;
    a {
        color: green;      
    }
  }
}
```

生成的css代码

``` css
header {
  color: blue;
}
header nav {
  color: red;
}
header nav a {
  color: green;
}
```

#### 属性嵌套

scss代码

``` scss
.box {
  border: {
    top: 1px solid red;
    bottom: 1px solid green;
  }
}
```

生成的css代码

``` css
.box {
border-top: 1px solid red;
border-bottom: 1px solid green;
}
```

#### 伪类嵌套

scss代码

``` scss
.clearfix{
&:before,//&表示父级选择器即.clearfix
&:after {
content:"";
display: table;
  }
&:after {
clear:both;
overflow: hidden;
  }
}
```

生成的css

``` css
clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
```

##### 父选择器: `&`

使用`&`表示父选择器，要给父元素添加`:hover`样式，可使用`&:hover`

``` scss
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
```

编译后的css:

``` css
a {
  font-weight: bold;
  text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    }
  body.firefox a {
    font-weight: normal;
    }
```

在css生成后，`&` 将取代父选择器。这意味着，如果你有多层的嵌套规则，父选择器将被 `&` 取代。例如

``` 
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red;
    }
  }
}
```

生成后的css:

``` 
#main {
  color: black; }
  #main a {
    font-weight: bold;
    }
    #main a:hover {
      color: red; 
    }
```

`&`  必须出现在一个复合选择器的开始，但它可以通过一个后缀将被添加到父选择器。

``` scss
#main {
  color: black;
  &-sidebar { 
  border: 1px solid;
  }
}
```

生成后的css:

``` css
#main {
  color: black;
}
#main-sidebar {
  border: 1px solid;
}
```

#### 直接子元素嵌套

使用`>`可输出直接子元素选择器。

``` 
.wrap{
  color: #333;
  >.box{
    color: #888;
  }
}
```

生成后的css:

``` 
.wrap {
  color: #333;
}
.wrap > .box {
  color: #888;
}
```

### *继承(Inheritance)和扩展(Extend)

继承对于了解 CSS 的同学来说一点都不陌生，先来看一张图：

![css继承](css-inheritance.jpg)

图中代码显示“.col-sub .block li,.col-extra .block li” 继承了 “.item-list ul li”选择器的 “padding : 0;” 和 “ul li” 选择器中的 “list-style : none outside none;”以及 * 选择器中的 “box-sizing:inherit;”。

在 Sass 中也具有继承一说，也是继承类中的样式代码块。在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承。如下所示：

SCSS代码

``` 
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
  @extend .btn;
}

.btn-second {
  background-color: orange;
  color: #fff;
  @extend .btn;
}
```

编译后的css

``` 
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
}

.btn-second {
  background-clor: orange;
  color: #fff;
}
```

从示例代码可以看出，在 Sass 中的继承，可以继承类样式块中所有样式代码，而且编译出来的 CSS 会将选择器合并在一起，形成组合选择器`.btn, .btn-primary, .btn-second



### *占位符 %placeholder

Sass 中的占位符 `%placeholder` 功能是一个很强大，很实用的一个功能。他可以取代以前 CSS 中的基类造成的代码冗余的情形。因为 `%placeholder` 声明的代码，如果不被 `@extend` 调用的话，不会产生任何代码。来看一个演示：

``` 
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}
```

这段代码没有被 @extend 调用，他并没有产生任何代码块，只是静静的躺在你的某个 SCSS 文件中。只有通过 @extend 调用才会产生代码：

``` 
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}
```

编译出来的CSS

``` 
//CSS
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
```

从编译出来的 CSS 代码可以看出，通过 @extend 调用的占位符，编译出来的代码会将相同的代码合并在一起。

### *混合宏 Mixin

#### 声明混合宏

##### 不带参数混合宏

在 Sass 中，使用“**@mixin**”来声明一个混合宏。如：

``` 
@mixin border-radius{
-webkit-border-radius: 5px;
border-radius: 5px;
}
```

其中 @mixin 是用来声明混合宏的关键词，有点类似 CSS 中的 @media、@font-face 一样。border-radius 是混合宏的名称。大括号里面是复用的样式代码。

##### 带参数混合宏

除了声明一个不带参数的混合宏之外，还可以在定义混合宏时带有参数，如：

``` 
@mixin border-radius($radius:5px){//混合宏的参数也要用$定义，$radius:5px表示$radius的默认为5px
-webkit-border-radius: $radius;
border-radius: $radius;
}
```

##### 复杂的混合宏

上面是一个简单的定义混合宏的方法，当然， Sass 中的混合宏还提供更为复杂的，你可以在大括号里面写上带有逻辑关系，帮助更好的做你想做的事情,如：

``` 
@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
@include prefixer(box-shadow, $shadow);
  } @else{
$shadow:0 0 4px rgba(0,0,0,.3);
@include prefixer(box-shadow, $shadow);
  }
}
```

这个 box-shadow 的混合宏，带有多个参数，这个时候可以使用“ … ”来替代。简单的解释一下，当 $shadow 的参数数量值大于或等于“ 1 ”时，表示有多个阴影值，反之调用默认的参数值“ 0 0 4px rgba(0,0,0,.3) ”。

#### 调用混合宏

在 Sass 中通过 @mixin 关键词声明了一个混合宏，那么在实际调用中，其匹配了一个关键词“**@include**”来调用声明好的混合宏。例如在你的样式中定义了一个圆角的混合宏“border-radius”:

``` 
@mixin border-radius{
-webkit-border-radius: 3px;
border-radius: 3px;
}
```

在一个按钮中要调用定义好的混合宏“border-radius”，可以这样使用：

``` 
button {
@include border-radius;
}
```

这个时候编译出来的 CSS:

``` 
button {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

### 混合宏、 继承 、占位符区别

![混合宏、 继承 、占位符区别](mixin_inherit_placeholder.jpg)

### *插值 Interpolation: `#{}`

在构建选择器和属性名时，可以引用插值`#{}`来帮助我们实现。

``` 
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

编译后的css:

``` 
p.foo {
  border-color: blue; 
  }
```

一旦你发现这一点，你就会想到超级酷的 mixins，用来生成代码或者生成另一个 mixins。然而，这并不完全是可能的。第一个限制，这可能会很删除用于 Sass 变量的插值。

``` 
$margin-big: 40px;
$margin-medium: 20px;
$margin-small: 12px;
@mixin set-value($size) {
    margin-top: $margin-#{$size};
}
.login-box {
    @include set-value(big);
}
```

上面的 Sass 代码编译出来，你会得到下面的信息：

error style.scss (Line 5: Undefined variable: “$margin-".)

所以，#{}语法并不是随处可用，**不能在调用 mixin时使用**，但可以在minxin的内部使用：

``` 
@mixin updated-status {
    margin-top: 20px;
    background: #F00;
}
$flag: "status";
.navigation {
    @include updated-#{$flag};
}
```

上面的代码在编译成 CSS 时同样会报错：

`error style.scss (Line 7: Invalid CSS after "...nclude updated-": expected "}", was "#{$flag};")`

幸运的是，可以使用 `@extend` 中使用插值。例如：

``` 
%updated-status {
    margin-top: 20px;
    background: #F00;
}
.selected-status {
    font-weight: bold;
}
$flag: "status";
.navigation {
    @extend %updated-#{$flag};
    @extend .selected-#{$flag};
}
```

上面的 Sass 代码是可以运行的，因为他给了我们力量，可以动态的插入 .class 和 %placeholder。当然他们不能接受像 mixin 这样的参数，上面的代码编译出来的 CSS:

``` 
.navigation {
    margin-top: 20px;
    background: #F00;
}
.selected-status, .navigation {
    font-weight: bold;
}
```

### *导入 Import

#### @import

Sass 扩展了 CSS 的 @import 规则，让它能够引入 SCSS 和 Sass 文件。 所有引入的 SCSS 和 Sass 文件都会被合并并输出一个单一的 CSS 文件。 另外，被导入的文件中所定义的变量或 mixins 都可以在主文件中使用。

@import 根据文件名引入。 默认情况下，它会寻找 Sass 文件并直接引入， 但是，在少数几种情况下，它会被编译成 CSS 的 @import 规则：

- 如果文件的扩展名是 .css。
- 如果文件名以 http:// 开头。
- 如果文件名是 url()。
- 如果 @import 包含了任何媒体查询（media queries）。

也可以通过一个 @import 引入多个文件。例如：

``` 
@import "rounded-corners", "text-shadow";
```

将引入 rounded-corners 和 text-shadow 两个文件。

#### Partials

如果你有一个 SCSS 或 Sass 文件需要引入， 但是你又不希望它被编译为一个 CSS 文件， 这时，你就可以在文件名前面加一个下划线，就能避免被编译。 这将告诉 Sass 不要把它编译成 CSS 文件。 然后，你就可以像往常一样引入这个文件了，而且还可以省略掉文件名前面的下划线。

例如，你有一个文件叫做 _colors.scss。 这样就不会生成 _colors.css 文件了， 而且你还可以这样做：

``` 
@import "colors";//不用加下划线
```

来引入 _colors.scss 文件。

注意，在同一个目录不能同时存在带下划线和不带下划线的同名文件。 例如， _colors.scss 不能与 colors.scss 并存。

#### 嵌套 @import

虽然大部分时间只需在顶层文件使用 @import 就行了， 但是，你还可以把他们包含在 CSS 规则 和 @media 规则中。

假设要引入的样式文件`example.scss`文件中包含这样的代码：

``` 
.example {
  color: red;
}
```

然后这样引用：

``` 
#main {
  @import "example";
}
```

编译出来的 CSS：

``` 
#main .example {
  color: red;
}
```

### 操作符 Operators

#### 加法

在变量或属性中都可以做加法运算。如：

``` 
.box {
  width: 20px + 8in;
}
```

编译出来的 CSS:

``` 
.box {
  width: 788px;
}
```

但对于携带不同类型的单位时，在 Sass 中做`+-*/`计算都会报错，如下例所示：

``` 
.box {
  width: 20px + 1em;
}
```

编译的时候，编译器会报错：`“Incompatible units: 'em' and ‘px'.”`

#### 减法

减法运算与加法规则一致

#### 乘法

Sass 中的乘法运算和前面介绍的加法与减法运算还略有不同。虽然他也能够支持多种单位（比如 em ,px , %），但当一个单位同时声明两个值时会有问题。比如下面的示例：

``` 
.box {
  width:10px * 2px;  
}
```

编译的时候报`“20px*px isn't a valid CSS value.”`错误信息。

如果进行乘法运算时，两个值单位相同时，只需要为一个数值提供单位即可。上面的示例可以修改成：

``` 
.box {
  width: 10px * 2;
}
```

编译出来的 CSS:

``` 
.box {
  width: 20px;
}
```

#### 除法

Sass 的乘法运算规则也适用于除法运算。不过除法运算还有一个特殊之处。“/”符号在 CSS 中已做为一种符号使用。因此在 Sass 中做除法运算时，直接使用“/”符号做为除号时，将不会生效，编译时既得不到我们需要的效果，也不会报错。一起先来看一个简单的示例：

``` 
.box {
  width: 100px / 2;  
}
```

编译出来的 CSS 如下：

``` 
.box {
  width: 100px / 2;
}
```

这样的结果对于大家来说没有任何意义。要修正这个问题，只需要给运算的外面添加一个小括号`( )`即可：

``` 
.box {
  width: (100px / 2);  
}
```

编译出来的 CSS 如下：

``` 
.box {
  width: 50px;
}
```

除了上面情况带有小括号，“/”符号会当作除法运算符之外，如果“/”符号在已有的数学表达式中时，也会被认作除法符号。如下面示例：

``` 
.box {
  width: 100px / 2 + 2in;  
}
```

编译出来的CSS：

``` 
.box {
  width: 242px;
}
```

另外，在 Sass 除法运算中，当用变量进行除法运算时，“/”符号也会自动被识别成除法，如下例所示：

``` 
$width: 1000px;
$nums: 10;    
.item {
  width: $width / 10;  
}

.list {
  width: $width / $nums;
}
```

编译出来的CSS:

``` 
.item {
  width: 100px;
}

.list {
  width: 100px;
}
```

综合上述，”/  ”符号被当作除法运算符时有以下几种情况：

- 如果数值或它的任意部分是存储在一个变量中或是函数的返回值。
- 如果数值被圆括号包围。
- 如果数值是另一个数学表达式的一部分。

如下所示：

``` 
p {
  font: 10px/8px; // 纯 CSS，不是除法运算
  $width: 1000px;
  width: $width/2;// 使用了变量，是除法运算
  width: round(1.5)/2;// 使用了函数，是除法运算
  height: (500px/2);  // 使用了圆括号，是除法运算
  margin-left: 5px + 8px/2px; // 使用了加（+）号，是除法运算
}
```

编译出来的CSS

``` 
p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px;
 }
```

Sass 的除法运算还有一个情况。我们先回忆一下，在乘法运算时，如果两个值带有相同单位时，做乘法运算时，出来的结果并不是我们需要的结果。但在除法运算时，如果两个值带有相同的单位值时，除法运算之后会得到一个不带单位的数值。如下所示：

``` 
.box {
  width: (1000px / 100px);
}
```

编译后的CSS

``` 
.box {
  width: 10;
}
```

#### 颜色运算

所有算数运算都支持颜色值，并且是分段运算的。也就是说，红、绿和蓝各颜色分段单独进行运算。如：

``` 
p {
  color: #010203 + #040506;
}
```

计算公式为 01 + 04 = 05、02 + 05 = 07 和 03 + 06 = 09， 并且被合成为：

如此编译出来的 CSS 为：

``` 
p {
  color: #050709;
}
```

算数运算也能将数字和颜色值 一起运算，同样也是分段运算的。如：

``` 
p {
  color: #010203 * 2;
}
```

计算公式为 01 * 2 = 02、02 * 2 = 04 和 03 * 2 = 06， 并且被合成为：

``` 
p {
  color: #020406;
}
```

#### 字符运算

在 Sass 中可以通过加法符号“+”来对字符串进行连接。例如：

``` 
$content: "Hello" + "" + "Sass!";
.box:before {
  content: " #{$content} ";
}
```

编译出来的CSS：

``` 
.box:before {
  content: " Hello Sass! ";
}
```

除了在变量中做字符连接运算之外，还可以直接通过 +，把字符连接在一起：

``` 
div {
  cursor: e + -resize;
}
```

编译出来的CSS:

``` 
div {
  cursor: e-resize;
}
```

注意，如果有引号的字符串被添加了一个没有引号的字符串 （也就是，带引号的字符串在 + 符号左侧）， 结果会是一个有引号的字符串。 同样的，如果一个没有引号的字符串被添加了一个有引号的字符串 （没有引号的字符串在 + 符号左侧）， 结果将是一个没有引号的字符串。 例如：

``` 
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
```

编译出来的 CSS：

``` 
p:before {
  content: "Foo Bar";
  font-family: sans-serif;
}
```

## 内置函数

### *Introspection函数

Introspection 函数包括了几个判断型函数：

- **type-of($value)**：返回一个值的类型
- **unit($number)**：返回一个值的单位
- **unitless($number)**：判断一个值是否不带单位
- **comparable($number-1, $number-2)**：判断两个值是否可以做加、减和合并

#### type-of()函数

type-of() 函数主要用来判断一个值是属于什么类型：

返回值：

``` 
number 为数值型。
string 为字符串型。
bool 为布尔型。
color 为颜色型。
>> type-of(100)
"number"
>> type-of(100px)
"number"
>> type-of("asdf")
"string"
>> type-of(asdf)
"string"
>> type-of(true)
"bool"
>> type-of(false)
"bool"
>> type-of(#fff)
"color"
>> type-of(blue)
"color"
>> type-of(1 / 2 = 1)
"string"
```

#### unit()函数

unit() 函数主要是用来获取一个值所使用的单位，碰到复杂的计算时，其能根据运算得到一个“多单位组合”的值，不过只充许乘、除运算：

``` 
>> unit(100)
""
>> unit(100px)
"px"
>> unit(20%)
"%"
>> unit(1em)
"em"
>> unit(10px * 3em)
"em*px"
>> unit(10px / 3em)
"px/em"
>> unit(10px * 2em / 3cm / 1rem)
"em/rem"
```

但加、减碰到不同单位时，unit() 函数将会报错，除 px 与 cm、mm 运算之外：

``` 
>> unit(1px + 1cm)
"px"
>> unit(1px - 1cm)
"px"
>> unit(1px + 1mm)
"px"
>> unit(10px * 2em - 3cm / 1rem)
SyntaxError: Incompatible units: 'cm' and 'px*em'.
>> unit(10px * 2em - 1px / 1rem)
SyntaxError: Incompatible units: '' and 'em'.
>> unit(1px - 1em)
SyntaxError: Incompatible units: 'em' and 'px'.
>> unit(1px - 1rem)
SyntaxError: Incompatible units: 'rem' and 'px'.
>> unit(1px - 1%)
SyntaxError: Incompatible units: '%' and 'px'.
>> unit(1cm + 1em)
SyntaxError: Incompatible units: 'em' and 'cm'.
```

unit() 函数对于单位运算相对来说也没有规律，而且有些单位也无法整合成一个单位，对于我们在 CSS 中运用中并不适合，比如：

``` 
>> unit(10px * 3em)
"em*px"
>> unit(10px / 3em)
"px/em"
>> unit(10px * 2em / 3cm / 1rem)
"em/rem"
```

#### unitless()函数

unitless() 函数相对来说简单明了些，只是用来判断一个值是否带有单位，如果不带单位返回的值为 true，带单位返回的值为 false：

``` 
>> unitless(100)
true
>> unitless(100px)
false
>> unitless(100em)
false
>> unitless(100%)
false
>> unitless(1 /2 )
true
>> unitless(1 /2 + 2 )
true
>> unitless(1px /2 + 2 )
false
```

具体例子，见右侧代码编辑器。右侧代码实现：用户在调用混合宏时，如果用户没有给参数值加上单位，程序会自动加入单位。

#### comparable()函数

comparable() 函数主要是用来判断两个数是否可以进行“加，减”以及“合并”。如果可以返回的值为 true，如果不可以返回的值是 false：

``` 
>> comparable(2px,1px)
true
>> comparable(2px,1%)
false
>> comparable(2px,1em)
false
>> comparable(2rem,1em)
false
>> comparable(2px,1cm)
true
>> comparable(2px,1mm)
true
>> comparable(2px,1rem)
false
>> comparable(2cm,1mm)
true
```

### Miscellaneous函数

在这里把 Miscellaneous 函数称为三元条件函数，主要因为他和 JavaScript 中的三元判断非常的相似。他有两个值，当条件成立返回一种值，当条件不成立时返回另一种值`if($condition,$if-true,$if-false)`

上面表达式的意思是当 `$condition` 条件成立时，返回的值为 `$if-true`，否则返回的是 `$if-false` 值。

``` 
>> if(true,1px,2px)
1px
>> if(false,1px,2px)
2px
```

### *数字函数

- **percentage($value)**：将一个不带单位的数转换成百分比值；

``` 
>> percentage(.2)
20%
>> percentage(2px / 10px)
20%
>> percentage(2em / 10em)
20%
>>
```

``` scss
.footer{
    width : percentage(.2)
}
```

  编译后的 css 代码：

``` 
.footer{
width : 20%
}
```

  如果您转换的值是一个带有单位的值，那么在编译的时候会报错误信息：

``` 
>> percentage(2px / 10em)
SyntaxError: $value: 0.2px/em is not a unitless number for `percentage'
```

- **round($value)**：将数值四舍五入，转换成一个最接近的整数；
  
  ``` 
  >> round(12.3)
  12
  >> round(12.5)
  13
  >> round(1.49999)
  1
  >> round(2.0)
  2
  >> round(20%)
  20%
  >> round(2.2%)
  2%
  >> round(3.9em)
  4em
  >> round(2.3px)
  2px
  >> round(2px / 3px)
  1
  >> round(1px / 3px)
  0
  >> round(3px / 2em)
  2px/em
  ```
  
  ``` 
  .footer {
     width:round(12.3px)
  }
  ```
  
  编译后的 css 代码：
  
  ``` 
  .footer {
    width: 12px;
  }
  ```
  
  在round() 函数中可以携带单位的任何数值。
  
- **ceil($value)**：将大于自己的小数转换成下一位整数；

``` 
>> ceil(2.0)
2
>> ceil(2.1)
3
>> ceil(2.6)
3
>> ceil(2.3%)
3%
>> ceil(2.3px)
3px
>> ceil(2.5px)
3px
>> ceil(2px / 3px)
1
>> ceil(2% / 3px)
1%/px
>> ceil(1em / 5px)
1em/px
```



``` 
 .footer {
width:ceil(12.3px);
}
```

编译后的 css 代码：

``` 
.footer {
  width: 13px;
}
```

- **floor($value)**：将一个数去除他的小数部分；

``` 
>> floor(2.1)
2
>> floor(2.5)
2
>> floor(3.5%)
3%
>> floor(10.2px)
10px
>> floor(10.8em)
10em
>> floor(2px / 10px)
0
>> floor(3px / 1em)
3px/em
```



- **abs($value)**：返回一个数的绝对值；

``` 
>> floor(2.1)
2
>> floor(2.5)
2
>> floor(3.5%)
3%
>> floor(10.2px)
10px
>> floor(10.8em)
10em
>> floor(2px / 10px)
0
>> floor(3px / 1em)
3px/em
```

- **min($numbers…)**：找出几个数值之间的最小值；

``` 
>> min(1,2,1%,3,300%)
1%
>> min(1px,2,3px)
1px
>> min(1em,2em,6em)
1em

```

不过在 min() 函数中同时出现两种不同类型的单位，将会报错误信息：

``` 
>> min(1px,1em)
SyntaxError: Incompatible units: 'em' and 'px'.
```

- **max($numbers…)**：找出几个数值之间的最大值；

``` 
>> max(1,5)
5
>> max(1px,5px)
5px

```

同样的，如果在 max() 函数中有不同单位，将会报错：

``` 
>> max(1,3px,5%,6)
SyntaxError: Incompatible units: '%' and ‘px'.
```

``` 
>> max(1,5)
5
>> max(1px,5px)
5px

```

同样的，如果在 max() 函数中有不同单位，将会报错：

``` 
>> max(1,3px,5%,6)
SyntaxError: Incompatible units: '%' and ‘px'.
```

- **random()**: 获取随机数；

``` 
>> random()
0.03886
>> random()
0.66527
>> random()
0.8125
>> random()
0.26839
>> random()
0.85063
```

### 颜色函数

#### RGB颜色函数

> RGB 颜色只是颜色中的一种表达式，其中 R 是 red 表示红色，G 是 green 表示绿色而 B 是 blue 表示蓝色。在 Sass 中为 RGB 颜色提供六种函数：

1. rgb($red,$green,$blue)：根据红、绿、蓝三个值创建一个颜色；
2. rgba($red,$green,$blue,$alpha)：根据红、绿、蓝和透明度值创建一个颜色；
3. red($color)：从一个颜色中获取其中红色值；
4. green($color)：从一个颜色中获取其中绿色值；
5. blue($color)：从一个颜色中获取其中蓝色值；
6. mix($color-1,$color-2,[$weight])：把两种颜色混合在一起。

在命令终端开启`sass -i`命令，相当于开启 Sass 的函数计算。

接下来，分别在终端使用 RGB 函数来进行计算，看其最终结果：

``` 
>> rgb(200,40,88) //根据r:200,g:40,b:88计算出一个十六进制颜色值
# c82858
>> rgba(#c82858,.65) //根据#c82858的65%透明度计算出一个rgba颜色值
rgba(200, 40, 88, 0.65)
>> red(#c82858) //从#c82858颜色值中得到红色值 200
200
>> green(#c82858) //从#c82858颜色值中得到绿色值 40
40
>> blue(#c82858) //从#c82858颜色值中得到蓝色值 88
88
>> mix(#c82858,rgba(200,40,80,.65),.3) //把#c82858和rgba(200,40,88,.65) 两颜色按比例混合得到一个新颜色
rgba(200, 40, 80, 0.65105)
```

从上面的简单运算结果可以很清晰的知道。在 RGB 颜色函数中，在实际中常用的主要是 **rgba() 和 mix()** 两个函数，而 rgb() 函数只能快速的将一个 rgb 颜色转换成十六进制颜色表达，red()、green() 和 blue() 函数，只能取得某一颜色的一个值.

#### HSL函数

> 在 Sass 中提供了一系列有关于 HSL 的颜色函数，以供大家使用，其中常用的有 saturation、lightness、adjust-hue、lighten、darken 等等

- hsl($hue,$saturation,$lightness)：通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色；
  
- hsla($hue,$saturation,$lightness,$alpha)：通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色；
  
- hue($color)：从一个颜色中获取色相（hue）值；
  
- saturation($color)：从一个颜色中获取饱和度（saturation）值；
  
- lightness($color)：从一个颜色中获取亮度（lightness）值；
  
- adjust-hue($color,$degrees)：通过改变一个颜色的色相值，创建一个新的颜色；
  
- lighten($color,$amount)：通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色；
  
- darken($color,$amount)：通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色；
  
- saturate($color,$amount)：通过改变颜色的饱和度值，让颜色更饱和，从而创建一个新的颜色
  
- desaturate($color,$amount)：通过改变颜色的饱和度值，让颜色更少的饱和，从而创建出一个新的颜色；
  
- grayscale($color)：将一个颜色变成灰色，相当于desaturate($color,100%);
  
- complement($color)：返回一个补充色，相当于adjust-hue($color,180deg);
  
- invert($color)：反回一个反相色，红、绿、蓝色值倒过来，而透明度不变。
  
  ``` 
  >> hsl(200,30%,60%) //通过h200,s30%，l60%创建一个颜色
  # 7aa3b8
  >> hsla(200,30%,60%,.8)//通过h200,s30%，l60%,a80%创建一个颜色
  rgba(122, 163, 184, 0.8)
  >> hue(#7ab)//得到#7ab颜色的色相值
  195deg
  >> saturation(#7ab)//得到#7ab颜色的饱和度值
  33.33333%
  >> lightness(#7ab)//得到#7ab颜色的亮度值
  60%
  >> adjust-hue(#f36,150deg) //改变#f36颜色的色相值为150deg
  # 33ff66
  >> lighten(#f36,50%) //把#f36颜色亮度提高50%
  # ffffff
  >> darken(#f36,50%) //把#f36颜色亮度降低50%
  # 33000d
  >> saturate(#f36,50%) //把#f36颜色饱和度提高50%
  # ff3366
  >> desaturate(#f36,50%) //把#f36颜色饱和度降低50%
  # cc667f
  >> grayscale(#f36) //把#f36颜色变成灰色
  # 999999
  >> complement(#f36)
  # 33ffcc
  >> invert(#f36)
  # 00cc99
  ```
  
  HSL 函数中最常见的应该是 **lighten()、darken()、saturate()、desaturate()、grayscale()、complement()和 invert()** 几个函数。

### *列表函数

> 列表函数主要包括一些对列表参数的函数使用，主要包括以下几种：

- length($list)：返回一个列表的长度值；
- nth($list, $n)：返回一个列表中指定的某个标签值
- join($list1, $list2, [$separator])：将两个列给连接在一起，变成一个列表；
- append($list1, $val, [$separator])：将某个值放在列表的最后；
- zip($lists…)：将几个列表结合成一个多维的列表；
- index($list, $value)：返回一个值在列表中的位置值。

#### length()函数

length() 函数主要用来返回一个列表中有几个值，简单点说就是返回列表清单中有多少个值：

``` 
>> length(10px)
1
>> length(10px 20px (border 1px solid) 2em)
4
>> length(border 1px solid)
3
```

length() 函数中的列表参数之间使用空格隔开，不能使用逗号，否则函数将会出错：

``` 
>> length(10px,20px,(border 1px solid),2em)
SyntaxError: wrong number of arguments (4 for 1) for `length'
>> length(1,2px)
SyntaxError: wrong number of arguments (2 for 1) for `length'
```

#### nth()函数

语法:

nth($list,$n)

nth() 函数用来指定列表中某个位置的值。不过在 Sass 中，nth() 函数和其他语言不同，1 是指列表中的第一个标签值，2 是指列给中的第二个标签值，依此类推。如：

``` 
>> nth(10px 20px 30px,1)
10px
>> nth((Helvetica,Arial,sans-serif),2)
"Arial"
>> nth((1px solid red) border-top green,1)
(1px "solid" #ff0000)
```

注：在 nth($list,$n) 函数中的 $n 必须是大于 0 的整数：

``` 
>> nth((1px solid red) border-top green 1 ,0)
SyntaxError: List index 0 must be a non-zero integer for `nth'
```

#### join()函数

join() 函数是将两个列表连接合并成一个列表。

``` 
>> join(10px 20px, 30px 40px)
(10px 20px 30px 40px)
>> join((blue,red),(#abc,#def))
(#0000ff, #ff0000, #aabbcc, #ddeeff)
>> join((blue,red),(#abc #def))
(#0000ff, #ff0000, #aabbcc, #ddeeff)
```

不过 join() 只能将两个列表连接成一个列表，如果直接连接两个以上的列表将会报错：

``` 
>> join((blue red),(#abc, #def),(#dee #eff))
SyntaxError: $separator: (#ddeeee #eeffff) is not a string for `join'
```

但很多时候不只碰到两个列表连接成一个列表，这个时候就需要将多个 join() 函数合并在一起使用：

``` 
>> join((blue red), join((#abc #def),(#dee #eff)))
(#0000ff #ff0000 #aabbcc #ddeeff #ddeeee #eeffff)
```

在 join() 函数中还有一个很特别的参数 $separator，这个参数主要是用来给列表函数连接列表值是，使用的分隔符号，默认值为 auto。

join() 函数中 $separator 除了默认值 auto 之外，还有 comma 和 space 两个值，其中 comma 值指定列表中的列表项值之间使用逗号（,）分隔，space 值指定列表中的列表项值之间使用空格（ ）分隔。

在 join() 函数中除非明确指定了 $separator值，否则将会有多种情形发生：

如果列表中的第一个列表中每个值之间使用的是逗号（,），那么 join() 函数合并的列表中每个列表项之间使用逗号,分隔：

``` 
>> join((blue, red, #eff),(green orange))
(#0000ff, #ff0000, #eeffff, #008000, #ffa500)
```

但当第一个列表中只有一个列表项，那么 join() 函数合并的列表项目中每个列表项目这间使用的分隔符号会根据第二个列表项中使用的，如果第二列表项中使用是,分隔，则使用逗号分隔；如果第二列项之间使用的空格符，则使用空格分隔：

``` 
>> join(blue,(green, orange))
(#0000ff, #008000, #ffa500)
>> join(blue,(green orange))
(#0000ff #008000 #ffa500)
```

如果列表中的第一个列表中每个值之间使用的是空格，那么 join() 函数合并的列表中每个列表项之间使用空格分隔：

``` 
>> join((blue green),(red,orange))
(#0000ff #008000 #ff0000 #ffa500)
>> join((blue green),(red orange))
(#0000ff #008000 #ff0000 #ffa500)
```

如果当两个列表中的列表项小于1时，将会以空格分隔：

``` 
>> join(blue,red)
(#0000ff #ff0000)
```

如此一来，会有多种情形发生，造成使用混乱的情形，如果你无法记得，什么时候会是用逗号分隔合并的列表项，什么时候是使用空格分隔合并 的列表项，在些建议大家使用 join() 函数合并列表项的时候就明确指定 $separator 参数，用来指定合并的列表中使用什么方式来分隔列表项：

``` 
>> join(blue,red,comma)
(#0000ff, #ff0000)
>> join(blue,red,space)
(#0000ff #ff0000)
>> join((blue green),(red,orange),comma)
(#0000ff, #008000, #ff0000, #ffa500)
>> join((blue green),(red,orange),space)
(#0000ff #008000 #ff0000 #ffa500)
>> join((blue, green),(red,orange),comma)
(#0000ff, #008000, #ff0000, #ffa500)
>> join((blue, green),(red,orange),space)
(#0000ff #008000 #ff0000 #ffa500)
>> join(blue,(red,orange),comma)
(#0000ff, #ff0000, #ffa500)
>> join(blue,(red,orange),space)
(#0000ff #ff0000 #ffa500)
>> join(blue,(red orange),comma)
(#0000ff, #ff0000, #ffa500)
>> join(blue,(red orange),space)
(#0000ff #ff0000 #ffa500)
```

#### append()函数

append() 函数是用来将某个值插入到列表中，并且处于最末位。

``` 
>> append(10px 20px ,30px)
(10px 20px 30px)
>> append((10px,20px),30px)
(10px, 20px, 30px)
>> append(green,red)
(#008000 #ff0000)
>> append(red,(green,blue))
(#ff0000 (#008000, #0000ff))
```

如果没有明确的指定 $separator 参数值，其默认值是 auto。

如果列表只有一个列表项时，那么插入进来的值将和原来的值会以空格的方式分隔。

如果列表中列表项是以空格分隔列表项，那么插入进来的列表项也将以空格分隔；

如果列表中列表项是以逗号分隔列表项，那么插入进来的列表项也将以逗号分隔。

当然，在 append() 函数中，可以显示的设置 $separator 参数，

如果取值为 comma 将会以逗号分隔列表项

如果取值为 space 将会以空格分隔列表项

``` 
>> append((blue green),red,comma)
(#0000ff, #008000, #ff0000)
>> append((blue green),red,space)
(#0000ff #008000 #ff0000)
>> append((blue, green),red,comma)
(#0000ff, #008000, #ff0000)
>> append((blue, green),red,space)
(#0000ff #008000 #ff0000)
>> append(blue,red,comma)
(#0000ff, #ff0000)
>> append(blue,red,space)
(#0000ff #ff0000)
```

#### zip()函数

zip()函数将多个列表值转成一个多维的列表：

``` 
>> zip(1px 2px 3px,solid dashed dotted,green blue red)
((1px "solid" #008000), (2px "dashed" #0000ff), (3px "dotted" #ff0000))
```

在使用zip()函数时，每个单一的列表个数值必须是相同的：

``` 
>> zip(1px 2px 3px, solid , green blue red)
NoMethodError: undefined method `options=' for nil:NilClass
  Use --trace for backtrace.
```

否则将会出错。

zip()函数中每个单一列表的值对应的取其相同位置值：

| List  | nth(1) | nth(2) | nth(3) |
| ----- | :----- | :----: | -----: |
| List1 | 1px    |  2px   |    3px |
| List2 | solid  | dashed | dotted |
| List3 | green  |  blue  |    red |

zip()函数组合出来就成了：

``` 
1px solid green, 2px dashed blue, 3px dotted red
```

#### index()函数

index() 函数类似于索引一样，主要让你找到某个值在列表中所处的位置。在 Sass 中，第一个值就是1，第二个值就是 2，依此类推：

``` 
>> index(1px solid red, 1px)
1
>> index(1px solid red, solid)
2
>> index(1px solid red, red)
3
```

在 index() 函数中，如果指定的值不在列表中（没有找到相应的值），那么返回的值将是 false，相反就会返回对应的值在列表中所处的位置。

``` 
>> index(1px solid red,dotted) //列表中没有找到 dotted
false
>> index(1px solid red,solid) //列表中找到 solid 值，并且返回他的位置值 2
2
```

### Maps的函数

在 Sass 中 map 自身带了七个函数：

- map-get($map,$key)：根据给定的 key 值，返回 map 中相关的值。
- map-merge($map1,$map2)：将两个 map 合并成一个新的 map。
- map-remove($map,$key)：从 map 中删除一个 key，返回一个新 map。
- map-keys($map)：返回 map 中所有的 key。
- map-values($map)：返回 map 中所有的 value。
- map-has-key($map,$key)：根据给定的 key 值判断 map 是否有对应的 value 值，如果有返回 true，否则返回 false。
- keywords($args)：返回一个函数的参数，这个参数可以动态的设置 key 和 value。

#### map-get($map,$key) 函数

map-get($map,$key) 函数的作用是根据 $key 参数，返回 $key 在 $map 中对应的 value 值。如果 $key 不存在 $map中，将返回 null 值。此函数包括两个参数：

- $map：定义好的 map。
  
- $key：需要遍历的 key。
  
  来看一个简单的示例，假设定义了一个 $social-colors 的 map:
  
  ``` scss
  $social-colors: (
    dribble: #ea4c89,
    facebook: #3b5998,
    github: #171515,
    google: #db4437,
    twitter: #55acee
  );
  ```
  
  假设要获取 facebook 键值对应的值 #3b5998，我们就可以使用 map-get() 函数来实现：
  
    .btn-dribble{
  
  ``` 
  color: map-get($social-colors,facebook);
  ```
  
    }
  
  编译出来的CSS：
  
  ``` css
  .btn-dribble {
  color: #3b5998;
  }
  ```
  
  我们来看另一种情况，假设 $social-colors 这个 map 没有 $weibo 这个 key:
  
  ``` scss
  .btn-weibo{
  font-size: 12px;
  color: map-get($social-colors,weibo);
  }
  ```
  
  此时编译出来的是CSS：
  
  ``` css
  .btn-weibo {
  font-size: 12px;
  }
  ```

#### map-has-key($map,$key)

map-has-key($map,$key) 函数将返回一个布尔值。当 $map 中有这个 $key，则函数返回 true，否则返回 false。

前面的示例，当 $key 不在 $map 中时，使用 map-get($map,$key) 函数将返回一个 null 值。但对于开发人员，并看不到任何提示信息。如果使用 map-has-key($map,$key) 函数就可以改变这一状态。我们来看一个简单的示例。

``` 
@if map-has-key($social-colors,facebook){
.btn-facebook {
color: map-get($social-colors,facebook);
}
} @else {
@warn "No color found for faceboo in $social-colors map. Property ommitted."
}
```

编译出来：

``` 
.btn-fackbook{
color: #3b5998;
}   
```

上面看到的示例是 facebook 这个 key 已存在 $social-colors 这个 map 当中。所以能正常编译。如果你手误，将 facebook 输错了：

``` 
@if map-has-key($social-colors,faceboo){
.btn-facebook {
color: map-get($social-colors,facebook);
}
} @else {
@warn "No color found for faceboo in $social-colors map. Property ommitted."
}
```

这个时候，你编译出来的 CSS 代码中，不会有新代码添加，但在命令终端可以看到提示信息：

``` 
WARNING: No color found for faceboo in $social-colors map. Property ommitted.
     on line 25 of test.scss
```

是不是非常的友好。但总觉得这样写是傻傻的，总不可能每获取一个 key 都写一个 @if 语句吧。其实不用这么复杂，我们可以自定义一个函数，比如 colors():

``` 
@function colors($color){
@if not map-has-key($social-colors,$color){
@warn "No color found for `#{$color}` in $social-colors map. Property omitted.";
}
@return map-get($social-colors,$color);
}
```

有了这个函数之后，我们就可以这样使用

``` 
.btn-dribble {
color: colors(dribble);
}
.btn-facebook {
color: colors(facebook);
}
.btn-github {
color: colors(github);
}
.btn-google {
color: colors(google);
}
.btn-twitter {
color: colors(twitter);
}
.btn-weibo {
color: colors(weibo);
}
```

编译出来的 CSS:

``` 
.btn-dribble {
  color: #ea4c89;
}

.btn-facebook {
  color: #3b5998;
}

.btn-github {
  color: #171515;
}

.btn-google {
  color: #db4437;
}

.btn-twitter {
  color: #55acee;
}
```

同时你不难发现，命令终端提示信息：

``` 
WARNING: No color found for `weibo` in $social-colors map. Property omitted.
 on line 13 of test.scss
```

那是在 $social-colors 这个 map 中没有 weibo 这个 key。是不是很有意思。

当然，如果你对 Sass 的指令熟悉的话，上面编译出来的 CSS 可以使用 @each：

``` 
@each $social-network,$social-color in $social-colors {
.btn-#{$social-network} {
color: colors($social-network);
}
}
```

#### map-keys($map)

map-keys($map) 函数将会返回 $map 中的所有 key。这些值赋予给一个变量，那他就是一个列表。如：

``` 
map-keys($social-colors);
```

其返回的值为：

``` 
"dribble","facebook","github","google","twitter"
```

换句话说：

``` 
$list: map-keys($social-colors);
```

相当于：

``` 
$list:"dribble","facebook","github","google","twitter";
```

这个时候，就可以配合 Sass 的 list 做很多事情。

上面的示例，可以做通过 map-keys($map) 来做一个修改：

``` 
@function colors($color){
$names: map-keys($social-colors);
@if not index($names,$color){
@warn "Waring: `#{$color} is not a valid color name.`";
}
@return map-get($social-colors,$color);
}
```

上面代码中最不同之处，我们使 用map-key s将 $social-colors 这个 map 的所有 key 取出，并赋予给一个名 为 $names 的列表。然后通过 index($names,$color) 返回 $color 在 $names 位置，如果这个位置不存在，将返回提示信息，如果存在将返回正确的值。

``` 
.btn-weibo{
color: colors(weibo);
}
```

例如，weibo 不在 $social-color s中，那么不会编译出 CSS，而且在命令终端同样会有提示信息：

``` 
WARNING: Waring: weibo is not a valid color name.
 on line 27 of test.scss
```

同样，也可以通过 `@each` 或者 `@for` 遍历出所有值：

@each:

``` 
@each $name in map-keys($social-colors){
.btn-#{$name}{
color: colors($name);
}
}
```

@for:

``` 
@for $i from 1 through length(map-keys($social-colors)){
.btn-#{nth(map-keys($social-colors),$i)} {
color: colors(nth(map-keys($social-colors),$i));
}
}
```

虽然使用的方法不一样，但最终得到的 CSS 是一样的：

``` 
.btn-dribble {
  color: #ea4c89;
}

.btn-facebook {
  color: #3b5998;
}

.btn-github {
  color: #171515;
}

.btn-google {
  color: #db4437;
}

.btn-twitter {
  color: #55acee;
}
```

#### map-values($map)

map-values($map) 函数类似于 map-keys($map) 功能，不同的是 map-values($map )获取的是 $map 的所有 value 值，可以说也将是一个列表。而且，map-values($map) 中如果有相同的 value 也将会全部获取出来。

如前面的示例，使用：

``` 
map-values($social-colors)
```

将会返回：

``` 
#ea4c89,#3b5998,#171515,#db4437,#55acee
```

值与值之前同样用逗号分隔。

#### map-merge($map1,$map2)

map-merge($map1,$map2) 函数是将 $map1 和 $map2 合并，然后得到一个新的 $map。如果你要快速将新的值插入到 $map 中的话，这种方法是最佳方法。假设我们有两个 $map:

``` 
$color: (
text: #f36,
link: #f63,
border: #ddd,
backround: #fff
);
$typo:(
font-size: 12px,
line-height: 1.6
);
```

如果希望将这两个 $map 合并成一个 map，我们只要这样做：

``` 
$newmap: map-merge($color,$typo);
```

将会生成一个新的 map:

``` 
$newmap:(
text: #f36,
link: #f63,
border: #ddd,
background: #fff,
font-size: 12px,
line-height: 1.6
);
```

这样你就可以借助 map-get( ) 等函数做其他事情了。

不过有一点需要注意，如果 $map1 和 $map2 中有相同的 $key 名，那么将 $map2 中的 $key 会取代 $map1 中的：

``` 
$color: (
text: #f36,
link: #f63,
border: #ddd,
backround: #fff
);
$typo:(
font-size: 12px,
line-height: 1.6,
border: #ccc,
background: #000
);
```

执行：

``` 
$newmap: map-merge($color,$typo);
```

得到的新 map:

``` 
$newmap:(
text: #f36,
link: #f63,
font-size: 12px,
line-height: 1.6,
border: #ccc,
background: #000
);
```

#### map-remove($map,$key)

map-remove($map,$key) 函数是用来删除当前 $map 中的某一个 $key，从而得到一个新的 map。其返回的值还是一个 map。他并不能直接从一个 map 中删除另一个 map，仅能通过删除 map 中的某个 key 得到新 map。如：

``` 
$map:map-remove($social-colors,dribble);
```

返回的是一个新 map:

``` 
$map:(
facebook: #3b5998,
github: #171515,
google: #db4437,
twitter: #55acee
);
```

如果删除的 key 并不存在于 $map 中，那么 map-remove() 函数返回的新 map 和以前的 map 一样。

``` 
$map:map-remove($social-colors,weibo);
```

返回的值：

``` 
$map: (
dribble: #ea4c89,
facebook: #3b5998,
github: #171515,
google: #db4437,
twitter: #55acee
);
```

#### keywords($args)

keywords($args) 函数可以说是一个动态创建 map 的函数。可以通过混合宏或函数的参数变创建 map。参数也是成对出现，其中 $args 变成 key(会自动去掉$符号)，而 $args 对应的值就是value。

``` 
@mixin map($args...){
@debug keywords($args);
}

@include map(
  $dribble: #ea4c89,
  $facebook: #3b5998,
  $github: #171515,
  $google: #db4437,
  $twitter: #55acee
);
```

在命令终端可以看到一个输入的 @debug 信息：

``` 
 DEBUG: (dribble: #ea4c89, facebook: #3b5998, github: #171515, google: #db4437, twitter: #55acee)
```

## 指令 Directives

### *@media

`@media` 指令除了cssk中的功能外，还有一些额外的功能：`@media` 可以嵌套在选择器中，生成代码时，会输出到最外层。

``` 
.sidebar {
  width: 300px;
  @media screen and (min-width: 992px) {
    width: 500px;
  }
}
```

生成的css:

``` 
.sidebar {
  width: 300px;
  }
@media screen and (min-width: 992px) {
    .sidebar {
      width: 500px;
      }
  }
```

`@media` 可以嵌套`@media` 输出时通过`and` 来连接。

``` 
@media screen {
  .sidebar {
    @media (min-width: 992px) {
      width: 500px;
    }
  }
}
```

生成的css:

``` 
@media screen and (min-width: 992px) {
  .sidebar {
    width: 500px; 
    }
 }
```

 `@media`还可以包含sass表达式(包括变量、函数、插值)

``` 
$media: screen;
$feature: min-width;
$value: 992px;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}
```

生成的css:

``` 
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .sidebar {
    width: 500px; } }
```

### *@if

@if指令可在表达式和表达式嵌套下使用，如果表达式返的回值不是`falase`或`null`才会起作用。

``` scss
p {
  @if 1 + 1 == 2 { border: 1px solid;  }
  @if 5 < 3      { border: 2px dotted; }
  @if null       { border: 3px double; }
}
```

生成css代码

``` css
p {
  border: 1px solid; 
}
```

`@if`可与`@else if`、`@else`并用，组成`@if...@else if...@else...`或@`if...@else...`语句块。

``` scss
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
```

生成css代码

``` css
p {
  color: green; 
}
```

### @for指令

for循环有两种形式，分别为：@for $var from <start> through <end>和@for $var from <start> to <end>。$i表示变量，start表示起始值，end表示结束值，这两个的区别是关键字through表示包括end这个数，而to则不包括end这个数。

``` scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

@for $i from 1 to 3 {
  .width-#{$i} { width: 2em * $i; }
}
```

生成的css

``` css
.item-1 {
  width: 2em; 
}
.item-2 {
  width: 4em; 
}
.item-3 {
  width: 6em; 
}

.width-1 {
  width: 2em; 
}
.width-2 {
  width: 4em; 
}
```

### @each指令

语法为：`@each $var in <list or map>`。其中`$var`表示变量，而`list`和`map`表示`list`类型数据和`map`类型数据。sass 3.3.0新加入了多字段循环和map数据循环。

#### 单个字段list数据循环

``` scss
$animal-list: puma, sea-slug, egret, salamander;
@each $animal in $animal-list {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

生成的css

``` css
.puma-icon {
  background-image: url('/images/puma.png'); 
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); 
}
.egret-icon {
  background-image: url('/images/egret.png'); 
}
.salamander-icon {
  background-image: url('/images/salamander.png'); 
}
```

#### 多个字段list数据循环

``` scss
$animal-data: (puma, black, default),(sea-slug, blue, pointer),(egret, white, move);
@each $animal, $color, $cursor in $animal-data {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}
```

生成的css

``` css
.puma-icon {
  background-image: url('/images/puma.png');
  border: 2px solid black;
  cursor: default; 
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
  border: 2px solid blue;
  cursor: pointer; 
}
.egret-icon {
  background-image: url('/images/egret.png');
  border: 2px solid white;
  cursor: move; 
}
```

#### 多个字段map数据循环

``` scss
$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
@each $header, $size in $headings {
  #{$header} {
    font-size: $size;
  }
}
```

生成的css

``` css
h1 {
  font-size: 2em; 
}
h2 {
  font-size: 1.5em; 
}
h3 {
  font-size: 1.2em; 
}
```

### @while指令

`@while`指令与js中的while语法类似，循环直到表达式返回false时。这可以用来实现比`@for`更复杂的循环，虽然这是没有必要的。

``` scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

生成的css

``` css
.item-6 {
  width: 12em; }
.item-4 {
  width: 8em; }
.item-2 {
  width: 4em; }
```

### @function指令

使用`@function`指令可以自定义函数

``` scss
$grid-width: 40px;
$gutter-width: 10px;
@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}
#sidebar { width: grid-width(5); }
```

生成的css

``` 
#sidebar {
  width: 240px; 
}
```

@function像混合宏一样可以访问到全局变量以及接受的参数。@function中可以包含多个语句，必须使用@return来返回函数的返回值。

### *@at-root

`@at-root` 从字面上解释就是跳出根元素。当你选择器嵌套多层之后，想让某个选择器跳出，此时就可以使用 @at-root。来看一个简单的示例：

``` scss
.a {
  color: red;

  .b {
    color: orange;

    .c {
      color: yellow;

      @at-root .d {
        color: green;
      }
    }
  }  
}
```

编译出来的CSS

``` css
.a {
  color: red;
}
.a .b {
  color: orange;
}
.a .b .c {
  color: yellow;
}
.d {
  color: green;
}
```

### @debug、@warn、@error

@debug、@warn和@error 功能差不多,用来帮助我们更好的调试 Sass,@debug和@warn 在 Sass 中是用来调试的，当你的在 Sass 的源码中使用了 @debug 指令之后，Sass 代码在编译出错时，在命令终端会输出你设置的提示 Bug，@error还会将错误信息输出到编译的css文件上。

``` scss
@mixin error($x){
  @if unitless($x) {
    @debug "Assuming #{$x} to be in pixels";
    $x: 1px * $x;
  }
  @if type-of($x!=number){
    @warn '参数应该是number类型';
  }
  @if $x < 10 {
    width: $x * 10px;
  } @else if $x == 10 {
    width: $x;
  } @else {
    @error "你需要将#{$x}值设置在10以内的数";
  }
}

.test {
  @include error(15);
}
```

编译的时候会提示

``` 
WARNING: Assuming 15 to be in pixels
WARNING: 参数应该是number类型
error ( 你需要将15px值设置在10以内的数)
```