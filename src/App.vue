<template>
  <div>
    <Loading v-if="showLoadingPage" />

    <div v-else >
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

  mounted() {
    // Show loading page for 5 seconds
    if (!localStorage.getItem("visited")) {
      localStorage.setItem("visited", true);
      setTimeout(() => {
        this.showLoadingPage = false;
        this.$router.replace({ name: "Home" });
      }, 8000);
    } else {
      this.showLoadingPage = false;
    }

    // Check if the link has been opened before
    if (!localStorage.getItem("linkOpenedBefore")) {
      // If not, hide scrollbar and disable scrolling
      document.body.style.overflow = "hidden";

      // Store flag indicating that the link has been opened before
      localStorage.setItem("linkOpenedBefore", true);

      // Restore scrollbar and scrolling after 5 seconds
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 8000);
    }
  },
};
</script>
