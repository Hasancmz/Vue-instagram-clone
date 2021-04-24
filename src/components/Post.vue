<template>
  <div class="post">
    <header class="header section">
      <div class="header-author">
        <Avatar :size="36" />
        <div class="header-author-info">
          <div>
            <CustomText tag="a" href="/profile">hcamozu</CustomText>
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
        src="../assets/img/kazak.jpg"
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
    <div class="comment section">
      <div class="author">
        <CustomText tag="a" href="#">hcamozu</CustomText>
        <CustomText tag="span">Lorem</CustomText>
      </div>
      <div class="comment-look">
        <CustomText tag="a" href="#">247 yorumun tümünü gör</CustomText>
      </div>
      <div class="other-comment">
        <div>
          <CustomText tag="a" href="#">farukptz</CustomText>
          <CustomText tag="span">deneme</CustomText>
        </div>
        <div>
          <CustomText tag="a" href="#">eslinkyn</CustomText>
          <CustomText tag="span">xox</CustomText>
        </div>
      </div>
      <div class="time">
        <CustomText tag="a" href size="xxsmall">27 dakika önce</CustomText>
      </div>
    </div>
    <div class="comment-add">
      <form action>
        <input type="text" placeholder="Yorum ekle..." />
        <button>Paylaş</button>
      </form>
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
    IconSave,
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0 16px;
}
.post {
  border: 1px solid rgba(var(--b6a), 1);
  border-radius: 3px;
  background-color: #fff;
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
        a {
          font-weight: 600;
        }
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
  .view-count {
    margin-bottom: 8px;
  }
  .comment {
    a {
      font-weight: 600;
    }
    .author {
      color: rgba(var(--i1d), 1);
      margin-bottom: 4px;
      span {
        margin-left: 5px;
      }
    }
    .comment-look {
      margin-bottom: 4px;
      a {
        color: rgba(var(--f52), 1);
        font-weight: normal;
      }
    }
    .other-comment {
      color: rgba(var(--i1d), 1);
      div {
        margin-bottom: 4px;
      }
      span {
        margin-left: 5px;
      }
    }
    .time {
      margin-bottom: 4px;
      a {
        text-transform: uppercase;
        color: rgba(var(--f52), 1);
        font-weight: normal;
      }
    }
  }
  .comment-add {
    border-top: 1px solid #efefef;
    margin-top: 8px;
    form {
      padding: 0 16px;
      height: 57px;
      display: flex;
      align-items: center;
      input {
        height: 18px;
        outline: none;
        width: 100%;
        color: rgba(var(--i1d), 1);
        font-size: 14px;
      }
      button {
        color: rgba(var(--d69), 1);
        font-size: 14px;
        opacity: 0.4;
        font-weight: 600;
      }
    }
  }
}
</style>