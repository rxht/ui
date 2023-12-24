<template>
  <transition name="r-back-top-fade-in">
    <div v-if="visible" class="r-back-top" @click.stop="handleClick">
      <slot>
        <r-icon name="rxh-up-circle" :color="color" :size="!!iconSize ? iconSize : size * 0.7" />
      </slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, shallowRef, onMounted } from 'vue';
import throttle from 'lodash/throttle'

const emit = defineEmits(['click']);

const props = defineProps({
  vHeight: {
    type: Number,
    default: 200
  },
  target: [String, HTMLElement],
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  },
  size: {
    type: Number,
    default: 40
  },
  iconSize: Number,
  color: {
    type: String,
    default: "#409eff"
  },
  bgColor: {
    type: String,
    default: "#ffffff"
  },
  zIndex: {
    type: Number,
    default: 1
  }
});

const rBackTopRight = computed(() => `${props.right}px`);
const rBackTopBottom = computed(() => `${props.bottom}px`);
const rBackTopWidthAndHeight = computed(() => `${props.size}px`)

const visible = ref(false);
const element = shallowRef<HTMLElement>();

const handleScroll = throttle(function() {
  if (!element.value) return;
  visible.value = element.value.scrollTop >= props.vHeight;
}, 250);

const scrollToTop = () => {
  if (!element.value) return;

  const easeInOutCubic = (value: number): number => {
    return value < 0.5
      ? Math.pow(value * 2, 3) / 2
      : 1 - Math.pow((1 - value) * 2, 3) / 2;
  };

  const beginTime = Date.now();
  const beginValue = element.value.scrollTop;
  const frameFunc = () => {
    if (!element.value) return;
    const progress = (Date.now() - beginTime) / 500;

    if (progress < 1) {
      element.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
      window.requestAnimationFrame(frameFunc);
    } else {
      element.value.scrollTop = 0;
    }
  };

  window.requestAnimationFrame(frameFunc);
};
const handleClick = (event: MouseEvent | TouchEvent) => {
  scrollToTop();
  emit('click', event);
};

onMounted(() => {
  element.value = document.documentElement;

  if (props.target) {
    if(typeof props.target === 'string') {
      element.value =
        document.querySelector<HTMLElement>(props.target) ?? undefined;
    } else if(props.target instanceof HTMLElement) {
      element.value = props.target ?? undefined;
    }
    if (!element.value)
      return console.error(`target is not existed: ${props.target}`);
  }
  element.value.addEventListener('scroll', handleScroll, true);
});
</script>

<style scoped lang="scss">
.r-back-top {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: v-bind(rBackTopRight);
  bottom: v-bind(rBackTopBottom);
  width: v-bind(rBackTopWidthAndHeight);
  height: v-bind(rBackTopWidthAndHeight);
  padding: 2px;
  box-sizing: border-box;
  z-index: v-bind(zIndex);
  border-radius: 50%;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  color: v-bind(color);
  background-color: v-bind(bgColor);
}
</style>
