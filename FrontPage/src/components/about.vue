<template>
<div class="container">
  <div class="content">
    <v-md-preview :text="aboutData"></v-md-preview>
  </div>
</div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import api from "../utils/api.js";

const aboutData = ref('')

const getData = async() =>{
  aboutData.value = await api.getMdData('about');
  console.log(aboutData.value)
}
onMounted(()=>{
  getData()
})
</script>


<style scoped lang="scss">
.content{
  border-radius: 20px;
  border: 1px silver dashed;
}
</style>