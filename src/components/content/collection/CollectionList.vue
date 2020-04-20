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
@media screen and (min-width: 480px) {
  .collection-list {
    column-count: 2;
  }
}
@media screen and (min-width: 768px) {
  .collection-list {
    column-count: 3;
  }
}
@media screen and (min-width: 992px) {
  .collection-list {
    column-count: 4;
  }
}
@media screen and (min-width: 1200px) {
  .collection-list {
    column-count: 5;
  }
}
</style>
