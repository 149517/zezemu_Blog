<template>
  <div class="container">
    <div class="content">
      <div class="text">
        <p>作者：泽泽木</p>
        <p>网站主要用于记录一些笔记和作品，包含一些小红书代码，网站后续会逐步完善。</p>
        <p>目前大四，正在找实习工作。如果有什么问题或者网页制作的单子也可以联系我。</p>
      </div>
      <button class="btn" @click="play = !play">WeChat</button>
      <div class="wechat" v-if="play">
        <img src="http://www.zezemu.top:3000/images/wechat.png" alt="WeChat">
      </div>

    </div>
  </div>
</template>


<script setup>
import {ref} from "vue";

const play = ref(false)
</script>


<style scoped lang="scss">
.content {
  margin: 50px auto;
  width: 800px;
  height: 520px;
  text-align: center;
  opacity: 0;
  animation: fadeInDown 0.5s linear forwards;
  box-shadow: 1px 1px 10px gainsboro;
  padding: 50px;
  border-radius: 20px;
  transition: all .3s linear;
  &:hover{
    box-shadow: 5px 5px 15px grey;
  }
}
.text{
  opacity: 0;
  animation: fadeInLeft .5s linear forwards;
  animation-delay: 0.5s;
}

button {
  margin-top: 30px;
  background: black;
  color: white;
  height: 40px;
  width: 100px;
  border-radius: 20px;
  animation: fadeInUp 0.5s linear forwards;
  opacity: 0;
  animation-delay: 0.5s;
}

.wechat {
  width: 300px;
  height: 300px;
  margin: 50px auto;
  opacity: 0;
  animation: fadeInUp 0.5s linear forwards;
  img{
    width: 200px;
    height: 200px;
  }
}
</style>