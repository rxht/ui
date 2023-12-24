<template>
  <div class="r-tooltip">
    <transition
      :name="transition"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave"
    >
      <div
        class="tooltip-box"
        :class="rTooltipBoxClass"
        v-show="!disabled && isShow"
      >
        <div class="arrow" ref="popoverArrow"></div>
        <div class="content">
          <div class="content-text" v-if="content" v-text="content"></div>
        </div>
      </div>
    </transition>

    <div
      class="r-tooltip-reference"
      @click="clickTriggerHandler"
      @contextmenu="contextmenuTriggerHandler"
      @mousedown="focusTriggerHandler"
      @mouseup="blurTriggerHandler"
      @mouseenter="hoverEnterHandler"
      @mouseleave="hoverLeaveHandler"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { PlacementType, TriggerType } from './utils/consts';
import { ParameterInvalid } from 'Packages/Utils/validator';

const emit = defineEmits(['update:modelValue', 'after-enter', 'after-leave']);

const props = defineProps({
  placement: {
    type: String,
    default: 'top',
    validator: ParameterInvalid(PlacementType)
  },
  content: String,
  transition: {
    type: String,
    default: 'r-tooltip'
  },
  disabled: Boolean,
  trigger: {
    type: String,
    default: 'hover',
    validator: ParameterInvalid(TriggerType)
  },
  timeout: {
    type: Number,
    default: 0.3
  },
  width: {
    type: Number,
    default: 0
  },
  effect: {
    type: String,
    default: 'dark',
  },
  modelValue: Boolean
});

const rTooltipBoxWidth = computed(() => {
  return props.width > 0 ? `${props.width}px`: 'auto'
})
const rTooltipBoxClass = computed(() => {
  return [props.placement, props.effect];
});

const visible = ref(false);
const isShow = computed(() =>
  props.trigger !== 'manual' ? visible.value : props.modelValue
);

/**
 * @function 弹窗显示时触发
 */
const handleAfterEnter = () => {
  emit('after-enter');
};
/**
 * @function 弹窗消时时触发
 */
const handleAfterLeave = () => {
  emit('after-leave');
};


/**
 * @function 点击触发
 */
function clickTriggerHandler(event: Event) {
  if (props.disabled) return
  if (props.trigger.toLowerCase() !== "click") return
  event.preventDefault()
  visible.value = !visible.value;
}

/**
 * @function 右键触发
 */
function contextmenuTriggerHandler(event: Event) {
  if (props.disabled) return
  if (props.trigger.toLowerCase() !== "contextmenu") return
  event.preventDefault()
  visible.value = !visible.value;
}

/**
 * @function 聚焦触发
 */
function focusTriggerHandler(event: Event) {
  if (props.disabled) return
  if (props.trigger.toLowerCase() !== "focus") return
  event.preventDefault()
  visible.value = true
}

/**
 * @function 失焦消时
 */
function blurTriggerHandler(event: Event) {
  if (props.disabled) return
  if (props.trigger.toLowerCase() !== "focus") return
  event.preventDefault()
  visible.value = false
}

const timer = ref<NodeJS.Timeout | null>(null);
/**
 * @function hover——鼠标移入触发
 */
const hoverEnterHandler = (event: Event) => {
  if (props.disabled) return;
  if (props.trigger.toLowerCase() !== 'hover') return;
  event.preventDefault()
  timer.value && clearTimeout(timer.value);
  visible.value = true;
};
/**
 * @function hover——鼠标移出触发
 * @description 当鼠标移出时，有个300ms的延时，如果在期间再次移入，则清空定时器，并当再次移出时，重新计时
 */
const hoverLeaveHandler = (event: Event) => {
  if (props.disabled) return;
  if (props.trigger.toLowerCase() === 'hover') {
  event.preventDefault()
    timer.value = setTimeout(() => {
      visible.value = false;
    }, props.timeout * 1000);
  }
  if (props.trigger.toLowerCase() === 'focus') {
  event.preventDefault()
    visible.value = false
  }
};

</script>

<style scoped lang="scss">

.r-tooltip {
  display: inline-block;
  position: relative;

  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.6, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  .tooltip-box {
    position: absolute;
    z-index: 1001;

    &.dark {
      
      .arrow::before {
        background: #383a42;
        border: 1px solid #484a50;
      }

      .content {
        background: #383a42;
        border: 1px solid #484a50;
        color: #ffffff;
      }
    }

    &.light {
      .arrow::before {
        background: #ffffff;
        border: 1px solid #c2c6cd;
      }

      .content {
        background: #ffffff;
        border: 1px solid #c2c6cd;
        color: #383a42;
      }
    }

    .arrow {
      position: absolute;
      width: 10px;
      height: 10px;
      // z-index: -1;
      
      &::before {
        position: absolute;
        width: 10px;
        height: 10px;
        content: "";
        transform: rotate(45deg);
        box-sizing: border-box;
      }
    }

    .content {
      display: inline-flex;
      overflow: auto;
      width: v-bind(rTooltipBoxWidth);
      font-size: 10px;
      padding: 4px 12px;
      border-radius: 4px;

      &-text {
        width: max-content;
      }
    }

    &.top-start,
    &.top,
    &.top-end {
      bottom: 100%;
      margin-bottom: 12px;

      .arrow {
        top: 100%;
        transform: translate(-50%, -60%);
        
        &::before {
          border-bottom-right-radius: 2px;
          border-top-color: transparent !important;
          border-left-color: transparent !important;
        }
      }
    }

    &.bottom-start,
    &.bottom,
    &.bottom-end {
      top: 100%;
      margin-top: 12px;

      .arrow {
        bottom: 100%;
        transform: translate(-50%, 60%);
        
        &::before {
          border-top-left-radius: 2px;
          border-bottom-color: transparent !important;
          border-right-color: transparent !important;
        }
      }
    }

    &.top-start,
    &.bottom-start {
      left: 0;

      .arrow {
        left: 12px;
      }
    }

    &.top,
    &.bottom {
      left: 50%;
      transform: translateX(-50%);

      .arrow {
        left: 50%;
      }
    }

    &.top-end,
    &.bottom-end {
      right: 0;

      .arrow {
        right: 12px;
      }
    }

    &.left-start,
    &.left,
    &.left-end {
      right: 100%;
      margin-right: 12px;

      .arrow {
        left: 100%;
        transform: translate(-60%, -50%);
        
        &::before {
          border-top-right-radius: 2px;
          border-bottom-color: transparent !important;
          border-left-color: transparent !important;
        }
      }
    }

    &.right-start,
    &.right,
    &.right-end {
      left: 100%;
      margin-left: 12px;

      .arrow {
        right: 100%;
        transform: translate(60%, -50%);
        
        &::before {
          border-bottom-left-radius: 2px;
          border-top-color: transparent !important;
          border-right-color: transparent !important;
        }
      }
    }

    &.right-start,
    &.left-start {
      top: 0;

      .arrow {
        top: 12px;
      }
    }

    &.right,
    &.left {
      top: 50%;
      transform: translateY(-50%);

      .arrow {
        top: 50%;
      }
    }

    &.right-end,
    &.left-end {
      bottom: 0;

      .arrow {
        bottom: 4px;
      }
    }
  }

  &-reference {
    position: relative;
    display: flex;
    justify-items: center;
  }
}
</style>
