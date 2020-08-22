<template>
  <div class="profile">
    <div class="profile-header">
      <ProfileHeader />
    </div>
    <div class="router-link">
      <div class="posts">
        <div class="color" v-if="$route.name === 'ProfilePost'">
          <router-link to="/profile">
            <PostsFill />
            <span>GÖNDERİLER</span>
          </router-link>
        </div>
        <div v-else>
          <router-link to="/profile">
            <Posts />
            <span>GÖNDERİLER</span>
          </router-link>
        </div>
      </div>
      <div class="igtv">
        <div class="color" v-if="$route.name === 'ProfileIGTV'">
          <router-link to="/profile/igtv">
            <IgtvFill />
            <span>IGTV</span>
          </router-link>
        </div>
        <div v-else>
          <router-link to="/profile/igtv">
            <Igtv />
            <span>IGTV</span>
          </router-link>
        </div>
      </div>
      <div class="saved">
        <div class="color" v-if="$route.name === 'ProfileSave'">
          <router-link to="/profile/save">
            <SavedFill />
            <span>KAYDEDİLENLER</span>
          </router-link>
        </div>
        <div v-else>
          <router-link to="/profile/save">
            <Saved />
            <span>KAYDEDİLENLER</span>
          </router-link>
        </div>
      </div>
      <div class="tagged">
        <div class="color" v-if="$route.name === 'ProfileTag'">
          <router-link to="/profile/tag">
            <TaggedFill />
            <span>ETİKETLENENLER</span>
          </router-link>
        </div>
        <div v-else>
          <router-link to="/profile/tag">
            <Tagged />
            <span>ETİKETLENENLER</span>
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <ProfileFooter />
    </div>
  </div>
</template>

<script>
// import CustomText from "@/components/CustomText";

import ProfileHeader from "@/components/ProfileHeader";
import Posts from "@/icons/posts.svg";
import Igtv from "@/icons/igtv.svg";
import Saved from "@/icons/saved.svg";
import Tagged from "@/icons/tagged.svg";
import PostsFill from "@/icons/posts-fill.svg";
import IgtvFill from "@/icons/igtv-fill.svg";
import SavedFill from "@/icons/saved-fill.svg";
import TaggedFill from "@/icons/tagged-fill.svg";
import ProfileFooter from "@/components/ProfileFooter";

export default {
  name: "Profile",
  components: {
    // CustomText,
    ProfileHeader,
    Posts,
    Igtv,
    Saved,
    Tagged,
    ProfileFooter,
    PostsFill,
    IgtvFill,
    SavedFill,
    TaggedFill
  }
};
</script>

<style scoped lang="scss">
.profile {
  .profile-header {
    margin-bottom: 44px;
  }
  .router-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 53px;
    color: rgba(var(--f52), 1);
    font-weight: 600;
    border-top: 1px solid rgba(var(--f52), 0.5);

    svg {
      margin-right: 6px;
    }
    .posts {
      margin-right: 60px;
    }
    .igtv {
      margin-right: 60px;
    }
    .saved {
      margin-right: 60px;
    }
    .color {
      color: #333;
    }
  }
}
@media screen and (max-width: 680px) {
  .profile {
    .router-link {
      justify-content: space-evenly;
      span {
        display: none;
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
