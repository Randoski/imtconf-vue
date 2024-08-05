<template>
  <div class="w-full px-4 bg-softBrown mt-16 pb-8 md:px-12 lg:px-32 xl:px-48 md:mt-32">
    <h2 class="font-sec text-24 text-deepBrown pt-8 md:pt-16 md:text-32">
      <span class="webkit">Here</span> <span class="font-400">are some <span class="webkit">of the people </span></span>
      <br>
      <span class="font-light italic">making our </span>
      <span class="font-bold">dream work.</span>
    </h2>
    <hr class="border border-deepBrown mt-4 mb-14" />
    <p class="font-pry font-medium font-base leading-11 md:mr-6">
      Dreams are not possible without people bringing them to life and here are
      the people helping us bring the IMTConf dream to life. We have carefully
      chosen amazing speakers who are a force to reckon with in the tech space.
    </p>

    <section class="mt-12 mb-4">
      <h1 class="font-sec font-bold text-base text-lg leading-9 text-deepBrown md:text-20 md:font-semibold">
        Here’s what they’ve been working on:
      </h1>
      <!-- About speaker -->
      <div class="flex gap-11 mt-4 overflow-x-auto scrollbar-hide z-1 md:mt-10">

        <!-- Speaker 1 -->
        <div v-for="(speaker, index) in speakers" :key="index" class="speakers relative">
          <img :src="speaker.image" :alt="speaker.name + 'image'" />

          <!-- Industry -->
          <div class="font-sec font-bold text-base text-14 absolute top-3 left-3 text-white uppercase py-2 px-6"
            :class="[speaker.industry === 'Tech' ? 'bg-purple' : 'bg-orange']">
            <p>{{ speaker.industry }}</p>
          </div>

          <!-- Role -->
          <div>
            <p class="mt-4 mb-5 font-sec font-bold text-14 uppercase leading-12 tracking-wider md:mt-8 md:mb-0">
              {{ speaker.role }}
            </p>

            <!-- Name -->
            <p class="font-bold font-sec text-20 tracking-wider md:text-32 md:tracking-normal">
              {{ speaker.name }}
            </p>

            <!-- Topic -->
            <p class="font-pry font-medium text-14 leading-5 mt-1 mb-6">
              {{ speaker.topic }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        {
          image: require('@/assets/Images/Speaker1.png'),
          industry: "Tech",
          name: "Samson Goddy",
          role: "Speaker",
          topic: "Accessibility in Design - A handmaid’s tale",
        },

        {
          image: require('@/assets/Images/Speaker2.png'),
          industry: "Influencer",
          name: "Peace Bolarin",
          role: "Speaker",
          topic: "Leveraging Design communities",
        },

        {
          image: require('@/assets/Images/Speaker3.png'),
          industry: "Tech",
          name: "Dynasty",
          role: "Speaker",
          topic: "AI - A co-designer?",
        },

        {
          image: require('@/assets/Images/Speaker2.png'),
          industry: "Tech",
          name: "Design Queen",
          role: "Speaker",
          topic: "Designing for the Future",
        },

        {
          image: require('@/assets/Images/Speaker1.png'),
          industry: "Influencer",
          name: "Mr. Heelariouz ",
          role: "Speaker",
          topic: "Influencing Designers",
        }
      ]
    }
  },
}
</script>

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
