<template>
  <i v-if="rIconType === 'font-class'" class="iconfont" :class="[rIcontent, ...rIClass]"></i>
  <i v-else-if="rIconType === 'unicode'" class="iconfont">{{ rIcontent }}</i>
  <!-- <svg v-else class="iconfont" aria-hidden="true">
    <use :xlink:href="rIcontent"></use>
  </svg> -->
</template>

<script lang="ts" setup>
// import '@/assets/iconfont/iconfont.js';
import { enumKeys } from 'Packages/Utils/Utils';
import { computed } from 'vue';
import { IconType } from './utils/consts'

import 'Iconfont/iconfont.css';

const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  type: {
    type: String,
    default: 'font-class'
  },
  size: {
    type: Number,
    default: 16
  },
  color: {
    type: String,
    default: '#000000'
  },
  loading: Boolean,
  time: {
    type: Number,
    default: 2
  }
});

const IconTypes = enumKeys(IconType);
const rIconType = computed(() => IconTypes.includes(props.type) ? props.type : IconType.fontClass);
const rIcontent = computed(() => rIconType.value === 'symbol' ? `#${props.name}` : props.name)

const rIClass = computed(() => {
  return [{'is-loading' : props.loading}];
});
const rISize = computed(() => (props.size > 0 ? `${props.size}px` : '16px'));
const rITime = computed(() => (props.time > 0 ? `${props.time}s` : '2s'));
</script>

<style scoped lang="scss">

.iconfont {
  width: v-bind(rISize);
  height: v-bind(rISize);
  line-height: v-bind(rISize);
  display: inline-flex;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;

  font-family: 'iconfont' !important;
  -webkit-font-smoothing: antialiased;
  font-size: v-bind(rISize);
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: v-bind(color);
}

.is-loading {
  animation: rotating v-bind(rITime) linear infinite;
}
@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
