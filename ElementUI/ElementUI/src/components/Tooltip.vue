<template>
    <div>
      <h3>基础用法</h3>
      <p>
        在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
      </p>
      <p>
        使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
      </p>
      <div class="box">
        <div class="top">
          <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <el-button>上左</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <el-button>上边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
            <el-button>上右</el-button>
          </el-tooltip>
        </div>
        <div class="left">
          <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
            <el-button>左上</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
            <el-button>左边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
            <el-button>左下</el-button>
          </el-tooltip>
        </div>

        <div class="right">
          <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
            <el-button>右上</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <el-button>右边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
            <el-button>右下</el-button>
          </el-tooltip>
        </div>
        <div class="bottom">
          <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
            <el-button>下左</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <el-button>下边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
            <el-button>下右</el-button>
          </el-tooltip>
        </div>
      </div>
      <h3>主题</h3>
      <p>
        Tooltip 组件提供了两个不同的主题：dark和light。
      </p>
      <p>
        通过设置effect属性来改变主题，默认为dark。
      </p>
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button>Light</el-button>
      </el-tooltip>
      <h3>更多 Content</h3>
      <p>展示多行文本或者是设置文本内容的格式</p>
      <p>用具名 slot 分发content，替代tooltip中的content属性。</p>
      <el-tooltip placement="top">
        <div slot="content">多行信息<br/>第二行信息</div>
        <el-button>Top center</el-button>
      </el-tooltip>
      <h3>高级扩展</h3>
      <p>
        除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：<br>

        transition 属性可以定制显隐的动画效果，默认为fade-in-linear。 如果需要关闭 tooltip 功能，disabled 属性可以满足这个需求，它接受一个Boolean，设置为true即可。<br>

        事实上，这是基于 Vue-popper 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。<br>
      </p>
      <template>
        <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
          <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
        </el-tooltip>
      </template>
      <p>
        tooltip 内不支持 router-link 组件，请使用 vm.$router.push 代替。<br>

        tooltip 内不支持 disabled form 元素，参考MDN，请在 disabled form 元素外层添加一层包裹元素。<br>
      </p>
    </div>
</template>

<script>
    export default {
        name: "Tooltip"
    }
</script>

<style scoped>
  .box {
    width: 400px;
  }
  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }

</style>
