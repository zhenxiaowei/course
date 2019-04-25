<template>
  <div>
    <h3>全局方法</h3>
    <p>
      Element 为 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 Notification。
    </p>
    <h3>
      单独引用
    </h3>
    <p>
      import { Notification } from 'element-ui';
    </p>
    <p>
      此时调用方法为 Notification(options)。我们也为每个 type 定义了各自的方法，如 Notification.success(options)。
    </p>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
