<template>
  <div class="row">
    <r-input v-model="value" placeholder="复合型输入框" prepend="https://" />
  </div>
  <div class="row">
    <r-input v-model="value" placeholder="复合型输入框" append=".com" />
  </div>
  <div class="row">
    <r-input v-model="value" placeholder="复合型插槽输入框">
      <template #prepend>Http://</template>
    </r-input>
  </div>
  <div class="row">
    <r-input v-model="value" placeholder="复合型插槽输入框">
      <template #append>.com</template>
    </r-input>
  </div>
  <div class="row">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const value = ref('')
  
</script>