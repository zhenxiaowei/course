import Vue from 'vue'
import Router from 'vue-router'
//Layout 布局
import Layout1 from '@/components/Layout/Layout1'//基础布局
import Layout2 from '@/components/Layout/Layout2'//分栏间隔
import Layout3 from '@/components/Layout/Layout3'//混合布局
import Layout4 from '@/components/Layout/Layout4'//分栏偏移
import Layout5 from '@/components/Layout/Layout5'//对齐方式
import Layout6 from '@/components/Layout/Layout6'//响应式布局
import Layout7 from '@/components/Layout/Layout7'//响应式布局

//Container 布局容器
import Container from '@/components/Container/Container'//布局容器
import ContainerDemo from '@/components/Container/ContainerDemo'//布局容器实例

//Icon 图标
import Icon from '@/components/Icon'

//Button 按钮
import Button1 from '@/components/Button/Button1'//基础用法
import Button2 from '@/components/Button/Button2'//禁用状态
import Button3 from '@/components/Button/Button3'//文字按钮
import Button4 from '@/components/Button/Button4'//图标按钮
import Button5 from '@/components/Button/Button5'//按钮组
import Button6 from '@/components/Button/Button6'//加载中
import Button7 from '@/components/Button/Button7'//不同尺寸

//Radio 单选框
import Radio1 from '@/components/Radio/Radio1'//Radio 单选框 基础用法
import Radio2 from '@/components/Radio/Radio2'//Radio 单选框 单选框组
import Radio3 from '@/components/Radio/Radio3'//Radio 单选框 按钮样式
import Radio4 from '@/components/Radio/Radio4'//Radio 单选框 带有边框

//Checkbox 多选框
import Checkbox1  from '@/components/Checkbox/Checkbox1'//基础用法
import Checkbox2  from '@/components/Checkbox/Checkbox2'//禁用状态
import Checkbox3  from '@/components/Checkbox/Checkbox3'//多选框组
import Checkbox4  from '@/components/Checkbox/Checkbox4'//indeterminate 状态
import Checkbox5  from '@/components/Checkbox/Checkbox5'//可选项目数量的限制
import Checkbox6  from '@/components/Checkbox/Checkbox6'//按钮样式
import Checkbox7  from '@/components/Checkbox/Checkbox7'//带有边框

//Input 输入框
import Input1  from '@/components/Input/Input1'//基础用法
import Input2  from '@/components/Input/Input2'//禁用状态
import Input3  from '@/components/Input/Input3'//可清空
import Input4  from '@/components/Input/Input4'//密码框
import Input5  from '@/components/Input/Input5'//带 icon 的输入框
import Input6  from '@/components/Input/Input6'//文本域
import Input7  from '@/components/Input/Input7'//可自适应文本高度的文本域
import Input8  from '@/components/Input/Input8'//复合型输入框
import Input9  from '@/components/Input/Input9'//尺寸
import Input10  from '@/components/Input/Input10'//带输入建议
import Input11  from '@/components/Input/Input11'//自定义模板
import Input12  from '@/components/Input/Input12'//远程搜索

//InputNumber 计数器
import InputNumber1  from '@/components/InputNumber/InputNumber1'//基础用法
import InputNumber2  from '@/components/InputNumber/InputNumber2'//禁用状态
import InputNumber3  from '@/components/InputNumber/InputNumber3'//步数
import InputNumber4  from '@/components/InputNumber/InputNumber4'//精度
import InputNumber5  from '@/components/InputNumber/InputNumber5'//尺寸
import InputNumber6  from '@/components/InputNumber/InputNumber6'//按钮位置

//Select 选择器 当选项过多时，使用下拉菜单展示并选择内容。
import Select1  from '@/components/Select/Select1'//基础用法
import Select2  from '@/components/Select/Select2'//有禁用选项
import Select3  from '@/components/Select/Select3'//禁用状态
import Select4  from '@/components/Select/Select4'//可清空单选
import Select5  from '@/components/Select/Select5'//基础多选
import Select6  from '@/components/Select/Select6'//自定义模板
import Select7  from '@/components/Select/Select7'//分组
import Select8  from '@/components/Select/Select8'//可搜索
import Select9  from '@/components/Select/Select9'//远程搜索
import Select10  from '@/components/Select/Select10'//远程搜索

