<template>
  <div class="container">
    <div class="main">Login</div>
  </div>
</template>

<style lang="less" scoped>
  @import '../common.less';

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    .main {
      font-size: 32/@rem;
    }
  }
</style>
