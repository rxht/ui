<template>
  <div class="row">
    <r-switch v-model="value1" loading onColor="#ff00ff" size="large" />
    <r-switch v-model="value2" loading offColor="#f0f000" />
    <r-switch v-model="value3" loading size="small" />
    <r-switch v-model="value4" loading size="mini" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(true)
const value4 = ref(false)
</script>