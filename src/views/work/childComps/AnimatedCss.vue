<template>
  <div class="intro">
    <p>·Hi!接下来请让我介绍一下这款及其强大的特效插件Animated.css。这个插件特效众多，使用及其方便。本站的所有特效的实现都是基于这款插件。若想快速实现一些特效，这款插件将会是不二之选。</p>
    <p>
      ·插件地址:
      <a href="https://daneden.github.io/animate.css/">https://daneden.github.io/animate.css/</a>
    </p>
    <p>
      ·首先，你需要npm安装并引用这个插件 $ npm install animate.css --save 或者 $
      yarn add animate.css。 之后来到main.js中引用它
    </p>
    <img src="~assets/workImg/importAnimated.png" alt />
    <p>·引入完成之后，来一起见证它强大的地方吧。注意！每个标签只能加一个animated动画。多加不会起效果。但是可以套多几层标签，这样就能同时拥有更多动画</p>
    <img class="bigimg" src="~assets/workImg/animatedIntro.png" alt />
    <p>·如上图所见，这个动画是加在transition标签中的。这个transition标签是Vue封装的一个组件。这里的用法是标准用法。当然，还有更简短的version</p>
    <img class="bigimg" src="~assets/workImg/animatedIntro1.png" alt />
    <p>·在上方的应用场景中，我没有添加transition标签，而是直接使用animated动画。这样做是可以的。接下来，我会展示给你更多应用animated.css的trick</p>
    <p>·如果你了解三元运算符，那你对下面这个应用肯定不陌生</p>
    <img class="bigimg" src="~assets/workImg/animatedIntro2.png" alt />
    <p>·我们可以像最常用的isActive一样先进行一个判断。如果判断的值为true，则加上这个类名使标签具有动画效果。当然，说到用三元运算符做判断，我们可以利用三元运算符同时定义一个元素的显示和隐藏两个动画效果</p>
    <img class="bigimg" src="~assets/workImg/animatedIntro3.png" alt />
    <p>·在这个地方，我同时定义了这个span标签的显示和隐藏时的动画。而且当执行了隐藏动画时，这个标签会自动打上一个display:none的一个样式。你不再需要使用v-show="false"来隐藏这个标签</p>
    <p>这些，就是使用animated.css插件的方法和技巧。很遗憾，这个不支持Moustache语法。但是三元运算完全可以做到Moustache语法的判断，就是稍微有点不够优雅。以上就是所有关于animated.css的介绍</p>
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
  /* @media screen and (min-width: 480px) {
    @media screen and (max-width: 768px) {
      img {
        width: 100%;
      }
    }
  } */
}
@media screen and (max-width: 1280px) {
  .bigimg {
    width: 100%;
  }
}
</style>
