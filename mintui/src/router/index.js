import Vue from 'vue'
import Router from 'vue-router'
import actionSheet from '@/components/action-sheet'//操作表，从屏幕下方移入。
import badge from '@/components/badge'//徽章，可指定颜色和尺寸
import Button from '@/components/button'//按钮，提供几种基础样式和尺寸，可自定义图标。
import cell from '@/components/cell'//单元格，可用作展示列表信息、链接或者表单等。
import cellSwipe from '@/components/cell-swipe'//可滑动的单元格，用法同 cell。
import checklist from '@/components/checklist'//复选框列表，依赖 cell 组件。
import datetimePicker from '@/components/datetime-picker'//日期时间选择器，支持自定义类型。
import field from '@/components/field'//表单编辑器。
import header from '@/components/header'//顶部导航栏，支持显示按钮、自定义文字和固定在顶部。。
import indexList from '@/components/index-list'//索引列表，可由右侧索引导航快速定位到相应的内容。
import indicator from '@/components/indicator'//加载提示框，支持自定义文本和加载图标。
import infiniteScroll from '@/components/infinite-scroll'//无限滚动指令。
import lazyload from '@/components/lazyload'//图片懒加载指令。
import messageBox from '@/components/message-box'//弹出式提示框，有多种交互形式。
import navbar from '@/components/navbar'//顶部选项卡，与 Tabbar 类似，依赖 tab-item 组件。
import paletteButton from '@/components/palette-button'//调色板按钮
import picker from '@/components/picker'//选择器，支持多 slot 联动。
import popup from '@/components/popup'//弹出框，可自定义内容。
import progress from '@/components/progress'//进度条。。
import pullDown from '@/components/pull-down'//在列表顶端, 按住 - 下拉 - 释放可以获取更多数据
import pullUp from '@/components/pull-up'//在列表底部, 按住 - 上拉 - 释放可以获取更多数据
import radio from '@/components/radio'//单选框列表，依赖 cell 组件。
import range from '@/components/range'//滑块，支持自定义步长、区间等。
import search from '@/components/search'//搜索框，可显示搜索结果列表。
import spinner from '@/components/spinner'//加载动画，可指定显示类型、尺寸和颜色。
import swipe from '@/components/swipe'//轮播图，可自定义轮播时间间隔、动画时长等。
import Switch from '@/components/switch'//开关
import tabContainer from '@/components/tab-container'//面板，可切换显示子页面。
import tabbar from '@/components/tabbar'//底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。
import toast from '@/components/toast'//简短的消息提示框，支持自定义位置、持续时间和样式。



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indicator',
      component: toast
    }
  ]
})
