<template>
  <div class="intro">
    <p>·先来讲讲这个网站从0到有一个雏形的过程</p>
    <p>·使用vue cli3 先创建一个项目 npm 输入 vue create + “项目名”</p>
    <p>
      ·然后，依次在src目录创建文件夹：router（配置路由映射关系）,views（存放不同页面）,components(用来存放不同的组件),这是一个静态页面，如果需要联网的话则需要创建network文件夹去封装axios
    </p>
    <p>·文件夹创建完成之后，安装相关依赖</p>
    <p>·下面是我的package.Json文件中的内容</p>
    <img src="~assets/workImg/packageJson.png" alt="" />
    <p>·安装完成之后，来到main.js文件中引用这些组件</p>
    <img src="~assets/workImg/mainjs.png" alt="" />
    <p>·如果你完成了上述的操作，那么恭喜你，You're ready to go!</p>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.intro p {
  margin: 10px 0;
}
@media screen and (max-width: 479px) {
 img{
   width: 100%;
 }
}


</style>
