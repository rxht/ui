<template>
  <div :class="rTableClass">
    <table border="0" cellpadding="0" cellspacing="0">
      <colgroup>
        <col
          v-for="(headerItem, headerIndex) in fileds"
          :key="headerIndex"
          :name="`column_${headerIndex}`"
          :width="headerItem.width > 0 ? `${headerItem.width}px` : 'auto'"
        />
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="(headerItem, headerIndex) in fileds"
            :key="headerIndex"
            :style="[{ 'text-align': headerItem.align }]"
          >
            <slot
              :name="'head-' + headerItem.field"
              :scope="headerItem"
              v-if="$slot['head-' + headerItem.field]"
            ></slot>
            <div v-else>{{ headerItem.label }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trItem, trIndex) in datas" :key="trIndex">
          <td
            v-for="(tdItem, tdIndex) in fileds"
            :key="tdIndex"
            :style="[{ 'text-align': tdItem.align }]"
          >
            <slot
              :name="tdItem.field"
              :scope="{
                rowIndex: trIndex,
                cellIndex: tdIndex,
                row: trItem,
                name: tdItem.field
              }"
              v-if="$slot[tdItem.field]"
            ></slot>
            <div v-else>{{ showContent(trItem[tdItem.field]) }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { defaultText } from 'Packages/Utils/Utils';
const props = defineProps({
  fileds: {
    type: Object,
    default: []
  },
  datas: {
    type: Object,
    required: true,
    default: []
  },
  stripe: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  emptyText: {
    type: String,
    default: ''
  }
});
const $slot = useSlots();

const showContent = (data: string | number) =>
  defaultText(data, props.emptyText);
const rTableClass = computed(() => {
  return [
    'r-table',
    { 'r-table_stripe': props.stripe },
    { 'r-table_border': props.border }
  ].filter((item) => !!item);
});
</script>

<style scoped lang="scss">
.r-table {
  width: 100%;
  height: auto;
  overflow: hidden;

  table {
    width: 100%;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;

    tr:nth-child(2n),
    thead {
      background-color: #ffffff;
    }

    thead {
      font-weight: 500;

      th {
        margin: 0;
        padding: 6px 13px;
        min-width: 0;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #f0f0f0;
      }
    }
    tbody {
      td {
        margin: 0;
        padding: 6px 13px;
        min-width: 0;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #f0f0f0;
      }
    }

    tr {
      border: none;
    }
  }

  // 显示条纹
  &_stripe {
    table {
      tr:nth-child(2n),
      thead {
        background-color: #fafafa;
      }
    }
  }
  // 显示边框
  &_border {
    table {
      thead {
        th {
          border: 1px solid #f0f0f0;
        }
        th:not(:last-child) {
          border-right: none;
        }
      }
      tbody {
        td {
          border: none;
          border-left: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }
        td:last-child {
          border-right: 1px solid #f0f0f0;
        }
      }
    }
  }
}
</style>
