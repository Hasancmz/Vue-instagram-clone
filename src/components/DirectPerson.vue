<template>
  <div class="box">
    <a class="profile-section" href>
      <div class="profile-bar">
        <div class="photo">
          <Avatar class="avatar" :size="55" />
        </div>
        <div class="text-name">
          <CustomText tag="a" href="/profile" size="normal">hcamozu</CustomText>
          <CustomText size="small" tag="p">Görüşürüz</CustomText>
        </div>
        <div class="day">
          <CustomText tag="span">1g</CustomText>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";

export default {
  name: "DirectPerson",
  components: {
    CustomText,
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  .profile-section {
    .profile-bar {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      transition: all 0.2s ease;
      .photo {
        .avatar {
          background: none;
        }
      }
      .text-name {
        margin-left: 10px;
        a {
          font-weight: 600;
        }
        p {
          color: rgba(var(--f52), 1);
          font-size: 13px;
        }
      }
      .day {
        margin-left: 5px;
        color: rgba(var(--f52), 1);
      }
    }
    :hover {
      background-color: rgb(235, 228, 228);
    }
  }
}
</style>