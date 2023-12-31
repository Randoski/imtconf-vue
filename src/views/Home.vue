<template>
  <div class="">
    <Hero />
    <Conf />
    <Speakers />
    <Organizers />
    <Sponsors />
    <Tickets />
    <Footer />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Conf from "../components/Conf.vue";
import Speakers from "../components/Speakers.vue";
import Organizers from "../components/Organizers.vue";
import Sponsors from "../components/Sponsors.vue";
import Tickets from "../components/Tickets.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Hero, Conf, Speakers, Organizers, Sponsors, Tickets, Footer },
};
</script>
