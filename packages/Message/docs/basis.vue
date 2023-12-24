<template>
  <div class="row around">
    <r-button @click="openMsg">消息提示</r-button>
    <r-button @click="openVNodeMsg">消息提示(VNode)</r-button>
  </div>
</template>

<script lang="ts" setup>
import { rMessage } from '../index'
import { h } from 'vue'
const openMsg = () => {
  rMessage({
    text: '默认消息提示'
  })
}

const openVNodeMsg = () => {
  rMessage({
    text: h('p', null, { default: () => [
      h('span', null, { default: () => ['Message can be '] }),
      h('i', { style: 'color: teal' }, { default: () => ['VNode'] }),
    ]})
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