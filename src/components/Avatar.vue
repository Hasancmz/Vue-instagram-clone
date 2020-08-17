<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default:
        "https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44382143_2058374967564528_2753074367448481792_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_ohc=xLi88s2w6F0AX-vq-AP&oh=40dab3ae4d4c3b39053bcd1189934ff3&oe=5F65EA84"
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    }
  }
};
</script>


<style lang="scss" scoped>
.avatar {
  display: inline-flex;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(
    90deg,
    rgba(249, 155, 74, 1) 0%,
    rgba(198, 45, 143, 1) 100%
  );
  img {
    border: 2px solid white;
    border-radius: inherit;
  }
}
</style>