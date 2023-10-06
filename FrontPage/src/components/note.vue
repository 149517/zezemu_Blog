<template>
  <div class="container">
    <div class="index">
      <LeftTitle></LeftTitle>
    </div>
    <div class="content">
      <p>
         <v-md-preview :text="mdData"></v-md-preview>
      </p>
    </div>

  </div>
</template>
<script setup>
import LeftTitle from "./nav/LeftTitle.vue";
import {useStore} from 'vuex';
import {computed, onMounted, ref, watch} from "vue";
import api from '../utils/api.js'
const store = useStore();

const mdData = ref('')
// 内容块，第一部分
let chunk = ref(0)

// 标题key
const key = computed(() => store.state.selectKey)

const pageHeight = ref(0);

// 定义一个函数来处理滚动事件
const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // 如果滚动到页面底部
  if (scrollY + windowHeight >= documentHeight - 20) {
    AgainRequest();
  }
};
const AgainRequest =  () =>{
  let num = chunk.value++
  MarkDown(num)
}
// 获取 md 数据
let MarkDown = async (chunk) =>{
  try{
    let name = key.value
    const newData = await api.getMarkdown(name, chunk);
    mdData.value += newData
  }catch (err){
    console.log(err)
  }
}
watch(key,(newValue,oldValue)=>{
  chunk.value = 0
  mdData.value = '';
  MarkDown(chunk.value)
})


onMounted(()=>{
  MarkDown(chunk.value)
  // 获取初始页面高度
  pageHeight.value = document.documentElement.scrollHeight;
  // console.log(pageHeight.value)

  // 添加滚动事件监听器
  window.addEventListener('scroll', handleScroll);
})


</script>
<style scoped lang="scss">
.container {
  display: flex;
  .index {
    width: 300px;
    opacity: 0;
    animation: fadeInLeft .5s ease forwards;
  }

  .content {
    flex: 1;
    margin-left: 30px;
    background: white;
    box-shadow: 1px 1px 10px rgba(173, 255, 47, 0.24);
    padding: 30px;
    border-radius: 20px;
    opacity: 0;
    animation: fadeInUp .5s ease forwards;
    animation-delay: .5s;
  }
}
</style>