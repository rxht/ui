<template>
  <div>
    <r-slider v-model="value1" vertical />
    {{ value1 }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref(0);
</script>
