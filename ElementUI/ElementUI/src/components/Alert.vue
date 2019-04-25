<template>
  <div>
    <h3>1.基本用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <p>Alert 组件提供四种主题，由type属性指定，默认值为info。</p>
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info">
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning">
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error">
    </el-alert>
    <h3>2.自定义关闭按钮</h3>
    <p>自定义关闭按钮为文字或其他符号。</p>
    <p>
      在 Alert
      组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable属性决定是否可关闭，接受boolean，默认为true。你可以设置close-text属性来代替右侧的关闭图标，注意：close-text必须为文本。设置close事件来设置关闭时的回调。
    </p>
    <el-alert
      title="不可关闭的 alert"
      type="success"
      :closable="false">
    </el-alert>
    <el-alert
      title="自定义 close-text"
      type="info"
      close-text="知道了">
    </el-alert>
    <el-alert
      title="设置了回调的 alert"
      type="warning"
      @close="hello">
    </el-alert>
    <h3>3.带有 icon</h3>
    <p>表示某种状态时提升可读性。</p>
    <p>通过设置show-icon属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p>
    <el-alert
      title="成功提示的文案"
      type="success"
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      show-icon>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      show-icon>
    </el-alert>
    <h3>4.文字居中</h3>
    <p>使用 center 属性让文字水平居中。</p>
    <el-alert
      title="成功提示的文案"
      type="success"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      center
      show-icon>
    </el-alert>
    <h3>5.带有辅助性文字介绍</h3>
    <p>
      包含标题和内容，解释更详细的警告。
    </p>
    <p>除了必填的title属性外，你可以设置description属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。</p>
    <el-alert
      title="带辅助性文字介绍"
      type="success"
      show-icon
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
    </el-alert>
  </div>
</template>

<script>
  export default {
    name: "Alert",
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

<style scoped>

</style>
