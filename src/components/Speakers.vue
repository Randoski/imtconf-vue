<template>
  <div class="w-full px-4 bg-softBrown mt-16 pb-8">
    <h2 class="font-sec text-24 text-deepBrown pt-8">
      <span class="webkit">Here</span> <span class="font-400">are some </span>
      <span class="webkit">of the people </span>
      <span class="font-light">making our </span>
      <span class="font-bold">dream work.</span>
    </h2>
    <hr class="border border-deepBrown mt-4 mb-14" />

    <p class="font-pry font-medium font-base leading-11">
      Dreams are not possible without people bringing them to life and here are
      the people helping us bring the IMTConf dream to life. We have carefully
      chosen amazing speakers who are a force to reckon with in the tech space.
    </p>

    <section class="mt-12 mb-4">
      <h1 class="font-sec font-bold text-base text-lg leading-9 text-deepBrown">
        Here’s what they’ve been working on:
      </h1>
      <!-- About speaker -->
      <div class="flex gap-11 mt-4 overflow-x-auto scrollbar-hide z-1">
        <!-- Speaker 1 -->
        <div class="speakers relative">
          <img src="../assets/Images/Speaker1.png" alt="Speaker 1 image" />
          
          <div
            class="font-sec font-bold text-base text-14 absolute top-3 left-3 bg-purple text-white uppercase py-2 px-6"
          >
            <p>Tech</p>
          </div>
          <div>
            <p
              class="mt-4 mb-5 font-sec font-bold text-14 uppercase leading-12 tracking-wider"
            >
              Speaker
            </p>
            <p class="font-bold font-sec text-20 tracking-wider">
              Samson Goddy
            </p>
            <p class="font-pry font-medium text-14 leading-5 mt-1 mb-6">
              Accessibility in Design - A handmaid’s tale
            </p>
          </div>
        </div>

        <!-- Speaker 2 -->
        <div class="speakers relative">
          <img src="../assets/Images/Speaker2.png" alt="Speaker 2 image" />

          <div
            class="font-sec font-bold text-base text-14 absolute top-3 left-3 bg-orange text-white uppercase py-2 px-6"
          >
            <p>Influencer</p>
          </div>
          <div>
            <p
              class="mt-4 mb-5 font-sec font-bold text-14 uppercase leading-12 tracking-wider"
            >
              Speaker
            </p>
            <p class="font-bold font-sec text-20 leading-12 tracking-wider">
              Mr. Heelariouz
            </p>
            <p class="font-pry font-medium text-14 leading-5 mt-1">
              Accessibility in Design - A handmaid’s tale
            </p>
          </div>
        </div>

        <!-- Speaker 3 -->
        <div class="speakers relative">
          <img src="../assets/Images/Speaker3.png" alt="Speaker 3 image" />

          <div
            class="font-sec font-bold text-base text-14 absolute top-3 left-3 bg-purple text-white uppercase py-2 px-6"
          >
            <p>Tech</p>
          </div>
          <div>
            <p
              class="mt-4 mb-5 font-sec font-bold text-14 uppercase leading-12 tracking-wider"
            >
              Speaker
            </p>
            <p class="font-bold font-sec text-20 leading-12 tracking-wider">
              Dynasty
            </p>
            <p class="font-pry font-medium text-14 leading-5 mt-1">
              Accessibility in Design - A handmaid’s tale
            </p>
          </div>
        </div>

        <!-- Speaker 4 -->
        <div class="speakers relative">
          <img src="../assets/Images/Speaker2.png" alt="Speaker 2 image" />

          <div
            class="font-sec font-bold text-base text-14 absolute top-3 left-3 bg-orange text-white uppercase py-2 px-6"
          >
            <p>Influencer</p>
          </div>
          <div>
            <p
              class="mt-4 mb-5 font-sec font-bold text-14 uppercase leading-12 tracking-wider"
            >
              Speaker
            </p>
            <p class="font-bold font-sec text-20 leading-12 tracking-wider">
              Mr. Heelariouz
            </p>
            <p class="font-pry font-medium text-14 leading-5 mt-1">
              Accessibility in Design - A handmaid’s tale
            </p>
          </div>
        </div>

        <!-- Speaker 5 -->
        <div class="speakers relative">
          <img src="../assets/Images/Speaker3.png" alt="Speaker 3 image" />
          
          <div
            class="font-sec font-bold text-base text-14 absolute top-3 left-3 bg-purple text-white uppercase py-2 px-6"
          >
            <p>Tech</p>
          </div>
          <div>
            <p
              class="mt-4 mb-5 font-sec font-bold text-14 uppercase leading-12 tracking-wider"
            >
              Speaker
            </p>
            <p class="font-bold font-sec text-20 leading-12 tracking-wider">
              Dynasty
            </p>
            <p class="font-pry font-medium text-14 leading-5 mt-1">
              Accessibility in Design - A handmaid’s tale
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.webkit {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(191, 130, 96);
  color: transparent;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;
}

::-webkit-scrollbar {
  width: 4px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(191, 130, 96);
  border-radius: 4px;
}

.speakers {
  min-width: 278px;
}
</style>


 
