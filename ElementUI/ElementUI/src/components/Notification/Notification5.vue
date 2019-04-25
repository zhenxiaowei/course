<template>
  <div>
    <h3>使用 HTML 片段</h3>
    <h3>message 属性支持传入 HTML 片段</h3>
<p>将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。</p>
    <el-button
      plain
      @click="open12">
      使用 HTML 片段
    </el-button>
    <br>
    <strong>
      message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。
    </strong>
  </div>
</template>

<script>
  export default {
    methods: {
      open12() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>

<style scoped>

</style>
