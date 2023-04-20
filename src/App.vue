<template>
  <nav
    class="w-full bg-white px-4 py-5 flex justify-between items-center fixed font-pry md:px-12"
  >
    <!-- Logo -->
    <router-link to="/">
      <img src="./assets/Images/Logo.svg" alt="Buy tickets" />
    </router-link>

    <!-- Main Links (Desktop) -->
    <div class="hidden md:flex md:items-center md:gap-7 text-base font-extrabold leading-6">
      <router-link to="/about">About</router-link>
      <router-link to="/">Speakers</router-link>
      <router-link to="/">Organizers</router-link>
      <router-link to="/">Volunteer</router-link>
      <router-link to="/about">Sponsors</router-link>

      <router-link
        to="/about"
        class="flex items-center justify-center text-purple
        uppercase underline "
      >
        <span class="mr-2">Buy tickets</span>
        <img src="./assets/Images/arrow-link-purple.svg" alt="Arrow" class="w-3.5" />
      </router-link>
    </div>

    <!-- Hamburger Menu (Mobile) -->

    <div class="md:hidden flex items-center">
      <!-- Buy Ticket link -->
      <router-link to="/about" class="flex items-center mr-7 md:block">
        <span
          class="font-bold font-pry text-xs uppercase text-purple mr-2 mt-0.5"
          >Buy tickets</span
        >
        <div>
          <img
            src="./assets/Images/arrow-link-purple.svg"
            class="w-2.5"
            alt="Arrow"
          />
        </div>
      </router-link>

      <button class="focus:outline-none" @click="toggle">
        <div class="w-6 h-0.5 bg-hamburgerColor mb-1.5"></div>
        <div class="w-6 h-0.5 bg-hamburgerColor mb-1.5"></div>
        <div class="w-6 h-0.5 bg-hamburgerColor"></div>
      </button>
    </div>

    <!-- Main Links (Mobile) -->

    <div
      class="flex flex-col absolute top-9 left-0 z-10 w-full md:w-1/2 bg-softBrown text-black hover:purple px-5 py-7 gap-6 mobile-menu mt-5 uppercase tracking-tighter font-medium text-sm leading-120"
      :class="{ hidden: !showMobileMenu }"
    >
      <router-link to="/about">About</router-link>
      <router-link to="/">Speakers</router-link>
      <router-link to="/">Organizers</router-link>
      <router-link to="/">Volunteer</router-link>
      <router-link to="/about">Sponsors</router-link>

      <div class="flex justify-between items-center space-between mt-2">
        <router-link to="/about" class="flex items-center">
          <span
            class="font-bold font-pry text-xs uppercase text-purple mr-2 mt-0.5"
            >Buy tickets</span
          >
          <div>
            <img
              src="./assets/Images/arrow-link-purple.svg"
              class="w-2.5"
              alt="Arrow"
            />
          </div>
        </router-link>

        <div class="text-deepBrown font-bold text-xs leading-7" @click="toggle">
          Close
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    toggle() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style>
/* nav a.router-link-exact-active {
  color: #42b983;
} */

@media (min-width: 768px) {
  nav .mobile-menu {
    display: none;
  }

  .nav-ticket {
    display: inline-block;
  }
}

@media (max-width: 300px) {
  .mobile-menu > a:first-of-type {
    display: none;
  }
}
</style>

TODO: // Align hamburger wit logo Font // Main links, font bg color on mobile
adjust arrow Reduce side margins on mobile
