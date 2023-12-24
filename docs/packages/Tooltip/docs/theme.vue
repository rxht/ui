<template>
  <div class="row around">
    <r-tooltip content="top-start" placement="top-start" effect="light">
      <r-button colorInvert radius="default">top-start</r-button>
    </r-tooltip>
    <r-tooltip content="top" placement="top" effect="dark">
      <r-button colorInvert radius="default">top</r-button>
    </r-tooltip>
    <r-tooltip content="top-end" placement="top-end" effect="customized">
      <r-button colorInvert radius="default">top-end</r-button>
    </r-tooltip>
  </div>
</template>

<style scoped lang="scss">
// 自定义主题
:deep(.customized) {
  .arrow::before {
    background: linear-gradient(90deg, rgb(151, 172, 229), rgb(149, 192, 20));
    // border: 1px solid #00ff00;
  }

  .content {
    background: linear-gradient(90deg, rgb(151, 172, 229), rgb(149, 192, 20));
    // border: 1px solid #00ff00;
    color: #ffffff;
  }
}

.row {
  display: flex;
  align-items: center;
  margin-top: 40px;

  &.between {
    justify-content: space-between;
  }
  &.around {
    justify-content: space-around;
  }
}
</style>
