<template>
  <div>
    <Loading v-if="showLoadingPage" />

    <div v-else>
      <Navbar />
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>

<script>
import Loading from "./components/Loading.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Loading, Navbar },

  data() {
    return {
      showLoadingPage: true
    };
  },

  mounted() {
    // Show loading page for 8 seconds
    setTimeout(() => {
      this.showLoadingPage = false;
      this.$router.replace({ name: "Home" });
    }, 8000);

    // Hide scrollbar and disable scrolling during loading
    document.body.style.overflow = "hidden";

    // Show Scrollbar after page has loaded
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 8000);
  },
};
</script>
