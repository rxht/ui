<template>
  <div class="row">
    <r-switch v-model="value1" size="mini" onIcon="rxh-codelibrary" offIcon="rxh-user" />
    <r-switch v-model="value2" size="small" onIcon="rxh-codelibrary" offIcon="rxh-user" />
    <r-switch v-model="value3" onIcon="rxh-codelibrary" offIcon="rxh-user" />
    <r-switch v-model="value4" size="large"  onIcon="rxh-codelibrary" offIcon="rxh-user" />
  </div>
  <div class="row">
    <r-switch v-model="value1" onColor="#856243" offColor="#aa9512" size="mini" onIcon="rxh-codelibrary" offIcon="rxh-user" />
    <r-switch v-model="value2" onColor="#856243" offColor="#aa9512" size="small" onIcon="rxh-codelibrary" offIcon="rxh-user" />
    <r-switch v-model="value3" onColor="#856243" offColor="#aa9512" onIcon="rxh-codelibrary" offIcon="rxh-user" />
    <r-switch v-model="value4" onColor="#856243" offColor="#aa9512" size="large"  onIcon="rxh-codelibrary" offIcon="rxh-user" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(true)
</script>