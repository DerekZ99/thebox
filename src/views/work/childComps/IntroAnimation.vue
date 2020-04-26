<template>
  <div class="intro">
    <p>·配置前端路由是一项很重要的操作，当页面发生跳转行为的时候，可以传参，也可以做重定向。</p>
    <p>·第一件要做的事就是配置路由映射关系</p>
    <img class="bigimg" src="~assets/workImg/router/initalwork.png" alt />
    <p>·当想让页面发生跳转时，可以使用this.$router.push(传入跳转的路由地址)来实现。</p>
    <img class="bigimg" src="~assets/workImg/router/routerpush.png" alt />
    <i>==============这是一条分割线==============</i>
    <p>·这是最基本的路由跳转操作，当然如果你想要传值，比如传id的时候，可以这样做</p>
    <p>1 先在router目录下的index.js中配置路由</p>
    <img src="~assets/workImg/router/routerparams1.png" alt />
    <p>2 在触发页面跳转的地方传入值</p>
    <img src="~assets/workImg/router/routerparams2.png" alt />
    <p>3 在成功跳转页面后，在新的页面存入这个值</p>
    <img src="~assets/workImg/router/routerparams3.png" alt />
    <p>·这个类似于get方法。传的值会出现在浏览上方的url中。然后页面就可以根据这个传过来的值，在数据中找到不同的内容来呈现在页面上</p>
    <i>==============这是一条分割线==============</i>
    <p>·说到get方法，那也有类似post方法的路由传参方方式。那就是用params</p>
    <p>·先在router目录下配置路由</p>
    <img src="~assets/workImg/router/routerparams4.png" alt />
    <p>·然后在原页面触发路由跳转，我这里用登录来模拟这个场景，当我点击了登录按钮的时候页面会发生跳转</p>
    <img class="bigimg" src="~assets/workImg/router/routerparams5.png" alt />
    <p>
      <img src="~assets/workImg/router/routerparams7.png" alt />
    </p>
    <p>
      然后在假设我在views1的输入框中输入了用户名：“张三”，密码：1234，利用路由传参的方式可以将我在views1中输入的内容呈现在views2中
    </p>
    <img class="bigimg" src="~assets/workImg/router/routerparams6.png" alt="">
    <p><img src="~assets/workImg/router/routerparams8.png" alt=""></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.intro p {
  margin: 10px 0;
}
/* .intro i {
  color: red;
} */

@media screen and (max-width: 479px) {
  img {
    width: 100%;
  }
}
@media screen and (min-width: 480px) {
  @media screen and (max-width: 768px) {
    .bigimg {
      width: 100%;
    }
  }
}
</style>
