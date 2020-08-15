<template>
  <div class="home">
    <CustomText tag="h1">Profile</CustomText>
    <router-link to="/profile">Post</router-link>|
    <router-link to="/profile/igtv">IGTV</router-link>|
    <router-link to="/profile/save">Save</router-link>|
    <router-link to="/profile/tag">Tag</router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomText from "@/components/CustomText";

export default {
  name: "Profile",
  components: {
    CustomText
  }
};
</script>

<style scoped>
</style>
