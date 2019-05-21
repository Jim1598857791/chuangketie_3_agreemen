
<template>
  <div class="page">
    <div class="container">
      <div class="title">【新手入门】发票常见问题</div>
      <!-- 前言 -->

      <div class="paragraph">
        <div class="paragraph_title">一. 发票什么时候开？</div>
        <div class="paragraph_content">
          <p>
            申请发票的15个工作日内，工作人员会给您开具
            <span style="color:red">电子发票</span>
            ；
            <span style="color:grey; font-size:10px">*加急请联系客服400-8718211</span>
          </p>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">二. 购买企业版权VIP可以开发票吗？</div>
        <div class="paragraph_content">
          <p>购买个人VIP、企业版权VIP、印刷品都是可以开发票的；</p>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">三. 发票发到哪里？</div>
        <div class="paragraph_content">
          <p>
            电子发票会发送到您填写的联系人
            <span style="color:red">邮箱</span> 里面，届时您会收到发件人为
            <span style="color:red">service@chuangkit.com</span> 所发的 “
            <span style="color:red; font-weight: bold;">您收到来自北京艺源酷科技有限公司的电子发票【发票号***】</span>
            ”； （如果15个工作日未收到，请检查您邮箱的垃圾邮件夹，
            可能会被您的邮箱提供商错误的归类为垃圾邮件。）
          </p>
        </div>
      </div>
      <div class="paragraph">
        <div class="paragraph_title">四. 电子发票可以报销吗？</div>
        <div class="paragraph_content">
          <p>
            <span style="color:red">可以</span>
            ，电子发票和纸质发票具有同样的效力哦；
          </p>
          <p>
            <span style="color:grey; font-size:10px">*纸质发票请联系客服400-8718211，顺丰到付；</span>
          </p>
        </div>
      </div>
      <div class="paragraph">
        <div class="paragraph_title">五. 发票怎么开？</div>
        <div class="paragraph_content">
          <p>
            点击
            <a href="https://www.chuangkit.com/list/vip">https://www.chuangkit.com/list/vip</a>
            即可访问
            <a href="https://www.chuangkit.com/list/print">订单中心</a>
            ， 右上角可以点击申请发票，或者查看发票历史。
          </p>
          <br>
          <img src="./img/1.jpg" style="width:1000px;" alt>
          <img src="./img/2.png" style="width:1000px;" alt>
          <br>
          <p>
            15个工作日内您会在此申请邮箱内收到发件人为
            <span style="color:red; ">service@chuangkit.com</span>所发的 “
            <span style="color:red; font-weight: bold;">您收到来自北京艺源酷科技有限公司的电子发票【发票号***】</span>
            ” 请随时注意查收，如有问题请随时联系我们的客服电话 400-8718211 。
          </p>
          <br>
          <p>
            <span style="color:red">注</span>： 印刷和充值订单发票确认无误收货后15个工作日内发出。
          </p>
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
