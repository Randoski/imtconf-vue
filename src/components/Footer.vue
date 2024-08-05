<template>
  <footer class="bg-softBrown bg-opacity-100 mt-16 md:px-12 lg:px-32 xl:px-48">
    <div class="px-4 pt-10 pb-12 lg:flex lg:justify-between lg:items-start lg:pb-12">

      <!-- Reach out -->
      <div class="lg:w-2/4">
        <div class="flex justify-between ">
          <div class="leading-10">
            <p class="font-sec uppercase font-medium text-12 tracking-widest">
              Want to know more?
            </p>
            <div class="flex font-sec font-bold text-24 text-purple underline gap-2 md:mb-2">
              <a href="#">Reach out</a>
              <img src="../assets/Images/arrow-link-purple.svg" class="w-4" alt="Link image" />
            </div>
          </div>

          <!-- Back to top -->
          <a href="#" class="lg:hidden"><img src="../assets/Images/back-to-top.png" class="pt-3"
              alt="Back top top image" /></a>
        </div>

        <!-- Second logo -->
        <div class="hidden lg:block lg:mt-32">
          <img src="../assets/Images/Logo2.svg" alt="Second logo" class="animate-spin" />
        </div>
      </div>


      <!-- Who we are -->
      <div class="mt-10 md:mt-0 lg:w-1/4">
        <h2 class="font-sec font-bold text-24">Who We Are</h2>

        <!-- Footer nav -->
        <nav>
          <div class="flex flex-col text-black hover:purple gap-6 mt-5 uppercase font-medium tracking-widest text-12 md:mt-10">
            <router-link to="/about" class="hover:text-purple ">About</router-link>
            <router-link to="/" class="hover:text-purple">Volunteer</router-link>
            <router-link to="/" class="hover:text-purple">Sponsor / Donate</router-link>
            <router-link to="/" class="hover:text-purple">Become a Speaker</router-link>
            <router-link to="/about" class="hover:text-purple">Join our Discord</router-link>
            <router-view></router-view>
          </div>
        </nav>
      </div>


      <!-- A product of KND -->
      <div class="mt-12 md:mt-0 lg:w-2/4 lg:ml-24 lg:flex lg:flex-col lg:justify-between lg:h-full">
        <div class="lg:flex">
          <h2 class="font-sec font-bold text-24">A Product of KND</h2>

          <!-- Arrow -->
          <a href="#" class="hidden lg:block lg:ml-auto w-3.5"><img src="../assets/Images/back-to-top.png"
              alt="Back top top image" /></a>
        </div>
        <p class="mt-6 font-medium font-pry text-14 lg:max-w-16 md:mt-8 md:w-4/5">
          Kreatives Next Door is a collective of digital creatives building solutions for
          the community
        </p>

        <!-- Second logo -->
        <img src="../assets/Images/Logo2.svg" alt="Second logo" class="mt-10 mb-8 animate-spin md:hidden" />

        <!-- Socials logo -->
        <div class="lg:flex md:mt-40">
          <div class="flex items-center gap-8 lg:ml-auto">
            <div class="w-3.5 h-3.5 pt-1">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/Instagram.svg" alt="icon" />
              </a>
            </div>

            <div class="w-3 h-3">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/LinkedIn.svg" alt="icon" />
              </a>
            </div>

            <div class="w-3 h-3 pt-1">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/twitter.svg" alt="icon" />
              </a>
            </div>

            <div class="w-3 h-3 pt-1">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/mail.svg" alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-6 lg:flex">
          <p class="font-pry font-medium text-14 lg:ml-auto">
            &copy; Copyright. All Rights Reserved KND 2022
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 20s linear infinite;
}
</style>
