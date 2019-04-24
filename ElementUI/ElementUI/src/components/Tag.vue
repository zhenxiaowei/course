<template>
<div>
  <h3>1.基础用法</h3>
  <p>由type属性来选择tag的类型，也可以通过color属性来自定义背景色。</p>
  <div>
    <el-tag>标签一</el-tag>
    <el-tag type="success">标签二</el-tag>
    <el-tag type="info">标签三</el-tag>
    <el-tag type="warning">标签四</el-tag>
    <el-tag type="danger">标签五</el-tag>
  </div>
  <h3>2.可移除标签</h3>
  <p>
    设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。
  </p>
  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    closable
    :type="tag.type">
    {{tag.name}}
  </el-tag>
  <h3>3.动态编辑标签</h3>
  <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</p>
  <div>
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
  </div>
  <h3>3.不同尺寸</h3>
  <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
  <p>额外的尺寸：medium、small、mini，通过设置size属性来配置它们。</p>
  <el-tag closable>默认标签</el-tag>
  <el-tag size="medium" closable>中等标签</el-tag>
  <el-tag size="small" closable>小型标签</el-tag>
  <el-tag size="mini" closable>超小标签</el-tag>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
