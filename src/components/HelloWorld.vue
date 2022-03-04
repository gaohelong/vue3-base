<template>
  <div class="hello">
    <h1>{{ iptMsg }}</h1>
    <div class="main-wrap">
      <input class="msg-ipt" v-model="iptMsg" ref="hwIptRef">
      <van-button type="primary" class="msg-btn" @click.stop="msgChange">子组件通知父组件</van-button>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  unref,
  toRefs,
  reactive,
  readonly,
  isReactive,
  isReadonly,
  onMounted,
  nextTick,
  watch,
  watchEffect,
  inject
} from 'vue'
import { Button } from 'vant' // vant组件-局部注册

export default defineComponent({
  name: 'HelloWorld',
  /**
   * components
   */
  components: {
    [Button.name]: Button // vant组件-局部注册
  },
  /**
   * props
   */
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  /**
   * setup
   */
  setup (props, context) {
    console.log('----hello world setup----')
    console.log('props:', props)
    console.log('context:', context)

    // 使用的时候需要放在setup里边
    onMounted(() => {
      console.log('------ onMounted HelloWorld组件挂载结束 ------')
    })

    nextTick(() => {
      console.log('------ HelloWorld nextTick ------')
    })

    // 接收父组件属性
    let iptMsg = ref(props.msg)

    // 父组件修改值时会触发watch的回调
    watch(
      () => props.msg,
      (curIptMsg, preIptMsg) => {
        console.log("新值:", curIptMsg, "老值:", preIptMsg)
        iptMsg.value = curIptMsg // 修改iptMsg响应式属性的值
      }
    )

    const msgChange = () => {
      // 通过context调用emit事件 需要注意的是Vue2.x中使用$emit
      context.emit('changeMsg', { msg: unref(iptMsg) })
    }

    /* inject(父组件向所有子组件传递数据)接收 */
    console.log('provideMsg:', inject('provideMsg'))

    return {
      iptMsg,
      msgChange
    }
  },
  methods: {
    /**
     * 获取Msg
     */
    getMsg () {
      console.log(this.msg)
    },
    /**
     * 修改Msg
     */
    setMsg (text) {
      console.log(text)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../common.less';

  h1 {
    margin: 40/@rem 0;
    font-size: 32/@rem;
    color: @color-42b983;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 20/@rem;
  }

  a {
    color: @color-42b983;
  }

  .main-wrap {
    display: flex;
    align-items: center;
  }

  .msg-ipt {
    margin-right: 12/@rem;
    padding: 12/@rem;
    width: 400/@rem;
    font-size: 32/@rem;
  }

  .msg-btn {
    flex-shrink: 0;
  }
</style>
