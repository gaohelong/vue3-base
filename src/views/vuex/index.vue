<template>
  <section class='container'>
    <div class="vuex">
      <div class="row">nick: {{ nick }}</div>
      <div class="row">age: {{ age }}</div>
    </div>
  </section>

  <!-- 传送到html元素中 -->
  <teleport to="html">
    <div v-if="modalOpen1" class="modal1">
      <div>
        I'm a teleported modal1!
        (My parent is "html")
        <button @click="closeModal">
          Close
        </button>
      </div>
    </div>
  </teleport>

  <!-- 传送到container元素中 -->
  <teleport to=".container">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal!
        (My parent is "html")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>

  <!-- 吸低导航 -->
  <Tabbar curPage="vuex"></Tabbar>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
