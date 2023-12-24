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
  { field: 'priority', label: '优先级' },
  { field: 'example', label: '例子' }
]);
const datas = reactive([
  {
    slotname: '#prefix',
    description: '输入框头部内容插槽',
    priority: '高',
    example: '<template #prefix></template>'
  },
  {
    slotname: '#suffix',
    description: '输入框尾部内容插槽',
    priority: '高',
    example: '<template #suffix></template>'
  },
  {
    slotname: '#prepend',
    description: '复合型输入框头部内容插槽',
    priority: '低',
    example: '<template #prepend></template>'
  },
  {
    slotname: '#append',
    description: '复合型输入框尾部内容插槽',
    priority: '低',
    example: '<template #append></template>'
  },
]);
</script>
