<template>
  <div class="layout_aside">aside</div>
  <div class="layout_tabbar">tabbar</div>
  <div class="layout_main">main</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout_aside {
  width: $base-menu-width;
  height: 100vh;
  background-color: $base-menu-background;
  position: fixed;
  left: 0;
  top: 0;
  color: #fff;
}
.layout_tabbar {
  position: fixed;
  left: $base-menu-width;
  top: 0;
  height: $base-tabbar-height;
  width: calc(100% - $base-menu-width);
}
.layout_main {
  position: fixed;
  left: $base-menu-width;
  top: $base-tabbar-height;
  height: calc(100vh - $base-tabbar-height);
  width: calc(100% - $base-menu-width);
}
</style>
