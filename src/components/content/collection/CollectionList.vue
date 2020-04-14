<template>
  <div class="collection-list">
    <collection-item
      :key="index"
      v-for="(item, index) in imgSrc"
      :imgSrc="imgSrc"
      :imgIndex="index"
    ></collection-item>
  </div>
</template>

<script>
import CollectionItem from "./CollectionItem";
export default {
  components: {
    CollectionItem
  },
  props: {
    imgSrc: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.collection-list {
  column-count: 5;
}
</style>
