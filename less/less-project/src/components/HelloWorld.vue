<template>
  <div class="hello">
    <h1>11</h1>
    <h2>22</h2>
    <div class="box">
      <span>
        <h4>22</h4>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  /*
  变量
变量允许我们单独定义一系列通用的样式，然后在需要的时候去调用。所以在做全局样式调整的时候我们可能只需要修改几行代码就可以了。
  */
  @color: red;
  h1 {
    color: @color;
  }
  h2 {
    color: @color;
  }

  /*层级*/
  .box {
    margin: auto;
    width: 300px;
    height: 300px;
    background: aqua;
    position: relative;
    span {
      .fnStyle;
      display: block;
      width: 200px;
      height: 200px;
      background: bisque;
      h4 {
        .fnStyle;
        width: 100px;
        height: 100px;
        line-height: 100px;
        background: crimson;
        color: aqua;
      }
    }
  }

  /*函数式*/
  .fnStyle() {/*可以传递变量*/
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
</style>
