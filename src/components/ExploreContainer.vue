<template>
  <div class="boxs">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ExploreContainer"
};
</script>

<style lang="scss" scoped>
.boxs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 28px;
  margin-bottom: 28px;
}
@media screen and (max-width: 680px) {
  .boxs {
    grid-gap: 3px;
    margin-bottom: 3px;
  }
}
</style>