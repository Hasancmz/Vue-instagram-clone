<template>
  <div class="explore">
    <ExploreContainer>
      <ExploreBox />
      <ExploreBox />
      <ExploreBox />
    </ExploreContainer>
    <ExploreContainer>
      <ExploreBox />
      <ExploreBox />
      <ExploreBox />
    </ExploreContainer>
    <ExploreContainer>
      <ExploreBox />
      <ExploreBox />
      <ExploreBox />
    </ExploreContainer>
    <ExploreContainer>
      <ExploreBox />
      <ExploreBox />
      <ExploreBox />
    </ExploreContainer>
    <ExploreContainer>
      <ExploreBox />
      <ExploreBox />
      <ExploreBox />
    </ExploreContainer>
    <ExploreContainer>
      <ExploreBox />
      <ExploreBox />
      <ExploreBox />
    </ExploreContainer>
  </div>
</template>

<script>
import ExploreBox from "@/components/ExploreBox";
import ExploreContainer from "@/components/ExploreContainer";
export default {
  name: "Explore",
  components: {
    ExploreBox,
    ExploreContainer
  }
};
</script>

<style scoped lang="scss">
</style>
