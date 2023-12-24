<template>
  <button class="r-button" :class="rButtonClass" :disabled="disabled" @click="$emit('click', $event)">
    <r-icon v-if="!!prefixIcon || !!rLoadingIcon" :name="prefixIcon || rLoadingIcon" :size="size" :color="rIcolor" :loading="loading"/>
    <span class="r-button-span" v-if="!!useSlots().default">
      <slot></slot>
    </span>
    <r-icon v-if="!!suffixIcon" :name="suffixIcon" :size="size" :color="rIcolor" :loading="loading"/>
  </button>
</template>

<script lang="ts" setup>
import { enumKeys } from 'Packages/Utils/Utils';
import { computed, useSlots } from 'vue';
import { ButtonColor, ButtonType } from './utils/consts';

defineEmits(['click'])

const props = defineProps({
  radius: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 16
  },
  color: String,
  colorInvert: Boolean,
  bdcolor: String,
  prefixIcon: String,
  suffixIcon: String,
  iconcolor: String,
  loading: Boolean,
  disabled: Boolean,
  border: {
    type: Boolean,
    default: true
  },
})

const ButtonTypes = enumKeys(ButtonType)
const rButtonType = computed(() => ButtonTypes.includes(props.radius) ? props.radius : ButtonType.none)
const rButtonColor = computed(() => !!props.color ? Object.keys(ButtonColor).includes(props.color) ? ButtonColor[props.color] : props.color : ButtonColor.primary)
const rButtonbdColor = computed(() => !!props.bdcolor ? props.bdcolor : 'none')
const rIcolor = computed(() => !!props.iconcolor ? props.iconcolor : props.colorInvert ? rButtonColor.value : '#ffffff')
const rButtonSize =  computed(() => `${props.size - 2}px`)
const rLoadingIcon = computed(() => props.loading && !props.prefixIcon && !props.suffixIcon ? 'rxh-sync' : '')

const rButtonClass = computed(() => {
  return [
    `r-button-${rButtonType.value}`,
    {'is-colorInvert': props.colorInvert},
    {'is-border': !props.border},
    {'is-disabled': props.disabled},
    {'is-loading': props.loading},
    {'is-icon': !!props.prefixIcon || !!props.suffixIcon || props.loading},
  ]
})
</script>

<style scoped lang="scss">
button {
  outline: none;
  border: none;
}

.r-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  appearance: none;
  padding: 8px 15px;
  background: v-bind(rButtonColor);
  border: 1px solid v-bind(rButtonColor);
  color: #ffffff;
  cursor: pointer;

  &.is-icon {
    .r-button-span {
      margin: 0 3px;
    }
  }
  
  &.is-loading::after,
  &.is-disabled::after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    opacity: .4;
  }

  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    cursor: not-allowed;
    background-image: none;
  }

  &.is-loading,
  &.is-loading:hover,
  &.is-loading:focus {
    cursor: auto;
    background-image: none;
  }

  &-span {
    line-height: v-bind(rButtonSize);
    font-size: v-bind(rButtonSize);
    // TODO: 需要修复
  }

  &-none {
    border-radius: 0px;
     &.is-disabled::after {
      border-radius: 0px;
    }
  }
  &-default {
    border-radius: 4px;
     &.is-disabled::after {
      border-radius: 4px;
    }
  }
  &-round {
    border-radius: 20px;
     &.is-disabled::after {
      border-radius: 20px;
    }
  }
  &-circle {
    padding: 8px;
    border-radius: 50%;
     &.is-disabled::after {
      border-radius: 50%;
    }
  }
  &.is-colorInvert {
    background: v-bind(rButtonbdColor);
    border-color: v-bind(rButtonColor);
    color: v-bind(rButtonColor);
  }

  &.is-border {
    border: none;

    &.is-loading::after,
    &.is-disabled::after {
      top: 0;
      left: 0;
    }
  }
}
</style>