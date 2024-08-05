<template>
  <div>
    <nav class="w-full bg-white px-4 py-6 flex justify-between z-10 font-pry md:py-6 fixed md:px-12 lg:px-32 xl:px-48">
      <!-- Logo -->
      <router-link to="/">
        <img src="../assets/Images/Logo.svg" alt="Buy tickets" />
      </router-link>

      <!-- Main Links (Desktop) -->
      <div class="text-14 text-black gap-6 font-normal leading-6 uppercase lg:text-14 web-nav">
        <!-- Links -->
        <router-link to="/about" class="hover:text-purple">About</router-link>
        <router-link to="/" class="hover:text-purple">Speakers</router-link>
        <router-link to="/" class="hover:text-purple">Organizers</router-link>
        <router-link to="/about" class="hover:text-purple">Sponsors</router-link>

        <router-link to="/about"
          class="flex items-center justify-center text-purple uppercase font-semibold underline ml-8 ">
          <span class="mr-2">Buy tickets</span>
          <img src="../assets/Images/arrow-link-purple.svg" alt="Arrow" class="w-2.5" />
        </router-link>
      </div>

      <!-- Hamburger Menu (Mobile) -->

      <div class="items-center mobile-nav">
        <div class="flex">
          <!-- Buy Ticket link -->
          <div class="flex">
            <router-link to="/about" class="flex items-center mr-7 md:block">
              <span class="font-bold font-pry text-xs uppercase text-purple mr-2 mt-0.5">Buy tickets</span>
              <div>
                <img src="../assets/Images/arrow-link-purple.svg" class="w-2.5" alt="Arrow" />
              </div>
            </router-link>
          </div>
        </div>

        <!-- Hamburger  -->
        <button class="focus:outline-none" @click="toggle">
          <div class="w-6 h-0.5 bg-hamburgerColor mb-1.5"></div>
          <div class="w-6 h-0.5 bg-hamburgerColor mb-1.5"></div>
          <div class="w-6 h-0.5 bg-hamburgerColor"></div>
        </button>
      </div>

      <!-- Main Links (Mobile) -->

      <div
        class="flex flex-col absolute top-9 left-0 z-10 w-full md:w-1/2 bg-softBrown text-black hover:purple px-5 py-7 gap-6 mobile-menu mt-5 uppercase tracking-tighter font-medium text-sm leading-120"
        :class="{ hidden: !showMobileMenu }">
        <router-link to="/about" @click="toggle">About</router-link>
        <router-link to="/" @click="toggle">Speakers</router-link>
        <router-link to="/" @click="toggle">Organizers</router-link>
        <router-link to="/" @click="toggle">Volunteer</router-link>
        <router-link to="/about" @click="toggle">Sponsors</router-link>

        <div class="flex justify-between items-center space-between mt-2">
          <router-link to="/about" class="flex items-center">
            <span class="font-bold font-pry text-xs uppercase text-purple mr-2 mt-0.5">Buy tickets</span>
            <div>
              <img src="../assets/Images/arrow-link-purple.svg" class="w-2.5" alt="Arrow" />
            </div>
          </router-link>

          <div class="text-deepBrown font-bold text-xs leading-7 cursor-pointer" @click="toggle">
            Close
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
/* nav a.router-link-exact-active {
  color: #42b983;
} */

/* Default styles for mobile view */
nav .web-nav {
  display: none;
}

nav .mobile-nav {
  display: flex;
}

@media (min-width: 767px) {
  nav .web-nav {
    display: flex;
  }

  nav .mobile-nav {
    display: none;
  }

  nav .mobile-menu {
    display: none;
  }

  .nav-ticket {
    display: inline-block;
  }
}

@media (max-width: 768px) {
  nav .web-nav {
    display: none;
  }

  nav .mobile-nav {
    display: flex;
  }

  .nav-ticket {
    display: none;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}

@media (max-width: 300px) {
  .mobile-menu>a:first-of-type {
    display: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      showLoadingPage: !localStorage.getItem("visited"),
    };
  },
  methods: {
    toggle() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
