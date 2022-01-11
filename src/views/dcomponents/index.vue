<template>
  <section class='container'>
    <div class="d-wrap">
      <div class="d-w-title">动态组件</div>
      <div class="d-w-main">
        <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
          @click.stop="currentTabChange(tab)">{{ tab }}</button>

        <component :is="currentTab" class="tab"></component>
      </div>
    </div>

    <div class="d-wrap">
      <div class="d-w-title">动态组件 keep-live</div>
      <div class="d-w-main">
        <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
          @click.stop="currentTabChange(tab)">{{ tab }}</button>

        <keep-alive>
          <component :is="currentTab" class="tab"></component>
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
