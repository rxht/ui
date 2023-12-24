<template>
  <div class="row">
    <r-input v-model="value">
      <template #prefix>
        <r-icon class="rxh-like"></r-icon>
      </template>
    </r-input>
  </div>
  <div class="row">
    <r-input v-model="value" placeholder="右侧图标输入框">
      <template #suffix>
        <r-icon class="rxh-home"></r-icon>
      </template>
    </r-input>
  </div>
  <div class="row">
    <r-input
      v-model="value"
      placeholder="两侧图标输入框"
    >
      <template #prefix>
        <r-icon class="rxh-like"></r-icon>
      </template>
      <template #suffix>
        <r-icon class="rxh-home"></r-icon>
      </template>
    </r-input>
  </div>
  <div class="row">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
</script>
