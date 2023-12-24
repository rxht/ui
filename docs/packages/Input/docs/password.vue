<template>
  <div class="row">
    <r-input type="password" v-model="value" placeholder="密码输入框" />
  </div>
  <div class="row">
    <r-input type="password" showPassword v-model="value" placeholder="可切换显示隐藏的密码输入框" />
  </div>
  <div class="row">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const value = ref('')
</script>