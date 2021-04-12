<template>
  <div class="blog">
    <el-container class="home-container">
      <el-header>
        <!-- <top-nav /> -->
      </el-header>
      <el-container class="contant-container">
        <el-main>
          <blog-main />
        </el-main>
        <el-aside width="300px">
          <blog-aside />
        </el-aside>
      </el-container>
      <el-footer>Designed and developed by hobo huang.</el-footer>
    </el-container>
    <el-backtop :visibility-height="1000"></el-backtop>
  </div>
</template>

<script lang="ts">
// import TopNav from "@/components/TopNav.vue";
import BlogMain from "@/views/blog/BlogMain.vue";
import BlogAside from "@/views/blog/BlogAside.vue";
export default {
  components: {
    // TopNav,
    BlogMain,
    BlogAside
  }
};
</script>

<style lang="scss" scoped>
.blog {
  height: 100%;
  min-width: 1000px;
  background-color: #f6f6f6;
}
.home-container {
  height: 100%;

  .contant-container {
    width: 1000px;
    margin: 0 auto;
  }
}
.el-header {
  height: 60px;
  padding: 0;
}
.el-footer {
  background-color: #fff;
  color: #666;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  padding: 20px 10px;
}
.el-main {
  padding: 20px 10px;
}
</style>
