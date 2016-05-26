# 伊利每益添项目

## 1. 搭建 Bootstrap 页面骨架及项目目录结构

```
├─ /myt/ ··················· 项目所在目录
└─┬─ /css/ ······················· 自己的CSS文件
  ├─ /font/ ······················ 使用到的字体文件
  ├─ /img/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚步
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```

### 1.1. 约定编码规范

#### 1.1.1. HTML约定

- 所有的CSS引用在HEAD中，按照第三方优先的顺序排列，自己的CSS肯定在最下面
- 所有JS文件都引用在Body的最下面（加载的缘由），按照依赖顺序排序
- 如果只是使用bootstrap的样式的话，就不用引用js文件
- 在head中引入必要的CSS文件，优先引用第三方的CSS，方便自己的样式覆盖
- 在body末尾引入必要的JS文件，优先引用第三方的JS，注意JS文件之间的依赖关系，比如bootstrap.js依赖jQuery，那就应该先引用jquery.js 然后引用bootstrap.js


#### 1.1.2. CSS约定

- 除了公共级别样式，其余样式全部由 模块前缀
- 尽量使用 直接子代选择器， 少用间接子代 避免错杀
- CSS类名冲突 通过约定 给模块加上一个独一无二的名字 
- 使用子代选择器的方式

#### 1.1.3. JS约定

- 不允许使用onxxx = function(){}的方式注册事件
- 原生JS统一使用addEventListener('xxx', function(){});

### 1.2. HTML5文档结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
</head>
<body>
  
</body>
</html>
```

### 1.3. Viewport设置

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
```

> html中插入视口设置，可以通过emmet __meta:vp__ 插入
> 此属性为移动端页面视口设置，当前值表示在移动端页面的宽度为设备的宽度，并且不缩放（缩放级别为1）
> __960px 内容 被套在一个宽度为980px(绝大多数设备的视口默认尺寸)的容器(视口)中，将视口缩放到414px的设备中展示__

### 1.4. 浏览器兼容模式

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

> html中插入兼容模式设置，可以通过emmet __meta:compat__ 插入
> 此属性为文档兼容模式声明，表示如果在IE浏览器下则使用最新的标准渲染当前文档

### 1.5. favicon（站点图标）

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

> html中插入图标链接，可以通过emmet __link:favicon__ 插入

### 1.6. 引入相应的第三方文件

```html
<link rel="stylesheet" href="bootstrap.css">
<link rel="stylesheet" href="my.css">
...
<script src="jquery.js"></script>
<script src="bootstrap.js"></script>
<script src="my.js"></script>
```

### 1.7. 在默认的样式表中将默认字体设置为：

```css
body{
  font-family: "Helvetica Neue", 
                Helvetica, 
                Microsoft Yahei, 
                Hiragino Sans GB, 
                WenQuanYi Micro Hei, 
                sans-serif;
}
```

## 2. 完成页面空结构

> 先划分好页面中的大容器，然后在具体看每一个容器中单独的情况

```html
```

## 3. 构建顶部通栏

```html
```

### 3.1. container类

- 定义一个固定宽度且居中的版心
- container是具备响应式的能力
- 四个档位 1170 970 750 100%

```html
```

### 3.2. 栅格系统

- Bootstrap中的栅格系统就是将一行划分为12列
- 通过col-*-*的类名控制某个元素在某种屏幕的情况下展示几列
- col-md-6 在中等屏幕下 占1/2
- col-xs-12 在超小屏幕下 占全部

#### 3.2.1. row类

- .row{ ml:-15px; mr:-15px }
- 抵消掉container中定义的padding

```html
```

#### 3.2.2. col-\*-\*类

- 

```html
```

> 

### 3.2. 字体图标

- 字体实际上就是记录一个字符对应的图形
- 在CSS中为元素设置字体，以前只能设置客户端存在的字体
- webfont 在线字体
- 我自己做一套图形的字体
- 如何定义一个web字体？

```css
/* 定义一个叫做“itcast”字体 */
@font-face {
  font-family: 'itcast';
  src: url('../font/MiFie-Web-Font.eot') format('embedded-opentype'), 
  url('../font/MiFie-Web-Font.svg') format('svg'), 
  url('../font/MiFie-Web-Font.ttf') format('truetype'), 
  url('../font/MiFie-Web-Font.woff') format('woff');
}
```

```html

```

#### 字体文件格式

- eot : embedded-opentype
- svg : svg
- ttf : truetype
- woff : woff

#### icomoon

### 3.3. 二维码图片展示

```css
```

### 3.4. 按钮样式生成

- http://blog.koalite.com/bbg/
- 可以通过界面生成一个新的按钮样式

```css
```

### 3.5. 小屏幕隐藏

```html

```

或者

```html

```

- 

## 4. 导航通栏

- 

```html
```

### 4.1. Bootstrap扩展

- 通过bootstrap文档对导航条样式的设置发现，其实本身是有一个类似于主题的概念
- navbar-default：默认的外观
- navbar-inverse：暗色背景的样式
- 

```css
```

### 4.2. 品牌logo

- 

### 4.3. 菜单行高调整

- 
