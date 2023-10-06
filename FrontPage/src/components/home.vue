<template>
  <div class="container">


    <div class="content">
      <div class="text">
        <div class="tit">
          欢迎来到泽泽木的个人网站
        </div>
        <p>
          在这里有一些来自小红书上的代码下载，
          <br>
          同时也包含我的一些笔记，还有一些网页制作内容
        </p>
        <div class="but">
          <button class="btn" @click="this.$router.push('/note')">
            more
          </button>
          <button class="btn" @click="this.$router.push('/about')">
            About
          </button>
        </div>

      </div>
      <div class="img">
        <img src="../assets/images/model.png" alt="bg">
      </div>
    </div>

  </div>

</template>
<script setup>

</script>
<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px - 100px);
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .img {
    position: relative;
    top: 100px;
    left: 0;
  }

  .text {
    display: inline-block;
    position: relative;
    top: 50px;
    left: 0;

    .tit {
      font: {
        family: ShuYuan;
        size: 34px;
      };
      overflow: hidden;
      border-right: .15em solid orange;
      white-space: nowrap;
      width: 0;
      animation: typing 3s steps(12) forwards;
    }

    p {
      display: inline-block;
      margin-top: 30px;
      line-height: 40px;
      opacity: 0;
      animation: fadeInUp 0.5s ease-in forwards;
      animation-delay: 3s;
    }

    .but {
      display: flex;

      button {
        margin-right: 30px;
      }
    }

    .btn {
      display: block;
      background: black;
      width: 80px;
      height: 35px;
      color: #fff;
      border-radius: 20px;
      margin-top: 50px;
      opacity: 0;
      animation: fadeInUp 0.5s ease-in forwards;
      animation-delay: 3.5s;
    }
  }
}

</style>