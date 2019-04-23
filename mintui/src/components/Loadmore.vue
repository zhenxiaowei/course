<template>
  <div class="Loadmore">
    下拉/上拉刷新，支持自定义 HTML 模板。
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Loadmore} from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);
  export default {
    name: "Loadmore",
    data(){
      return {
        allLoaded:false,
        list:100
      }
    },
    methods: {
      loadTop() {
        // 下拉刷新数据
        this.list=10;
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom(){
       // this.list=10;
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
    }
  }
</script>

<style scoped>
  ul,li{
    padding: 0;
    margin: 0;
  }
.Loadmore li{
text-align: center;
}
</style>
