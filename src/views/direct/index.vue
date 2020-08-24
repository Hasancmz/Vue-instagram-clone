<template>
  <div class="direct">
    <div class="left-bar">
      <DirectTopBar />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
      <DirectPerson />
    </div>

    <div class="message-section"></div>
  </div>
</template>

<script>
import DirectPerson from "@/components/DirectPerson";
import DirectTopBar from "@/components/DirectTopBar";
export default {
  name: "Direct",
  components: {
    DirectPerson,
    DirectTopBar
  }
};
</script>

<style scoped lang="scss">
.direct {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  border: 1px solid rgba(var(--b38), 1);
  .left-bar {
    height: 82vh;

    overflow-y: scroll;
  }
  .message-section {
    background-color: brown;
    height: 82vh;
  }
}
</style>
