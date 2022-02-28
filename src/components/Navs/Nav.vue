<template>
  <!-- 吸顶 -->
  <div class="nav-wrap">
    <div class="nav-main" @click.stop="goJump">返回</div>
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
  import { useRouter } from 'vue-router'
  import { Button } from 'vant' // vant组件-局部注册

  export default defineComponent({
    name: 'Nav',
    /**
     * components
     */
    components: {
      [Button.name]: Button // vant组件-局部注册
    },
    props: {
      backPage: {
        type: String,
        default: ''
      }
    },
    setup(props, context) {
      console.log('----Nav setup----')
      console.log('Nav-props:', props)
      console.log('Nav-context:', context)

      // 使用的时候需要放在setup里边
      onMounted(() => {
        console.log('------ onMounted Nav组件挂载结束 ------')
      })

      nextTick(() => {
        console.log('------ Nav nextTick ------')
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
        context.emit('changeMsg', {
          msg: unref(iptMsg)
        })
      }

      /* inject(父组件向所有子组件传递数据)接收 */
      console.log('provideMsg:', inject('provideMsg'))

      // 路由跳转
      const router = useRouter()
      const backPage = ref(props.backPage)
      console.log(backPage.value)
      const goJump = () => {
        router.push({ path: backPage.value })
      }

      return {
        backPage,

        /* methods */
        goJump
      }
    },
    name: 'Tabbar'
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../common.less';

  /* 吸低导航 */
  .nav-wrap {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #FFFFFF;
    border-bottom-left-radius: 16/@rem;
    border-bottom-right-radius: 16/@rem;
    box-shadow: 0/@rem -4/@rem 10/@rem rgba(0, 0, 0, .6);

    .nav-main {
      flex-grow: 1;
      padding-left: 16/@rem;
      height: 100/@rem;
      line-height: 100/@rem;
      font-size: 32/@rem;
    }
  }
</style>
