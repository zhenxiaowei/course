<!--
父组件to子组件  在父组件中设置自定义属性，在子组件中使用props接收，props就好使用对象，可以设置他的类型
子组件to父组件  在子组件中使用this.$emit("titleChecked","子向父组件传值")//注册一个事件，在父组件中监听这个事件，执行一个方法，来接收子组件传递来的内容
-->


<!--模板-->
<template>
  <div id="home">
    <app-header v-on:titleChecked="updateTitle($event)" v-bind:title="title"></app-header>
    <!--监听这个titleChecked，执行一个方法，来接收子组件传递来的内容-->
    <users v-bind:user="user"></users><!--自定义属性方便传值   在users这个子组件中获取和使用-->
    <users v-bind:user="user"></users><!--自定义属性方便传值   在users这个子组件中获取和使用-->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!--处理逻辑-->
<script>
  //局部注册组件
  import Users from './Users'
  import Header from './Header'
  import Footer from './Footer'
  export default {
    name: 'Home',
    data() {
      return {
        user: [
          // {name: "zxw", position: "web", show: false},
          // {name: "zxw", position: "web", show: false},
          // {name: "zxw", position: "web", show: false},
          // {name: "zxw", position: "web", show: false},
          // {name: "zxw", position: "web", show: false},
          // {name: "zxw", position: "web", show: false},
          // {name: "zxw", position: "web", show: false},
          // {name: "zxw", position: "web", show: false},
        ],
        title:"传递的是一个值 string number boolean"
      }
    },
    components:{
      "users":Users,
      "app-header":Header,
      "app-footer":Footer,
    },
    methods:{//子向父组件传值
      updateTitle:function (title) {
        this.title=title;
      }
    },
    created(){//组件实例化完毕，但页面还未显示    使用vue-resource发送http请求
      this.$http.get('http://jsonplaceholder.typicode.com/users').then(function (data) {
        //console.log(data);
        this.user=data.body;
      })
    }
  }
</script>

<!--样式-->
<style>

</style>
