# this的指向在函数创建的时候确定不了。只有在执行的时候，才可以确定。

## 1 、 这里的this指向window  window.fn(); 所以this.user是undefined

```javascript
function fn (){
    var user='追梦人';
    console.log(this.user); // undefined 
    console.log(this);      // window
  }
  fn();   
```

## 2、谁调用，指向谁
```javascript
var o ={
    user:'追梦人',
    fn:function(){
      console.log(this.user);  // 谁调用，指向谁
    }
  }
  o.fn();

```
## 3、
```javascript


var o ={
    user:'追梦人',
    fn:function(){
      console.log(this.user);  // 为什么不是undefiend，是window在调用
    }
  }
  window.o.fn();  // 谁调用，指向谁  
```

## 4、
```javascript
 var o={
    a:10,
    b:{
      a:12,
      fn:function(){
        console.log(this.a);   // 12
      },
    },
  }
  o.b.fn();
```

- 如果函数中有this,但是他没被上一级的对象所跳用，这时this指向window

- 如果函数中有this,并且这个函数被上一级对象所调用，这时this指向上一级的对象

- 如果函数中有this,而且这个函数内部有多个对象，尽管这个函数被最外层所调用，
  但是this的指向也只是他的上一级对象。

- 严格模式中，this不指向window,而是undefined

## 5、  注释掉a:12  this.a为 undefined
```javascript
var o={
    a:10,
    b:{
      //a:12,
      fn:function(){
        console.log(this.a); 
      },
    },
  }
  o.b.fn();
```

- 尽管对象b中，没有属性a，但是这个this也是指向对象b，因为this只会指向
它的上一级对象，不管该对象有没有a


## 6、this指向的永远都是最后调用它的对象（执行的时候，谁调用）
```javascript
var o={
    a:10,
    b:{
      a:12,
      fn:function(){
        console.log(this.a);   // undefined
        console.log(this);     // window
      },
    },
  }
  var fn=o.b.fn; // 注意：这里并没有执行
  fn();   // 执行fn
```
- 注意：虽然，函数中的fn被对象b所引用，但是在赋值的时候，并没有执行，
- 所以最终的指向是window
- 上面的例子不同，因为上面的例子直接执行了fn()


## 7、构造函数中的this
```javascript
function Fn(){
    this.user="追梦人";
  }
  var fn = new Fn();
  console.log(fn.user);
```

- 之所以对象a可以用函数Fn中的uesr，是因为new关键字改变了this的指向。
- new 关键字创建了一个对象实例， 相当于复制了一份Fn到对象a中。
- 此时，只是创建，没有执行。
- 最后调用的是fn，那么this指向自然是fn
- 首先，new关键字会创建一个空对象
- 然后会自动调用一个函数的apply方法，将this指向这个空对象，这样函数内部的this就会被这个空对象所替代。
- bind   apply(数组)    call

## 8、构造函数 return  对象 的时候
```javascript 
function Fn(){
    this.user="追梦人";
    return {}   // 返回 一个对象
  }
  var fn = new Fn();
  console.log(fn.user); // undefined
```
- 返回一个对象的时候，this会指向返回的对象

## 9、return 简单类型的数据
```javascript
function Fn(){
    this.user="追梦人";
    return 1;   // 返回的是一个简单类型
  }
  var fn = new Fn();
  console.log(fn.user); // 追梦人
```
- 返回简单类型数据，this还是指向函数的实例

## 10、return  null的时候
``` javascript
function Fn(){
    this.user="追梦人";
    return null;   // 返回的是一个简单类型
  }
  var fn = new Fn();
  console.log(fn.user); // 追梦人
```
- 注意：返回null虽然是个对象，this还是指向函数的实例，null特殊




 