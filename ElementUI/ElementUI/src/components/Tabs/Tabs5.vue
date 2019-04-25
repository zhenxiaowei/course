<template>
<div>
  <h3>自定义标签页</h3>
  <p>可以通过具名 slot 来实现自定义标签页的内容</p>
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
      我的行程
    </el-tab-pane>
    <el-tab-pane label="消息中心">消息中心</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tabPosition: 'top'
      };
    }
  };
</script>

<style scoped>

</style>
