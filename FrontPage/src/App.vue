<template>
  <Nav></Nav>
  <router-view></router-view>
  <Footer></Footer>
</template>
<script>

import {defineComponent} from "vue";
import Nav from "./components/nav/nav.vue";
import Footer from './components/nav/footer.vue'

export default defineComponent({
  components: {Nav,Footer}
})
</script>
<style scoped lang="scss">
</style>