//Cascader 级联选择器  当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
import Cascader1  from '@/components/Cascader/Cascader1'//基础用法
import Cascader2  from '@/components/Cascader/Cascader2'//禁用选项
import Cascader3  from '@/components/Cascader/Cascader3'//仅显示最后一级
import Cascader4 from '@/components/Cascader/Cascader4'//默认值
import Cascader5 from '@/components/Cascader/Cascader5'//选择即改变
import Cascader6 from '@/components/Cascader/Cascader6'//动态加载次级选项
import Cascader7 from '@/components/Cascader/Cascader7'//可搜索

//Switch 开关   表示两种相互对立的状态间的切换，多用于触发「开/关」。
import Switch from '@/components/Switch'

//Slider 滑块  通过拖动滑块在一个固定区间内进行选择
import Slider from '@/components/Slider'

//TimePicker 时间选择器 用于选择或输入日期
import TimePicker from '@/components/TimePicker'

//DatePicker 日期选择器  用于选择或输入日期
import DatePicker from '@/components/DatePicker'

//DateTimePicker 日期时间选择器   在同一个选择器里选择日期和时间
import DateTimePicker from '@/components/DateTimePicker'

//Upload 上传   通过点击或者拖拽上传文件
import Upload1 from '@/components/Upload/Upload1' //点击上传
import Upload2 from '@/components/Upload/Upload2' //用户头像上传
import Upload3 from '@/components/Upload/Upload3' //照片墙
import Upload4 from '@/components/Upload/Upload4' //图片列表缩略图
import Upload5 from '@/components/Upload/Upload5' //上传文件列表控制
import Upload6 from '@/components/Upload/Upload6' //拖拽上传
import Upload7 from '@/components/Upload/Upload7' //手动上传

//Rate 评分  评分组件
import Rate from '@/components/Rate' //评分组件

//ColorPicker 颜色选择器
import ColorPicker from '@/components/ColorPicker'

//Transfer 穿梭框
import Transfer from '@/components/Transfer'

//Form 表单  由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
import Form1 from '@/components/Form/Form1'//典型表单
import Form2 from '@/components/Form/Form2'//行内表单
import Form3 from '@/components/Form/Form3'//对齐方式
import Form4 from '@/components/Form/Form4'//表单验证
import Form5 from '@/components/Form/Form5'//自定义校验规则
import Form6 from '@/components/Form/Form6'//动态增减表单项
import Form7 from '@/components/Form/Form7'//数字类型验证
import Form8 from '@/components/Form/Form8'//表单内组件尺寸控制

//Table 表格   用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
import Table1 from '@/components/Table/Table1'//基础表格
import Table2 from '@/components/Table/Table2'//带斑马纹表格
import Table3 from '@/components/Table/Table3'//带边框表格
import Table4 from '@/components/Table/Table4'//带状态表格
import Table5 from '@/components/Table/Table5'//固定表头
import Table6 from '@/components/Table/Table6'//固定列
import Table7 from '@/components/Table/Table7'//固定列 固定表头
import Table8 from '@/components/Table/Table8'//流体高度
import Table9 from '@/components/Table/Table9'//多级表头
import Table10 from '@/components/Table/Table10'//单选
import Table11 from '@/components/Table/Table11'//多选
import Table12 from '@/components/Table/Table12'//排序
import Table13 from '@/components/Table/Table13'//筛选
import Table14 from '@/components/Table/Table14'//自定义列模板
import Table15 from '@/components/Table/Table15'//展开行
import Table16 from '@/components/Table/Table16'//表尾合计行
import Table17 from '@/components/Table/Table17'//合并行或列
import Table18 from '@/components/Table/Table18'//自定义索引

//Tag 标签 用于标记和选择
import Tag from '@/components/Tag'

//¶ Progress 进度条  用于展示操作进度，告知用户当前状态和预期。
import Progress from '@/components/Progress'

