<template>
  <!-- 吸顶 -->
  <Nav :backPage="navBackPage"></Nav>

  <div class="container">
    <h3 class="split-line"></h3>
    <div class="title">{{ title }}</div>
    <h3 class="split-line"></h3>
    <div class="visit">浏览数:{{ visitNum }}</div>
    <div class="visit">当前观看人数:{{ info.lookNum }}</div>
    <h3 class="split-line"></h3>
    <div class="title">产品名: {{ productName }}</div>
    <van-button type="primary" @click.stop="getProductNmae">获取产品名</van-button>
    <h3 class="split-line"></h3>
    <div class="product-list">
      <div class="product-row" v-for="(item, index) in productList.list" :key="index">
        <div class="product-r-item1">{{ item.id }}</div>
        <div class="product-r-item2">{{ item.name }}</div>
      </div>
    </div>
  </div>

  <!-- 吸低导航 -->
  <Tabbar curPage="product"></Tabbar>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
