<template>
  <header>
    <div class="navigate" ref="nav">
      <router-link to="/" class="link" :class="{ active: isActive('/') }" :style="{ '--i': 0 }">Home</router-link>
      <router-link to="/note" class="link" :class="{ active: isActive('/note') }" :style="{ '--i': 1 }">Note
      </router-link>
      <router-link to="/redbook" class="link" :class="{ active: isActive('/redbook') }" :style="{ '--i': 2 }">RedBook
      </router-link>
      <router-link to="/display" class="link" :class="{ active: isActive('/display') }" :style="{ '--i': 3 }">Display
      </router-link>
      <router-link to="/introduce" class="link" :class="{ active: isActive('/introduce') }" :style="{ '--i': 4 }">
        Introduce
      </router-link>
    </div>

  </header>
</template>

<script setup>

import {useRoute} from "vue-router";

const route = useRoute()
const isActive = (toPath) => {
  return route.path === toPath
}

</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  .link {
    display: inline-block;
    width: 100px;
    height: 30px;
    margin: 0 20px;
    line-height: 30px;
    text-align: center;
    opacity: 0;
    font: {
      weight: bold;
    }
    animation: fadeInDown 1s ease forwards;
    animation-delay: calc(0.3s * var(--i));
  }
}

a:active {
  background: black;
  color: white;
  border-radius: 15px;
}

.active {
  padding: 0 10px;
  background: black;
  color: white;
  border-radius: 15px;
}

</style>