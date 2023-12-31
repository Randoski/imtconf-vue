<template>
  <div class="px-4 font-pry">
    <router-link to="/about" class="flex items-center mt-6">
      <span class="text-20 font-normal text-purple mr-2 mt-0.5 underline"
        >Read more about KND here</span
      >
      <div>
        <img
          src="../assets/Images/arrow-link-purple.svg"
          class="w-3.5 mt-1"
          alt="Arrow"
        />
      </div>
    </router-link>

    <section class="md:flex">
      <!-- Text -->
      <div class="mt-16 mb-4">
        <h1 class="font-bold text-32 pb-4">
          Become a<span class="block mt-[-9px]">Sponsor</span>
        </h1>
        <p class="extra font-medium text-14 mb">
          As a sponsor, we’re promising reach to thousands of people who are interested in
          your brand. What better way to get your brand in front of people
        </p>

        <!-- Contact Link -->
        <router-link to="/about" class="flex items-center mt-6">
          <span class="text-14 font-normal text-purple mr-2 mt-0.5 underline"
            >Contact Us</span
          >
          <div>
            <img src="../assets/Images/arrow-link-purple.svg" class="w-2.5" alt="Arrow" />
          </div>
        </router-link>
      </div>

      <!-- Sponsors Logo -->
      <div class="mt-8 grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        <!-- Image 1 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img
            src="../assets/Images/Julius-berger.svg"
            alt="Julius Berger"
            class="w-16"
          />
        </div>
        <!-- Image 2 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/Bechtel.svg" alt="Bechtel" class="w-12" />
        </div>
        <!-- Image 3 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/KIEWIT.svg" alt="KIEWIT" class="w-14" />
        </div>
        <!-- Image 4 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/DAMAC.svg" alt="DAMAC" class="w-14" />
        </div>
        <!-- Image 5 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/KIEWIT.svg" alt="KIEWIT" class="w-14" />
        </div>
        <!-- Image 6 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/DAMAC.svg" alt="DAMAC" class="w-14" />
        </div>
        <!-- Image 7 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/Bechtel.svg" alt="Bechtel" class="w-12" />
        </div>
        <!-- Image 8 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img
            src="../assets/Images/Julius-berger.svg"
            alt="Julius Berger"
            class="w-16"
          />
        </div>
        <!-- Image 9 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/Bechtel.svg" alt="Bechtel" class="w-12" />
        </div>
        <!-- Image 10 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/KIEWIT.svg" alt="KIEWIT" class="w-14" />
        </div>
        <!-- Image 11 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/Bechtel.svg" alt="Bechtel" class="w-12" />
        </div>
        <!-- Image 12 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/DAMAC.svg" alt="DAMAC" class="w-14" />
        </div>
        <!-- Image 13 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img
            src="../assets/Images/Julius-berger.svg"
            alt="Julius Berger"
            class="w-16"
          />
        </div>
        <!-- Image 14 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/KIEWIT.svg" alt="KIEWIT" class="w-14" />
        </div>
        <!-- Image 15 -->
        <div class="h-20 flex justify-center items-center px-3 image-sty">
          <img src="../assets/Images/you.svg" alt="KIEWIT" class="w-9" />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.image-sty {
  cursor: pointer;
  border: 1px solid black;
}

.image-sty:nth-last-child(1) {
  border: 1px solid rgb(125, 0, 235);
}
</style>
