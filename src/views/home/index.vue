<template>
  <div class="container">
    <!-- 吸低导航 -->
    <div class="nav-list">
      <div class="nav-item" @click.stop="goJump('home')">Home</div>
      <div class="nav-item" @click.stop="goJump('product')">产品</div>
      <div class="nav-item" @click.stop="goJump('sign')">签名</div>
      <div class="nav-item" @click.stop="goJump('watch')">Watch</div>
    </div>

    <img class="logo" src="@/assets/logo.png">
    <div class="year" @click.stop="goProduct">幸福陪伴2021介绍</div>
    <HelloWorld :msg="componentMsg" @changeMsg="changeMsg" ref="hellowordRef" />

    <h3 class="split-line"></h3>

    <div class="year">年: {{ year }}</div>
    <div class="name">姓名: {{ params.name }}</div>
    <div class="count">改名次数: {{ params.count }}</div>
    <div class="name">是否学习: {{ zt ? '是' : '否' }}</div>
    <div class="name">只读: {{ rdy.count }}</div>
    <div class="name">作者: {{ author }} - {{ book.author }}</div>

    <div class="btn-list">
      <van-button type="primary" @click.stop="startStudy">开始学习</van-button>
      <van-button type="success" @click.stop="changeName">点我改名</van-button>
      <van-button type="default" @click.stop="changeComponent">修改组件内容</van-button>
      <van-button type="warning" @click.stop="dataReset">数据重置</van-button>
    </div>

    <h3 class="split-line"></h3>
    <div class="list" v-for="(item) in list" :key="item.id">
      <div class="list-row">学员姓名: {{ item.name }}{{ item.id }}</div>
    </div>

    <h3 class="split-line"></h3>
    <div class="user-count-wrap">
      <div class="user-cw-t">当前加减值: {{ uCount }}</div>
      <van-button class="user-cw-add" type="success" @click.stop="uIncrease">加</van-button>
      <van-button type="success" @click.stop="uDecrease">减</van-button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
