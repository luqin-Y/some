选择器 兄弟选择器 +
  相邻选择器～
类型选择器 body > section: nth - of - type(2 n)

/*li:nth-child是找li的父元素中的第二个*/

ul > li: nth - child(2) {
  color: red;
}

ul > li: nth - of - type(2) {
  color: red;
}

/* + #item1的第一个后面的兄弟*/
/* ~ 是找他后面所有的兄弟*/

li: nth - child(1) ~li {
  color: red;
}

媒体查询 mediaquery
1、 获取屏幕宽度
window.innerWidth;
document.body.clientWidth;
/*===========================js 实现原理=================================*/

(function() {
  var container = document.querySelector('.container');

  var resize = function(e) {
    // 获取屏幕宽度
    var screenWidth = window.innerWidth;
    // document.body.clientWidth;
    if (screenWidth > 1170) {
      container.style.width = '1170px';
    } else if (screenWidth > 970) {
      container.style.width = '970px';
    } else if (screenWidth > 750) {
      container.style.width = '750px';
    } else {
      container.style.width = '100%';
    }
  };
  resize();

  window.addEventListener('resize', resize);
})();
/*============================js 实现原理================================*/
/*============================css 实现方式================================*/
.container {
  background - color: #f40;
  height: 200 px;
  margin: 0 auto;
}
/*媒体查询
  根据屏幕情况决定是否执行某段CSS代码
*/

@
media(min - width: 750 px) {
  .container {
    width: 750 px;
  }
}

@
media(min - width: 970 px) {
  .container {
    width: 970 px;
  }
}

@
media(min - width: 1170 px) {
  /* min-width: 1170 也就意味着当屏幕大于1170执行*/
  /* 这里的代码只有当屏幕宽度大于1170执行 */
  /* 当媒体查询判断条件为min-xx 值一定由小到大 */
  /* 当媒体查询判断条件为max-xx 值一定由大到小 */
  .container {
    width: 1170 px;
  }
}

@
media(min - width: 1170 px) and(max - width: 1280 px) {
  /* > 1170px && < 1280px */
}

@
media(min - width: 1170 px) or(max - width: 1280 px) {
  /* > 1170px || < 1280px */
}
图标字体
/*============================图标字体================================*/
i {
  font - family: 'Webdings';
  font - size: 40 px;
  font - style: normal;
  color: #f40;
}

/**
 * 字体图标引入
 */

@
font - face {
  font - family: 'itcast';
  src: url('../font/MiFie-Web-Font.eot') format('embedded-opentype'),
    url('../font/MiFie-Web-Font.svg') format('svg'),
    url('../font/MiFie-Web-Font.ttf') format('truetype'),
    url('../font/MiFie-Web-Font.woff') format('woff');
}


/* 所有的字体图标都是用I标签 */
< i class = "icon icon-telephone" > < /i>
  .icon {
    font - family: 'itcast';
    font - style: normal;
    font - weight: normal;
  }

.icon - mobilephone::before {
  content: "\e908";
  font - size: 12 px;
}

.icon - telephone::before {
    content: "\e909";
    font - size: 12 px;
  }
  //-----<i cass=”icon”>&#x0021;</i>

/*==========================================================================*/
viewport
  < meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >

  <!-- 960px 内容 被套在一个宽度为980px的容器(视口)中，将视口缩放到414px的设备中展示
  980 是绝大多数设备的视口默认尺寸
  -->
  /*==========================================================================*/
hidden ? ? === === ==
  1
xs 小于 768 px 超小屏幕
sm 大于等于 768 px 小屏幕
md 大于等于 992 px 中等屏幕
lg 大于等于 1200 px 大屏幕
/*==========================================================================*/

/*
  <!--[if lt IE 9]>
    <script src="lib/html5shiv/html5shiv.js"></script>
    < script src = "lib/respond/respond.min.js" > </script>
  < ![endif] -->
*/

/**
 * Bootstrap样式扩展
 * 不直接覆盖样式，新加一个
 */
vertical - align: middle;
/*vertical-align 属性设置元素的垂直对齐方式*/
background - color: transparent;
/*透明度*/
