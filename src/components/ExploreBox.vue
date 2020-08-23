<template>
  <div class="box">
    <figure>
      <a href>
        <img :src="src" alt />
      </a>
    </figure>
  </div>
</template>

<script>
export default {
  name: "ExploreBox",
  props: {
    src: {
      type: String,
      default:
        "https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.129.1080.1080a/s640x640/118254876_400826077988652_2880450372014237813_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=FR1wwdXGL7wAX-0k5mQ&oh=e852138b9baaca373cd0504381e3fbeb&oe=5F6BF8CA"
    }
  }
};
</script>
