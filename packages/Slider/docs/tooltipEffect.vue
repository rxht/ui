<template>
  <div>
    <r-slider v-model="value1" :showTooltip="false"/>
    隐藏文字提示
    <r-slider v-model="value1" tooltipEffect="dark"/>
    dark主题
    <r-slider v-model="value1" tooltipEffect="light"/>
    light主题
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0)

</script>