<template>
  <Transition name="slide-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div :id="id" class="r-message" :style="rMessageStyle" v-show="isShow">
     <div class="r-message-content">
        <r-icon v-if="rMIcon && isText" :name="rMIcon" :color="rMIcolor"/>
        <div v-if="isText" class="text">{{ text }}</div>
        <div v-else> <slot /> </div>
     </div>
      <r-icon v-if="close" class="icon-close" name="rxh-close-circle" :color="rMIcolor" @click.stop="closeMessage" />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { rIcon } from 'Packages/Icon'
import { computed, onMounted, onUnmounted, PropType, ref } from 'vue';
import { rMessageOption, rType } from './utils/consts'

const props = defineProps({
  id: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<rType>,
    default: "info",
  },
  text: {
    type: [String, Object],
    default: ''
  },
  icon: String,
  bgcolor: {
    type: String,
    default: '#333333'
  },
  color: {
    type: String,
    default: "#dddddd"
  },
  close: Boolean,
  onClose: {
    type: Function as PropType<() => void>,
    required: false,
  },
  offset: {
    type: Number,
    default: 20,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
  timeout: {
    type: Number,
    default: 2000,
  },
})

const rMessageStyle = computed(() => {
  return {
    top: `${props.offset}px`,
    zIndex: props.zIndex,
  }
})

const isShow = ref(false)
const isText = computed(() => typeof props.text === 'string')
const rMIcon = computed(() => props.type === 'custom' ? props.icon : rMessageOption[props.type]?.icon || 'rxh-information_fill' )
const rMIcolor = computed(() => props.type === 'custom' ? props.color : rMessageOption[props.type]?.color || '#909399' )
const rMBgcolor = computed(() => props.type === 'custom' ? props.bgcolor : rMessageOption[props.type]?.background || '#f4f4f5' )

const closeMessage = () => {
  isShow.value = false
}

let timer: NodeJS.Timeout | null  = null
const startTimer = () => {
 timer = setTimeout(() => {
  isShow.value && closeMessage()
 }, props.timeout);
}

onMounted(() => {
  startTimer()
  isShow.value = true
})
onUnmounted(() => {
  timer && clearTimeout(timer)
})
</script>



<style scoped lang="scss">
div.slide-fade-enter-from,
div.slide-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}


.r-message {
  position: absolute;
  z-index: 1001;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  height: auto;
  border-radius: 4px;
  background: v-bind(rMBgcolor);
  color: v-bind(rMIcolor);
  transition: all 0.4s linear;

  &-content {
    display: inline-flex;
    align-items: center;
    padding: 5px 25px;

    .text {
      margin-left: 5px;
    }
  }

  .icon-close {
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>