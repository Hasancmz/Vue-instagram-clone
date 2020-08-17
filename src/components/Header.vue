<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">Instagram</router-link>
      <form class="search">
        <input type="text" placeholder="Search" />
      </form>
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile">
          <Avatar class="avatar" :size="26" />
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from "@/icons/home.svg";
import IconHomeFill from "@/icons/home-fill.svg";
import IconDirect from "@/icons/direct.svg";
import IconDirectFill from "@/icons/direct-fill.svg";
import IconExplore from "@/icons/explore.svg";
import IconExploreFill from "@/icons/explore-fill.svg";
import Container from "@/components/Container.vue";
import Avatar from "@/components/Avatar";
export default {
  name: "MainHeader",
  components: {
    Container,
    IconHome,
    IconHomeFill,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 50;
  background-color: #fff;
  border-bottom: 1px solid rgba(var(--b6a), 1);
  .header-inner {
    height: var(--header-height);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    .logo {
      font-size: 1.6rem;
      font-weight: bold;
    }
    .search {
      text-align: center;
      input {
        width: 215px;
        height: 28px;
        padding: 3px 10px 3px 26px;
        border: 1px solid rgba(var(--b6a), 1);
        background-color: rgba(var(--b3f), 1);
        border-radius: 3px;
        &:focus {
          outline: none;
        }
      }
    }
    .navigation {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a {
        margin-left: 22px;
      }
      :first-child {
        margin-left: 0;
      }
      .avatar {
        background: none;
      }
    }
  }
}
@media screen and (max-width: 980px) {
  .header {
    .header-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      .search {
        display: none;
      }
      .navigation {
        z-index: 50;
        background-color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: space-around;
        border-top: 1px solid rgba(var(--b6a), 1);
        height: 54px;
        a {
          margin-left: 0;
        }
      }
    }
  }
}
</style>