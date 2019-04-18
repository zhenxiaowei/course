<template>
  <div class="user">
    <ul>
      <li v-for="u in user">
        <h2>{{u.name}}</h2>
        <h3>{{u.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除</button>
  </div>
</template>

<!--
父组件传递到子组件
传值：string number boolean    传递的值一个改变另一个不变化
引用：array object     传递的是应用   一个改变，所有调用他的地方的数据都相应的改变
-->
<script>
  export default {
    name: "Users",
    //props:['user'],//属性传值
    props:{//属性传值  标准写法
      user:{
        type:Array,
        required:true
      }
    },
    data() {
      return {

      }
    },
    methods:{
      deleteUser:function () {
        this.user.pop()
      }
    }
  }
</script>

<style scoped>
  .user {
    width: 100%;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid;
    margin: 10px;
  }
</style>
