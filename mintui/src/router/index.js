import Vue from 'vue'
import Router from 'vue-router'
import Actionsheet from '@/components/action-sheet';
import Badge from '@/components/badge';
import Button from '@/components/button';
import Cell from '@/components/cell';
import CellSwipe from '@/components/cell-swipe';
import Checklist from '@/components/checklist';
import DatetimePicker from '@/components/datetime-picker';
import Field from '@/components/field';
import Header from '@/components/header';
import IndexList from '@/components/index-list';
import Indicator from '@/components/indicator';
import InfiniteScroll from '@/components/infinite-scroll';
import Lazyload from '@/components/lazyload';
import Loadmore from '@/components/loadmore';
import MessageBox from '@/components/message-box';
import Navbar from '@/components/navbar';
import PaletteButton from '@/components/palette-button';
import Picker from '@/components/picker';
import Popup from '@/components/popup';
import Progress from '@/components/progress';
import Radio from '@/components/radio';
import Range from '@/components/range';
import Switch from '@/components/switch';
import Spinner from '@/components/spinner';
import Swipe from '@/components/swipe';
import TabContainer from '@/components/tab-container';
import Tabbar from '@/components/tabbar';
import Toast from '@/components/toast';
import PullUp from '@/components/pull-up';
import Pulldown from '@/components/pull-down';
import search from '@/components/search';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CellSwipe',
      component: CellSwipe
    }
  ]
})
