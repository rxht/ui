<template>
  <div class="row">
    <r-input disabled v-model="value" placeholder="禁用输入框" />
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const value = ref('')
  
</script>