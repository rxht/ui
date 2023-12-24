<template>
  <div>
    往下滑可以看到效果（最下面一排）
    <r-back-top target="main" />
    <r-back-top target="main" :right="90">
      <div class="top-class">回到顶部阿斯顿发顺丰</div>
    </r-back-top>
  </div>
</template>

<style scoped lang="scss">
.top-class {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 20px;
  color: #1989fa;
  overflow: hidden;
  font-size: 13px;
  border-radius: 30%;
}
</style>
