import {
  defineComponent,
  ref,
  toRefs,
  watch,
  reactive,
  onMounted,
  onUnmounted
} from 'vue'
import {
  Button,
  Toast
} from 'vant' // vant组件-局部注册
import {
  useRouter
} from 'vue-router'
import request from '@/utils/request'

console.clear()
let clearInterval1 = 0
let clearInterval2 = 0
export default defineComponent({
  name: 'Product',
  /**
   * components
   */
  components: {
    [Button.name]: Button // vant组件-局部注册
  },
  /**
   * setup
   */
  setup(props, context) {
    console.log('----setup----')
    console.log('props:', props)
    console.log('context:', context)
    const router = useRouter()

    /* title */
    const title = ref('好医保2021')
    title.value = '好医保2021.10.10'

    /* visitNum */
    const visitNum = ref(0)

    // visitNum watch ref
    watch(
      visitNum,
      (curVal, preVal) => {
        // console.log("visitNum-新值:", curVal, "visitNum-老值:", preVal)
      }
    )

    clearInterval1 = setInterval(() => {
      visitNum.value++
    }, 1500)

    /* info */
    const info = reactive({
      name: '好医保幸福智能陪伴',
      lookNum: 0
    })

    // watch reactive
    watch(
      () => info.lookNum,
      (curVal, preVal) => {
        // console.log("lookNum-新值:", curVal, "lookNum-老值:", preVal)
      }
    )

    clearInterval2 = setInterval(() => {
      info.lookNum++
    }, 1500)

    /* mounted */
    onMounted(() => {
      console.log('----mounted----')
    })

    /* unmounted */
    onUnmounted(() => {
      clearInterval(clearInterval1)
      clearInterval(clearInterval2)
      console.log('----product-unmounted----')
    })

    /* methods */
    const backHandle = (e) => {
      console.log(e)
      // router.push('/')
      router.push({
        path: '/',
        query: {
          source: 'product'
        }
      })
    }

    return {
      title,
      visitNum,
      info,
      backHandle
    }
  },
  /**
   * beforeCreate
   */
  beforeCreate() {
    console.log('----beforeCreate----')
  },
  /**
   * created
   */
  created() {
    console.log('----created----')
    console.log(this.params)
  },
  /**
   * methods
   */
  methods: {

  }
})
