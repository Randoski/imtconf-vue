<template>
  <div>
    <Hero2 />
    <Qualities />
    <Community />
    <Attend />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero2 from "../components/Hero2.vue";
import Qualities from "../components/Qualities.vue";
import Community from "../components/Community.vue";
import Attend from "../components/Attend.vue";
import Contact from '@/components/Contact.vue';
import Footer from "../components/Footer.vue";


export default {
  name: "About",
  components: { Hero2, Qualities, Community, Attend, Contact, Footer  },
};
</script>
