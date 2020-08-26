<template>
  <div class="direct-section">
    <div v-if="$route.path === '/direct/message'">
      <router-view />
    </div>

    <div class="direct-message" v-else>
      <div class="icon-center">
        <div class="icon">
          <Direct />
        </div>
      </div>
      <div class="msg">
        <CustomText>Mesajların</CustomText>
      </div>
      <div class="msg-description">
        <CustomText tag="p">Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.</CustomText>
      </div>
      <div class="button">
        <CustomText tag="a" href>Mesaj Gönder</CustomText>
      </div>
    </div>
  </div>
</template>

<script>
import Direct from "@/icons/direct.svg";
import CustomText from "@/components/CustomText";

export default {
  name: "DirectMessage",
  components: {
    Direct,
    CustomText
  }
};
</script>

<style lang="scss" scoped>
.direct-message {
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  .icon-center {
    .icon {
      width: 80px;
      height: 80px;
      border: 2px solid #555;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 40px;
        height: 40px;
        color: #555;
        font-weight: 300;
        margin-top: 5px;
      }
    }
  }

  .msg {
    font-size: 22px;
    font-weight: 400;
    color: rgba(var(--i1d), 1);
    margin-top: 30px;
  }
  .msg-description {
    color: rgba(var(--f52), 1);
    margin-bottom: 30px;
    text-align: center;
  }
  .button {
    a {
      padding: 5px 10px;
      border-radius: 4px;
      color: #fff;
      background-color: rgba(var(--d69), 1);
    }
  }
}
</style>