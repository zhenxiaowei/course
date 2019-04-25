<template>
    <div>
      <h3>1.基础用法</h3>
      <p>
        从顶部出现，3 秒后自动消失。
      </p>
      <p>
        Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element 注册了一个$message方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
      </p>
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
      <h3>2.不同状态</h3>
      <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
      <p>
        当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置type字段可以定义不同的状态，默认为info。此时正文内容以message的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入type字段的情况下像open4那样直接调用。
      </p>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
      <h3>3.可关闭</h3>
      <p>
        默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用showClose字段。此外，和 Notification 一样，Message 拥有可控的duration，设置0为不会被自动关闭，默认为 3000 毫秒。
      </p>
      <el-button :plain="true" @click="open5">消息</el-button>
      <el-button :plain="true" @click="open6">成功</el-button>
      <el-button :plain="true" @click="open7">警告</el-button>
      <el-button :plain="true" @click="open8">错误</el-button>
      <h3>4.文字居中</h3>
      <p>使用 center 属性让文字水平居中。</p>
      <el-button :plain="true" @click="openCenter">文字居中</el-button>
      <h3>5.使用 HTML 片段</h3>
      <p>message 属性支持传入 HTML 片段

      </p>
      <p>将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。</p>
      <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
      <p>message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。</p>
      <h3>6.全局方法</h3>
      <p>Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。</p>
      <h3>7.单独引用</h3>
      <p>import { Message } from 'element-ui';</p>
      <p>此时调用方法为 Message(options)。我们也为每个 type 定义了各自的方法，如 Message.success(options)。 并且可以调用 Message.closeAll() 手动关闭所有实例。</p>
    </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'V1Node')
          ])
        });
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      open5() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示',
          duration:0//设置0为不会被自动关闭，默认为 3000 毫秒。
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },
      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      },
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>

<style scoped>

</style>
