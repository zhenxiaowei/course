<template>
<div>
  <h3>
    居中的步骤条
  </h3>
  <p>
    标题和描述都将居中。
  </p>
  <el-steps :active="1" align-center>
    <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤 3" description="这段就没那么长了"></el-step>
  </el-steps>
</div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
