<template>
  <div>
    <h3>加载中</h3>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。

    </p>
    <p>
      要设置为 loading 状态，只要设置loading属性为true即可。
    </p>
    <el-button type="primary" :loading="true">加载中</el-button>
  </div>
</template>

<script>
  export default {
    name: "Button1"
  }
</script>

<style scoped>

</style>
