<template>
  <div @mouseenter="mouseOn" @mouseleave="mouseOn" :class="isShowAnimate?'animated swing faster':''">
    <div class="item" @click="itemClick" :class="{active:isActive}">
      <slot></slot>
      <img v-if="isActive" src="~assets/rapImg/14.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  data(){
    return{
      isShowAnimate:false
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
    mouseOn(){
      this.isShowAnimate = !this.isShowAnimate  
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    }
  }
};
</script>

<style scoped>
.item {
  line-height: 40px;
  margin-left: 20px;
  padding: 0 10px;
  font-size: 16px;
  font-family: navbar;
  background-color: #bdb29c;
  border-radius: 20px;
  display: flex;
}
.item:hover {
  cursor: pointer;
}
.item img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.active {
  color: #dd5044;
}
</style>