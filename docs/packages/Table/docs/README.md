<script setup>
import basis from './basis.vue'
import stripe from './stripe.vue'
import width from './width.vue'
import border from './border.vue'
import align from './align.vue'
import slotdemo from './slotdemo.vue'
import attributes from './attributes.vue'
import slotAttributes from './slotAttributes.vue'
</script>

# 表格

这是一个表格

## 基础用法
<Preview comp-name="Table" demo-name="basis">
  <basis />
</Preview>

## 带边框表格
<Preview comp-name="Table" demo-name="border">
  <border />
</Preview>

## 带斑马纹表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。

stripe 属性可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹。
<Preview comp-name="Table" demo-name="stripe">
  <stripe />
</Preview>

## 带单元格宽度表格
<Preview comp-name="Table" demo-name="width">
  <width />
</Preview>

## 带单元格文字对齐表格
<Preview comp-name="Table" demo-name="align">
  <align />
</Preview>

## 带插槽表格
<Preview comp-name="Table" demo-name="slotdemo">
  <slotdemo />
</Preview>

## Table 属性
<attributes />

## Table 插槽
<slotAttributes />

