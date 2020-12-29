<template>
  <div class="blog">
    <el-container class="home-container">
      <el-header>
        <top-nav />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import TopNav from "@/views/blog/TopNav.vue";
export default {
  components: {
    TopNav
  }
};
</script>

<style lang="scss">
.blog {
  height: 100%;
  min-width: 1000px;
}
.home-container {
  height: 100%;
}
.el-header {
  height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
