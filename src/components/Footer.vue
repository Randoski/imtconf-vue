<template>
  <footer class="bg-softBrown bg-opacity-100 mt-16">
    <div class="px-4 pt-10 pb-12">
      <!-- Reach out -->
      <div class="flex justify-between">
        <div class="leading-10">
          <p class="font-sec uppercase font-medium text-12 tracking-widest">
            Want to know more?
          </p>
          <div class="flex font-sec font-bold text-24 text-purple underline gap-2">
            <a href="#">Reach out</a>
            <img
              src="../assets/Images/arrow-link-purple.svg"
              class="w-5"
              alt="Link image"
            />
          </div>
        </div>

        <!-- Back to top -->
        <a href="#"
          ><img
            src="../assets/Images/back-to-top.png"
            class="pt-3"
            alt="Back top top image"
        /></a>

        <!-- Second logo -->
        <div class="hidden">
          <img src="../assets/Images/Logo2.svg" alt="Second logo" class="animate-spin" />
        </div>
      </div>

      <!-- Who we are -->
      <div class="mt-10">
        <h2 class="font-sec font-bold text-24">Who We Are</h2>

        <!-- Footer nav -->
        <nav>
          <div
            class="flex flex-col text-black hover:purple gap-6 mt-5 uppercase tracking-widest font-medium text-12"
          >
            <router-link to="/about">About</router-link>
            <router-link to="/">Volunteer</router-link>
            <router-link to="/">Sponsor / Donate</router-link>
            <router-link to="/">Become a Speaker</router-link>
            <router-link to="/about">Join our Discord</router-link>
            <router-view></router-view>
          </div>
        </nav>
      </div>

      <!-- A product of KND -->
      <div class="mt-12">
        <div>
          <h2 class="font-sec font-bold text-24">A Product of KND</h2>
          <a href="#" class="hidden"
            ><img src="../assets/Images/back-to-top.png" alt="Back top top image"
          /></a>
        </div>
        <p class="mt-6 font-medium font-pry text-14">
          Kreatives Next Door is a collective of digital creatives building solutions for
          the community
        </p>

        <!-- Second logo -->
        <img
          src="../assets/Images/Logo2.svg"
          alt="Second logo"
          class="mt-10 mb-8 animate-spin"
        />

        <!-- Socials logo -->
        <div>
          <div class="flex items-center gap-10">
            <div class="w-4 h-4 pt-1">
              <a href="#">
                <img
                  class="w-full h-full object-contain"
                  src="../assets/Images/Instagram.svg"
                  alt="icon"
                />
              </a>
            </div>

            <div class="w-4 h-4">
              <a href="#">
                <img
                  class="w-full h-full object-contain"
                  src="../assets/Images/LinkedIn.svg"
                  alt="icon"
                />
              </a>
            </div>

            <div class="w-4 h-4 pt-1">
              <a href="#">
                <img
                  class="w-full h-full object-contain"
                  src="../assets/Images/twitter.svg"
                  alt="icon"
                />
              </a>
            </div>

            <div class="w-4 h-4 pt-1">
              <a href="#">
                <img
                  class="w-full h-full object-contain"
                  src="../assets/Images/mail.svg"
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-6">
          <p class="font-pry font-medium text-14">
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
