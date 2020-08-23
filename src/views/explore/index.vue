<template>
  <div class="explore">
    <ExploreContainer>
      <ExploreBox />
      <ExploreBox
        src="https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.130.1080.1080a/s640x640/118200556_117418289890925_3958170674707296481_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=V3CenZEfJ04AX8ZqI6V&oh=0d79c39f67c769581ef9affe022a6731&oe=5F6BFD16"
      />
      <ExploreBox
        src="https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118073141_328527518525338_2304132355305141571_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=i2wU1QXlV_AAX_mMM1E&oh=b4891c1f3da8f2442ae4324097345959&oe=5F6A9DC9"
      />
    </ExploreContainer>
    <ExploreContainer>
      <ExploreBox
        src="https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118125808_1163841973989519_1020998261464425868_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Z4Ucv_BdT3gAX97h0Lt&oh=e3e3036f8494f057822ab5067e861001&oe=5F6C65FC"
      />
      <ExploreBox
        src="https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c240.0.960.960a/s640x640/118067009_137865764664725_8430138128688707203_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t4KxUPRO8ssAX_zp14h&oh=0987b48c0b45c53bc8d1241864d54210&oe=5F6CE38D"
      />
      <ExploreBox
        src="https://instagram.fesb2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c135.0.810.810a/s640x640/118146434_2835037196716754_5715020892411182952_n.jpg?_nc_ht=instagram.fesb2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4DT4Glle0PkAX80zswd&oh=4f784ed4c9ebf18a386ec944a6fba1b9&oe=5F6B4526"
      />
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
