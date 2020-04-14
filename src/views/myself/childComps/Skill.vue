<template>
  <div class="skill">
    <h2>我的技能树</h2>
    <!-- 技能树展示 -->
    <div class="skill-tree">
      <div
        class="skill-row"
        :class="curIndex === index ? 'animated pulse' : ''"
        @mouseenter="mouseOn(index)"
        @mouseleave="curIndex = 5"
        v-for="(item, index) in skill"
        :key="index"
      >
        <div class="skill-item">
          <span>{{ item.skillType }}</span>
        </div>
        <div class="skill-item">
          <span v-for="(value, index) in item.skillExtend" :key="index">{{
            value
          }}</span>
        </div>
        <div class="skill-item">
          <span v-for="(value, index) in item.skillDetail" :key="index">{{
            value
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skill: [
        {
          id: 1,
          skillType: "HTML基础",
          skillExtend: ["HTML5"],
          skillDetail: ["标签语义化", "新增的标签"]
        },
        {
          id: 2,
          skillType: "CSS基础",
          skillExtend: ["CSS3", "BootStrip"],
          skillDetail: [
            "新增样式",
            "新增的选择器",
            "flex布局与响应式布局",
            "动画，过渡，定位",
            "媒体查询，适配"
          ]
        },
        {
          id: 3,
          skillType: "JavaScript基础",
          skillExtend: ["Jquery", "Vue.js"],
          skillDetail: [
            "组件化，模块化开发",
            "vue-router配置路由映射关系",
            "利用axios实现前后端数据交互",
            "利用第三方库或插件实现多更功能和效果"
          ]
        },
        {
          id: 4,
          skillType: "Ajax与node.js（了解）",
          skillExtend: ["mongodb", "express框架"],
          skillDetail: ["cookie和session", "使用ajax发送和响应网络请求"]
        }
      ],
      curIndex: 0
    };
  },
  methods: {
    mouseOn(index) {
      this.curIndex = index;
    }
  }
};
</script>

<style scoped>
.skill {
  color: #fff;
}
.skill h2 {
  text-align: center;
  font-size: 16px;
}
.skill-row {
  display: flex;
  background-image: linear-gradient(to right, #1f2830, #0E2132);
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  border-radius: 10px;
}
.skill-item {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
.skill-item span {
  border: 1px solid #ffffff;
  padding: 5px 10px;
  margin: 5px 0;
  display: block;
  border-radius: 5px;
}
</style>
