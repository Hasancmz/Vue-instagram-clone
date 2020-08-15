<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/">Instagram</router-link>
      <form>
        <input type="text" placeholder="Search" />
      </form>
      <nav>
        <router-link to="/">
          <IconHome />
          <IconHomeFill />
        </router-link>
        <router-link to="/direct">Direct</router-link>
        <router-link to="/explore">Explore</router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from "@/icons/home.svg";
import IconHomeFill from "@/icons/home-fill.svg";
import Container from "@/components/Container.vue";
export default {
  name: "MainHeader",
  components: {
    Container,
    IconHome,
    IconHomeFill
  }
};
</script>

<style scoped>
.header {
  background-color: sandybrown;
}
.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
}
</style>