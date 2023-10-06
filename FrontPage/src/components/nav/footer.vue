<template>
  <footer>
    <div class="text">
      <div style="width:500px;margin:0 auto; padding:20px 0;">
        ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">滇ICP备2023000492号</a>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53252702252752">
          <img src="../../assets/beian.png" style="float:left;"/>
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
            滇公网安备 53252702252752号</p></a>
      </div>

    </div>

  </footer>
</template>

<script>
export default {
  name: "foot"
}
</script>

<style scoped>
.text{
  padding-top: 10px;
  width: 100%;
  text-align: center;
}
a{
  display:inline-block;
  text-decoration:none;
  height:20px;
  line-height:20px;
}
</style>