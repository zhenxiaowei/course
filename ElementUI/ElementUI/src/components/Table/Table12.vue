<template>
<div>
  <h3>排序</h3>
<p>对表格进行排序，可快速查找或对比数据。
</p>
  <p>在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。可以通过 Table 的default-sort属性设置默认的排序列和排序顺序。可以使用sort-method或者sort-by使用自定义的排序规则。如果需要后端排序，需将sortable设置为custom，同时在 Table 上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理。</p>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
  >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 15181 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 15172 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 15193 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 15164 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>

<style>
 .warning-row {
    background: #fdc9e2 !important;
  }

   .success-row {
    background: #f92e4a !important;
  }
</style>
