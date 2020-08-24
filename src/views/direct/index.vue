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

    <div class="message-section">
      <DirectMessage />
    </div>
  </div>
</template>

<script>
import DirectPerson from "@/components/DirectPerson";
import DirectTopBar from "@/components/DirectTopBar";
import DirectMessage from "@/components/DirectMessage";
export default {
  name: "Direct",
  components: {
    DirectPerson,
    DirectTopBar,
    DirectMessage
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
    height: 82vh;
  }
}
@media screen and (max-width: 680px) {
  .direct {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
