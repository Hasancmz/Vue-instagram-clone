<template>
  <div class="profile-header">
    <div class="profile-inner">
      <div class="profile-photo">
        <a href title="Profil Fotoğrafını Değiştir">
          <Avatar :size="155" alt="Profil Fotoğrafını Değiştir" />
        </a>
      </div>
      <div class="profile-info">
        <div class="top">
          <CustomText tag="h2">hcamozu</CustomText>
          <CustomText tag="a" href>Profili Düzenle</CustomText>
          <Settings />
        </div>
        <div class="middle">
          <CustomText class="mr">
            <b>2</b> gönderi
          </CustomText>
          <CustomText class="mr">
            <a href>
              <b>168</b> takipçi
            </a>
          </CustomText>
          <CustomText>
            <a href>
              <b>161</b> takip
            </a>
          </CustomText>
        </div>
        <div class="bottom">
          <CustomText tag="b">Hasan Çamözü</CustomText>
        </div>
      </div>
    </div>
    <div class="story">
      <StoryImage />
      <StoryImage />
      <StoryImage />
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";
import Settings from "@/icons/settings.svg";
import StoryImage from "@/components/StoryImage";
export default {
  name: "ProfileHeader",
  components: {
    Avatar,
    CustomText,
    Settings,
    StoryImage
  }
};
</script>

<style lang="scss" scoped>
.profile-header {
  .profile-inner {
    display: grid;
    grid-template-columns: 295px 1fr;
    grid-gap: 30px;
    margin-bottom: 44px;
    .profile-photo {
      display: flex;
      justify-content: center;
      .avatar {
        background: none;
      }
    }
    .profile-info {
      .top {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        h2 {
          font-size: 28px;
          font-weight: 300;
        }
        a {
          border: 1px solid rgba(var(--ca6), 1);
          padding: 5px 9px;
          font-weight: 600;
          border-radius: 4px;
          margin-left: 20px;
        }
        svg {
          margin-left: 20px;
          cursor: pointer;
        }
      }
      .middle {
        font-size: 16px;
        margin-bottom: 20px;
        .mr {
          margin-right: 40px;
        }
      }
      .bottom {
        font-size: 16px;
      }
    }
  }
  .story {
    display: flex;
  }
}
</style>