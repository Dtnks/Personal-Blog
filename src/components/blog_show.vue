<template>
  <div id="blog_show">
    <div class="title">
      {{ $attrs.message.title }}
    </div>
    <div class="content">
      <div class="text">{{ $attrs.message.content }}</div>
      <div class="img_show">{{ $attrs.message.img }}</div>
    </div>
  </div>
</template>
<script setup lang="js"></script>
<style scoped>
#blog_show {
  background-color: white;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  position: fixed;
  top: 80px;
  padding: 25px;
  display: None;
  z-index: 200;
}
.title {
  font-size: 30px;
}
.content {
  display: flex;
  flex-direction: row;
}
</style>
