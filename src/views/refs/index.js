import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  readonly,
  isReactive,
  isReadonly,
  onMounted,
  onBeforeUpdate,
  computed,
  nextTick,
  getCurrentInstance,
} from 'vue'
import {
  Button,
  Toast
} from 'vant' // vant组件-局部注册

import request from '@/utils/request'
import HelloWorld from '@/components/HelloWorld'

console.clear()
export default defineComponent({
  name: 'Refs',
  components: {
    HelloWorld,
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

    /* title */
    window.document.title = 'refs'

    /* getCurrentInstance */
    let currentInstance = getCurrentInstance()
    console.log('currentInstance:', currentInstance)
    console.log('currentInstance-proxy:', currentInstance.proxy)

    let componentMsg = ref('我是Vue-Ref') // 给组件传递消息

    /* change hello world msg */
    const changeMsg = (data) => {
      console.log('changeMsg:', data)
    }

    /* onBeforeUpdate */
    onBeforeUpdate(() => {
      console.log('------ Ref onBeforeUpdate ------')
    })

    /* onMounted */
    onMounted(() => {
      console.log('------ Ref onMounted ------')

      // 迫使组件实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件
      componentMsg.value = '$forceUpdate'
      currentInstance.proxy.$forceUpdate()
    })

    /* 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
       它跟全局方法 nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。 */
    nextTick(() => {
      console.log('------ Ref nextTick ------')
    })

    return {
      /* data */
      componentMsg,

      /* methods */
      changeMsg,
    }
  },
  mounted () {
    // 获取dom组件、子组件元素
    this.$refs.hellowordRef.getMsg() // 调用子组件方法

    setTimeout(() => {
      console.log('props-msg:', this.$refs.hellowordRef.msg) // 获取子组件响应式属性
      console.log('iptMsg:', this.$refs.hellowordRef.iptMsg) // 获取子组件响应式属性
    }, 3000);
  },
})
