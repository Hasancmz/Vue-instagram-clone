<template>
  <div class="save">
    <!-- <CustomText tag="h1">Profile IGTV</CustomText> -->
    <div class="save-inner">
      <div class="icon">
        <i class="fa fa-circle-thin" aria-hidden="true"></i>
      </div>
      <div class="saved">
        <CustomText tag="p">Kaydet</CustomText>
      </div>
      <div class="description">
        <CustomText
          tag="p"
        >Tekrar görmek istediğin fotoğraf ve videoları kaydet. Kaydettiğin hiç kimseye bildirilmez ve kaydettiklerini sadece sen görebilirsin.</CustomText>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomText from "@/components/CustomText";

export default {
  name: "ProfileIGTV",
  components: {
    CustomText
  }
};
</script>

<style scoped lang="scss">
.save {
  width: 325px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 44px;
  text-align: center;
  .save-inner {
    .icon {
      i {
        font-size: 65px;
        color: #777;
      }
    }
    .saved {
      p {
        font-size: 28px;
        color: rgba(var(--i1d), 1);
        font-weight: 300;
        margin: 30px 0 24px 0;
      }
    }
    .description {
      p {
        font-weight: 400;
        color: rgba(var(--i1d), 1);
        margin-bottom: 28px;
      }
    }
  }
}
</style>
