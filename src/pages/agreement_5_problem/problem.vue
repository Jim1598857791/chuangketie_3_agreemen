
<template>
  <div class="page">
    <div class="container">
      <div class="title">【关注】常见问题</div>

      <div class="paragraph">
        <div class="paragraph_title">一. 如何开发票？</div>
        <div class="paragraph_content">
          <p>
            发票相关问题：
            <a href="http://edu.chuangkit.com/forum.php?mod=viewthread&tid=380">点击了解详情</a>
          </p>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">二. 可以商用吗？图片字体有商业版权吗？会不会侵权？</div>
        <div class="paragraph_content">
          <p>
            版权相关问题：
            <a href="http://edu.chuangkit.com/forum.php?mod=viewthread&tid=949&extra=">点击了解详情</a>
          </p>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">三. 什么是商业授权书？</div>
        <div class="paragraph_content">
          <p>
            商业授权书：
            <a
              href="http://edu.chuangkit.com/forum.php?mod=viewthread&tid=950&page=1&extra=#pid2482"
            >点击了解详情</a>
          </p>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">四. 企业版权VIP和个人VIP的区别是什么？</div>
        <div class="paragraph_content">
          <p>企业版权VIP用户下载所有正版授权作品可用作商业用途，不用担心引发版权纠纷。个人VIP曝光量限10万次</p>
        </div>
      </div>
      <div class="paragraph">
        <div class="paragraph_title">五. 如果使用中途我想增加人数，该怎么办？</div>
        <div class="paragraph_content">
          <p>
            您可以购买符合你需要人数的新套餐，旧的套餐会按金额折算转换为新套餐，然后和新套餐叠加在一起。
            举例：第一次购买了5人套餐，使用了3个月，中途想增加到10人套餐。这时可以直接购买10人套餐，
            低等级的套餐会把金额折算成高等级套餐的时长， 与你购买的高等级套餐时长累计叠加起来。
          </p>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">六. 充值企业版权VIP以后，成员管理在哪里添加？</div>
        <div class="paragraph_content">
          <p>进入企业主页（右上角头像下拉框中），在团队管理页面中，将邀请链接发送给公司成员进行申请，同意申请，即可添加。</p>
        </div>
      </div>
      <div class="paragraph">
        <div class="paragraph_title">七. 已经有个人VIP了，被添加企业版权VIP权限，再退出企业版权VIP，有影响吗？</div>
        <div class="paragraph_content">
          <p>没有影响，被添加的用户会直接变成企业版权VIP的权限，退出企业版权VIP后，依旧是个人VIP。企业版权VIP权限包含了所有个人VIP权限。</p>
        </div>
      </div>

      <div class="paragraph">
        <div class="paragraph_title">八. 企业版权VIP有哪些服务？</div>
        <div class="paragraph_content">
          <div class="paragraph_content_2">
            <p>1、标准商业授权，可用于数字用途、电商用途、线下印刷等多种场景。</p>
            <br>
            <p>2、300款常用正版字体商业授权。</p>
            <br>
            <p>3、40万张正版图片商业授权。</p>
            <br>
            <p>4、团队模板功能。</p>
            <br>
            <p>5、品牌管理功能。</p>
          </div>
        </div>
      </div>
      <div class="paragraph">
        <div class="paragraph_title">九. 创客贴上的所有模板都可以商用吗？</div>
        <div class="paragraph_content">
          <p>在模板中心页面的企业模板中，都是由我们精心甄选出的优质模板，企业版权VIP可以全部商用，不必担心版权问题。</p>
        </div>
      </div>
      <div class="paragraph">
        <div class="paragraph_title">十. 个人购买了企业版权VIP，没有注册公司。如果想获得商业授权书该怎么办呢？</div>
        <div class="paragraph_content">
          <p>在获取商业授权书时，有一个填写公司名称，在哪里输入“姓名+身份证号码”即可。</p>
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
@import "../base.less";
</style>
