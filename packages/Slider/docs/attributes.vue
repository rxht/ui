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
    attribute: 'modelValue/v-model',
    description: '绑定值',
    type: 'number',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'min',
    description: '最小值',
    type: 'number',
    range: ' - ',
    default: '0'
  },
  {
    attribute: 'max',
    description: '最大值',
    type: 'number',
    range: ' - ',
    default: '100'
  },
  {
    attribute: 'height',
    description: '高度（vertical设置为true时生效）',
    type: 'string',
    range: ' - ',
    default: '150px'
  },
  {
    attribute: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'vertical',
    description: '是否竖直方向',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'step',
    description: '步长',
    type: 'Number',
    range: '[1 - 100]',
    default: '1'
  },
  {
    attribute: 'showStops',
    description: '是否显示步长点',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'color',
    description: '滑块颜色',
    type: 'String',
    range: ' - ',
    default: '#409eff'
  },
  {
    attribute: 'format',
    description: '文字提示格式化函数',
    type: 'Function as PropType<(val: number) => number | string>',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'showTooltip',
    description: '是否显示文字提示',
    type: 'Boolean',
    range: 'true/false',
    default: 'true'
  },
  {
    attribute: 'tooltipEffect',
    description: '文字提示主题',
    type: 'String',
    range: 'dark/light',
    default: 'dark'
  }
]);
</script>
