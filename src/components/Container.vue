<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style scoped>
.container {
  max-width: 940px;
  margin: 0 auto;
}
</style>