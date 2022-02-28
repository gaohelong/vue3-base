import {
  defineComponent,
  ref,
  unref,
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
import * as productApi from '@/apis/productApi'
import request from '@/utils/request'
import Nav from '@/components/Navs/Nav'
import Tabbar from '@/components/Tabbars/Tabbar'

console.clear()
let clearInterval1 = 0
let clearInterval2 = 0
export default defineComponent({
  name: 'Product',
  /**
   * components
   */
  components: {
    [Button.name]: Button, // vant组件-局部注册
    Nav,
    Tabbar
  },
  /**
   * setup
   */
  setup(props, context) {
    console.log('----setup----')
    console.log('props:', props)
    console.log('context:', context)

    /* router */
    const router = useRouter()
    console.log(router)
    console.log(router.currentRoute.value)
    console.log(router.currentRoute.value.params)
    console.log(router.currentRoute.value.query)

    /* title */
    const title = ref('好医保2021')
    title.value = '好医保2021.10.10'

    /* visitNum */
    const visitNum = ref(0)
    console.log('visitNum-value:', visitNum.value)
    console.log('visitNum-unref:', unref(visitNum))

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

    let refBoolean = ref(true)
    console.log('refBoolean: ', refBoolean.value)

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

    /* 获取产品名称 */
    let productName = ref('-')
    const getProductNmae = (async () => {
      /* 获取产品名称 */
      let res = await productApi.getProductNmae(1)
      if (res.code === 0) {

      } else {
        productName.value = res.msg
        Toast(res.msg)
      }
      // console.log('productName:', productName)
    })

    /* 获取产品列表 */
    let productList = reactive({
      list: []
    })

    const getProductList = (async () => {
      let res = await productApi.getPorductList(1)
      if (res.code === 0) {

      } else {
        productList.list = res.data
        console.log('productList:', productList)
        Toast(res.msg)
      }
      // console.log('productName:', productName)
    })
    getProductList()

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

    /* methods-返回 */
    // const backHandle = (e) => {
    //   console.log(e)
    //   // router.push('/')
    //   router.push({
    //     path: '/',
    //     query: {
    //       source: 'product'
    //     }
    //   })
    // }

    /* 返回url */
    const navBackPage = ref(`/`)

    return {
      title,
      visitNum,
      info,
      navBackPage,
      // backHandle,
      getProductNmae,
      productName,
      productList
    }
  },
  /**
   * beforeCreate
   */
  // beforeCreate() {
  //   console.log('----beforeCreate----')
  // },
  /**
   * created
   */
  // created() {
  //   console.log('----created----')
  // },
  /**
   * methods
   */
  // methods: {

  // }
})
