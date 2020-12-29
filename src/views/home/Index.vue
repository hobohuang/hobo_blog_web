<template>
  <div class="home">
    <top-nav />
    <div class="content">
      <div class="img-wrap">
        <div></div>
        <div class="img-left"></div>
      </div>
      <div>
        <h1 class="title">
          你好，<br />
          我是黄袁爵，<br />
          和你一样的平凡人。
        </h1>
        <span class="outline">虽我长相平凡、家庭平凡,却不甘平凡。</span>
      </div>
      <div class="img-wrap">
        <div class="img-right"></div>
        <div></div>
      </div>
    </div>
    <div class="content">
      <div style="text-align:center">
        <h1 class="title">
          工作一年后,下定决心，
          <br />
          辞职，考研！
        </h1>
        <p class="outline">我不甘，只在小天地内混日子，</p>
        <p class="outline">我不甘，一辈子做碌碌无为，</p>
        <p class="outline">破釜沉舟，只是不甘平凡。</p>
        <p class="outline">为了练习前端技术，</p>
        <p class="outline">也为了展示自己，</p>
        <p class="outline">建立了个人网站。</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import TopNav from "@/views/home/TopNav.vue";

export default {
  setup() {
    const num = ref(1);
    const prinft = () => {
      console.log("hobo");
    };
    return {
      prinft,
      num
    };
  },
  components: {
    TopNav
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-width: 999px;

  .content {
    height: calc(100vh - 60px);
    width: 100%;
    font-family: "plantc", "Source Han Serif", serif;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;

    .title {
      font-weight: 700;
      color: #404040;
      height: max-content;
    }
    .outline {
      margin-top: 20px;
      font-weight: 700;
      color: #999;
      height: max-content;
    }
    .img-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      .img-right,
      .img-left {
        width: 288px;
        height: 324px;
        background-image: url(../../assets/img/bg1.jpg);
        background-size: 576px 324px;
        background-repeat: no-repeat;
        box-shadow: 0 20px 90px 0 rgba(0, 0, 0, 0.08),
          0 9px 30px 0 rgba(0, 0, 0, 0.1);
      }
      .img-right {
        background-position-x: -288px;
      }
    }
  }
}
</style>
