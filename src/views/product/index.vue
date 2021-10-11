<template>
  <div class="container">
    <div class="back" @click.stop="backHandle">返回首页</div>
    <h3 class="split-line"></h3>
    <div class="title">{{ title }}</div>
    <h3 class="split-line"></h3>
    <div class="visit">浏览数:{{ visitNum }}</div>
    <div class="visit">当前观看人数:{{ info.lookNum }}</div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
