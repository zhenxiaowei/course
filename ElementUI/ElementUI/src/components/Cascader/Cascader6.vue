<template>
<div>
  <h3>动态加载次级选项</h3>
  <p>当选中某一级时，动态加载该级下的选项。</p>
  <p>本例的选项数据源在初始化时不包含城市数据。利用active-item-change事件，可以在用户点击某个省份时拉取该省份下的城市数据。此外，本例还展示了props属性的用法。</p>
  <el-cascader
    :options="options2"
    @active-item-change="handleItemChange"
    :props="props"
  ></el-cascader>
</div>
</template>

<script>
  export default {
    data() {
      return {
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
      };
    },

    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
  };
</script>

<style scoped>

</style>
