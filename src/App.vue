<template>
  <div class="app">
    <MasterHeader />
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>
<script>
import MasterHeader from "@/components/Header";
import Container from "@/components/Container";

export default {
  name: "App",
  components: {
    MasterHeader,
    Container
  }
};
</script>
<style scoped>
.main {
  padding-top: 30px;
  background-color: rgba(var(--b3f), 1);
}
</style>
