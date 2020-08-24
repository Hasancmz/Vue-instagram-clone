<template>
  <figure class="profile-story">
    <a href>
      <img :src="src" alt />
    </a>
  </figure>
</template>

<script>
export default {
  name: "StoryImage",
  props: {
    src: {
      type: String,
      default:
        "https://instagram.fesb2-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.473.1081.1081a/s150x150/61931226_175296770141317_1515863713517610052_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=K0KJq7s5-6gAX__lCch&oh=d34942da00818d74cda0ccf69a826d9f&oe=5F45F1E9"
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-story {
  img {
    border-radius: 50%;
    border: 1px solid rgba(var(--ca6), 1);
    padding: 3px;
    cursor: pointer;
  }
}
</style>