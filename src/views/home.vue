<template>
  <div class="rxhui-doc">
    <aside>
      <div class="list-box">
        <div
          v-for="(item, index) in ComponentList"
          :key="index"
          class="item-list"
        >
          <p
            class="titls"
            :class="[{ active: routerPath === '/components/' + item.compName }]"
            @click="toComponent(item.compName)"
          >
            <span>{{ item.compName }} {{ item.compZhName }}</span>
          </p>
        </div>
      </div>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import ComponentList from 'Packages/list.json';

const router = useRouter();
let routerPath = computed(() => router.currentRoute.value.path);
const toComponent = (compname: string): void => {
  const path = `/components/${compname}`;
  if (routerPath.value != path) router.push(path);
};
</script>

<style lang="scss" scoped>
.rxhui-doc {
  display: flex;
  width: 100%;
  height: calc(100vh - 64px - 2vh);
  margin-top: 2vh;
  overflow: hidden;
  aside {
    width: 200px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    overflow-y: auto;
    .list-box {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding-bottom: 30px;
      box-sizing: border-box;
      .item-list {
        width: 100%;
        height: auto;
        overflow: hidden;
        p {
          margin: 2px 0;
          padding-left: 16px;
          box-sizing: border-box;
          height: 40px;
          line-height: 40px;
          // border-bottom: 1px solid #f0f0f0;
          cursor: pointer;

          span {
            width: 100%;
            height: 100%;
            display: inline-block;
            font-size: 14px;
            color: #00000073;
          }
          &:hover,
          &.active {
            color: #0e80eb;
            background: rgba(14, 128, 235, 0.1);
            border-left: 3px solid #0e80eb;
            padding-left: 14px;
            transform: all 0.2s ease;
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #b8b8bb;
    }

    &::-webkit-scrollbar-track {
      border-radius: 0px;
      background: #fff;
    }
  }
  main {
    width: calc(100% - 317px);
    flex: 1;
    height: 100%;
    padding: 0 calc(2vw + 100px) 0 2vw;
    overflow-x: hidden;
    overflow-y: auto;
    word-wrap: break-word;

    &::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #b8b8bb;
    }

    &::-webkit-scrollbar-track {
      border-radius: 0px;
      background: #fff;
    }
  }
}
</style>
