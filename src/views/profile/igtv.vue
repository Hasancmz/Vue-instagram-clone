<template>
  <div class="igtv">
    <!-- <CustomText tag="h1">Profile IGTV</CustomText> -->
    <div class="igtv-inner">
      <div class="icon">
        <i class="fa fa-wpexplorer" aria-hidden="true"></i>
      </div>
      <div class="video">
        <CustomText tag="p">Video Yükle</CustomText>
      </div>
      <div class="description">
        <CustomText tag="p">Videoların uzunluğu 1 dakika ile 60 dakika arasında olmalıdır.</CustomText>
      </div>
      <div class="install">
        <CustomText tag="a" href>Yükle</CustomText>
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
.igtv {
  width: 325px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 44px;
  text-align: center;
  .igtv-inner {
    .icon {
      i {
        font-size: 60px;
        color: #777;
      }
    }
    .video {
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
    .install {
      a {
        margin: 0 auto;
        width: 86px;
        height: 30px;
        background-color: rgba(var(--d69), 1);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
}
</style>
