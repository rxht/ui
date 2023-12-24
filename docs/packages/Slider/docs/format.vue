<template>
  <div>
    <r-slider v-model="value1" :format="(val: number) => val / 100"/>
    (格式: 值/100) - {{value1}}
    <r-slider v-model="value2" :format="(val: number) => `${val}°`"/>
    (格式: 值°) - {{value2}}
    <r-slider v-model="value3" :format="(val: number) => `${val} ml`"/>
    (格式: 值 ml) - {{value3}}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0)
const value2 = ref(20)
const value3 = ref(0)

</script>