<template>
  <div class="profile-header">
    <div class="profile-inner">
      <div class="profile-photo">
        <a href title="Profil Fotoğrafını Değiştir">
          <Avatar alt="Profil Fotoğrafını Değiştir" />
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
      <div class="story-container">
        <StoryImage class="size" />
        <CustomText tag="p">Öne çıkanlar</CustomText>
      </div>
      <div class="story-container">
        <StoryImage
          class="size"
          src="https://instagram.fesb1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/30890608_218466038918929_108432230413500416_n.jpg?_nc_ht=instagram.fesb1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=px3nY2n_2BQAX8LhKcN&oh=35caaed2ea6e93d6640b8cc97c8b5ab6&oe=5F697CC5"
        />
        <CustomText tag="p">Öne çıkanlar</CustomText>
      </div>
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
        width: 155px;
        height: 155px;
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
    margin-left: 48px;
    .story-container {
      text-align: center;
      margin-right: 25px;
      .size {
        width: 87px;
        height: 87px;
      }
      p {
        font-weight: 500;
        margin-top: 5px;
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .profile-header {
    .profile-inner {
      display: flex;
      grid-gap: 5px;
      .profile-photo {
        margin: 0 10px;
        .avatar {
          width: 85px;
          height: 85px;
        }
      }
      .profile-info {
        .top {
          h2 {
            font-size: 24px;
          }
          a {
            margin-left: 5px;
          }
          svg {
            margin-left: 5px;
          }
        }
        .middle {
          .mr {
            margin-right: 10px;
          }
        }
      }
    }
    .story {
      margin-left: 5px;
      .story-container {
        margin-right: 5px;
        .size {
          width: 60px;
          height: 60px;
          margin-left: 5px;
          margin-right: 12px;
        }
        p {
          font-weight: 500;
          margin-top: 5px;
          font-size: 12px;
          margin-left: 0;
        }
      }
    }
  }
}
</style>