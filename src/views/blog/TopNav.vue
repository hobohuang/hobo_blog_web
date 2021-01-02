<template>
  <div class="top-nav">
    <img src="../../assets/logo.png" alt="logo" class="logo-image" />
    <router-link to="/home" class="router-item">首页</router-link>
    <router-link to="/blog" class="router-item">博客</router-link>
    <router-link to="/show" class="router-item">展示</router-link>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.top-nav {
  box-sizing: border-box;
  height: 60px;
  width: 100%;
  min-width: 100px;
  line-height: 40px;
  padding: 10px 20px;
  background-color: #ffffff;
  // background: red;

  .logo-image {
    height: 40px;
  }

  .router-item {
    font-size: 16px;
    padding: 0 20px;
    font-weight: 600;
    color: #666;
  }
}
</style>
