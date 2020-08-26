<template>
  <div class="message">
    <DirectMessageTop />
    <div class="middle"></div>
    <div class="bottom">
      <div class="bottom-bar">
        <div class="left-icon">
          <Smile />
        </div>
        <div class="middle">
          <form action>
            <input type="text" placeholder="Mesaj..." />
          </form>
        </div>
        <div class="right-icon">
          <Picture />
          <Like />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DirectMessageTop from "@/components/DirectMessageTop";
import Smile from "@/icons/smile.svg";
import Picture from "@/icons/picture.svg";
import Like from "@/icons/like.svg";

export default {
  name: "DirectMessage",
  components: {
    DirectMessageTop,
    Smile,
    Picture,
    Like
  }
};
</script>

<style lang="scss" scoped>
.message {
  height: 82vh;
  .bottom {
    position: sticky;
    top: 550px;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .bottom-bar {
      height: 44px;
      width: 100%;
      display: grid;
      grid-template-columns: 40px 1fr 70px;
      padding: 0 15px;
      align-items: center;
      border: 1px solid rgba(var(--b6a), 1);
      border-radius: 25px;
      .left-icon {
        display: flex;
        align-items: center;
      }
      .middle {
        form {
          input {
            outline: none;
            width: 100%;
            color: rgba(var(--i1d), 1);
            font-size: 14px;
            padding: 5px 0;
          }
        }
      }

      .right-icon {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        svg {
          margin-left: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .message {
    height: 73vh;
  }
}
</style>