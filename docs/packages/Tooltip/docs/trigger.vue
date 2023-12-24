<template>
  <div class="row around">
    <r-tooltip content="hover" placement="top" effect="light" trigger="hover">
      <r-button colorInvert radius="default">hover</r-button>
    </r-tooltip>
    <r-tooltip content="click" placement="top" effect="light" trigger="click">
      <r-button colorInvert radius="default">click</r-button>
    </r-tooltip>
    <r-tooltip content="click" placement="top" effect="light" trigger="contextmenu">
      <r-button colorInvert radius="default">contextmenu</r-button>
    </r-tooltip>
    <r-tooltip content="focus" placement="top" effect="light" trigger="focus">
      <r-button colorInvert radius="default">focus</r-button>
    </r-tooltip>
    <r-tooltip content="manual" placement="top" effect="light" trigger="manual" v-model="visible">
      <r-button colorInvert radius="default" @click="showOrHide">manual</r-button>
    </r-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let visible = ref(false);
const showOrHide = () => visible.value = !visible.value;
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
