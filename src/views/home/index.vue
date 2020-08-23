<template>
  <div class="home">
    <div class="timeline">
      <Post />
      <br />
      <br />
      <Post />
      <br />
      <br />
      <Post />

      <br />
      <br />
    </div>
    <div class="sidebar-container">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
import Sidebar from "@/components/Sidebar";

export default {
  name: "Home",
  components: {
    Post,
    Sidebar
  }
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 615px 1fr;
  grid-gap: 30px;
}
@media screen and (max-width: 980px) {
  .home {
    max-width: 605px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .sidebar-container {
      display: none;
    }
  }
}
</style>
