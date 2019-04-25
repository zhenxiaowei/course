<template>
<div>
  <h3>
    含状态步骤条
  </h3>
  <p>
    每一步骤显示出该步骤的状态。
  </p>
  <p>
    也可以使用title具名分发，可以用slot的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。
  </p>
  <el-steps :space="200" :active="1" finish-status="success">
    <el-step title="已完成"></el-step>
    <el-step title="进行中"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>
</div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style scoped>

</style>
