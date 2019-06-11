<!--
父组件to子组件  在父组件中设置自定义属性，在子组件中使用props接收，props就好使用对象，可以设置他的类型
子组件to父组件  在子组件中使用this.$emit("titleChecked","子向父组件传值")//注册一个事件，在父组件中监听这个事件，执行一个方法，来接收子组件传递来的内容
-->


<!--模板-->
<template>
  <div id="app">
    <!--<li><a href="/">Home</a></li>-->
    <!--<li><a href="/HelloWorld">HelloWorld</a></li>-->
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/HelloWorld">HelloWorld</router-link></li>
    <router-view></router-view>
  </div>
</template>

<!--处理逻辑-->
<script>
  export default {
    name: 'App',
    data() {
      return {}
    }
  }
</script>

<!--样式-->
<style>

</style>