//Tree 树形控件  用清晰的层级结构展示信息，可展开或折叠。
import Tree1 from '@/components/Tree/Tree1'//基础的树形结构展示。
import Tree2 from '@/components/Tree/Tree2'//可选择
import Tree3 from '@/components/Tree/Tree3'//懒加载自定义叶子节点
import Tree4 from '@/components/Tree/Tree4'//默认展开和默认选中
import Tree5 from '@/components/Tree/Tree5'//禁用状态
import Tree6 from '@/components/Tree/Tree6'//树节点的选择
import Tree7 from '@/components/Tree/Tree7'//自定义节点内容
import Tree8 from '@/components/Tree/Tree8'//节点过滤
import Tree9 from '@/components/Tree/Tree9'//手风琴模式

//Pagination 分页  当数据量过多时，使用分页分解数据。
import Pagination from '@/components/Pagination'

//Badge 标记  出现在按钮、图标旁的数字或状态标记。
import Badge from '@/components/Badge'

//Alert 警告  用于页面中展示重要的提示信息。
import Alert from '@/components/Alert'

//Loading 加载  加载数据时显示动效
import Loading1 from '@/components/Loading/Loading1' //区域加载
import Loading2 from '@/components/Loading/Loading2' //自定义
import Loading3 from '@/components/Loading/Loading3' //整页加载
import Loading4 from '@/components/Loading/Loading4' //服务

//Message 消息提示  常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。
import Message from '@/components/Message'

//MessageBox 弹框  模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
//从场景上说，MessageBox 的作用是美化系统自带的 alert、confirm 和 prompt，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。
import MessageBox1 from '@/components/MessageBox/MessageBox1'//消息提示 alert
import MessageBox2 from '@/components/MessageBox/MessageBox2'//确认消息 confirm
import MessageBox3 from '@/components/MessageBox/MessageBox3'//提交内容 prompt
import MessageBox4 from '@/components/MessageBox/MessageBox4'//自定义
import MessageBox5 from '@/components/MessageBox/MessageBox5'//使用 HTML 片段
import MessageBox6 from '@/components/MessageBox/MessageBox6'//居中布局
import MessageBox7 from '@/components/MessageBox/MessageBox7'//全局方法  单独引用

//Notification 通知  悬浮出现在页面角落，显示全局的通知提醒消息。
import Notification1 from '@/components/Notification/Notification1'//基本用法  适用性广泛的通知栏
import Notification2 from '@/components/Notification/Notification2'//带有倾向性  带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息
import Notification3 from '@/components/Notification/Notification3'//自定义弹出位置  可以让 Notification 从屏幕四角中的任意一角弹出
import Notification4 from '@/components/Notification/Notification4'//带有偏移  让 Notification 偏移一些位置
import Notification5 from '@/components/Notification/Notification5'//使用 HTML 片段  message 属性支持传入 HTML 片段
import Notification6 from '@/components/Notification/Notification6'//隐藏关闭按钮
import Notification7 from '@/components/Notification/Notification7'//全局方法  单独引用

//NavMenu 导航菜单  为网站提供导航功能的菜单。
import NavMenu1  from '@/components/NavMenu/NavMenu1'//顶栏  适用广泛的基础用法。
import NavMenu2  from '@/components/NavMenu/NavMenu2'//侧栏  垂直菜单，可内嵌子菜单。
import NavMenu3  from '@/components/NavMenu/NavMenu3'//折叠

//Tabs 标签页   分隔内容上有关联但属于不同类别的数据集合。
import Tabs1  from '@/components/Tabs/Tabs1'//基础用法  基础的、简洁的标签页。
import Tabs2  from '@/components/Tabs/Tabs2'//选项卡样式  选项卡样式的标签页。
import Tabs3  from '@/components/Tabs/Tabs3'//卡片化  卡片化的标签页。
import Tabs4  from '@/components/Tabs/Tabs4'//位置  可以通过 tab-position 设置标签的位置
import Tabs5  from '@/components/Tabs/Tabs5'//自定义标签页  可以通过具名 slot 来实现自定义标签页的内容
import Tabs6  from '@/components/Tabs/Tabs6'//动态增减标签页  增减标签页按钮只能在选项卡样式的标签页下使用
import Tabs7  from '@/components/Tabs/Tabs7'//自定义增加标签页触发器

//Breadcrumb 面包屑  显示当前页面的路径，快速返回之前的任意页面
import Breadcrumb  from '@/components/Breadcrumb'

