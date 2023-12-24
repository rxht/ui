<template>
  <div class="row">
    <r-switch v-model="value1" onColor="#f0f0f0" offColor="#0f0f0f"/>
    <r-switch v-model="value2" onColor="#ff0000" offColor="#00ff00"/>
    <r-switch v-model="value3" onColor="#0000ff" offColor="#ffff00"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
</script>