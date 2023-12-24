<template>
  <div class="r-text-area" :class="rTextAreaClass">
    <textarea
      :name="name"
      :id="id"
      :cols="cols"
      :rows="rows"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      @input="input"
      @focus="focus"
      @blur="blur"
      @change="change"
      :autofocus="autofocus"
      :readonly="readonly"
      :form="form"
      :disabled="disabled"
    ></textarea>
    <span v-if="maxlength" class="r-text-area-span">
      {{ n }}/{{ maxlength }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const emit = defineEmits([
  'update:modelValue',
  'input',
  'focus',
  'blur',
  'change',
  'clear'
]);

const props = defineProps({
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  form: String,
  id: String,
  name: String,
  rows: {
    type: Number,
    default: 10
  },
  cols: {
    type: Number,
    default: 30
  },
  maxlength: Number,
  resize: {
    type: Boolean,
    default: true
  }
});

const rTextAreaClass = computed(() => {
  return [{ 'is-disabled': props.disabled }];
});
const rTextAreaResize = computed(() => props.resize ? 'auto' : 'none');

const n = ref(0);
const input = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  const maxlength = props.maxlength || Number.MAX_SAFE_INTEGER;
  n.value = value.length > maxlength ? maxlength : value.length;

  emit('update:modelValue', value);
  emit('input', value);
};
const focus = (event: Event) => {
  emit('focus', event);
};
const blur = (event: Event) => {
  emit('blur', event);
};
const change = (event: Event) => {
  emit('change', event);
};
</script>

<style scoped lang="scss">
.r-text-area {
  position: relative;
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;

  textarea {
    padding: 8px 8px 10px 8px;
    outline: none;
    border-radius: 4px;
    font-size: 14px;
    font-family: auto;
    resize: v-bind(rTextAreaResize);

    &:focus {
      border: 1px solid #409eff;
    }
    &::placeholder {
      color: #a8abb2;
    }
  }

  &.is-disabled {
    cursor: no-drop;
  }

  &-span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 12px;
    line-height: 12px;
    color: #a8abb2;
    user-select: none;
  }
}
</style>
