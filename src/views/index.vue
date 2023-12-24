<template>
  <div class="contentBox">
    <div class="logo">
      <img src="../assets/logo.png" alt="rxh-ui" />
    </div>
    <h3>基于Vite + TS开发, 轻量级UI组件库</h3>
    <div class="tiBox">
      <p>
        vite+vue3版本，拥有更小的体积，更快的响应速度，更强的拓展性，代码更优质
      </p>
      <div class="buttonGroups">
        <r-button
          style="padding: 20px 50px"
          radius="default"
          color="#8bc34a"
          size="24"
          color-invert
          @click="toComponents"
          >立即上手</r-button
        >
      </div>
      <div class="slogan-list">
        <div class="slogan">
          <p>体积更小</p>
          <div>体积更小，按需加载</div>
        </div>
        <div class="slogan">
          <p>更快响应</p>
          <div>逻辑简洁，相应更快</div>
        </div>
        <div class="slogan">
          <p>更强拓展</p>
          <div>快速拓展，文档全面</div>
        </div>
        <div class="slogan">
          <p>TS 编写</p>
          <div>更加安全，更加放心</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const toComponents = () => router.push('/components');
</script>
<style lang="scss" scoped>
.contentBox {
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(149, 7, 7, 0.1);

  .logo {
    margin: 0 auto;
    display: block;
    width: 18vw;
    margin-top: 60px;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
  }

  h3 {
    text-align: center;
    font-size: 2vw;
    color: #4a5264;
    margin: 16px 0 0 0;
  }

  .tiBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: auto;
    overflow: hidden;
    .buttonGroups {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      height: auto;
      overflow: hidden;
      margin-top: 5vh;
      button {
        cursor: pointer;
      }
    }
    .slogan-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      margin-top: 5vh;

      .slogan {
        width: 20%;
        padding: 0 5px 25px 5px;
        border-radius: 5px;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
        text-align: center;
        list-style: none;
        background: #fff;
        cursor: pointer;

        &:hover {
          background: rgba(109, 123, 128, 0.1);
        }

        p {
          font-size: 18px;
          color: #1f2f3d;
          font-weight: 400;
        }
        div {
          font-size: 14px;
          color: #919cac;
        }
      }
    }
  }
}
</style>
