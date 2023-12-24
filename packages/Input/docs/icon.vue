<template>
  <div class="row">
    <r-input prefixIcon="rxh-like" v-model="value" />
  </div>
  <div class="row">
    <r-input suffixIcon="rxh-home" v-model="value" placeholder="右侧图标输入框" />
  </div>
  <div class="row">
    <r-input prefixIcon="rxh-like" suffixIcon="rxh-home" v-model="value" placeholder="两侧图标输入框" />
  </div>
  <div class="row">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const value = ref('')
  
</script>