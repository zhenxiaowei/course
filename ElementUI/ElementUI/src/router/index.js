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



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Alert',
      component: Tree3
    }
  ]
})
