<template>
  <div class="top-section">
    <div class="direct-bar">
      <div class="left-bar">
        <Avatar :size="30" />
        <CustomText tag="a" href="/profile">hcamozu</CustomText>
      </div>
      <div class="right-bar">
        <a href="/direct">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </a>

        <Info />
      </div>
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import Avatar from "@/components/Avatar";
import Info from "@/icons/info.svg";
export default {
  name: "DirectTopBar",
  components: {
    Info,
    CustomText,
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.top-section {
  padding: 0 20px;
  border-bottom: 1px solid rgba(var(--b38), 1);
  position: sticky;
  top: 0;
  background-color: #fff;

  .direct-bar {
    height: 60px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-bar {
      display: flex;
      align-items: center;
      .avatar {
        background: none;
      }
      a {
        font-weight: 600;
        font-size: 16px;
        margin-left: 5px;
      }
    }
    .right-bar {
      display: flex;
      align-items: center;
      svg {
        cursor: pointer;
      }
      i {
        font-size: 24px;
        margin-right: 15px;
      }
    }
  }
}
</style>