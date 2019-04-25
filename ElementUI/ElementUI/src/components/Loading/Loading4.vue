<template>
  <div>
    <h3>Loading 还可以以服务的方式调用。引入 Loading 服务：</h3>
    <p>import { Loading } from 'element-ui';</p>
    <p>在需要调用时：</p>
    <p>Loading.service(options);</p>
    <p>其中 options 参数为 Loading 的配置项，具体见下表。LoadingService 会返回一个 Loading 实例，可通过调用该实例的 close 方法来关闭它：</p>
    <p>
      let loadingInstance = Loading.service(options);<br>
      this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭<br>
      loadingInstance.close();<br>
      });<br>
    </p>
    <p>
      需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：
    </p>
    <p>
      let loadingInstance1 = Loading.service({ fullscreen: true });<br>
      let loadingInstance2 = Loading.service({ fullscreen: true });<br>
      console.log(loadingInstance1 === loadingInstance2); // true<br>
    </p>
    <p>
      此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。<br>

      如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 $loading，它的调用方式为：this.$loading(options)，同样会返回一个 Loading 实例。<br>
    </p>
  </div>
</template>

<script>
  import {Loading} from 'element-ui';

  export default {
    mounted() {
      const loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
  }
</style>
