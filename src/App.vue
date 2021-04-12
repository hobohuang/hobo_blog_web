<template>
  <div id="app">
    <top-nav />
    <router-view />
  </div>
</template>
<script lang="ts">
import TopNav from "@/components/TopNav.vue";
export default {
  components: {
    TopNav
  }
};
</script>
<style lang="scss"></style>
