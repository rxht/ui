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
  { field: 'default', label: '默认值', width: 100 },
  { field: 'description', label: '描述' }
]);
const datas = reactive([
  {
    attribute: 'name',
    description: '图标名称',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'type',
    description: '图标类型',
    type: 'String',
    range: 'font-class/unicode',
    default: 'font-class'
  },
  {
    attribute: 'size',
    description: '图标大小',
    type: 'Number',
    range: ' - ',
    default: '16'
  },
  {
    attribute: 'color',
    description: '图标颜色',
    type: 'String',
    range: ' - ',
    default: '#000000'
  },
  {
    attribute: 'loading',
    description: '图标是否为加载中状态',
    type: 'Boolean',
    range: 'false/true',
    default: 'false'
  },
  {
    attribute: 'time',
    description: '图标为加载中状态时动画速度',
    type: 'Number',
    range: ' - ',
    default: '2'
  }
]);
</script>
