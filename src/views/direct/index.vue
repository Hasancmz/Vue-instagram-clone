<template>
  <div class="direct">
    <div class="direct-pc">
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
    <div class="mobile">
      <div class="left-bar" v-if="$route.path === '/direct'">
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
      <div class="message-section" v-else>
        <DirectMessage />
      </div>
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
  .direct-pc {
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
  .mobile {
    display: none;
  }
}

@media screen and (max-width: 680px) {
  .direct {
    .direct-pc {
      grid-template-columns: 1fr 1fr;
    }
    .mobile {
      display: none;
    }
  }
}
@media screen and (max-width: 980px) {
  .direct {
    .direct-pc {
      .left-bar {
        height: 73vh;
      }
      .message-section {
        height: 73vh;
      }
    }
    .mobile {
      display: none;
    }
  }
}
@media screen and (max-width: 500px) {
  .direct {
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    .direct-pc {
      display: none;
    }
    .mobile {
      display: block;
      display: grid;
      grid-template-columns: 1fr;
      border: 1px solid rgba(var(--b38), 1);
      .left-bar {
        height: 78vh;
        overflow-y: scroll;
      }
      .message-section {
        height: 83vh;
      }
    }
  }
}
</style>