//Dropdown 下拉菜单  将动作或菜单折叠到下拉菜单中。
import Dropdown1  from '@/components/Dropdown/Dropdown1' //基础用法
import Dropdown2  from '@/components/Dropdown/Dropdown2' //触发对象 可使用按钮触发下拉菜单。
import Dropdown3  from '@/components/Dropdown/Dropdown3' //触发方式 可以配置 click 激活或者 hover 激活。
import Dropdown4  from '@/components/Dropdown/Dropdown4' //菜单隐藏方式 可以hide-on-click属性来配置。
import Dropdown5  from '@/components/Dropdown/Dropdown5' //指令事件 点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作
import Dropdown6  from '@/components/Dropdown/Dropdown6' //不同尺寸

//Steps 步骤条  引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。
import Steps1  from '@/components/Steps/Steps1' //基础用法
import Steps2  from '@/components/Steps/Steps2' //含状态步骤条
import Steps3  from '@/components/Steps/Steps3' //有描述的步骤条   每个步骤有其对应的步骤状态描述。
import Steps4  from '@/components/Steps/Steps4' //居中的步骤条   标题和描述都将居中。。
import Steps5  from '@/components/Steps/Steps5' //带图标的步骤条   步骤条内可以启用各种自定义的图标。。。
import Steps6  from '@/components/Steps/Steps6' //竖式步骤条   竖直方向的步骤条。。。。
import Steps7  from '@/components/Steps/Steps7' //简洁风格的步骤条   设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。

//Dialog 对话框  在保留当前页面状态的情况下，告知用户并承载相关操作。
import Dialog1  from '@/components/Dialog/Dialog1'//基本用法 Dialog 弹出一个对话框，适合需要定制性更大的场景。
import Dialog2  from '@/components/Dialog/Dialog2'//自定义内容 Dialog  Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。
import Dialog3  from '@/components/Dialog/Dialog3'//嵌套的 Dialog 如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。
import Dialog4  from '@/components/Dialog/Dialog4'//居中布局 标题和底部可水平居中。

//Tooltip 文字提示  常用于展示鼠标 hover 时的提示信息。
import Tooltip  from '@/components/Tooltip'

//Popover 弹出框
import Popover1  from '@/components/Popover/Popover1'//基础用法
import Popover2  from '@/components/Popover/Popover2'//嵌套信息   可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。
import Popover3  from '@/components/Popover/Popover3'//嵌套操作   当然，你还可以嵌套操作，这相比 Dialog 更为轻量：

//Card 卡片  将信息聚合在卡片容器中展示。
import Card1  from '@/components/Card/Card1'//基础用法  包含标题，内容和操作。
import Card2  from '@/components/Card/Card2'//简单卡片  卡片可以只有内容区域。
import Card3  from '@/components/Card/Card3'//带图片  可配置定义更丰富的内容展示。

//Carousel 走马灯  在有限空间内，循环播放同一类型的图片、文字等内容
import Carousel1  from '@/components/Carousel/Carousel1'//基础用法
import Carousel2  from '@/components/Carousel/Carousel2'//指示器   可以将指示器的显示位置设置在容器外部
import Carousel3  from '@/components/Carousel/Carousel3'//切换箭头   可以设置切换箭头的显示时机
import Carousel4  from '@/components/Carousel/Carousel4'//卡片化   当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

//Collapse 折叠面板  通过折叠面板收纳内容区域
import Collapse1  from '@/components/Collapse/Collapse1'//基础用法  可同时展开多个面板，面板之间不影响
import Collapse2  from '@/components/Collapse/Collapse2'//手风琴效果  每次只能展开一个面板
import Collapse3  from '@/components/Collapse/Collapse3'//自定义面板标题  除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout1
    },
    {
      path: '/Layout1',
      component: Layout1
    },
    {
      path: '/Layout2',
      component: Layout2
    },
    {
      path: '/Layout3',
      component: Layout3
    },
    {
      path: '/Layout4',
      component: Layout4
    },
    {
      path: '/Layout5',
      component: Layout5
    },
    {
      path: '/Layout6',
      component: Layout6
    },
    {
      path: '/Layout7',
      component: Layout7
    }
  ]
})
