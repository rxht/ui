<template>
  <div class="r-switch" :class="rClassSwitch">
    <input class="r-switch-input" type="checkbox" :checked="modelValue" :disabled="disabled" />
    <div class="r-switch-contener" @click="switchStatus">
      <div v-if="size !== 'mini'" class="r-switch-contener-inner">
        <r-icon v-if="onIcon || offIcon" :name="modelValue ? onIcon : offIcon" :size="rIconSizeSwitch" color="#ffffff"/>
        <span v-if="onText || offText">{{modelValue ? onText : offText}}</span>
      </div>
      <div class="r-switch-contener-bar">
        <r-icon v-if="size !== 'mini' && loading" :name="loadingIcon" :size="rIconSizeSwitch" :color="modelValue ? onColor: offColor" :loading="loading"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

const emit = defineEmits(['update:modelValue', 'change'])

const props = defineProps({
  modelValue: Boolean,
  onColor: {
    type: String,
    default: '#409eff'
  },
  offColor: {
    type: String,
    default: '#dcdfe6'
  },
  onIcon: String,
  offIcon: String,
  onText: String,
  offText: String,
  size: String as PropType<'large'|'small'|'mini'>,
  loading: Boolean,
  loadingIcon: {
    type: String,
    default: "rxh-sync",
  },
  disabled: Boolean
})

const rClassSwitch = computed(() => {
  return [
    {'is-checked': props.modelValue},
    {'is-disabled': props.loading || props.disabled},
    props.size
  ]
})

const rIconSizeSwitch = computed(() => {
  return props.size ? props.size !== 'large' ? props.size !== 'small' ? 4 : 12 : 20 : 16
})

const switchStatus = () => {
  if(props.disabled || props.loading) return
  emit('change', !props.modelValue)
  emit('update:modelValue', !props.modelValue)
}

</script>

<style scoped lang="scss">
.r-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 24px;
  height: 24px;
  vertical-align: middle;

  &-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

  &-contener {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 48px;
    height: 24px;
    outline: none;
    border-radius: 12px;
    box-sizing: border-box;
    border: 1px solid v-bind(offColor);
    background: v-bind(offColor);
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;

    &-inner,
    &-bar {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 50%;
      transition: all 0.3s;
      width: 20px;
      height: 20px;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-inner {
      color: #ffffff;
      left: 50%;
      transition: none;
      background-color: transparent;
      user-select: none;
    }
  }

  
  &.is-checked {
    .r-switch-contener {
      border-color: v-bind(onColor);
      background: v-bind(onColor);

      &-inner,
      &-bar {
        left: 100%;
        margin-left: -21px;
      }
      &-inner {
        left: 50%;
        margin-left: -21px;
      }
    }
  }

  &.is-disabled {
    opacity: 0.6;
    .r-switch-contener {
      cursor: not-allowed;
    }
  }

  
  &.large {
    font-size: 20px;
    line-height: 30px;
    height: 30px;
    .r-switch-contener {
      width: 60px;
      height: 30px;
      border-radius: 15px;
      &-inner,
      &-bar {
        width: 26px;
        height: 26px;
      }
    }
    
    &.is-checked {
      .r-switch-contener {
        &-inner,
        &-bar {
          margin-left: -27px;
        }
      }
      
    }
  }

  
  &.small {
    font-size: 8px;
    line-height: 18px;
    height: 18px;
    .r-switch-contener {
      width: 36px;
      height: 18px;
      border-radius: 9px;

      &-inner,
      &-bar {
        width: 14px;
        height: 14px;
      }
    }
    
    &.is-checked {
      .r-switch-contener {
        &-inner,
        &-bar {
          margin-left: -15px;
        }
      }
      
    }
  }

  
  &.mini {
    font-size: 6px;
    line-height: 12px;
    height: 12px;
    .r-switch-contener {
      width: 36px;
      height: 12px;
      border-radius: 9px;
      
      &-inner,
      &-bar {
        width: 18px;
        height: 8px;
        border-radius: 4px;
      }
    }
    
    &.is-checked {
      .r-switch-contener {
        
        &-bar {
          margin-left: -19px;
        }
      }
      
    }
  }
}
</style>