<template>
  <div class="top-section">
    <div class="direct-bar">
      <CustomText tag="a" href="/direct">Direct</CustomText>
      <NewMessage />
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import NewMessage from "@/icons/new-message.svg";
export default {
  name: "DirectTopBar",
  components: {
    NewMessage,
    CustomText
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
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    a {
      font-weight: 600;
      font-size: 16px;
    }
    svg {
      position: absolute;
      right: 0;
      cursor: pointer;
    }
  }
}
</style>