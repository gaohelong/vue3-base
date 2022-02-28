// @ is an alias to /src
import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  readonly,
  isReactive,
  isReadonly,
  onMounted
} from 'vue'
import request from '@/utils/request'
import {
  Button,
  Toast
} from 'vant' // vant组件-局部注册
import HelloWorld from '@/components/HelloWorld'
import Tabbar from '@/components/Tabbars/Tabbar'

console.clear()
export default defineComponent({
  name: 'Home',
  components: {
    [Button.name]: Button, // vant组件-局部注册
    HelloWorld,
    Tabbar
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
    window.document.title = '签字'

    let ImgSrc = ref('')
    let screenWidth = ref(document.documentElement.clientWidth)
    console.log('ImgSrc: ', ImgSrc.value)
    console.log('screenWidth: ', screenWidth.value)

    /* onMounted */
    onMounted(() => {
      let canvas = document.getElementById('can-vans')
      let ctx = canvas.getContext('2d')
      let _x = 0
      let _y = 0
      let x = 0
      let y = 0
      canvas.width = screenWidth.value - 20 // 设置画布大小
      canvas.height = 200
      canvas.addEventListener('touchstart', function(e) { // 开始绘制
        e.preventDefault()
        _x = e.touches[0].pageX
        _y = e.touches[0].pageY
        ctx.beginPath() // 路径开始
        ctx.moveTo(_x - canvas.offsetTop, _y - canvas.offsetLeft)
        this.addEventListener('touchmove', function(e) { // 路径移动
          x = e.touches[0].pageX
          y = e.touches[0].pageY
          ctx.lineTo(x - canvas.offsetTop, y - canvas.offsetLeft)
          ctx.stroke()
        })
      })
    })

    return {
      ImgSrc,
      screenWidth
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
