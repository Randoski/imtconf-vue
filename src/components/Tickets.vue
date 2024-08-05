<template>
  <div class="mt-16 text-center font-pry px-4 md:px-12 lg:px-32 xl:px-48 md:mt-40 md:text-left">
    <h1 class="font-bold text-32 tracking-tight leading-relaxed md:font-sec md:text-40 md:text-center">Convinced?</h1>
    <p class="font-normal text-16 md:text-center">Let's get you a spot now</p>

    <!-- Tickets  -->
    <div class="mt-6 md:flex md:w-full md:gap-6 md:mt-8">

      <!-- In-Person -->
      <div class="mb-3 bg-pastelPurple border-t-4 border-purple pt-12 pb-8 md:w-1/2 md:pl-8 md:mb-16">
        <p class="font-bold text-32 uppercase text-grey2Opacity md:font-semibold md:text-24">In-person</p>
        <p class="pt-1 pb-8 text-32 font-bold text-purple uppercase webkit-text md:mt-2 md:text-48 md:font-pry">N1500</p>

        <!-- Perks -->
        <ul class="flex flex-col gap-4">
          <li v-for="index in 8" :key="index">
            <span class="text-purple">&#10022; </span>Feature perk 1 for in person
            attendee
          </li>
        </ul>

        <div class="mt-8 flex justify-center md:justify-start text-purple md:mt-12 md:mb-6">
          <router-link to="" class="font-extrabold text-18 underline uppercase md:text-24 md:font-bold">Buy Tickets</router-link>
          <img src="../assets/Images/arrow-link-purple.svg" class="ml-2 w-3 md:w-5" alt="In-person link" />
        </div>
      </div>

      <!-- Online -->
      <div class="mb-3 bg-pastelBlue border-t-4 border-blue pt-12 pb-8 md:w-1/2 md:pl-8 md:mb-16">
        <p class="font-bold text-32 uppercase text-grey2Opacity webkit-text md:font-semibold md:text-24">Online</p>
        <p class="pt-1 pb-8 text-32 font-bold text-blue uppercase md:mt-2 md:text-48 md:font-pry">Free</p>

        <!-- Perks -->
        <ul class="flex flex-col gap-4">
          <li v-for="index in 8" :key="index">
            <span class="text-blue">&#10022; </span>Feature perk 1 for in person attendee
          </li>
        </ul>

        <div class="mt-8 flex justify-center md:justify-start text-blue md:mt-12 md:mb-6">
          <router-link to="" class="font-extrabold text-18 underline uppercase md:text-24 md:font-bold">Reserve your spot</router-link>
          <img src="../assets/Images/arrow-link-blue.svg" class="ml-2 w-3 md:w-5" alt="Online link" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.webkit-text {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}
</style>
