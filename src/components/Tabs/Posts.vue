<template>
  <div class="container">
    <div>Posts</div>
    <van-button type="primary" @click.stop="addProc">Add</van-button>
    <div>Num: {{ num }}</div>
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
    computed
  } from 'vue'

  import {
    Button,
    Toast
  } from 'vant' // vant组件-局部注册

  export default defineComponent({
    name: 'Posts',
    /**
     * components
     */
    components: {
      [Button.name]: Button // vant组件-局部注册
    },
    setup(props, context) {
      console.log('----hello world setup----')
      console.log('props:', props)
      console.log('context:', context)

      let num = ref(0)
      let addProc = () => {
        num.value = unref(num) + 1
      }

      return {
        /* data */
        num,

        /* methods */
        addProc,
      }
    },
  })
</script>

<style scoped lang="less">
  @import '../../common.less';

  .container {
    font-size: 32/@rem;
  }
</style>
