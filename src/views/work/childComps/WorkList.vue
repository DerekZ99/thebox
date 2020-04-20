<template>
  <div class="work-list">
    <h2>目录</h2>
    <ul>
      <li @click="listClick(item)" :class="{active:item.isActive}" v-for="(item, index) in title" :key="index">·{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    listClick(item) {
      const activeNum = item.name
      this.$emit('listItemClick',activeNum)
    }
  },
  props: {
    title: {
      type: Array,
      default: []
    },
  }
};
</script>

<style scoped>
h2{
  font-size: 25px;
}
.work-list {
  position: fixed;
  left: 2%;
  top: 40%;

  font-size: 16px;
  color: #ffffff;
}
.active{
  color: red;
  font-size: 20px;
  font-weight: 700;
}
</style>