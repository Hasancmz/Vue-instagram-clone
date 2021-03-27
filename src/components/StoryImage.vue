<template>
  <figure class="profile-story">
    <a href>
      <img src="../assets/story.jpg" alt />
    </a>
  </figure>
</template>

<script>
export default {
  name: "StoryImage",
  props: {
    src: {
      type: String,
      
        
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