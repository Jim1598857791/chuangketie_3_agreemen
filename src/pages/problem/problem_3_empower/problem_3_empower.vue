
<template>
  <div class="page">
    <div class="container">
      <div class="title">商业授权书</div>
      <!-- 前言 -->

      <div class="paragraph">
        <div class="paragraph_title">
          一.
          升级企业版权VIP后，可获得由创客贴提供的商业授权书：
        </div>
        <div class="paragraph_content">
          <img style="width:1000px;" src="./img/problem_3_empower_1.jpg" alt>
          <img style="width:1000px;" src="./img/problem_3_empower_2.jpg" alt>
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
