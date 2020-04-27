<template>
  <div class="skill">
    <h2>我的技能树</h2>
    <!-- 树img -->
    <div
      v-if="isShowSkill"
      :class="isShowSkill?'':'animated bounceOut'"
      class="tree-box"
      @click="treeClick"
    >
      <h5 class="treeInfo">点击查看</h5>
      <img class="tree" src="~assets/skillBg/tree.png" alt />
    </div>

    <!-- 技能树展示 -->
    <div v-show="!isShowSkill" class="skill-tree">
      <!-- 展示html的技能 -->
      <div class="skill-top">
        <skill-item class="html animated bounceIn">
          <span slot="skillExtend">HTML</span>
          <span slot="skillExtend">HTML5</span>
          <span slot="skillDetail">熟悉标签语义化</span>
          <span slot="skillDetail">熟悉新增的标签与新特性</span>
          <img class="skillImg" slot="skillType" src="~assets/skillBg/html.jpg" alt />
        </skill-item>
        <skill-item class="css animated bounceIn delay-1s">
          <span slot="skillExtend">CSS</span>
          <span slot="skillExtend">CSS3</span>
          <span slot="skillExtend">BootStrap</span>
          <span slot="skillDetail">掌握新增样式与选择器</span>
          <span slot="skillDetail">熟练掌握flex布局与响应式布局</span>
          <span slot="skillDetail">熟练掌握动画，过渡，定位</span>
          <span slot="skillDetail">熟悉媒体查询，rem适配</span>
          <img class="skillImg" slot="skillType" src="~assets/skillBg/css3.jpg" alt />
        </skill-item>
      </div>
      <div class="skill-bottom">
        <skill-item class="js animated bounceIn delay-2s">
          <span slot="skillExtend">JavaScript</span>
          <span slot="skillExtend">Jquery（了解）</span>
          <span slot="skillExtend">Vue.js</span>
          <span slot="skillDetail">熟悉组件化，模块化开发</span>
          <span slot="skillDetail">熟悉ES6增强语法</span>
          <span slot="skillDetail">熟练使用vue-router实现页面跳转和登录状态判断</span>
          <span slot="skillDetail">封装组件，实现组件的复用与管理</span>
          <span slot="skillDetail">利用vuex实现全局状态管理</span>
          <img class="skillImg" slot="skillType" src="~assets/skillBg/javas.jpg" alt />
        </skill-item>
        <skill-item class="ajax animated bounceIn delay-3s">
          <span slot="skillExtend">axios库</span>
          <span slot="skillExtend">mongodb数据库</span>
          <span slot="skillExtend">express框架（了解）</span>
          <span slot="skillExtend">node.js（了解）</span>
          <span slot="skillDetail">熟悉利用axios库实现前后端数据交互与数据接口管理</span>
          <span slot="skillDetail">熟悉利用axios实现请求与响应拦截</span>
          <span slot="skillDetail">熟悉利用express框架定义路由</span>
          
          <img class="skillImg" slot="skillType" src="~assets/skillBg/ajax.png" alt />
        </skill-item>
      </div>
    </div>
  </div>
</template>

<script>
import SkillItem from "./SkillItem";
export default {
  components: {
    SkillItem
  },
  data() {
    return {
      curIndex: 0,
      isShowSkill: true
    };
  },
  methods: {
    mouseOn(index) {
      this.curIndex = index;
    },
    treeClick() {
      this.isShowSkill = !this.isShowSkill;
    }
  }
};
</script>

<style scoped>
.skill {
  margin-bottom: 3vh;
}
.skill h2 {
  margin-top: 10px;
  text-align: center;
  font-size: 26px;
  font-family: starter;
  color: #fff;
}
.tree-box {
  position: relative;
}
.tree {
  width: 50%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.treeInfo {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  color: #ffffff;
  transform: translate(-50%, -200%);
}
.treeInfo:hover{
  cursor: pointer;
}
.skill-top,
.skill-bottom {
  display: flex;
  flex-wrap: wrap;
 
}

.html {
  background-color: #ffffff;
  flex: 1;
  margin: 5px;
}
.css {
  background-color: #1095cd;
  flex: 1;
  margin: 5px;
}
.js {
  background-color: #e8d354;
  flex: 1;
  margin: 5px;
}
.ajax {
  background-color: #e8e8e8;
  flex: 1;
  margin: 5px;
}
</style>
