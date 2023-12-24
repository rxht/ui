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
    attribute: 'radius',
    description: '按钮半径',
    type: 'String',
    range: 'none/default/round/circle',
    default: 'none'
  },
  {
    attribute: 'size',
    description: '按钮大小',
    type: 'Number',
    range: ' - ',
    default: '16'
  },
  {
    attribute: 'color',
    description: '按钮颜色',
    type: 'String',
    range: ' - ',
    default: '#409eff'
  },
  {
    attribute: 'colorInvert',
    description: '按钮是否反转颜色',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'bdcolor',
    description: '按钮反转后的背景颜色（需要开启反转颜色后生效）',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'icon',
    description: '按钮图标',
    type: 'String',
    range: ' - ',
    default: ' - '
  },
  {
    attribute: 'iconLeft',
    description: '图标是否在按钮左侧',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'iconcolor',
    description: '图标颜色，如果不设置的话在开启颜色反转后将会使用和文字同一颜色',
    type: 'String',
    range: ' - ',
    default: '#ffffff'
  },
  {
    attribute: 'loading',
    description: '是否加载中（如果加载中且没有使用icon的话则采用默认icon进行loading动画）',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'disabled',
    description: '是否禁用',
    type: 'Boolean',
    range: 'true/false',
    default: 'false'
  },
  {
    attribute: 'border',
    description: '是否显示边框（和反转颜色colorInvert搭配使用可实现text文字按钮样式）',
    type: 'Boolean',
    range: 'true/false',
    default: 'true'
  }
]);
</script>
