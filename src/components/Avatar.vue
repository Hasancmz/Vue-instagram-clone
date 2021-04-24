<template>
  <figure class="avatar">
    <img src="@/assets/img/profile-photo.jpg" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default:
        "https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44382143_2058374967564528_2753074367448481792_n.jpg?tp=1&_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_ohc=4HnlP304G1kAX8_0vbl&oh=d0aa321d6fa0476714c348bc98e08a22&oe=60630A84",
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
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