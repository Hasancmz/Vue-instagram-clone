<template>
  <div class="post">
    <img
      src="@/assets/img/profile-post.jpg"
    />
    <img
      src="@/assets/img/profile-post.jpg"
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
