<template>
  <div>
    <r-table :fileds="fileds" :datas="datas" stripe border/>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const fileds = reactive([
  { field: 'attribute', label: '属性' },
  { field: 'type', label: '类型' },
  { field: 'range', label: '可选值' },
  { field: 'default', label: '默认值', width: 80 },
  { field: 'description', label: '描述' }
]);
const datas = reactive([
  {
    attribute: 'fileds',
    description: '表头参数配置包括（label:表头标题，field:对象列表中每一行所对应的属性，width:宽度，align:对齐方向）',
    type: 'Object[]',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'datas',
    description: '表格内容数据（对象列表其中的属性需要与filed所配置的一致方可显示）',
    type: 'Object[]',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'stripe',
    description: '是否为斑马纹',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'border',
    description: '是否显示边框',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'emptyText',
    description: '空数据时显示的文本内容',
    type: 'String',
    range: ' - ',
    default: ''
  }
]);
</script>
