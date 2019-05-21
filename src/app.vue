<template>
  <div id="app">
    <router-link to="/vip_service_url">创客贴VIP服务协议</router-link>|
    <router-link to="/cc0_image_url">CC0协议图片使用疑问解答</router-link>|
    <router-link to="/cc01_0_text_url">CC0协议1.0通用正文</router-link>|
    <router-link to="/img_empower_url">商用图片授权许可协议</router-link>|
    <router-link to="/problem_url">【关注】常见问题</router-link>|
    <div style="font-size:12px">
      <router-link to="/problem_1_fapiao_url">发票常见问题</router-link>|
      <router-link to="/problem_2_copyright_url">版权相关问题</router-link>|
      <router-link to="/problem_3_empower_url">商业授权书</router-link>|
    </div>
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

