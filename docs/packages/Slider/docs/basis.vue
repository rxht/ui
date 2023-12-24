<template>
  <div>
    <r-slider v-model="value1" />
    (默认) - {{ value1 }}
    <r-slider v-model="value2" />
    (具有初始值20) - {{ value2 }}
    <r-slider v-model="value3" disabled />
    (禁用) - {{ value3 }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(20);
const value3 = ref(0);
</script>
