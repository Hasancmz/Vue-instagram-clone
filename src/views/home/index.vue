<template>
  <div class="home">
    <div class="timeline">
      <Post />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa distinctio fugiat placeat consequatur animi cum hic quae minus commodi voluptatem earum repellendus atque facere, impedit vero veniam! Nostrum, eum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, amet inventore quas molestiae at, accusantium, debitis perferendis aut velit doloremque nihil recusandae aliquam rerum voluptatibus? A tempore tenetur asperiores inventore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa velit voluptate sunt ab odio architecto tempore numquam modi totam recusandae, odit nemo laudantium dolor eligendi vero dolore iusto quaerat.
      </p>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Home",
  components: {
    Post
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
    .sidebar {
      display: none;
    }
  }
}
</style>
