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
    attribute: 'vHeight',
    description: '滚动多高显示返回顶部按钮',
    type: 'Number',
    range: ' - ',
    default: '200'
  },
  {
    attribute: 'target',
    description: '滚动事件的dom对象或名称/属性',
    type: 'String/HTMLElement',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'right',
    description: '距离右侧宽度',
    type: 'Number',
    range: ' - ',
    default: '40'
  },
  {
    attribute: 'bottom',
    description: '距离底部高度',
    type: 'Number',
    range: ' - ',
    default: '40'
  },
  {
    attribute: 'size',
    description: '按钮大小',
    type: 'Number',
    range: ' - ',
    default: '40'
  },
  {
    attribute: 'iconSize',
    description: '图标大小（如果未设置则为size * 0.7）',
    type: 'Number',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'color',
    description: '图标或文字颜色',
    type: 'String',
    range: ' - ',
    default: '#409eff'
  },
  {
    attribute: 'bgColor',
    description: '背景颜色',
    type: 'String',
    range: ' - ',
    default: '#ffffff'
  },
  {
    attribute: 'zIndex',
    description: '层高',
    type: 'Number',
    range: ' - ',
    default: '1'
  },
]);
</script>
