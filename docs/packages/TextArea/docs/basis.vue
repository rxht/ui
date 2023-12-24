<template>
  <div>
    <r-text-area v-model="textarea" :resize="false"/>
    <p>{{textarea}}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue' 
const textarea = ref('')
</script>