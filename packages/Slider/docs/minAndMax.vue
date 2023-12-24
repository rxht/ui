<template>
  <div>
    <r-slider v-model="value1" :min="20" />
    (可移动范围 20 - 100)
    <r-slider v-model="value2" :max="60" />
    (可移动范围 0 - 60)
    <r-slider v-model="value3" :min="20" :max="60" />
    (可移动范围 20 - 60)
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(20);
const value2 = ref(20);
const value3 = ref(20);
</script>
