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
      <div class="bottom-item">
        <i class="fas fa-clock"></i>
        <span class="item-font">四月前</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "node_modules/vue/dist/vue";

export default defineComponent({
  name: "content-item"
});
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
    cursor: pointer;

    a:hover {
      color: #175199;
    }
  }
  .content-inner {
    height: 105px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .inner-image {
      width: 190px;
      height: 105px;
      cursor: pointer;
    }
    .inner-article {
      height: 105px;
      width: 445px;

      span {
        cursor: pointer;
      }
      span:hover {
        color: #878787;
      }
    }
  }
  .content-bottom {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;

    .bottom-item {
      margin-right: 24px;
      font-size: 14px;
      line-height: 1;
      color: #8590a6;
      cursor: pointer;

      .item-font {
        margin-left: 4px;
      }
    }
  }
}
</style>
