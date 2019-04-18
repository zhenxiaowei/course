<template>
  <div id="app">
    <h1>{{count}}</h1>
    <h1>{{myCount}}</h1>
    <h1 style="color: crimson">{{appName}}</h1>
    <h1 style="color: crimson">{{userName}}</h1>
    <router-view/>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name: 'App',
    computed:{
      ...mapState({
        count:state=>{//可以设置多个state里面的变量值，也可以分为多个文件设置
          return state.app.count
        },
        appName:state=>{
          return state.app.name
        },
        userName:state=>{
          return state.user.name
        }
      }),
      ...mapGetters(['myCount'])
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
