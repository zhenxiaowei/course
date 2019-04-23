<template>
  <div>
    <h3>不同尺寸</h3>
    <p>
      Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
    </p>
    <p>
      额外的尺寸：medium、small、mini，通过设置size属性来配置它们。
    </p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Button1"
  }
</script>

<style scoped>

</style>
