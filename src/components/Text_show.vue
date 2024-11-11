<template>
  <div id="Text_show">
    <vuetyped :strings="['小呆的博客']" :typeSpeed="50" :showCursor="false"
      ><div class="typing first_text"></div
    ></vuetyped>
    <vuetyped
      :strings="[
        '十九岁，四肢健全，大小便正常，从小独立呼吸，一天可以吃三顿，会玩智能手机，未来可期',
      ]"
      :startDelay="1500"
      :showCursor="false"
    >
      <div class="typing second_text"></div>
    </vuetyped>
  </div>
</template>
<script lang="js" setup>
setTimeout(()=>{
    document.getElementById("Text_show").style.height="25vh"
},6000)
</script>
<style scoped>
#Text_show {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  transition: 2s;
}
.first_text {
  font-size: 50px;
  color: #93b5cf;
  margin-bottom: 40px;
}
.second_text {
  font-size: 25px;
  background: linear-gradient(to right, #2e317c, #c3d7df);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
