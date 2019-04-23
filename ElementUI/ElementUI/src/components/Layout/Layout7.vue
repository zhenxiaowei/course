<template>
    <div>
      <h1>Layout 布局
        通过基础的 24 分栏，迅速简便地创建布局。</h1>
      <h3>7.基于断点的隐藏类</h3>
      <p>Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：

        import 'element-ui/lib/theme-chalk/display.css';</p>
<p>
  包含的类名及其含义为：<br>

  hidden-xs-only - 当视口在 xs 尺寸时隐藏<br>
  hidden-sm-only - 当视口在 sm 尺寸时隐藏<br>
  hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏<br>
  hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏<br>
  hidden-md-only - 当视口在 md 尺寸时隐藏<br>
  hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏<br>
  hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏<br>
  hidden-lg-only - 当视口在 lg 尺寸时隐藏<br>
  hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏<br>
  hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏<br>
  hidden-xl-only - 当视口在 xl 尺寸时隐藏<br>
</p>


    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
