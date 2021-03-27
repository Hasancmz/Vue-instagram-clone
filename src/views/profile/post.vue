<template>
  <div class="post">
    <img
      src="https://instagram.fesb6-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/43708294_248823089143266_1046681775943593806_n.jpg?tp=1&_nc_ht=instagram.fesb6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=9uGM4DGGUE8AX9vaOi4&oh=687f67466d97496775173e06a9489017&oe=606EDEFA"
    />
    <img
      src="https://instagram.fesb6-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/43708294_248823089143266_1046681775943593806_n.jpg?tp=1&_nc_ht=instagram.fesb6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=9uGM4DGGUE8AX9vaOi4&oh=687f67466d97496775173e06a9489017&oe=606EDEFA"
    />
  </div>
</template>

<script>
export default {
  name: "ProfilePost",
  components: {}
};
</script>

<style scoped lang="scss">
.post {
  display: flex;
  img {
    margin-right: 28px;
    width: 31%;
    height: 31%;
  }
}
@media screen and (max-width: 680px) {
  .post {
    img {
      margin-right: 3px;
    }
  }
}
</style>
