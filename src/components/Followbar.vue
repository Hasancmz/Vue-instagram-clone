<template>
  <div class="follow-bar">
    <div class="profile-bar">
      <div class="photo">
        <Avatar class="avatar" :size="36" />
      </div>
      <div class="text-name">
        <CustomText tag="a" href size="normal">hcamozu</CustomText>
        <CustomText size="small" tag="p">Hasan Çamözü</CustomText>
      </div>
    </div>
    <div class="follow">
      <CustomText tag="a" size="small" href>Takip Et</CustomText>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";

export default {
  name: "Followbar",
  components: {
    Avatar,
    CustomText
  }
};
</script>

<style lang="scss" scoped>
.follow-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile-bar {
    height: 50px;
    display: flex;
    align-items: center;
    .photo {
      .avatar {
        background: none;
      }
    }
    .text-name {
      margin-left: 10px;
      a {
        font-weight: 600;
        color: rgba(var(--i1d), 1);
      }
      p {
        color: rgba(var(--f52), 1);
      }
    }
  }
  .follow {
    a {
      color: rgba(var(--d69), 1);
      font-weight: 600;
    }
  }
}
</style>