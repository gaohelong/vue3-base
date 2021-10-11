<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input class="msg-ipt" v-model="msg" ref="hwIptRef">
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
  nextTick
} from 'vue'

export default defineComponent({
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
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    /**
     * 获取Msg
     */
    getMsg () {
      console.log(this.msg)
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
    width: 300/@rem;
    font-size: 32/@rem;
  }
</style>
