<template>
  <div>
    <r-table :fileds="fileds" :datas="datas" stripe border/>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const fileds = reactive([
  { field: 'slotname', label: '插槽名称' },
  { field: 'description', label: '描述' },
  { field: 'example', label: '例子' }
]);
const datas = reactive([
  {
    slotname: 'default',
    description: '回到顶部内容插槽',
    example: '查看回到顶部基础用法'
  },
]);
</script>
