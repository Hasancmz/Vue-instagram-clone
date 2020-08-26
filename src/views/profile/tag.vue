<template>
  <div class="tag">
    <!-- <CustomText tag="h1">Profile IGTV</CustomText> -->
    <div class="tag-inner">
      <div class="icon">
        <i class="fa fa-meh-o" aria-hidden="true"></i>
      </div>
      <div class="photo">
        <CustomText tag="p">Olduğun fotoğraflar</CustomText>
      </div>
      <div class="description">
        <CustomText tag="p">İnsanlar seni fotoğraflarda etiketlediğinde, burada görünecek.</CustomText>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomText from "@/components/CustomText";

export default {
  name: "ProfileTag",
  components: {
    CustomText
  }
};
</script>

<style scoped lang="scss">
.tag {
  width: 325px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 44px;
  text-align: center;
  .tag-inner {
    .icon {
      i {
        font-size: 65px;
        color: #777;
      }
    }
    .photo {
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
