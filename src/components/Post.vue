<template>
  <div class="post">
    <header class="header section">
      <div class="header-author">
        <Avatar :size="36" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">hcamozu</CustomText>
          </div>
          <div>
            <CustomText size="xsmall">Montreal, Quebec</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>
    <div class="post-media">
      <img
        src="https://instagram.fist6-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117325081_976996139418353_8160924534914653455_n.jpg?_nc_ht=instagram.fist6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=jNBXBif9ELAAX8crGcC&oh=573d873be16560be501f2567940481f4&oe=5F604180"
        alt
      />
    </div>
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button type="button">
        <IconSave />
      </button>
    </div>
    <div class="view-count section">
      <CustomText tag="b">2.748 Beğenme</CustomText>
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import Avatar from "@/components/Avatar";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg";
export default {
  name: "Post",
  components: {
    CustomText,
    Avatar,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0 16px;
}
.post {
  border: 1px solid rgba(var(--b6a), 1);
  border-radius: 3px;
  .header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-author {
      display: flex;
      align-items: center;
      .header-author-info {
        margin-left: 16px;
      }
    }
  }
  .action-buttons {
    display: flex;
    align-items: center;
    height: 45px;
    button {
      margin-right: 16px;
      &:last-child {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
}
</style>