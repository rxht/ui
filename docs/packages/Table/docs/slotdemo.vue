<template>
  <div>
    <r-table :fileds="fileds" :datas="datas" >
    <!-- 表头插槽 -->
    <template #head-job="item">
      <div>=== {{ item.scope.label }} ===</div>
    </template>
    <template #head-id="item">
      <div style="color: blue;">{{ item.scope.label }}</div>
    </template>

    <!-- 表格内容插槽 -->
    <template #name="item">
      <div style="color: red;">{{ item.scope.row.name }}</div>
    </template>
  
  
    <!-- 自定义操作列，但是需要在fileds中新增一列，且field名称需要与本插槽命名一致-->
    <template #action="item">
      <div>编辑</div>
      <div>删除</div>
    </template>
    </r-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const fileds = reactive([
  { field: 'id', label: 'ID' },
  { field: 'name', label: '姓名' },
  { field: 'job', label: '职业' },
  { field: 'explain', label: '说明' },
  { field: 'action', label: '操作' }
]);
const datas = reactive([
  {
    id: 0,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  },
  {
    id: 1,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  },
  {
    id: 2,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  },
  {
    id: 3,
    name: '荣轩浩',
    job: '程序员',
    explain: '这是说明、这是说明、这是说明'
  }
]);
</script>
