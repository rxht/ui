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
    attribute: 'onColor',
    description: '开关打开时颜色',
    type: 'String',
    range: ' - ',
    default: '#409eff'
  },
  {
    attribute: 'offColor',
    description: '开关关闭时颜色',
    type: 'String',
    range: ' - ',
    default: '#dcdfe6'
  },
  {
    attribute: 'onIcon',
    description: '开关打开时图标',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'offIcon',
    description: '开关关闭时图标',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'onText',
    description: '开关打开时文字',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'offText',
    description: '开关关闭时文字',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'size',
    description: '开关大小',
    type: 'String',
    range: 'large/small/mini',
    default: ' - '
  },
  {
    attribute: 'loading',
    description: '是否加载中',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'loadingIcon',
    description: '开关加载时图标',
    type: 'String',
    range: ' - ',
    default: 'rxh-sync'
  },
  {
    attribute: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
]);
</script>
