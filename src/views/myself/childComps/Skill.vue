<template>
  <div class="skill">
    <h2>我的技能树</h2>
    <!-- 技能树展示 -->
    <div class="skill-tree">
      <!-- 展示html的技能 -->
      <div class="skill-top">
        <skill-item class="html">
          <span slot="skillExtend">HTML</span>
          <span slot="skillExtend">HTML5</span>
          <span slot="skillDetail">标签语义化</span>
          <span slot="skillDetail">新增的标签</span>
          <img class="skillImg" slot="skillType" src="~assets/skillBg/html.jpg" alt />
        </skill-item>
        <skill-item class="css">
          <span slot="skillExtend">CSS</span>
          <span slot="skillExtend">CSS3</span>
          <span slot="skillExtend">BootStrap</span>
          <span slot="skillDetail">新增样式</span>
          <span slot="skillDetail">新增的选择器</span>
          <span slot="skillDetail">flex布局与响应式布局</span>
          <span slot="skillDetail">动画，过渡，定位</span>
          <span slot="skillDetail">媒体查询，适配</span>
          <img class="skillImg" slot="skillType" src="~assets/skillBg/css3.jpg" alt />
        </skill-item>
      </div>
      <div class="skill-bottom">
        <skill-item class="js">
          <span slot="skillExtend">原生js</span>
          <span slot="skillExtend">Jquery</span>
          <span slot="skillExtend">Vue.js</span>
          <span slot="skillDetail">熟悉组件化，模块化开发</span>
          <span slot="skillDetail">熟悉ES6增强语法</span>
          <span slot="skillDetail">使用vue-router配置路由映射关系</span>
          <span slot="skillDetail">封装vue组件，实现组件的复用与管理</span>
          <span slot="skillDetail">利用第三方库或插件实现更多功能与效果</span>
          <img class="skillImg" slot="skillType" src="~assets/skillBg/javas.jpg" alt />
        </skill-item>
        <skill-item class="ajax">
          <span slot="skillExtend">axios库</span>
          <span slot="skillExtend">mongodb数据库</span>
          <span slot="skillExtend">express框架（了解）</span>
          <span slot="skillExtend">node.js（了解）</span>
          <span slot="skillExtend">art-template（了解）</span>
          <span slot="skillDetail">通过封装axios实现前后端数据交互</span>
          <span slot="skillDetail">利用express框架定义路由</span>
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
  margin-bottom: 3vh;
}
.skill h2 {
  margin-top: 10px;
  text-align: center;
  font-size: 26px;
  font-family: starter;
  color: #fff;
}
/* .skill-tree{
  display: flex;

} */
.skill-top,
.skill-bottom {
  display: flex;
  flex-wrap:wrap ;
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
