<template>
  <div class="header-contener">
    <div class="logoBox">
      <div class="logo">
        <img src="../assets/logo-mini.png" alt="rxh-ui" @click="toHome" />
      </div>
      <div class="ui-name" @click="toHome">UI</div>
      <div class="version">V{{ version }}</div>
    </div>
    <div class="toolsBox">
      <a href="https://rxht.github.io/wiki">博客首页</a>
      <div
        v-for="(item, index) in tools"
        :key="index"
        @click="toPath(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import packageInfo from '../../package.json';

const version = packageInfo.version;
const router = useRouter();
const toHome = () => router.push('/');
const tools = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '组件',
    path: '/components'
  }
];
let routerPath = computed(() => router.currentRoute.value.path);
const toPath = (path: string): void => {
  if (routerPath.value != path) router.push(path);
};
</script>

<style scoped lang="scss">
$header-height: 64px;

.header-contener {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: $header-height;
  box-sizing: border-box;
  background: #fff;
  padding: 0 40px;
  box-shadow: 0 2px 8px #f0f1f2;

  .logoBox {
    position: relative;
    display: flex;

    .logo {
      img {
        width: $header-height;
        height: $header-height;
        cursor: pointer;
      }
    }

    .ui-name {
      color: #4a5264;
      font-weight: 700;
      font-size: 18px;
      font-family: PuHuiTi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji,
        segoe ui emoji, Segoe UI Symbol, noto color emoji, sans-serif;
      line-height: $header-height;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      float: left;
    }

    .version {
      margin-top: 6px;
      height: 24px;
      padding: 1px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      background-color: #0e80eb;
    }
  }

  .toolsBox {
    display: flex;
    align-items: center;

    div {
      font-weight: normal;
      font-size: 16px;
      padding: 0 6px;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        color: #0e80eb;
        border-color: #0e80eb;
      }
    }
    div.active {
      color: #0e80eb;
      border-color: #0e80eb;
    }
  }
}
</style>
