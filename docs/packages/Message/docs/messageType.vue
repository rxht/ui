<template>
  <div class="row around">
    <r-button @click="openInfo">info</r-button>
    <r-button @click="openSuccess">success</r-button>
    <r-button @click="openWarning">warning</r-button>
    <r-button @click="openError">error</r-button>
    <r-button @click="openCustom">custom</r-button>
  </div>
</template>

<script lang="ts" setup>
import { rMessage } from '../index'
const openInfo = () => {
  rMessage({
    text: '默认消息提示'
  })
}
const openSuccess = () => {
  rMessage({
    text: '默认消息提示',
    type: 'success'
  })
}
const openWarning = () => {
  rMessage({
    text: '默认消息提示',
    type: 'warning'
  })
}
const openError = () => {
  rMessage({
    text: '默认消息提示',
    type: 'error'
  })
}
const openCustom = () => {
  rMessage({
    text: '默认消息提示',
    type: 'custom',
    icon: 'rxh-message',
    color: 'red',
    bgcolor: 'blue'
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