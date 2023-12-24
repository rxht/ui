<template>
  <div class="row">
    <r-switch v-model="value1" size="mini" onText="开" offText="关" />
    <r-switch v-model="value2" size="small" onText="开" offText="关" />
    <r-switch v-model="value2" onText="开" offText="关" />
    <r-switch v-model="value3" size="large"  onText="开" offText="关" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
</script>