<template>
  <div class="sidebar">
    <div class="profile-bar">
      <div class="photo">
        <Avatar class="avatar" :size="60" />
      </div>
      <div class="text-name">
        <CustomText tag="a" href size="normal">hcamozu</CustomText>
        <CustomText size="small" tag="p">Hasan Çamözü</CustomText>
      </div>
    </div>
    <div class="suggestion-bar">
      <CustomText tag="span">Senin İçin Öneriler</CustomText>
      <CustomText size="small" tag="a" href>Tümünü Gör</CustomText>
    </div>
    <Followbar />
    <Followbar />
    <Followbar />
    <Followbar />
    <Followbar />
    <div class="info-bar">
      <div class="info-top">
        <CustomText tag="a" href size="xsmall">Hakkında</CustomText>
        <CustomText tag="a" href size="xsmall">Yardım</CustomText>
        <CustomText tag="a" href size="xsmall">Basın</CustomText>
        <CustomText tag="a" href size="xsmall">API</CustomText>
        <CustomText tag="a" href size="xsmall">Gizlilik</CustomText>
        <CustomText tag="a" href size="xsmall">Koşullar</CustomText>
      </div>
      <div class="info-bottom">
        <CustomText tag="p" href size="xsmall">© 2020 INSTAGRAM FROM FACEBOOK</CustomText>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";
import Followbar from "@/components/Followbar";
export default {
  name: "Sidebar",
  components: {
    Avatar,
    CustomText,
    Followbar
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  max-width: 295px;
  left: 849px;
  top: 88px;
  right: 0;
  .profile-bar {
    height: 120px;
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
  .suggestion-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    span {
      color: rgba(var(--f52), 1);
      font-weight: 600;
    }
    a {
      font-weight: 600;
      color: rgba(var(--f75), 1);
    }
  }
  .info-bar {
    margin-top: 20px;
    a {
      margin-right: 8px;
      color: rgba(var(--f52), 1);
    }
    p {
      margin-top: 20px;
      color: rgba(var(--f52), 1);
    }
  }
}
</style>