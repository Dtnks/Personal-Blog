<script setup lang="js">
import Head_Menu from "./components/Head.vue"
import Text_show from "./components/Text_show.vue"
</script>

<template>
  <Head_Menu></Head_Menu>
  <Text_show></Text_show>
  <KeepAlive>
    <router-view></router-view>
  </KeepAlive>
</template>
<style scoped></style>
