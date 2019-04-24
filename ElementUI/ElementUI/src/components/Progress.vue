<template>

<div>
    <h3>1.线形进度条 — 百分比外显</h3>
    <p>Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。</p>
    <el-progress :percentage="10"></el-progress>
    <el-progress :percentage="70"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
    <h3>2.线形进度条 — 百分比内显</h3>
    <p>百分比不占用额外控件，适用于文件上传等场景。</p>
    <p>Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。</p>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
  <h3>3.环形进度条</h3>
  <p>Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。</p>
  <el-progress type="circle" :width="200" :percentage="10"></el-progress>
  <el-progress type="circle" :percentage="25"></el-progress>
  <el-progress type="circle" :percentage="100" status="success"></el-progress>
  <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  </div>
  </template>

  <script>
    export default {
      name: "Progress"
    }
  </script>

  <style scoped>

  </style>
