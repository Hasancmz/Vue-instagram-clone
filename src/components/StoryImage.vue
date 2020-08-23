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
        "https://instagram.fesb1-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.473.1081.1081a/s150x150/61931226_175296770141317_1515863713517610052_n.jpg?_nc_ht=instagram.fesb1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=syqGoXfQs14AX8dvXp5&oh=3ac7a8d8b471b6632c117517e201ca29&oe=5F40ABE9"
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