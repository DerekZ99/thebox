<template>
  <tab-bar>
    <tab-bar-item path="/home">
      
      <div slot="item-text">首页</div>
      <img slot="item-logo" src="~assets/tabbar/home.png" alt />
      <img slot="item-icon-activated" src="~assets/tabbar/home (2).png" alt />
    </tab-bar-item>
    <tab-bar-item path="/work">
      <div slot="item-text">关于本页</div>
      <img slot="item-logo" src="~assets/tabbar/instruction.png" alt />
      <img slot="item-icon-activated" src="~assets/tabbar/instruction (2).png" alt />
    </tab-bar-item>
    <tab-bar-item path="/myself">
      <div slot="item-text">关于我</div>
      <img slot="item-logo" src="~assets/tabbar/nickname.png" alt />
      <img slot="item-icon-activated" src="~assets/tabbar/nickname (2).png" alt />
    </tab-bar-item>
    <tab-bar-item path="/collection">
      <div slot="item-text">我的收藏</div>
      <img slot="item-logo" src="~assets/tabbar/mark.png" alt />
      <img slot="item-icon-activated" src="~assets/tabbar/mark (2).png" alt />
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 导入tabbar
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
