<template>
  <div class="container">
    <!-- reactive->watchEffect -->
    <div class="row">year: {{ state.year }} day: {{ state.day }} sum: {{ sum }}</div>

    <!-- ref->watch -->
    <div class="row">count: {{ count }}</div>

    <!-- computed -->
    <div class="row">{{ num }} * {{ price }} = {{ total }}</div>

    <div class="btn-list">
      <van-button type="primary" @click.stop="ymChange">watchEffect改变</van-button>
      <van-button type="primary" @click.stop="countChange">watch改变</van-button>
      <van-button type="success" @click.stop="totalChange">computed改变</van-button>
      <van-button type="success" @click.stop="totalReset">computed reset</van-button>
    </div>

    <!-- data中的响应式属性 -->
    <div class="row">increasing: {{ increasing }}</div>
  </div>

  <!-- 吸低导航 -->
  <Tabbar curPage="watcom"></Tabbar>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
