<template>
  <div>
    <r-slider v-model="value1" :step="10"/>
    (步长为 10)
    <r-slider v-model="value2" :step="20" showStops/>
    (步长为 20)
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0)
const value2 = ref(20)
</script>