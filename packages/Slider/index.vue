<template>
  <div class="r-slider" :class="rClassSlider">
    <div class="runway" ref="slider">
      <div v-if="showStops">
        <div
          class="stop"
          v-for="(item, key) in stops"
          :key="key"
          :style="getStopStyle(item)"
        />
      </div>
      <div class="bar"></div>
    </div>
    <div
      ref="wrapper"
      class="wrapper"
      @mouseenter="hoverEnterHandler"
      @mouseleave="hoverLeaveHandler"
    >
      <r-tooltip
        v-if="showTooltip"
        :content="`${rSliderTooltip}`"
        placement="top"
        :effect="tooltipEffect"
        trigger="manual"
        v-model="isShowTooltip"
      >
        <r-button
          class="r-slider-button"
          :class="rClassSliderBar"
          radius="circle"
          bdcolor="#ffffff"
          :color="rSliderColor"
          colorInvert
        ></r-button>
      </r-tooltip>
      <r-button
        v-else
        class="r-slider-button"
        :class="rClassSliderBar"
        radius="circle"
        bdcolor="#ffffff"
        :color="rSliderColor"
        colorInvert
      ></r-button>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  shallowRef
} from 'vue';
import { draggable, getClientXY } from 'Packages/Utils/EventUtils';
import Color from 'Packages/Utils/Color';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  height: {
    type: String,
    default: '150px'
  },
  disabled: Boolean,
  vertical: Boolean,
  step: {
    type: Number,
    default: 1,
  },
  showStops: Boolean,
  color: {
    type: String,
    default: '#409eff'
  },
  format: Function as PropType<(val: number) => number | string>,
  showTooltip: {
    type: Boolean,
    default: true
  },
  tooltipEffect: {
    type: String as PropType<'dark' | 'light'>,
    default: 'dark'
  }
});

// ref
const wrapper = shallowRef<HTMLElement>();
const slider = shallowRef<HTMLElement>();

const sliderSize = ref(0);
const isHover = ref(false);
const dragging = ref(false);
const isClick = ref(false);
const startX = ref(0);
const startY = ref(0);
const currentX = ref(0);
const currentY = ref(0);
const startPosition = ref(0);
const newPosition = ref(0);

const rClassSlider = computed(() => {
  return [{ 'r-slider-vertical': props.vertical }];
});
const rSliderColor = computed(() =>
  Color.normalization(props.color, '#409eff')
);

const rSliderWidth = computed(() =>
  props.vertical ? '16px' : `${props.modelValue}%`
);
const rSliderHeight = computed(() =>
  props.vertical ? `${props.modelValue}%` : 'auto'
);
const rSliderCursor = computed(() => props.disabled ? 'not-allowed' : dragging.value ? 'grabbing' : 'grab');
const rSliderTooltip = computed(() =>
  props.format instanceof Function
    ? props.format(+props.modelValue)
    : props.modelValue
);

const isShowTooltip = computed(() => isHover.value || dragging.value);

const rClassSliderBar = computed(() => {
  return [{ 'r-slider-button-amplification': dragging.value }];
});

const currentPosition = computed(
  () => `${((props.modelValue - props.min) / (props.max - props.min)) * 100}%`
);


const stops = computed(() => {
  if (!props.showStops || props.min > props.max || props.step === 0) return []

  const stopCount = (props.max - props.min) / props.step
  const stepWidth = (100 * props.step) / (props.max - props.min)
  const result = Array.from<number>({ length: stopCount - 1 }).map((_, index) => (index + 1) * stepWidth )
  return result;
})

const getStopStyle = (position: number) => {
  return props.vertical ? { top: `${position}%` } : { left: `${position}%` }
}


/**
 * @function 拖动启动前
 */
