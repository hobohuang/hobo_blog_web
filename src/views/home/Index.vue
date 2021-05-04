<template>
  <div class="home">
    <div class="container">
      <div class="sec">
        <h3>题目一</h3>
      </div>
      <div class="sec">
        <h3>题目二</h3>
      </div>
      <div class="sec">
        <h3>题目三</h3>
      </div>
      <div class="sec">
        <h3>题目四</h3>
      </div>
      <div class="sec">
        <h3>题目五</h3>
      </div>
      <div class="sec">
        <h3>题目六</h3>
      </div>
      <div class="sec">
        <h3>题目七</h3>
      </div>
      <div class="sec">
        <h3>题目八</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref } from "vue";
// import TopNav from "@/components/TopNav.vue";

export default defineComponent({
  name: "home",
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
    // TopNav
  }
});
</script>

<style lang="scss" scoped>
.home {
  font-family: "poppins", sans-serif;
}
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
.sec {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: multiply;
  scroll-snap-align: center;

  h3 {
    color: #000;
    font-size: 5vw;
    text-align: center;
  }
}
.sec:nth-child(1) {
  background-image: url(../../assets/img/bg01.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}
.sec:nth-child(2) {
  background-image: url(../../assets/img/bg02.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}
.sec:nth-child(3) {
  background-image: url(../../assets/img/bg03.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}
.sec:nth-child(4) {
  background-image: url(../../assets/img/bg04.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}

.sec:nth-child(5) {
  background-image: url(../../assets/img/bg05.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}
.sec:nth-child(6) {
  background-image: url(../../assets/img/bg06.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}
.sec:nth-child(7) {
  background-image: url(../../assets/img/bg07.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}
.sec:nth-child(8) {
  background-image: url(../../assets/img/bg08.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: multiply;
}
</style>
