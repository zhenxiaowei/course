<template>
<div>
  <h3>单选</h3>
<p>选择单行数据时使用色块表示。</p>
  <p>Table 组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow。如果需要显示索引，可以增加一列el-table-column，设置type属性为index即可显示从 1 开始的索引号。</p>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址">
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        console.log(val);
        this.currentRow = val;
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