const onDragStart = (event: MouseEvent | TouchEvent) => {
  if (props.disabled) return;
  dragging.value = true;
  isClick.value = true;
  const { clientX, clientY } = getClientXY(event);
  if (props.vertical) {
    startY.value = clientY;
  } else {
    startX.value = clientX;
  }
  startPosition.value = Number.parseFloat(currentPosition.value);
  newPosition.value = startPosition.value;
};

/**
 * @function 拖动进行中
 */
const onDragging = (event: MouseEvent | TouchEvent) => {
  if (props.disabled) return;
  if (!dragging.value) return;
  isClick.value = false;
  resetSize();

  let diff: number;
  const { clientX, clientY } = getClientXY(event);
  if (props.vertical) {
    currentY.value = clientY;
    diff = ((currentY.value - startY.value) / sliderSize.value) * 100;
  } else {
    currentX.value = clientX;
    diff = ((currentX.value - startX.value) / sliderSize.value) * 100;
  }
  newPosition.value = startPosition.value + diff;
  setPosition(newPosition.value);
};

/**
 * @function 拖动结束
 */
const onDragEnd = (event: MouseEvent | TouchEvent) => {
  if (props.disabled) return;
  if (!dragging.value) return;
  setTimeout(() => {
    dragging.value = false;
    if (!isClick.value) {
      setPosition(newPosition.value);
    }
  }, 0);
};

/**
 * @function ui大小重置时触发
 */
const resetSize = () => {
  if (slider.value) {
    sliderSize.value =
      slider.value[`client${props.vertical ? 'Height' : 'Width'}`];
  }
};

/**
 * @function 设置数据
 */
const setPosition = (_position: number) => {
  if (_position === null || Number.isNaN(+_position)) return;
  if (_position < 0) {
    _position = 0;
  } else if (_position > 100) {
    _position = 100;
  }
  const lengthPerStep = 100 / ((props.max - props.min) / props.step)
  const steps = Math.round(_position / lengthPerStep)

  let value: string | number = steps * lengthPerStep * (props.max - props.min) * 0.01 + props.min
  value = Number.parseFloat(value.toFixed(0));
  
  emit('update:modelValue', value);
};

/**
 * @function hover——鼠标移入触发
 */
const hoverEnterHandler = (event: Event) => {
  event.preventDefault();
  isHover.value = true;
};
/**
 * @function hover——鼠标移出触发
 */
const hoverLeaveHandler = (event: Event) => {
  event.preventDefault();
  isHover.value = false;
};


onMounted(() => {
  window.addEventListener('resize', resetSize);
  const options = {
    start: (event: MouseEvent | TouchEvent) => onDragStart(event),
    drag: (event: MouseEvent | TouchEvent) => onDragging(event),
    end: (event: MouseEvent | TouchEvent) => onDragEnd(event)
  };
  draggable(wrapper.value, options);
  resetSize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resetSize);
});
</script>

<style scoped lang="scss">
.r-slider {
  position: relative;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;

  .runway {
    flex: 1;
    height: 6px;
    border-radius: 3px;
    position: relative;
    background-color: #e4e7ed;
    .stop {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background-color: white;
      transform: translateX(-50%);
    }

    .bar {
      position: absolute;
      width: v-bind(rSliderWidth);
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 3px;
      background-color: v-bind(rSliderColor);
    }
  }
  .wrapper {
    position: absolute;
    left: v-bind(rSliderWidth);
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    .r-slider-button {
      cursor: v-bind(rSliderCursor);

      &:focus,
      &:hover,
      &-amplification {
        transform: scale(1.1);
        transition: all 0.3s linear;
      }
    }
  }

  &-vertical {
    width: 32px;
    height: v-bind(height);
    .runway {
      width: 6px;
      height: 100%;
      margin: 0 13px;
      
      .stop {
        transform: translateY(-50%);
      }
      .bar {
        height: v-bind(rSliderHeight);
        width: 100%;
      }
    }

    .wrapper {
      top: v-bind(rSliderHeight);
      transform: translate(-50%, -50%);
    }
  }
}
</style>
