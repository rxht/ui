<template>
  <div class="row">
    <r-input clearable v-model="value" placeholder="可清空输入框" />
  </div>
  <div class="row">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const value = ref('')
  
</script>