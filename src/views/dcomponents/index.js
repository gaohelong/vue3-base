import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  readonly,
  isReactive,
  isReadonly,
  onMounted,
  computed
} from 'vue'
import {
  Button,
  Toast
} from 'vant' // vant组件-局部注册

import request from '@/utils/request'
import Home from '@/components/Tabs/Home'
import Posts from '@/components/Tabs/Posts'
import Archive from '@/components/Tabs/Archive'

console.clear()
export default defineComponent({
  name: 'DComponents',
  components: {
    [Button.name]: Button, // vant组件-局部注册
    Home,
    Posts,
    Archive,
  },
  /**
   * 使用setup时，它接受两个参数：
   *  @param {Object} props: 组件传入的属性
   *  @param {Object} context: 上下文
   *  注: setup中接受的props是响应式的， 当传入新的props 时，会及时被更新。由于是响应式的，所以不可以使用ES6解构，解构会消除它的响应式。
   */
  setup(props, context) {
    console.log('----setup----')
    console.log('props:', props)
    console.log('context:', context)

    /* title */
    window.document.title = '动态、异步组件'

    /* 动态组件 */
    let currentTab = ref('Home')
    let tabs = ref(['Home', 'Posts', 'Archive'])

    /* onMounted */
    onMounted(() => {

    })

    /* methods */
    let currentTabChange = (tab) => {
      currentTab.value = tab
    }

    return {
      /* data */
      currentTab,
      tabs,
      currentTab,

      /* methods */
      currentTabChange,
    }
  },
})
