<template>
<div>
  <h3>简单卡片</h3>
  <p>卡片可以只有内容区域。</p>
  <p>Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。</p>
  <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</div>
</template>

<script>
    export default {
        name: "Card1"
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
