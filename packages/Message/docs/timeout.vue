<template>
  <div class="row around">
    <r-button @click="open1s">1s</r-button>
    <r-button @click="open2s">2s</r-button>
  </div>
</template>

<script lang="ts" setup>
import { rMessage } from '../index'
const open1s = () => {
  rMessage({
    text: '默认消息提示',
    timeout: 1000
  })
}
const open2s = () => {
  rMessage({
    text: '默认消息提示',
    timeout: 2000
  })
}
</script>

<style scoped lang="scss">
 .row {
  display: flex;
  align-items: center;
  margin-top: 40px;

  &.between {
    justify-content: space-between;
  }
  &.around {
    justify-content: space-around;
  }
}
</style>