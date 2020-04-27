<template>
  <div class="intro">
    <p>
      ·Hi!现在我来介绍一下这个很火的UI库——element UI
      官方地址可以点下方footer里面的蓝色小图标。使用方法还是，先进行安装，然后在main.js中引用。
    </p>
    <img src="~assets/workImg/importElementUi.png" alt="" />
    <p>
      ·引用完成之后，就可以去到他们的官网挑选组件。和bootstrap有几分相似。那么在本站，我主要用了这几个组件：折叠面板（collapse），走马灯（Carousel
      ），开关（switch），以及一个布局组件（layout）。那么接下来，让我介绍一下我是怎么在本站中运用他们的
    </p>
    <p>·首先我来讲一下折叠面板。来到官网之后，你会看到下面这个画面</p>
    <img class="bigimg" src="~assets/workImg/elementIntro1.png" alt="" />
    <p>
      ·复制黑色框框中内容到自己的项目中。然后在
      el-collapse-item
      这个标签中改上自己想要的内容即可。也可以修改他的样式。你现在所看到的内容，就是这个利用这个折叠面板来呈现的。虽然应该没有什么人会在折叠面板中像我一样呈现这么多内容。我也是第一次尝试。
    </p>
    <p>
      ·OK，接下来我要介绍的是走马灯，也可以叫它轮播图。用法与上面的折叠面板差不多，复制粘贴。但是这里有一点我想说的是，这个轮播图的默认样式不够好看。如果需要修改他的样式，你在style标签中不能添加scoped这个属性。否则样式不会起效果。你在修改走马灯的样式的时候可以在前面加上他父亲的类名或者模板根元素的类名。这样可以避免在别的地方样式重复。
    </p>
    <p>·布局组件layout的话，我选择了这个。:span代表这一列占屏幕的多少等份，和flex差不多。:offset则是代表距离屏幕左边向右移动多少等份</p>
    <img src="~assets/workImg/elementIntro2.png" alt="" />
    <p>·拿到了这个，你就会发现你的屏幕就有了一个版心的位置。而且他是自适应的。可以放心的在里面填充内容</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.intro p {
  margin: 10px 0;
}
@media screen and (max-width: 479px) {
  img {
    width: 100%;
  }
}
@media screen and (max-width: 1280px) {
  .bigimg {
    width: 100%;
  }
}
</style>
