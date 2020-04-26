<template>
  <div class="content">
    <div class="myInfo">
      <div class="infoItem animated bounceInLeft delay-2s">
        <div :class="isShowAnimate?'animated bounce':''" class="itemDetail">
          <img src="~assets/myInfo/qq2.jpg" alt />
          <h5>346230944</h5>
        </div>
        <div :class="isShowAnimate?'animated bounce':''" class="itemDetail">
          <img src="~assets/myInfo/wechat.jpg" alt />
          <h5>Derek951753</h5>
        </div>
      </div>
      <!-- ==============inner ==============-->
      <div class="innerInfoItem animated jackInTheBox delay-2s">
        <div :class="isShowAnimate?'animated bounce delay-1s':''" class="innerDetail"></div>
      </div>
      <!-- ==============inner============== -->
      <div class="infoItem animated bounceInRight delay-2s">
        <div :class="isShowAnimate?'animated bounce delay-2s':''" class="itemDetail">
          <img src="~assets/myInfo/phone1.jpg" alt />
          <h5>15728769293</h5>
        </div>
        <div :class="isShowAnimate?'animated bounce delay-2s':''" class="itemDetail">
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
      isShowAnimate: false,
      timer: ""
    };
  },
  activated() {
    let that = this;
    this.timer = setInterval(() => {
      that.isShowAnimate = !that.isShowAnimate;
    }, 4000);
  },
  deactivated() {
    clearInterval(this.timer); //离开页面清除定时器
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
  height: 9.375rem;
  width: 9.375rem;
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
  width: 4.375rem;
  height: 4.375rem;
  margin-bottom: 0.625rem;
}
.itemDetail h5 {
  font-size: 1rem;
  padding: .125rem .3125rem;
  border-radius: .3125rem;
  border: .0625rem solid #ffffff;
}
@media screen and (max-width: 479px) {
  .myInfo{
     margin-top: 1rem;
     height: 30vh;
  }
  .infoItem {
    flex-direction: column;
  }
  .itemDetail img {
    width: 4rem;
    height: 4rem;
  }
  .innerDetail {
    height: 7rem;
    width: 7rem;
  }
  .itemDetail h5 {
    font-size: 0.875rem;
  }
  .itemDetail img {
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  margin-bottom: .3125rem;
}
}
@media screen and (min-width: 480px) {
  @media screen and (max-width: 767px) {
    .infoItem {
      flex-direction: column;
    }
  }
}
@media screen and (min-width: 768px) {
  @media screen and (max-width: 991px) {
    .infoItem {
      flex-direction: column;
    }
  }
}
</style>