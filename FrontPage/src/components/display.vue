<template>
<div class="container">
  <div class="content">
    <h2>网页制作</h2>
    <div class="box" v-for="item in listData" key="item.id" :style="{'--i':item.id}" @click="openDetails(item.id)">
      <div class="imgBox">
        <div :style="{ 'background-image': 'url(' + item.pic + ')'}"></div>

      </div>
      <div class="text">
        <div class="tit">
          {{item.name}}
        </div>
        <div class="intro">
          <p>{{item.platform}}</p>
          <p>{{item.intro}}</p>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script setup>

import api from "../utils/api.js"
import {onMounted, ref} from "vue";
import { useRouter } from "vue-router";

const listData = ref('')
const router = useRouter()

const getData = async() =>{
  try{
    let name = 'display'
    listData.value = await api.getJSON(name)
    // console.log(listData.value)
  }catch (err){
    console.log(err)
  }
}

const openDetails = (id)=>{
  router.push({path:'/details',query:{id:id}})
}
onMounted(()=>{
  getData()
})

</script>


<style scoped lang="scss">
.content{
  padding: 30px;
}
.box{
  padding: 30px;
  border-radius: 20px;
  box-shadow: 1px 1px 10px gainsboro;
  display: flex;
  margin-bottom: 30px;
  transition: all .3s linear;
  opacity: 0;
  animation: fadeInRight .5s linear forwards;
  animation-delay: calc(var(--i) * 0.5s);
  .imgBox{
    width: 500px;
    height: 300px;
    margin-right: 50px;
    div{
      width: 500px;
      height: 300px;
      background-position: center center;
      background-size: cover;
      border-radius: 10px;
      background-repeat: no-repeat;
    }

  }
  .text{
    position: relative;
    top: 50px;
    left: 0;
    .tit{
      margin-bottom: 30px;
      font: {
        size: 20px;
        weight: bold;
      };
    }
  }
}
.box:hover{
  box-shadow: 5px 5px 15px grey;
}
h2{
  opacity: 0;
  animation: fadeInLeft .3s linear forwards;
}

</style>