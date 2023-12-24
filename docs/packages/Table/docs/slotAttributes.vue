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
    slotname: '#head-*',
    description: '表头内容插槽，*表示在field中的名称即表示列（例子中job表示列属性）',
    example: '<template #head-job="item"></template>'
  },
  {
    slotname: '#*',
    description: '表格内容插槽，*表示在field中的名称即表示列（例子中name表示列属性）',
    example: '<template #name="item"></template>'
  },
]);
</script>
