<template>
  <div class="rxh-ui">
    <header-info></header-info>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import HeaderInfo from '@/components/HeaderInfo.vue';
</script>

<style lang="scss" scoped>
.rxh-ui {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>

<style>
html,
body,
div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
