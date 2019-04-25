<template>
<div>
  <h3>
    简洁风格的步骤条
  </h3>
  <p>
    设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。
  </p>
  <p>只需要在el-steps元素中设置direction属性为vertical即可。</p>
  <el-steps :active="1" simple>
    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
    <el-step title="步骤 2" icon="el-icon-upload"></el-step>
    <el-step title="步骤 3" icon="el-icon-picture"></el-step>
  </el-steps>

  <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
    <el-step title="步骤 1" ></el-step>
    <el-step title="步骤 2" ></el-step>
    <el-step title="步骤 3" ></el-step>
  </el-steps>
</div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
