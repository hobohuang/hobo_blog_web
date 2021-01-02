<template>
  <div class="blog-main">
    <content-item />
  </div>
</template>

<script lang="ts">
import ContentItem from "@/views/blog/ContentItem.vue";
export default {
  components: {
    ContentItem
  }
};
</script>

<style lang="scss" scoped>
.blog-main {
  height: 100%;
  width: 100%;
  background-color: #fff;
}
</style>
