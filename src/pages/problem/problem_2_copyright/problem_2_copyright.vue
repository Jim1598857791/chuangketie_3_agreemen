
<template>
  <div class="page">
    <div class="container">
      <div class="title">版权相关问题</div>
      <!-- 前言 -->

      <div class="paragraph">
        <div class="paragraph_title">
          一.
          可以商用吗？
          ：
        </div>
        <div class="paragraph_content">
          <p>我们给会员提供了商用授权，其中个人VIP是有曝光限制的新媒体授权，企业版权VIP是无曝光限制的标准授权，具体授权范围如下</p>
          <br>
          <img src="./img/WechatIMG269.jpg" style="width:1000px;" alt>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">二. 创客贴做的设计都可以商用吗？</div>
        <div class="paragraph_content">
          <p>如果你对商业有要求，建议你升级企业版权VIP。目前线上有200款企业版权VIP可免费商用的字体：</p>
          <br>
          <img src="./img/WechatIMG268.jpg" style="width:1000px;" alt>
          <br>
          <p>预计在3月11日，我们会上线企业模板专区，专区中有我们甄选出的正版版权模板，可以放心大胆使用，不必担心版权问题。</p>
          <br>
          <p>同时也会上线40万款正版图片，只要是企业版权VIP用户，都是可以免费商用的。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    quick_pay_fun: function() {
      this.quick_pay_show = true;
      this.balance_pay_show = false;
      this.company_pay_show = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../base.less";
</style>
