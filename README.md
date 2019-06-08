# OnePage落地页展示


个人说明：*此项目百分百个人独立完成，从图片处理、文本文案到代码编写，尚有不足，请指正改善*
## 主要特点

> ### 1. Html5 + css3 +Bootstrap 自适应手机、平板、电脑端

 ##### 1.1 电脑端展示
  
![phone](https://www.zybuluo.com/static/img/logo.png)

 ##### 1.2 平板端展示
  
![pad](https://www.zybuluo.com/static/img/logo.png)

 ##### 1.3 手机端展示
  
![pc](https://www.zybuluo.com/static/img/logo.png)

> ### 2. 自定义浏览器滚动条+嵌入百度地图API+入场动画

##### 2.1自定义滚动条
![pc](https://www.zybuluo.com/static/img/logo.png)

##### 2.2嵌入百度地图

![pc](https://www.zybuluo.com/static/img/logo.png)

##### 2.3入场动画
![pc](https://www.zybuluo.com/static/img/logo.png)

## 使用的插件
> * jquery.countup.min.js
> * jquery.lightbox.js
> * jquery.nicescroll.js
> * jquery.waypoints.min.js
> * mislider.min.js
> * singlepagenav.jquery.js
> * wow.min.js

## 项目中遇到的问题

1. 问题：使用 jquery.nicescroll.min.js插件会出现 ‘[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See URL’的错误提示
             
    解决办法：直接使用 jquery.nicescroll.js文件

                                          
2. 问题：使用jquery.countup.min.js插件，页面多次滚动会出现 ‘Cannot read property 'shift' of null at f ’的错误提示
     
    解决办法： 
 
将jquery.countup.min.js文件中的 
```  
var f = function () {
        e.text(e.data("counterup-nums").shift()), 
        e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), a) : (delete e.data("counterup-nums"), 
        e.data("counterup-nums", null), e.data("counterup-func", null))
    }; 
```  
替换为
```        
  var f = function () {
        if (e.data('counterup-nums')) { //加个这个判断
        e.text(e.data('counterup-nums').shift());
        if (e.data('counterup-nums').length) {
            setTimeout(e.data('counterup-func'), e.delay);
            } else {
                e.data('counterup-nums');
                e.data('counterup-nums', null);
                e.data('counterup-func', null);
                    }
            }
         };
         
 
``` 
3. 问题：嵌入百度地图时，会报错A parser-blocking, cross site (i.e. different eTLD+1) script,
http://api.map.baidu.com/getscript?v=2.0&ak=your ak&services=&t=**************, is invoked via document.write. 
The network request for this script MAY be blocked by the browser in this or a future page load due to poor 
network connectivity.If blocked in this page load, it will be confirmed in a subsequent console message. 

 解决办法：
 
 将
 ```
 <script type="text/javascript" src="http://api.map.baidu.com/api ?v=2.0&ak=apgjpM8ifxSvdYeHZVMTMGvpum5FoGRe"></script>
 
 ``` 
 中的` api ` 替换为 `getscript `,
 
 ```
 <script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=apgjpM8ifxSvdYeHZVMTMGvpum5FoGRe"></script>
 
```

