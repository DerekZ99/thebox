<template>
  <div class="collection-item">
    <img :src="imgSrc[imgIndex]" @click="itemClick(imgIndex)" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: Array,
      default: []
    },
    imgIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    itemClick(src) {
      // 发送事件到事件总站，另一头是collection在接
      this.$bus.$emit("itemClicked", src);     
    }
  }
};
</script>

<style scoped>
.collection-item {
  break-inside: avoid;
  margin: 10px 0;
}
.collection-item img {
  height: 100%;
  width: 100%;
}
</style>
