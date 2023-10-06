<template>
  <div class="container">
    <div class="content">
      <div class="box">
        <div class="title">
          {{ jsonData.name }}
        </div>
        <div class="platform">
          <p>{{ jsonData.platform }}</p>
        </div>
        <div class="intro">
          <p>{{ jsonData.intro }}</p>
        </div>

<!--        图片方向为横向的时候展示这个内容部分-->
        <div class="imgbox" v-if="jsonData.direction === 'transverse'">
          <div class="images" v-for="item in jsonData.pic">
            <a-image
                :width="500"
                :height="300"
                :src="item"
            />
          </div>
        </div>
        <div class="imgbox" v-if="jsonData.direction === 'vertical'">
          <div class="images" v-for="item in jsonData.pic">
            <a-image
                :width="300"
                :height="500"
                :src="item"
            />
          </div>
        </div>
        <div class="tip">
          <context-holder/>
          <a-button class="btn" type="primary" @click="info">点击获取代码...</a-button>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import api from "../utils/api.js";
import {message} from 'ant-design-vue';

const [messageApi, contextHolder] = message.useMessage();

const info = () => {
  messageApi.info('添加作者微信获取。');
};

const route = useRoute()
const id = ref(route.query.id)
const jsonData = ref('')

const getData = async () => {
  // console.log(id.value)
  jsonData.value = await api.getDetails(id.value)
  // console.log(jsonData.value)
}
onMounted(() => {
  getData()
})

</script>


<style scoped lang="scss">
.content {
  margin: 50px 0;
  padding: 30px;
  background: white;
  border-radius: 30px;
  box-shadow: 1px 1px 10px silver;
}

.box {
  .title {
    font: {
      size: 28px;
      weight: bold;
    };
    margin-bottom: 30px;
    opacity: 0;
    animation: fadeInDown 0.3s linear forwards;
  }

  .platform {
    font-weight: bold;
    font-size: 22px;
    color: #41B883;
    opacity: 0;
    animation: fadeInUp 0.5s linear forwards;
    animation-delay: 0.5s;
  }

  .intro {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1px;
    opacity: 0;
    animation: fadeInLeft 0.5s linear forwards;
    animation-delay: 1s;
  }

  .imgbox {
    display: flex;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeInRight 0.5s linear forwards;
    animation-delay: 1.5s;
  }

  .images {
    margin: 30px auto;
    border-radius: 30px;
    border: 1px silver dashed;
    img {
      width: 100%;
      text-align: center;

      &:hover {
        box-shadow: 2px 2px 12px gainsboro;
      }
    }

  }

  .tip {
    opacity: 0;
    animation: fadeInRight 0.5s linear forwards;
    animation-delay: 2s;


    .btn {
      letter-spacing: 3px;
      height: 40px;
      border-radius: 20px;
      background: black;
      position: relative;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

  }
}
</style>