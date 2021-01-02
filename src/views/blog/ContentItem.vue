<template>
  <div class="content-item">
    <div class="content-title">
      <a href="#">Vue3.0源码逐行解析(二) 组件的本质</a>
    </div>
    <div class="content-inner">
      <img src="../../../public/CS1.jpg" class="inner-image" />
      <div class="inner-article">
        <span>
          在上篇文章已经介绍了 Vue2.x 与 Vue3
          的从创建应用实例到挂载的过程，本章节会介绍组件渲染流程。 组件的本质
          当我们使用 Vue。
        </span>
      </div>
    </div>
    <div class="content-bottom">
      <div>
        <i class="fas fa-camera"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.content-item {
  box-sizing: border-box;
  width: 100%;
  height: 230px;
  padding: 20px;
  border-bottom: 1px solid #f0f2f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content-title {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
  }
  .content-inner {
    height: 105px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .inner-image {
      width: 190px;
      height: 105px;
    }
    .inner-article {
      height: 105px;
      width: 445px;
    }
  }
  .content-bottom {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
  }
}
</style>
