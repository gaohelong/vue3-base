<template>
  <div class='can-vas'>
    <div class="can-vans-wrap">
      <canvas id='can-vans'>您当前浏览器不支持canvas，建议更换浏览器！</canvas>
    </div>

    <div class="operation-list">
      <button @click='output'>确定</button>
      <button @click='clearCanvas'>清空</button>
      <button @click='canvas_goBack'>返回</button>
    </div>

    <div class="sign-res-wrap">
      <img class="sign-img" :src="ImgSrc" v-if="ImgSrc">
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
