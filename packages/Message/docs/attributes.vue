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
    attribute: 'type',
    description: '消息提示类型',
    type: 'String',
    range: 'info/success/warning/error/custom',
    default: 'info'
  },
  {
    attribute: 'text',
    description: '消息提示内容',
    type: 'String/VNode',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'icon',
    description: '消息提示图标（仅在类型为custom时有效）',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'bgcolor',
    description: '消息提示背景颜色（仅在类型为custom时有效）',
    type: 'String',
    range: ' - ',
    default: '#333333'
  },
  {
    attribute: 'color',
    description: '消息提示颜色（仅在类型为custom时有效）',
    type: 'String',
    range: ' - ',
    default: '#dddddd'
  },
  {
    attribute: 'close',
    description: '消息提示主动关闭',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
]);
</script>
