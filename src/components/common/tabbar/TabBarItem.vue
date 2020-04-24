<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-logo"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-activated"></slot>
    </div>

    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 7vh;
  font-size: 12px;
}

.tab-bar-item img {
  height: 28px;
  width: 28px;
  vertical-align: middle;
}

.active {
  color: #d81e06;
}
</style>
