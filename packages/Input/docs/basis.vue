<template>
  <div class="row">
    <r-input v-model="value" />
  </div>
  <div class="row">
    <r-input v-model="value" placeholder="基本使用" />
  </div>
  <div class="row">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const value = ref('')
  
</script>