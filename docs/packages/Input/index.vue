<template>
  <div class="r-input">
    <div class="r-input-prepend" v-if="isPrepend && type === 'text' && !showPassword">
      <div v-if="prepend">{{ prepend }} </div>
      <slot name="prepend" v-else />
    </div>

    <div class="r-input-content" :class="rInputClass" >
      <div class="icon icon-left" v-if="isPrefix && !showPassword">
        <r-icon color="#9fa3ad" v-if="prefixIcon" :name="prefixIcon" />
        <slot name="prefix" v-else />
      </div>

      <input :type="inptype" :value="modelValue" @input="input" @focus="focus" @blur="blur" @change="change" :placeholder="placeholder" :autofocus="autofocus" :readonly="readonly" :form="form" :disabled="disabled" />
      <r-icon color="#9fa3ad" class="icon icon-right icon-sys" v-if="showPassword && modelValue !== ''" :name="inptype === 'password' ? 'rxh-eye' : 'rxh-eye-close'" @click="showAndHidePassword" />
      <r-icon color="#9fa3ad" class="icon icon-right icon-sys" v-if="!showPassword && clearable && modelValue !== ''" name="rxh-close-circle" @click="clear" />
      
      <div class="icon icon-right" v-if="isSuffix && !showPassword">
        <r-icon color="#9fa3ad"  v-if="suffixIcon" :name="suffixIcon" /> 
        <slot name="suffix" v-else />
      </div>
    </div>

    <div class="r-input-append" v-if="isAppend && type === 'text' && !showPassword"> 
      <div v-if="append">{{ append }}</div>
      <div><slot name="append" /></div>
     </div>
    
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'change', 'clear'])

const props = defineProps({
  modelValue: [String, Number],
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  type: {
    type: String,
    default: 'text'
  },
  prefixIcon: String,
  suffixIcon: String,
  autofocus: Boolean,
  prepend: String,
  append: String,
  form: String,
  size: {
    type: Number,
    default: 32
  },
  fontSize: {
    type: Number,
    default: 14
  }
})

const $slot = useSlots();

const isPrepend = computed(() => (props.prepend || $slot['prepend']))
const isAppend = computed(() => (props.append || $slot['append']))
const isPrefix = computed(() => (props.prefixIcon || $slot['prefix']))
const isSuffix = computed(() => (props.suffixIcon || $slot['suffix']))

const rInputClass = computed(() => {
  return [
    {'is-disabled': props.disabled},
    {'is-prepend': isPrepend.value},
    {'is-append': isAppend.value}
  ]
})

const rInputHeight = computed(() => props.size > 0 ? `${props.size}px` : '32px')
const rInputFontSize = computed(() => props.fontSize > 0 ? `${props.fontSize}px` : '14px')


const inptype = ref(props.type)
const showAndHidePassword = () => {
  inptype.value = inptype.value === 'text' ? 'password' : 'text'
}


const input = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
  emit('input', value)
}

const focus  = (event: Event) =>{
  emit('focus', event)
}

const blur  = (event: Event) =>{
  emit('blur', event)
}
const change = (event: Event) =>{
  emit('change', event)
}
const clear = (event: Event) =>{
  emit('update:modelValue', "")
  emit('clear')
}

</script>

<style scoped lang="scss">

.r-input {
  position: relative;
  width: 100%;
  height: v-bind(rInputHeight);
  display: inline-flex;
  font-size: v-bind(rInputFontSize);
  line-height: v-bind(rInputHeight);

  &-prepend,
  &-append {
    background-color: #f5f7fa;
    color: #909399;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    border-radius: 4px;
    padding: 0 10px;
    white-space: nowrap;
  }

  &-prepend {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 1px 0 0 0 #dcdfe6 inset, 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset;
  }

  &-append {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset, -1px 0 0 0 #dcdfe6 inset;
  }

  &-content {
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding: 1px 11px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    background-image: none;


    &.is-disabled {
      background-color: #f5f7fa;

      &:hover,
      &:focus {
        input {
          cursor: not-allowed;
          background-image: none;
        }
      }
    }

    &.is-prepend {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &.is-append {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .icon {
      display: inline-flex;
      align-items: center;
      color: #c6c8cc;
    }
    .icon-sys {
      cursor: pointer;
    }
    .icon-left {
      margin-right: 8px;
    }
    .icon-right {
      margin-left: 8px;
    }
    
    input {
      width: 100%;
      height: 100%;
      line-height: 100%;
      font-size: v-bind(rInputFontSize);
      margin: 0;
      padding: 0;
      outline: none;
      border: none;
      box-sizing: border-box;
      color:#606266;
      background: none;
      box-sizing: border-box;

      &::placeholder {
        color: #c6c8cc;
      }
    }

  }

}
</style>