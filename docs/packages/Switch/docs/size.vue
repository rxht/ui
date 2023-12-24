<template>
  <div class="row">
    <r-switch v-model="value1" size="large" />
    <r-switch v-model="value2" />
    <r-switch v-model="value3" size="small" />
    <r-switch v-model="value4" size="mini" />
  </div>
  <div class="row">
    <r-switch v-model="value1" onColor="#ffff00" offColor="#ff00ff" size="large" />
    <r-switch v-model="value2" onColor="#0000ff" offColor="#00ff00" />
    <r-switch v-model="value3" onColor="#ff0000" offColor="#00ffff" size="small" />
    <r-switch v-model="value4" onColor="#956565" offColor="#485265" size="mini" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
</script>