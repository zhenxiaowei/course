# angular
  - 认识angular 
  - 安装 AngularJS    
  - angular 常用指令       
  - angular 常用的方法  
  [网址 http://docs.ngnice.com/api](http://docs.ngnice.com/api)   
## 认识angular
  - angular是什么
     - 完全使用javascript编写的客户端技术
     - 一种构建web应用的非常结构化的框架 
  - angular的优点
     - 前后端分离,后台只提供数据接口，路由模板渲染都在前端进行
     - html和JS分离，展示和逻辑分离
     - 减少js代码，减少DOM操作，事件绑定等代码 
     - 适合API的方式进行开发        
## 安装 AngularJS   
  - 安装bower 
  - npm install -g bower 
  - 配置安装目录文件 .bowerrc  
  - bower install angular    
  - bower install bootstrap       
## 安装 Chrome浏览器翻墙   
  - 通过配置hosts文件完 
  - windows   C:\WINDOWS\system32\drivers\etc\
  - MAC       前往文件夹 -> /etc/
  - 扩展程序 ng-inspector for AngularJS
## angular 常用指令
  - ng-app
  - ng-init
  - ng-repeat
  - ng-class
  - ng-style
  - ng-click
  - ng-model
  - ng-if ng-show ng-hide
  - ng-include
  - 过滤器
    - currency
    - date
    - json
    - uppercase lowercase
    - number
    - limitTo
    - filter
    - orderBy (写一个表格排序)
## angular 常用的方法
   - uppercase lowercase
   - equals
   - extend
   - copy
   - toJson fromJson
   - forEach
   - bind
   - isArray isFunction isObject 等   
## angular.module
   - 创建一个模块  
   ```var myModule = angular.module('myModule', []);```
   - 创建一个控制器  
   ```myModule.controller('myCtrl',function($scope){})```

