<template>
  <div class="row">
    <r-input v-model="value" placeholder="输入框大小" :size="40" />
  </div>
  <div class="row">
    <r-input v-model="value" placeholder="输入框大小" :size="50" :fontSize="20" suffixIcon="rxh-home" />
  </div>
  <div class="row">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const value = ref('')
  
</script>