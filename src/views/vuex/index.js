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
  useStore
} from 'vuex'
import request from '@/utils/request'
import {
  Button,
  Toast
} from 'vant' // vant组件-局部注册

console.clear()
export default defineComponent({
  name: 'Home',
  components: {
    [Button.name]: Button, // vant组件-局部注册
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

    /* vuex */
    const store = useStore()

    /* title */
    window.document.title = 'Vuex'

    /* onMounted */
    onMounted(() => {

    })

    let nick = ref('')
    let age = ref(0)

    // 使用mutation并传参
    // store.commit('setAge', {
    //   age: 100
    // })

    // 使用mutation不传参
    // store.commit('setAge')

    // 使用action并传参
    store.dispatch({
      type: 'setAge',
      age: 101
    })

    // 使用action不传参
    // store.dispatch('setAge')

    return {
      nick: computed(() => store.state.nick), // 在 computed 函数中访问 state
      age: computed(() => store.getters.age), // 在 computed 函数中访问 getter
    }
  },
  methods: {
    /**
     * 导出
     */
    output() {
      let canvas = document.getElementById('can-vans')
      let ctx = canvas.getContext('2d')
      var oImg = new Image()
      ctx.drawImage(oImg, 0, 0)
      this.ImgSrc = canvas.toDataURL('image/png')
    },
    /**
     * 清除
     */
    clearCanvas() {
      let canvas = document.getElementById('can-vans')
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    },
    /**
     * 返回png图片base64
     */
    canvas_goBack() {
      console.log(this.ImgSrc)
    }
  },
})
