<template>
  <div class="row around">
    <r-tooltip content="bottom-start" placement="bottom-start">
      <r-button colorInvert radius="default">bottom-start</r-button>
    </r-tooltip>
    <r-tooltip content="bottom" placement="bottom">
      <r-button colorInvert radius="default">bottom</r-button>
    </r-tooltip>
    <r-tooltip content="bottom-end" placement="bottom-end">
      <r-button colorInvert radius="default">bottom-end</r-button>
    </r-tooltip>
  </div>

  <div class="row between">
    <r-tooltip content="right-start" placement="right-start">
      <r-button colorInvert radius="default">right-start</r-button>
    </r-tooltip>
    <r-tooltip content="left-start" placement="left-start">
      <r-button colorInvert radius="default">left-start</r-button>
    </r-tooltip>
  </div>

  <div class="row between">
    <r-tooltip content="right" placement="right">
      <r-button colorInvert radius="default">right</r-button>
    </r-tooltip>
    <r-tooltip content="left" placement="left">
      <r-button colorInvert radius="default">left</r-button>
    </r-tooltip>
  </div>

  <div class="row between">
    <r-tooltip content="right-end" placement="right-end">
      <r-button colorInvert radius="default">right-end</r-button>
    </r-tooltip>
    <r-tooltip content="left-end" placement="left-end">
      <r-button colorInvert radius="default">left-end</r-button>
    </r-tooltip>
  </div>

  <div class="row around">
    <r-tooltip content="top-start" placement="top-start">
      <r-button colorInvert radius="default">top-start</r-button>
    </r-tooltip>
    <r-tooltip content="top" placement="top">
      <r-button colorInvert radius="default">top</r-button>
    </r-tooltip>
    <r-tooltip content="top-end" placement="top-end">
      <r-button colorInvert radius="default">top-end</r-button>
    </r-tooltip>
  </div>
</template>

<style scoped lang="scss">
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