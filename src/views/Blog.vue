<script lang="js" setup>
import left_information from "@/components/left_information.vue";
import Blog from "../components/cards.vue";
import { get_img } from "@/apis/request";
import { ref } from "vue";
let data=ref([
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":380},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":150},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":250},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":450},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":430},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":250},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":320},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":120},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":420},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":430},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":250},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":260},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":280},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":420},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":120},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":160},
    {
    "content":"First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog",
    "title": "First Blog",
    "height":380}
    ])
    for (let i=0 ;i<data.value.length;i++){
      get_img().then((res)=>{
        data.value[i].img=res.data.imgurl
      })
    }
</script>
<template>
  <div id="main_show" ref="element">
    <left_information></left_information>
    <Blog :data="data"></Blog>
  </div>
</template>

<style scoped>
#main_show {
  width: 100%;
  height: auto;
  margin: 3% 0;
  position: relative;
  top: 0;
  left: 0;
  color: black;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
}
</style>
