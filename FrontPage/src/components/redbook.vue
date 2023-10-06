<template>
  <div class="container">
    <div class="content">
      <div class="box" v-for="item in redJSON[current-1]" key="id">
        <div class="imgbox">
          <img :src="item.path" alt="" :class="item.id==1?'Himg':''" :style="{ '--i': (item.id % 2) === 0 ? 1:0  }">
        </div>
        <div class="text">
          <div class="title">
            {{ item.name }}
          </div>
          <div class="intro">
            <p>{{ item.illustrate }}</p>
          </div>
          <a class="btn" :href="item.url">Download</a>
        </div>
      </div>
      <div class="pagination">
        <a-pagination v-model:current="current" :total="total" :pageSize="pageSize" show-less-item/>
      </div>
    </div>

  </div>
</template>


<script setup>

import api from "../utils/api.js";
import {onMounted, ref} from "vue";

const current = ref(1)
const redJSON = ref('')

// 数据切片
const total = ref(null)
const pageSize = ref(2)

// 分页
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks;
}
const getData = async () => {
  try {
    let data = []
    let name = 'redbook';
    data = await api.getJSON(name);
    // console.log(data)
    total.value = data.length
    redJSON.value = chunkArray(data, pageSize.value)
    // console.log(redJSON.value)
  } catch (err) {
    console.log(err)
  }
}
onMounted(() => {
  getData()
})
</script>


<style scoped lang="scss">

.content {
  padding: 30px;
  border-radius: 20px;
  box-shadow: 1px 1px 10px gainsboro;
}

.box {
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;

  .imgbox {
    width: 400px;
    text-align: center;

  }

  img {
    width: 162px;
    height: 216px;
    border-radius: 10px;
    opacity: 0;
    animation: fadeInLeft .5s linear forwards;
    animation-delay: calc(var(--i) * 0.5s);
  }

  .Himg {
    width: 291px;
    height: 162px;
  }

  .text {
    width: 300px;
    position: relative;
    top: 30px;
    left: 0;
    opacity: 0;
    animation: fadeInRight .5s linear forwards;
    animation-delay: calc(var(--i) * 0.5s);

    .title {
      margin-bottom: 50px;
      font: {
        size: 30px;
        weight: bold;
      }
    }

    .intro {
      font-size: 14px;
      margin-bottom: 20px;
      p{
        line-height: 20px;
      }
    }

    a {
      font-size: 14px;
      width: 120px;
      height: 40px;
      padding: 10px 15px;
      background: black;
      color: white;
      border-radius: 20px;
    }
  }
}

.pagination {
  opacity: 0;
  animation: fadeInUp 0.5s linear forwards;
  animation-delay: 1s;
  width: 300px;
  height: 80px;
  margin: auto;
}


</style>