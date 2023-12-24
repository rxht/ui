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
    type: 'string/number',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'disabled',
    description: '输入框禁用',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'Boolean',
    description: '输入框只读',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'clearable',
    description: '是否可清空',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'showPassword',
    description: '是否切换显示隐藏密码',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'type',
    description: '输入框类型',
    type: 'String',
    range: 'text/password',
    default: 'text'
  },
  {
    attribute: 'prefixIcon',
    description: '输入框前缀图标',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'suffixIcon',
    description: '输入框后缀图标',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'autofocus',
    description: '原生属性，自动获取焦点',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'form',
    description: '原生属性',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'size',
    description: '输入框大小',
    type: 'Number',
    range: ' - ',
    default: '32'
  },
  {
    attribute: 'fontSize',
    description: '输入框内字体大小',
    type: 'String',
    range: ' - ',
    default: '14'
  },
]);
</script>
