<template>
  <div>
    <r-slider v-model="value1" color="#00f0f0" />
    <r-slider v-model="value2" color="#ff00ff" />
    <r-slider v-model="value3" color="#ffff00" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(20);
const value3 = ref(0);
</script>
