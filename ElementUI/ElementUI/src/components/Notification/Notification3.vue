<template>
  <div>
    <h3>自定义弹出位置</h3>
<p>
  可以让 Notification 从屏幕四角中的任意一角弹出
</p>
    <p>
      使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。
    </p>
    <el-button
      plain
      @click="open7">
      右上角
    </el-button>
    <el-button
      plain
      @click="open8">
      右下角
    </el-button>
    <el-button
      plain
      @click="open9">
      左下角
    </el-button>
    <el-button
      plain
      @click="open10">
      左上角
    </el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open7() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open8() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open9() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open10() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      }
    }
  }
</script>

<style scoped>

</style>
