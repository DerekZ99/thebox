<template>
  <div class="content">
    <div class="myInfo">
      <div class="infoItem animated bounceInLeft delay-2s">
        <div class="itemDetail">
          <img src="~assets/myInfo/qq2.jpg" alt />
          <h5>346230944</h5>
        </div>
        <div class="itemDetail">
          <img src="~assets/myInfo/wechat.jpg" alt />
          <h5>Derek951753</h5>
        </div>
      </div>
      <!-- ==============inner ==============-->
      <div class="innerInfoItem animated jackInTheBox delay-2s">
        <div class="innerDetail"></div>
      </div>
      <!-- ==============inner============== -->
      <div class="infoItem animated bounceInRight delay-2s">
        <div class="itemDetail">
          <img src="~assets/myInfo/phone1.jpg" alt />
          <h5>15728769293</h5>
        </div>
        <div class="itemDetail">
          <img src="~assets/myInfo/email.jpg" alt />
          <h5>346230944@qq.com</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.myInfo {
  margin-top: 1.25rem;
  height: 35vh;
  display: flex;
  justify-content: space-around;
}
.innerInfoItem {
  justify-content: center;
  display: flex;
  flex: 1;
}
.innerDetail {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #fff;
  background: url("~assets/myInfo/self.jpg") no-repeat;
  background-size: cover;
  align-self: center;
}
.infoItem {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.infoItem:nth-child(2) {
  justify-content: center;
}
.itemDetail {
  display: flex;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.itemDetail img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-bottom: 0.625rem;
}
.itemDetail h5 {
  font-size: 16px;
}
</style>