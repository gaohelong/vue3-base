// @ is an alias to /src
import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  readonly,
  isReactive,
  isReadonly,
  watch,
  watchEffect,
  computed,
  onUnmounted,
} from 'vue'
import request from '@/utils/request'
import {
  Button,
  Toast
} from 'vant' // vant组件-局部注册

import Tabbar from '@/components/Tabbars/Tabbar'
import { useCount } from '@/hooks/useCount'

console.clear()
let increasingClearTime = 0;
export default defineComponent({
  name: 'Watcom',
  components: {
    [Button.name]: Button, // vant组件-局部注册
    Tabbar
  },
  /**
   * 纯粹的组合式: 无法改变data中的值，不用改变的内容可以放到data中, data配合vue2中的老套路来使用
   */
  data () {
    return {
      increasing: 0,
    }
  },
  /**
   * 使用setup时，它接受两个参数：
   *  @param {Object} props: 组件传入的属性
   *  @param {Object} context: 上下文
   *  注: setup中接受的props是响应式的， 当传入新的props 时，会及时被更新。由于是响应式的，所以不可以使用ES6解构，解构会消除它的响应式。
   */
  setup (props, context) {
    console.log('----setup----')
    console.log('props:', props)
    console.log('context:', context)

    /****** 监听function中的所有响应式属性 ******/
    let state = reactive({
      year: new Date().getFullYear(),
      day: new Date().getDay(),
    })

    let sum = ref(0)
    watchEffect(() => {
      console.log('year: ', state.year)
      console.log('day: ', state.day)
      console.log('sum: ', sum.value)
    })

    let ymChange = () => {
      state.year++
      state.day++
      sum.value = state.year + state.day
    }

    /****** 监听count ******/
    let count = ref(0)
    watch(count, (nval, oval) => {
      console.log(`nval: ${nval} oval: ${oval}`)
    })

    let countChange = () => {
      count.value++
    }

    /****** 计算属性total ******/
    let price = ref(166)
    let num = ref(1)

    /* 设置get、set */
    // let total = computed({
    //   get: () => {
    //     return price.value * num.value
    //   },
    //   set: (num) => {
    //     return price.value * num
    //   }
    // })

    /* 默认get */
    let total = computed(() => {
      return price.value * num.value
    })

    let totalChange = () => {
      num.value++
    }

    let totalReset = () => {
      num.value = 1
    }

    /* 自增 */
    let increasing = ref(0)
    increasingClearTime = setInterval(() => {
      increasing.value++
    }, 1000)

    /* 页面销毁 */
    onUnmounted(() => {
      clearInterval(increasingClearTime)
    })

    return {
      /* 响应式属性 */
      state,
      count,
      price,
      num,
      total,
      sum,
      increasing,

      /* methods */
      countChange,
      totalChange,
      totalReset,
      ymChange,
    }
  },
})
