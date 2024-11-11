<script lang="js" setup>
import {get_one} from "../apis/request.js"
import { ref ,onMounted} from "vue";
const content = ref();
const origin=ref()
get_one().then((res)=>{
    content.value =res.data.data.content;
    origin.value =res.data.data.origin;
})
</script>
<template>
  <div id="left_infor">
    <slot name="first">
      <div class="first">
        <div style="padding: 15px; font-size: 25px">小小公告栏</div>
        <div style="padding: 15px">大二学生,个人兴趣搭建博客</div>
      </div>
    </slot>
    <slot name="second">
      <div class="second">
        <div class="top_back">
          <div style="margin: auto">{{ content }}</div>
          <div class="origin">{{ origin }}</div>
        </div>
        <div class="menu">
          <RouterLink :to="{ name: 'person' }" active-class="active"
            ><i class="fa fa-user-o"></i> 个人信息</RouterLink
          >
          <RouterLink :to="{ name: 'blog' }" active-class="active"
            ><i class="fa fa-file-text-o"></i> 博客内容</RouterLink
          >
          <RouterLink :to="{ name: 'about' }" active-class="active"
            ><i class="fa fa-question" aria-hidden="true"></i> 关 于
          </RouterLink>
          <RouterLink :to="{ name: 'life' }" active-class="active">
            生 活
          </RouterLink>
        </div>
      </div>
    </slot>
    <slot name="third">
      <div class="third">
        <div class="handoff">
          <RouterLink :to="{ name: 'left' }">个人简历</RouterLink>
          <RouterLink :to="{ name: 'right' }">万年历</RouterLink>
        </div>
        <RouterView> </RouterView>
      </div>
    </slot>
  </div>
</template>

<style scoped>
#left_infor {
  display: flex;
  flex-direction: column;
  width: 20vw;
  align-items: center;
}
.first {
  width: 15vw;
  height: 15vh;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  background-color: #2377b7bb;
  color: white;
  display: flex;
  flex-direction: column;
}
.second {
  width: 15vw;
  margin-top: 3vh;
  height: 25vh;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  color: white;
  display: flex;
  flex-direction: column;
}
.top_back {
  background-color: #2377b7bb;
  height: 8vh;
  border-radius: 12px 12px 0 0;
  padding: 15px;
  position: relative;
}
.origin {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
.menu {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
a {
  padding: 4px;
  text-align: left;
  text-decoration: none;
  transition: 0.5s;
  font-weight: bold;
  color: #495c69;
  flex: 1;
}
a:hover {
  color: #74787a;
}
.third {
  width: 15vw;
  margin-top: 3vh;
  height: 50vh;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  color: white;
  display: flex;
  flex-direction: column;
}
.handoff {
  display: flex;
  flex-direction: row;
}
.handoff a {
  text-align: center;
  font-size: 2vh;
}
.handoff .router-link-active {
  border-bottom: 5px solid #495c69;
}
</style>
