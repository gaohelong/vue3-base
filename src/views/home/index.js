// @ is an alias to /src
import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  readonly,
  isReactive,
  isReadonly
} from 'vue'
import {
  useRouter
} from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import request from '@/utils/request'
import {
  Button,
  Toast
} from 'vant' // vant组件-局部注册

import { useCount } from '@/hooks/useCount'

console.clear()
export default defineComponent({
  /**
   * 使用setup时，它接受两个参数：
   *  @param {Object} props: 组件传入的属性
   *  @param {Object} context: 上下文, context包含slots、attrs、emit
   *  注: 函数式组件只能由接收 props 和 context (即：slots、attrs、emit) 的普通函数创建
   *  注: setup中接受的props是响应式的， 当传入新的props 时，会及时被更新。由于是响应式的，所以不可以使用ES6解构，解构会消除它的响应式。
   */
  setup (props, context) {
    console.log('----setup----')
    console.log('props:', props)
    console.log('context:', context)

    /* 创建响应式状态(类似vue2中的data) */
    // reactive用于处理对象的双向绑定，ref则处理js基础类型的双向绑定
    // reactive函数确实可以代理一个对象， 但是不能代理基本类型，例如字符串、数字、boolean等
    const params = ref({ // 用户信息
      count: 1,
      name: '钻石王老五'
    })

    const year = ref(new Date().getFullYear()) // 年
    const zt = ref(false) // 状态
    const componentMsg = ref('我是Vue组件') // 给组件传递消息

    // 只读
    const original = reactive({
      count: 0
    })
    const rdy = readonly(original)

    setTimeout(() => {
      params.value.count = params.value.count + 1
      params.value.name = '钻石老大'
    }, 3000)

    const list = reactive([ // 学员列表
      {
        id: 1,
        name: '钻石'
      },
      {
        id: 2,
        name: '钻石'
      },
      {
        id: 3,
        name: '钻石'
      }
    ])

    /* 解构-toRefs */
    // 遗憾的是使用ES6解构会使解构的两个 property 的响应性都会丢失。对于这种情况，我们需要将我们的响应式对象转换为一组 ref。
    // 这些 ref 将保留与源对象的响应式关联：
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: 'You are reading this book right now ;)',
      price: 'free'
    })

    const {
      author,
      title
    } = toRefs(book)

    // 检查对象是否是reactive创建的响应式proxy-isReactive
    console.log('isReactive: author-', isReactive(author))
    console.log('isReactive: book-', isReactive(book))

    // 检查对象是否是由readonly创建的只读proxy-isReadonly
    console.log('isReadonly: rdy-', isReadonly(rdy))
    console.log('isReadonly: book-', isReadonly(book))

    // hooks
    const { uCount, uIncrease, uDecrease } = useCount(0)

    // 路由跳转
    const router = useRouter()
    const goJump = (type) => {
      console.log(router)

      if (type == 'home') {
        router.push('/')
      } else if (type == 'product') {
        // router.push({ path: `/product/1` })
        router.push({ name: 'Product', params: { id: 1 } })
      } else if (type == 'sign') {
        router.push({ path: `/sign/123` })
      } else if (type == 'watch') {
        // 带查询参数，变成 /watcom?type=cloud
        router.push({ path: '/watcom', query: { type: 'cloud' }})
      }
    }

    /* change hello world msg */
    const changeMsg = (data) => {
      console.log('changeMsg:', data)
    }

    return {
      /* 属性 */
      params,
      year,
      zt,
      list,
      componentMsg,
      rdy,
      book,
      author,
      title,

      /* 方法 */
      uCount,
      uIncrease,
      uDecrease,
      goJump,
      changeMsg,
    }
  },
  name: 'Home',
  components: {
    [Button.name]: Button, // vant组件-局部注册
    HelloWorld
  },
  methods: {
    /**
     * 开始学习
     */
    startStudy () {
      Toast.loading({
        message: '你可以开始学习了',
        forbidClick: true
      })

      // const zt = ref(true) // 需要在setup中先定义响应式属性再使用.
      this.zt = true
    },
    /**
     * 改名
     */
    changeName () {
      this.params.count = this.params.count + 1
      this.params.name = `钻石-${new Date().getTime()}`

      // this.rdy.count = this.rdy.count + 1 // 只读响应式状态不可修改.
    },
    /**
     * 修改组件内容
     */
    changeComponent () {
      console.log(this.componentMsg)
      this.componentMsg = `组件内容已修改-${new Date().getTime()}`
    },
    /**
     * 数据重置
     */
    dataReset () {
      this.params.count = 1
      this.params.name = '钻石王老五'
      this.zt = false
      this.componentMsg = '我是Vue组件'
    },
    /**
     * 跳转到产品页
     */
    goProduct () {
      this.$router.push('/product/china')
    }
  },
  beforeCreate () {
    console.log('----beforeCreate----')
  },
  created () {
    console.log('----created----')
    request.get('/api/ucenter/postCollectList', {
      params: {
        page: 1,
        pagesize: 5
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('err:', err)
    })

    // request.post('/api/ucenter/postCollectList', {
    //   page: 1,
    //   pagesize: 5
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log('err:', err)
    // })

    console.log(this.params)
  },
  mounted () {
    // 获取dom组件、子组件元素
    console.log(this.$refs.hellowordRef.getMsg()) // 调用子组件方法
    console.log(this.$refs.hellowordRef.msg) // 获取子组件响应式属性
  }
})
