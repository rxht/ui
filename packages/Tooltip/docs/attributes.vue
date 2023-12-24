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
    attribute: 'placement',
    description: 'Tooltip 显示位置',
    type: 'String',
    range: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'top'
  },
  {
    attribute: 'content',
    description: 'Tooltip 显示内容',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'transition',
    description: 'Tooltip 动画名称',
    type: 'String',
    range: ' - ',
    default: 'r-tooltip'
  },
  {
    attribute: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'trigger',
    description: 'Tooltip 触发方式',
    type: 'String',
    range: 'click/hover/manual/focus/contextmenu',
    default: 'hover'
  },
  {
    attribute: 'timeout',
    description: 'Tooltip hover时所显示时间',
    type: 'Number',
    range: ' - ',
    default: '0.3'
  },
  {
    attribute: 'width',
    description: 'Tooltip 所显示的宽度',
    type: 'Number',
    range: ' - ',
    default: 'auto'
  },
  {
    attribute: 'effect',
    description: 'Tooltip 主题',
    type: 'String',
    range: 'dark/light/自定义的css类名',
    default: 'dark'
  },
  {
    attribute: 'v-model',
    description: 'Tooltip 触发方式为手动触发模式时的是否可见属性',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
]);
</script>
