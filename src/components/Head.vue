<template>
  <div id="Head_back">
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
</template>
<script lang="js" setup>
let befor_top = 0;
window.addEventListener("scroll", function () {
    let scrollHeight =
      this.document.documentElement.scrollTop ||
      this.window.pageYOffset ||
      this.document.body.scrollTop;
    const head_=this.document.getElementById("Head_back")
    if (scrollHeight - befor_top > 0) {
      if(scrollHeight>400){
        head_.style.transform="translateY(-10vh)"
      }
      else if(scrollHeight>100){
        head_.style.backgroundColor="#e0c8d1"
      }
    } else {
      head_.style.transform="translateY(0vh)"
      if(scrollHeight<100){
        head_.style.backgroundColor="transparent"
      }
    }
    befor_top = scrollHeight;

  });
;
</script>
<style scoped>
#Head_back {
  z-index: 1000;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  color: white;
  height: 6vh;
  width: 100vw;
  transition: 1s;
}
#Head_back a {
  text-align: center;
  color: black;
  text-decoration: none;
  transition: 0.5s;
  height: 6vh;
  font-size: 2vh;
  line-height: 6vh;
  width: 20vw;
  font-weight: bold;
}
#Head_back a:hover {
  font-size: 2.5vh;
  color: #74787a;
}
#Head_back a.active {
  font-size: 2.5vh;
  color: black;
}
#Head_back a.active:hover {
  font-size: 2.2vh;
  color: #74787a;
}
</style>
