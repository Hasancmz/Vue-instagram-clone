<template>
  <div class="home">
    <CustomText tag="p" size="normal">MERHABA</CustomText>
    <CustomText class="a1" tag="div" size="xxsmall">MERHABA</CustomText>
    <CustomText class="a2" tag="span" size="small">MERHABA</CustomText>
    <CustomText class="a3" tag="h6" size="xxsmall">MERHABA</CustomText>
    <CustomText class="a4" tag="h2" size="normal">MERHABA</CustomText>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomText from '@/components/CustomText';

export default {
  name: 'Home',
  components: {
    CustomText,
  },
};
</script>

<style scoped>
.a1 {
  color: rgb(var(--b38));
}
.a2 {
  color: rgb(var(--c8c));
}
.a3 {
  color: rgb(var(--d20));
}
.a4 {
  color: rgb(var(--d69));
}
</style>
