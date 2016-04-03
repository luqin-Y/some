# **关于页面上的图标**

> 之前说要整理这块内容，分享给大家，工作原因，直到现在，赶上清明宅在家里，赶紧整理出来与大家分享。 


 + ## 精灵图（CSS sprite）
	所谓精灵图，其实就是把几张图拼成一张图。从而在低并发的浏览器上达到快速传输并呈现内容的目的（减少请求）。
   - 在用到这些图片的时候，需要引用整张图片然后设定坐标到需要的那张小图上。
   - 还有就是：图片根据颜色分组，分成多个文件。每张图只有一种颜色，这样让每张图片变得更小。

		当然，这根据当前项目来选择适于你的方案。主要根据下面两个属性来处理精灵图：
		```css
			background-image: url(".../*.png");
    		background-position: 0px 0px;
	
			注意：position的负值情况。
		```


先上几个图标网站，因为下面要介绍字体图标了：
> [fortawesome.github.io](http://fortawesome.github.io/Font-Awesome/) \
> [icomoon.io](https://icomoon.io/)\
> [阿里图标库](http://www.iconfont.cn/collections)\
> [Font Awesome 3.0](http://www.bootcss.com/p/font-awesome/)


+ ## 字体图标在html中的使用
	```html
		<li><a href=""><i class="i-icon">&#xfa21;</i></a></li>
	
		
		<!-- 注意：&#xfa21; fa21为16进制 需要&#x -->

	```

	 ```css
		@font-face{
			font-family: "my-icon"
			src: url("../*.eot");

				/* ie低版本浏览器需要加'?' 否则可能回报404错误  */ 
			src: url("../*.eot?") format("embedded-opentype")
			 	,url("../*.woff") format("woff")
			 	,url("../*.ttf")  format("truetype")
			 	,url("../*.svg")  format("svg");
			font-weight: normal;
			font-style: normal;
		}
		.i-icon{
			font-family: "my-icon";
			font-style: normal;
			font-weight: normal;
			font-size: 26px;
			-webkit-font-smoothing: antialiased;   /*消除锯齿*/
			-moz-osx-font-smoothing: grayscale;    /*消除锯齿*/
		}

	```


+ ## 字体图标在css中的使用



```html
  <li><i class="icon icon-magic"></i></li>

  <!-- 直接引用class name -->
```

```css
  @font-face{
	font-family: "myfont";
	src: url("../*.eot");
	src: url("../*.eot?#iefix") format("embedded-opentype"),
	     url("../*.woff") format("woff"),
	     url("../*.ttf")  format("truetype"),
	     url("../*.svg")  format("svg");
	font-weight: normal;
	font-style: normal;
 }
 .icon{
	font-family: "myfont";
	font-weight: normal;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
 }

 .icon-magic:before {
	content: "\c210";
 }
```

+ ## 各种方式对比

|         | 精灵图       | 在html中   |在css中        |
| -----   |:----:        | :----:     |:----:         |
| 原理    | 使用图片定位 | @font-face |@font-face     |
| 兼容    |  +           |  +         |不支持低版本IE |
| 维护成本| 比较困难     | 简单       |简单           |
| 颜色    | 比较丰富     | 色彩单一   |色彩单一       |
| 缩放    | 失真         | 清晰       |清晰           |





















