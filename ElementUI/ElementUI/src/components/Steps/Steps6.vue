<template>
<div>
  <h3>
    竖式步骤条
  </h3>
  <p>
    竖直方向的步骤条。
  </p>
  <p>只需要在el-steps元素中设置direction属性为vertical即可。</p>
  <div style="height: 300px;">
    <el-steps direction="vertical" :active="1">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
  </div>
</div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
