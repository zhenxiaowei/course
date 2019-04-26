<template>
  <div id="app">
    <el-container>
      <el-header>Element-UI组件</el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-active="this.$route.path"
            router
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu v-for="(item,i) in navList" :key="i" v-if="item.second" :index="item.name">
              <template slot="title">{{ item.navItem }}</template>
              <el-menu-item v-for="(sec,j) in item.second" :key="j" :index="sec.name">{{ sec.navItem }}</el-menu-item>
            </el-submenu>
            <el-menu-item v-for="(item,i) in navList" :key="i" v-if="!item.second" :index="item.name">
              {{ item.navItem }}
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        navList: [
          {
            name: '/Layout',
            navItem: 'Layout 布局',
            second: [
              {
                name: '/Layout1',
                navItem: '基础布局'
              },
              {
                name: '/Layout2',
                navItem: '分栏间隔'
              },
              {
                name: '/Layout3',
                navItem: '混合布局'
              },
              {
                name: '/Layout4',
                navItem: '分栏偏移'
              },
              {
                name: '/Layout5',
                navItem: '对齐方式'
              },
              {
                name: '/Layout6',
                navItem: '响应式布局1'
              },
              {
                name: '/Layout7',
                navItem: '响应式布局2'
              }
            ]
          },
          {
            name: 'Container',
            navItem: 'Container 布局容器',
            second: [
              {
                name: '/Container',
                navItem: '布局容器'
              },
              {
                name: '/ContainerDemo',
                navItem: '布局容器实例'
              }
            ]
          },
          {
            name: '/Icon',
            navItem: 'Icon 图标'
          },
          {
            name: 'Button',
            navItem: 'Button 按钮',
            second: [
              {
                name: '/Button1',
                navItem: '基础用法'
              },
              {
                name: '/Button2',
                navItem: '禁用状态'
              },
              {
                name: '/Button3',
                navItem: '文字按钮'
              },
              {
                name: '/Button4',
                navItem: '图标按钮'
              },
              {
                name: '/Button5',
                navItem: '按钮组'
              },
              {
                name: '/Button6',
                navItem: '加载中'
              },
              {
                name: '/Button7',
                navItem: '不同尺寸'
              }
            ]
          },
          {
            name: 'Radio',
            navItem: 'Radio 单选框',
            second: [
              {
                name: '/Radio1',
                navItem: '基础用法'
              },
              {
                name: '/Radio2',
                navItem: '单选框组'
              },
              {
                name: '/Radio3',
                navItem: '按钮样式'
              },
              {
                name: '/Radio4',
                navItem: '带有边框'
              }
            ]
          },
          {
            name: 'Checkbox',
            navItem: 'Checkbox 多选框',
            second: [
              {
                name: '/Checkbox1',
                navItem: '基础用法'
              },
              {
                name: '/Checkbox2',
                navItem: '禁用状态'
              },
              {
                name: '/Checkbox3',
                navItem: '多选框组'
              },
              {
                name: '/Checkbox4',
                navItem: 'indeterminate 状态'
              },
              {
                name: '/Checkbox5',
                navItem: '可选项目数量的限制'
              },
              {
                name: '/Checkbox6',
                navItem: '按钮样式'
              },
              {
                name: '/Checkbox7',
                navItem: '带有边框'
              }
            ]
          },
          {
            name: 'Input',
            navItem: 'Input 输入框',
            second: [
              {
                name: '/Input1',
                navItem: '基础用法'
              },
              {
                name: '/Input2',
                navItem: '禁用状态'
              },
              {
                name: '/Input3',
                navItem: '可清空'
              },
              {
                name: '/Input4',
                navItem: '密码框'
              },
              {
                name: '/Input5',
                navItem: '带 icon 的输入框'
              },
              {
                name: '/Input6',
                navItem: '文本域'
              },
              {
                name: '/Input7',
                navItem: '可自适应文本高度的文本域'
              },
              {
                name: '/Input8',
                navItem: '复合型输入框'
              },
              {
                name: '/Input9',
                navItem: '尺寸'
              },
              {
                name: '/Input10',
                navItem: '带输入建议'
              },
              {
                name: '/Input11',
                navItem: '自定义模板'
              },
              {
                name: '/Input12',
                navItem: '远程搜索'
              }
            ]
          },
          {
            name: 'InputNumber',
            navItem: 'InputNumber 计数器',
            second: [
              {
                name: '/InputNumber1',
                navItem: '基础用法'
              },
              {
                name: '/InputNumber2',
                navItem: '禁用状态'
              },
              {
                name: '/InputNumber3',
                navItem: '步数'
              },
              {
                name: '/InputNumber4',
                navItem: '精度'
              },
              {
                name: '/InputNumber5',
                navItem: '尺寸'
              },
              {
                name: '/InputNumber6',
                navItem: '按钮位置'
              }
            ]
          },
          {
            name: 'Select',
            navItem: 'Select 选择器',
            second: [
              {
                name: '/Select1',
                navItem: '基础用法'
              },
              {
                name: '/Select2',
                navItem: '有禁用选项'
              },
              {
                name: '/Select3',
                navItem: '禁用状态'
              },
              {
                name: '/Select4',
                navItem: '可清空单选'
              },
              {
                name: '/Select5',
                navItem: '基础多选'
              },
              {
                name: '/Select6',
                navItem: '自定义模板'
              },
              {
                name: '/Select7',
                navItem: '分组'
              },
              {
                name: '/Select8',
                navItem: '可搜索'
              },
              {
                name: '/Select9',
                navItem: '远程搜索'
              },
              {
                name: '/Select10',
                navItem: '远程搜索'
              }
            ]
          },
          {
            name: 'Cascader',
            navItem: 'Cascader 级联选择器',
            second: [
              {
                name: '/Cascader1',
                navItem: '基础用法'
              },
              {
                name: '/Cascader2',
                navItem: '禁用选项'
              },
              {
                name: '/Cascader3',
                navItem: '仅显示最后一级'
              },
              {
                name: '/Cascader4',
                navItem: '默认值'
              },
              {
                name: '/Cascader5',
                navItem: '选择即改变'
              },
              {
                name: '/Cascader6',
                navItem: '动态加载次级选项'
              },
              {
                name: '/Cascader7',
                navItem: '可搜索'
              }
            ]
          },
          {
            name: '/Switch',
            navItem: 'Switch 开关'
          },
          {
            name: '/Slider',
            navItem: 'Slider 滑块'
          },
          {
            name: '/TimePicker',
            navItem: 'TimePicker 时间选择器'
          },
          {
            name: '/DatePicker',
            navItem: 'DatePicker 日期选择器'
          },
          {
            name: '/DateTimePicker',
            navItem: 'DateTimePicker 日期时间选择器'
          },
          {
            name: 'Upload',
            navItem: 'Upload 上传',
            second: [
              {
                name: '/Upload1',
                navItem: '点击上传'
              },
              {
                name: '/Upload2',
                navItem: '用户头像上传'
              },
              {
                name: '/Upload3',
                navItem: '照片墙'
              },
              {
                name: '/Upload4',
                navItem: '图片列表缩略图'
              },
              {
                name: '/Upload5',
                navItem: '上传文件列表控制'
              },
              {
                name: '/Upload6',
                navItem: '拖拽上传'
              },
              {
                name: '/Upload7',
                navItem: '手动上传'
              }
            ]
          },
          {
            name: '/Rate',
            navItem: 'Rate 评分'
          },
          {
            name: '/ColorPicker',
            navItem: 'ColorPicker 颜色选择器'
          },
          {
            name: '/Transfer',
            navItem: 'Transfer 穿梭框'
          },
          {
            name: 'Form',
            navItem: 'Form 表单',
            second: [
              {
                name: '/Form1',
                navItem: '典型表单'
              },
              {
                name: '/Form2',
                navItem: '行内表单'
              },
              {
                name: '/Form3',
                navItem: '对齐方式'
              },
              {
                name: '/Form4',
                navItem: '表单验证'
              },
              {
                name: '/Form5',
                navItem: '自定义校验规则'
              },
              {
                name: '/Form6',
                navItem: '动态增减表单项'
              },
              {
                name: '/Form7',
                navItem: '数字类型验证'
              },
              {
                name: '/Form8',
                navItem: '表单内组件尺寸控制'
              }
            ]
          },
          {
            name: 'Table',
            navItem: 'Table 表格',
            second: [
              {
                name: '/Table1',
                navItem: '基础表格'
              },
              {
                name: '/Table2',
                navItem: '带斑马纹表格'
              },
              {
                name: '/Table3',
                navItem: '带边框表格'
              },
              {
                name: '/Table4',
                navItem: '带状态表格'
              },
              {
                name: '/Table5',
                navItem: '固定表头'
              },
              {
                name: '/Table6',
                navItem: '固定列'
              },
              {
                name: '/Table7',
                navItem: '固定列 固定表头'
              },
              {
                name: '/Table8',
                navItem: '流体高度'
              },
              {
                name: '/Table9',
                navItem: '多级表头'
              },
              {
                name: '/Table10',
                navItem: '单选'
              },
              {
                name: '/Table11',
                navItem: '多选'
              },
              {
                name: '/Table12',
                navItem: '排序'
              },
              {
                name: '/Table13',
                navItem: '筛选'
              },
              {
                name: '/Table14',
                navItem: '自定义列模板'
              },
              {
                name: '/Table15',
                navItem: '展开行'
              },
              {
                name: '/Table16',
                navItem: '表尾合计行'
              },
              {
                name: '/Table17',
                navItem: '合并行或列'
              },
              {
                name: '/Table18',
                navItem: '自定义索引'
              }
            ]
          },
          {
            name: '/Tag',
            navItem: 'Tag 标签'
          },
          {
            name: '/Progress',
            navItem: 'Progress 进度条'
          },
          {
            name: 'Tree',
            navItem: 'Tree 树形控件',
            second: [
              {
                name: '/Tree1',
                navItem: '基础的树形结构展示'
              },
              {
                name: '/Tree2',
                navItem: '可选择'
              },
              {
                name: '/Tree3',
                navItem: '懒加载自定义叶子节点'
              },
              {
                name: '/Tree4',
                navItem: '默认展开和默认选中'
              },
              {
                name: '/Tree5',
                navItem: '禁用状态'
              },
              {
                name: '/Tree6',
                navItem: '树节点的选择'
              },
              {
                name: '/Tree7',
                navItem: '自定义节点内容'
              },
              {
                name: '/Tree8',
                navItem: '节点过滤'
              },
              {
                name: '/Tree9',
                navItem: '手风琴模式'
              }
            ]
          },
          {
            name: '/Pagination',
            navItem: 'Pagination 分页'
          },
          {
            name: '/Badge',
            navItem: 'Badge 标记'
          },
          {
            name: '/Alert',
            navItem: 'Alert 警告'
          },
          {
            name: 'Loading',
            navItem: 'Loading 加载',
            second: [
              {
                name: '/Loading1',
                navItem: '区域加载'
              },
              {
                name: 'Loading2',
                navItem: '自定义'
              },
              {
                name: '/Loading3',
                navItem: '整页加载'
              },
              {
                name: '/Loading4',
                navItem: '服务'
              }
            ]
          },
          {
            name: '/Message',
            navItem: 'Message 消息提示'
          },
          {
            name: 'MessageBox',
            navItem: 'MessageBox 弹框',
            second: [
              {
                name: '/MessageBox1',
                navItem: '消息提示'
              },
              {
                name: 'MessageBox2',
                navItem: '确认消息'
              },
              {
                name: '/MessageBox3',
                navItem: '提交内容'
              },
              {
                name: '/MessageBox4',
                navItem: '自定义'
              },
              {
                name: 'MessageBox5',
                navItem: '使用 HTML 片段'
              },
              {
                name: '/MessageBox6',
                navItem: '居中布局'
              },
              {
                name: '/MessageBox7',
                navItem: '全局方法  单独引用'
              }
            ]
          },
          {
            name: 'Notification',
            navItem: 'Notification 通知',
            second: [
              {
                name: '/Notification1',
                navItem: '基本用法'
              },
              {
                name: 'Notification2',
                navItem: '带有倾向性'
              },
              {
                name: '/Notification3',
                navItem: '自定义弹出位置'
              },
              {
                name: '/Notification4',
                navItem: '带有偏移'
              },
              {
                name: 'Notification5',
                navItem: '使用 HTML 片段'
              },
              {
                name: '/Notification6',
                navItem: '隐藏关闭按钮'
              },
              {
                name: '/Notification7',
                navItem: '全局方法  单独引用'
              }
            ]
          },
          {
            name: 'NavMenu',
            navItem: 'NavMenu 导航菜单',
            second: [
              {
                name: '/NavMenu1',
                navItem: '顶栏'
              },
              {
                name: 'NavMenu2',
                navItem: '侧栏'
              },
              {
                name: '/NavMenu3',
                navItem: '折叠'
              }
            ]
          },
          {
            name: 'Tabs',
            navItem: 'Tabs 标签页',
            second: [
              {
                name: '/Tabs1',
                navItem: '基础用法'
              },
              {
                name: 'Tabs2',
                navItem: '选项卡样式'
              },
              {
                name: 'Tabs3',
                navItem: '卡片化'
              },
              {
                name: '/Tabs4',
                navItem: '位置'
              },
              {
                name: '/Tabs5',
                navItem: '自定义标签页'
              },
              {
                name: 'Tabs6',
                navItem: '动态增减标签页'
              },
              {
                name: '/Tabs7',
                navItem: '自定义增加标签页触发器'
              }
            ]
          },
          {
            name: '/Breadcrumb',
            navItem: 'Breadcrumb 面包屑'
          },
          {
            name: 'Dropdown',
            navItem: 'Dropdown 下拉菜单',
            second: [
              {
                name: '/Dropdown1',
                navItem: '基础用法'
              },
              {
                name: 'Dropdown2',
                navItem: '触发对象'
              },
              {
                name: 'Dropdown3',
                navItem: '触发方式'
              },
              {
                name: '/Dropdown4',
                navItem: '菜单隐藏方式'
              },
              {
                name: '/Dropdown5',
                navItem: '指令事件'
              },
              {
                name: 'Dropdown6',
                navItem: '不同尺寸'
              }
            ]
          },
          {
            name: 'Steps',
            navItem: 'Steps 步骤条',
            second: [
              {
                name: '/Steps1',
                navItem: '基础用法'
              },
              {
                name: 'Steps2',
                navItem: '含状态步骤条'
              },
              {
                name: 'Steps3',
                navItem: '有描述的步骤条'
              },
              {
                name: '/Steps4',
                navItem: '居中的步骤条'
              },
              {
                name: '/Steps5',
                navItem: '带图标的步骤条'
              },
              {
                name: 'Steps6',
                navItem: '竖式步骤条'
              },
              {
                name: 'Steps7',
                navItem: '简洁风格的步骤条'
              }
            ]
          },
          {
            name: 'Dialog',
            navItem: 'Dialog 对话框',
            second: [
              {
                name: '/Dialog1',
                navItem: '基础用法'
              },
              {
                name: 'Dialog2',
                navItem: '自定义内容'
              },
              {
                name: 'Dialog3',
                navItem: '嵌套的'
              },
              {
                name: '/Dialog4',
                navItem: '居中布局'
              }
            ]
          },
          {
            name: '/Tooltip',
            navItem: 'Tooltip 文字提示'
          },
          {
            name: 'Popover',
            navItem: 'Popover 弹出框',
            second: [
              {
                name: '/Popover1',
                navItem: '基础用法'
              },
              {
                name: 'Popover2',
                navItem: '嵌套信息'
              },
              {
                name: 'Popover3',
                navItem: '嵌套操作'
              }
            ]
          },
          {
            name: 'Card',
            navItem: 'Card 卡片',
            second: [
              {
                name: '/Card1',
                navItem: '基础用法'
              },
              {
                name: 'Card2',
                navItem: '简单卡片'
              },
              {
                name: 'Card3',
                navItem: '带图片'
              }
            ]
          },
          {
            name: 'Carousel',
            navItem: 'Carousel 走马灯',
            second: [
              {
                name: '/Carousel1',
                navItem: '基础用法'
              },
              {
                name: 'Carousel2',
                navItem: '指示器'
              },
              {
                name: 'Carousel3',
                navItem: '切换箭头'
              },
              {
                name: 'Carousel4',
                navItem: '卡片化'
              }
            ]
          },
          {
            name: 'Collapse',
            navItem: 'Collapse 折叠面板',
            second: [
              {
                name: '/Collapse1',
                navItem: '基础用法'
              },
              {
                name: 'Collapse2',
                navItem: '手风琴效果'
              },
              {
                name: 'Collapse3',
                navItem: '自定义面板标题'
              }
            ]
          },
        ]
      }
    }
  }
</script>

<style>
  html, body, #app {
    margin: 0;
    padding: 0;
  }

  .el-header{
    background: #373738;
    text-align: center;
    height: 80px !important;
    line-height: 80px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
  .el-aside{
    width: 300px !important;
  }
</style>
