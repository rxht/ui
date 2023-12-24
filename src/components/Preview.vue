<template>
  <div class="rxhui-preview">
    <section>
      <slot></slot>
    </section>
    <div v-show="codeVisible" class="source-code">
      <pre
        class="language-html"
      ><code class="language-html">{{ previewSourceCode }}</code></pre>
    </div>

    <div class="preview-bottom" @click="showSourceCode">查看代码</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import '@/assets/prism.css';

const isDev = import.meta.env.MODE === 'development';
const props = defineProps({
  compName: {
    type: String,
    default: '',
    require: true
  },
  /** 要显示代码的组件 */
  demoName: {
    type: String,
    default: '',
    require: true
  }
});

let sourceCode = ref('');
let codeVisible = ref(false);

const previewSourceCode = computed(() => {
  const code = sourceCode.value;

  return code;
});

onMounted(async () => {
  if (props.compName && props.demoName) {
    if (isDev) {
      sourceCode.value = (
        await import(
          /* @vite-ignore */ `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`
        )
      ).default;
    } else {
      sourceCode.value = await fetch(
        `${isDev ? '' : ''}/packages/${props.compName}/docs/${
          props.demoName
        }.vue`
      ).then((res) => res.text());
    }
  }
  await nextTick();
  Prism.highlightAll();
});

// const copyCode = async () => {
//   // this.$copyText(this.sourceCode);
// };
const showSourceCode = () => {
  codeVisible.value = !codeVisible.value;
};
</script>

<style lang="scss">
pre {
  line-height: 0;
}
.rxhui-preview {
  border: 4px;
  border: 1px dashed #e7e7e7;
  padding: 10px;
  border-bottom: 1px dashed #e7e7e7;

  section {
    margin: 15px;
  }

  .source-code {
    max-height: 500px;
  }

  .language-html {
    margin: 0;
    padding: 0 15px;
  }

  .preview-bottom {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px dashed #e7e7e7;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #409eff;
    }
  }

  .row {
    margin: 5px 0;

    .r-switch:not(:only-child),
    button:not(:only-child) {
      margin-top: 5px;
      margin-right: 15px;
    }
  }
}
</style>
