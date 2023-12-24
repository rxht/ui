<template>
  <div>
    <r-table :fileds="fileds" :datas="datas" stripe/>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const fileds = reactive([
  { field: 'id', label: 'ID' },
  { field: 'name', label: '姓名' },
  { field: 'job', label: '职业' },
  { field: 'explain', label: '说明' }
]);
const datas = reactive([
  {
    id: 0,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  },
  {
    id: 1,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  },
  {
    id: 2,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  },
  {
    id: 3,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  }
]);
</script>
