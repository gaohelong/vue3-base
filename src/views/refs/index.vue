<template>
  <section class='container'>
    <HelloWorld :msg="componentMsg" @changeMsg="changeMsg" ref="hellowordRef" />
  </section>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less" scoped></style>
