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


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select1',
      component: Select10
    }
  ]
})
