<template>
  <div class="w-full px-4 mt-10 md:px-12 lg:px-32 xl:px-48">
    <div class="text-center font-pry font-bold flex flex-col gap-8 md:mb-24">
      <h3 class="font-base text-purple leading-19 tracking-wider uppercase md:text-20 lg:text-24">
        What is IMTCONF?
      </h3>
      <p class="text-2xl leading-2 tracking-wider w-50 md:text-32 lg:text-40">
        We are a community of Influencers and Tech Personalities.
      </p>
    </div>

    <div class="pt-4 mt-12 border-2 md:flex md:pt-0 " :style="{ borderColor: currentBgColorClass }">
      <!-- We are ... -->
      <div class="font-pry text-center py-12 md:w-1/2 md:py-20">
        <p class="font-bold text-base uppercase leading-6 tracking-widest mb-16 md:text-16 lg:text-20"
          :class="currentColorClass">
          Human-centered Community
        </p>
        <h2 class="font-normal text-forty leading-6 pt-7 pb-4 md:text-72">We are</h2>
        <h2 class="font-bold text-forty leading-6 underline md:mt-8 md:text-72 md:mb-20" :class="currentColorClass">
          {{ currentTitle }}
        </h2>
      </div>

      <div class="py-4 mt-12 md:w-1/2 md:mt-0 md:px-8" :style="{ backgroundColor: currentBgColorClass }">
        <p class="font-sec font-bold text-xl leading-9 px-4 text-white md:mt-12 text-20 md:font-sec md:font-semibold">
          A community of Influencers and Tech Personalities forging a stage where the
          continent’s brightest minds meet new partners, and the sharpest innovators to
          share their visions.
        </p>

        <!-- Logo and Icons -->
        <div class="flex justify-between px-4 mt-16 md:mt-48">
          <a href="/" class="md:w-16">
            <img src="../assets/Images/Logo3.svg" alt="Logo" />
          </a>

          <!-- Social media Icons -->
          <div class="flex items-center gap-4">
            <div class="w-4 h4 pt-1">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/Instagram2.svg" alt="icon" />
              </a>
            </div>

            <div class="w-4 h-4 ">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/LinkedIn2.svg" alt="icon" />
              </a>
            </div>

            <div class="w-4 h-4 pt-1">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/twitter2.svg" alt="icon" />
              </a>
            </div>

            <div class="w-4 h-4 pt-1">
              <a href="#">
                <img class="w-full h-full object-contain" src="../assets/Images/mail2.svg" alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conf",
  data() {
    return {
      whatWeAre: [
        "Designers",
        "Open-source",
        "Developers",
        "E-marginative",
        "Kreatives",
        "Influencers",
        "Dynasties",
        "Simplified",
        "IMT",
      ],
      colorClasses: [
        "text-custom-purple",
        "text-custom-blue",
        "text-custom-gray",
        "text-custom-brown",
        "text-custom-purple",
        "text-custom-blue",
        "text-custom-gray",
        "text-custom-brown",
        "text-custom-red",
      ],
      bgColorClasses: [
        "#7b00ea",
        "#267a96",
        "#333333",
        "#bf8260",
        "#7b00ea",
        "#267a96",
        "#333333",
        "#bf8260",
        "#db2dbe",
      ],
      titleIndex: 0,
      colorIndex: 0,
    };
  },
  computed: {
    currentTitle() {
      return this.whatWeAre[this.titleIndex];
    },
    currentColorClass() {
      return this.colorClasses[this.colorIndex];
    },
    currentBgColorClass() {
      return this.bgColorClasses[this.colorIndex];
    },
    borderColorClass() {
      return this.colorClasses[(this.colorIndex + 1) % this.colorClasses.length];
    },
  },
  created() {
    setInterval(() => {
      this.titleIndex = (this.titleIndex + 1) % this.whatWeAre.length;
      this.colorIndex = (this.colorIndex + 1) % this.colorClasses.length;
    }, 400);
  },
};
</script>

<style>
.text-custom-purple {
  color: #7b00ea;
}

.text-custom-blue {
  color: #267a96;
}

.text-custom-gray {
  color: #333333;
}

.text-custom-brown {
  color: #bf8260;
}

.text-custom-red {
  color: #db2dbe;
}
</style>
