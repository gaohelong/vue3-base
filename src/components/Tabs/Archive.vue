<template>
  <div class="container">
    Archive
  </div>
</template>

<script>
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
    Button,
    Toast
  } from 'vant' // vant组件-局部注册

  export default defineComponent({
    name: 'Archive',
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

      return {

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
