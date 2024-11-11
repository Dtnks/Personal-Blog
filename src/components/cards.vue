<script lang="js" setup>
import { ref ,onMounted, defineProps, onUnmounted } from 'vue';
import myIndexScroll from "../utils/move_animation.js"
import Alert from "../components/blog_show.vue"
import { onBeforeUnmount } from 'vue';
const props = defineProps(['data'])
let waterlist=ref([])
const heightList=ref([])
const refresh_col=()=>{
  waterlist.value.length=0
  const column=Math.floor(document.body.clientWidth*0.8/300)
  let pad_left=document.body.clientWidth*0.8%300/column
  for (let i =0;i<props.data.length;i++){
    if(i<column){
      props.data[i].top=20
      props.data[i].left=(300+pad_left)*i+pad_left
      props.data[i].show_text=Math.max(Math.floor((props.data[i].height+20)/32)-2,1)
      waterlist.value.push(props.data[i])
      heightList.value[i]=props.data[i].height
    }
    else{
      let current =heightList.value[0]
      let col=0
      heightList.value.forEach((h,i)=>{
        if(h<current){
          current=h
          col=i
        }
      })
      props.data[i].left=(300+pad_left)*col+pad_left
      props.data[i].top=current+30
      props.data[i].show_text=Math.max(Math.floor((props.data[i].height+20)/32)-2,1)
      waterlist.value.push(props.data[i])
      heightList.value[col]=current+10+props.data[i].height
    }
  }
  document.getElementById("card_back").style.height=Math.max(...heightList.value)+400+"px"

}

const change_vis=(item)=>{
    const alert_=document.getElementById("blog_show")
    message.value=item
    console.log(item)
    alert_.style.display="flex"
    alert_.style.animationName="toright"
    alert_.style.animationDuration="0.7s"
    alert_.style.animationTimingFunction="ease-in-out"
}
const animation=(e)=>{
  const alert_=document.getElementById("blog_show")
    if(!alert_.contains(e.target) && e.target.getAttribute("class")!="show_buttun"){
      alert_.style.animationName="toleft"
      alert_.style.animationDuration="0.7s"
      alert_.style.animationTimingFunction="ease-in-out"
      setTimeout(()=>{
        alert_.style.display="None"
      },700)
  }
}
window.addEventListener("click",animation)
let message=ref({
  "title":"First Blog",
  "text":"naiouebfnvoiubvgiuasbgfipoanvgijkasbhdoniabfpibedojuvbzkmnjviueahsnfljadbv oilDQW",
})
const debounce=(fn,time)=>{
  let timeout=null
  return function(){
    clearTimeout(timeout)
    timeout=setTimeout(fn,time)
  }
}
window.addEventListener("resize",debounce(refresh_col,500))


const mounted=()=>{
  refresh_col()

  // debugFun();
}
onMounted(mounted)

setTimeout(()=>{
  let eles=document.getElementsByClassName("container")
  eles=Array.from(eles)
  for (let ele of eles){
    myIndexScroll(ele,"moveup","movedown")
  }
},0)
</script>
<template>
  <div id="card_back">
    <div
      class="item"
      v-for="item in waterlist"
      :style="{
        top: item.top + 'px',
        left: item.left + 'px',
      }"
    >
      <div
        class="container"
        :style="{ height: item.height + 'px', width: '300px' }"
      >
        <div class="flip">
          <div
            class="front"
            :style="{ height: item.height + 'px', width: '280px' }"
          >
            <img :src="item.img" :style="{ height: item.height + 'px' }" />
            <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
            </div>
          </div>
          <div
            class="back"
            :style="{ height: item.height + 'px', width: '280px' }"
          >
            <div class="title">
              {{ item.title }}
            </div>
            <div
              class="content"
              :style="{ '-webkit-line-clamp': item.show_text }"
            >
              {{ item.content }}
            </div>
            <div class="fl">
              <div class="show_buttun" @click="change_vis(item)">
                点击查看详情
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Alert :message="message" id="blog_show"> </Alert>
</template>

<style scoped>
img {
  width: 280px;
  object-fit: cover;
  opacity: 1;
  animation: change_opcity 0.5s ease-in;
  border-radius: 12px;
}
.back {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
}
.title {
  font-size: 25px;
  font-weight: bold;
}
.content {
  font-size: 16px;
  line-height: 200%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
#card_back {
  border-radius: 12px;
  backdrop-filter: blur(4px);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  height: max-content;
  position: relative;
  align-items: stretch;
}
.item {
  position: absolute;
  border-radius: 12px;
}
.container {
  perspective: 1000;
  transform-style: preserve-3d;
}
.container,
.flip {
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
  border-radius: 12px;
}
.front,
.back {
  position: absolute;
  top: 0px;
  left: 10px;
  border-radius: 12px;
  backface-visibility: hidden;
}
.front {
  z-index: 2;
}
.back {
  transform: rotateY(-180deg);
}
.container:hover .flip {
  transform: rotateY(180deg);
}
.fl {
  position: absolute;
  bottom: 15px;
  display: flex;
  width: 100%;
  flex-direction: row;
}
.show_buttun {
  width: 120px;
  height: 30px;
  margin: auto;
  border-radius: 8px;
  background-color: antiquewhite;
  font-size: 14px;
  line-height: 30px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
}
.show_buttun:hover {
  background-color: blanchedalmond;
  scale: 1.2;
}
.down_moveup {
  animation: down_moveup 0.5s ease-in;
  opacity: 1;
}
.down_movedown {
  animation: down_movedown 0.5s ease-out;
  opacity: 0;
}
.up_moveup {
  animation: up_moveup 0.5s ease-in;
  opacity: 1;
}
.up_movedown {
  animation: up_movedown 0.5s ease-out;
  opacity: 0;
}
.spinner {
  position: absolute;
  top: 50%;
  right: 50%;
  translate: 50% -50%;
  margin: auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  z-index: -1;
}

.spinner > div {
  background-color: #67cf22;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
