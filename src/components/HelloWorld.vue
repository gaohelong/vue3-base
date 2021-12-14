<template>
  <div class="hello">
    <h1>{{ iptMsg }}</h1>
    <input class="msg-ipt" v-model="iptMsg" ref="hwIptRef">
    <van-button type="primary" @click.stop="msgChange">子组件通知父组件</van-button>
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
  watchEffect
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
        iptMsg.value = curIptMsg
      }
    );

    const msgChange = () => {
      // 通过context调用emit事件 需要注意的是Vue2.x中使用$emit
      context.emit('changeMsg', { msg: unref(iptMsg) })
    }

    return {
      iptMsg,
      msgChange
    }
  },
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
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

  .msg-ipt {
    padding: 12/@rem;
    width: 400/@rem;
    font-size: 32/@rem;
  }
</style>
