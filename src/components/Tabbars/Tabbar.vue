<template>
  <!-- 吸低导航 -->
  <div class="nav-list">
    <div class="nav-item" :class="curPage == 'home' ? 'nav-active' : ''"
      @click.stop="goJump('home')">Home</div>
    <div class="nav-item" :class="curPage == 'product' ? 'nav-active' : ''"
      @click.stop="goJump('product')">产品</div>
    <div class="nav-item" :class="curPage == 'sign' ? 'nav-active' : ''"
      @click.stop="goJump('sign')">签名</div>
    <div class="nav-item" :class="curPage == 'watcom' ? 'nav-active' : ''"
      @click.stop="goJump('watch')">Watch</div>
    <div class="nav-item" :class="curPage == 'vuex' ? 'nav-active' : ''"
      @click.stop="goJump('vuex')">Vuex</div>
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
    name: 'Tabbar',
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
      curPage: {
        type: String,
        default: ''
      }
    },
    /**
     * setup
     */
    setup(props, context) {
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
        context.emit('changeMsg', {
          msg: unref(iptMsg)
        })
      }

      /* inject(父组件向所有子组件传递数据)接收 */
      console.log('provideMsg:', inject('provideMsg'))

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
        } else if (type == 'vuex') {
          // 带查询参数，变成 /watcom?type=cloud
          router.push('/vuex')
        }
      }

      /* 当前页面 */
      const curPage = props.curPage

      return {
        curPage,

        /* methods */
        goJump
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../common.less';

  /* 吸低导航 */
  .nav-list {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: #FFFFFF;
    border-top-left-radius: 16/@rem;
    border-top-right-radius: 16/@rem;
    box-shadow: 0/@rem -2/@rem 5/@rem rgba(0, 0, 0, .6);

    .nav-item {
      flex-grow: 1;
      height: 120/@rem;
      line-height: 120/@rem;
      font-size: 32/@rem;
      text-align: center;
    }

    .nav-active {
      color: #00c3a9;
    }
  }
</style>
