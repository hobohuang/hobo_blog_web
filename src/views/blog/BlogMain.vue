<template>
  <div class="blog-main">
    <content-item v-for="(item, index) in 10" :key="index" />
  </div>
</template>

<script lang="ts">
import ContentItem from "@/views/blog/ContentItem.vue";
import { defineComponent } from "node_modules/vue/dist/vue";
export default defineComponent({
  name: "blogMain",
  components: {
    ContentItem
  }
});
</script>

<style lang="scss" scoped>
.blog-main {
  min-height: 100%;
  width: 100%;
  background-color: #fff;
}
</style>
