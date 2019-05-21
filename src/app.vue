<template>
  <div id="app">
    <router-link to="/">活动页</router-link>|
    <router-link to="/vip_service_url">创客贴VIP服务协议</router-link>|
    <router-link to="/cc0_image_url">CC0协议图片使用疑问解答</router-link>|
    <router-link to="/cc01_0_text_url">CC0协议1.0通用正文</router-link>|
    <router-link to="/img_empower_url">商用图片授权许可协议</router-link>|
    <router-link to="/problem_url">【关注】常见问题</router-link>|
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
<style lang="less">
@import "base/reset.css";
</style>

