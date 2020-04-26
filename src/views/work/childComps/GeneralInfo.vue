<template>
  <div class="intro">
    <p>·每当开始一个项目的时候，都需要做初始化的工作。我这里会介绍如何使用vue cli3 进行一个项目的初始化工作</p>
    <p>·使用vue cli3 先创建一个项目 npm 输入 vue create + “项目名”</p>
    <p>
      ·然后，依次在src目录创建文件夹：router（配置路由映射关系）,views（存放不同页面）,components(用来存放不同的组件),这是一个静态页面，如果需要联网的话则需要创建network文件夹去封装axios。下面是src目录中的内容
    </p>
    <img src="~assets/workImg/folder.png" alt="">
    <p>·文件夹创建完成之后，安装相关依赖。如果已经有package.Json文件的话，则可以在终端直接输入npm install命令来进行安装。下面是我的package.Json文件中的内容</p>
  
    <img src="~assets/workImg/packageJson.png" alt="" />
    <p>·安装完成之后，来到main.js文件中引用这些组件</p>
    <img src="~assets/workImg/mainjs.png" alt="" />
   
    <p>·当然，你可能还需要用git来管理你的项目。这里就不详细介绍了</p>
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
