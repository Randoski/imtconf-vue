<template>
  <div class="md:px-12 lg:px-32 xl:px-48">
    <!-- Mobile Organizers -->
    <section class="md:hidden">
      <div class="pt-16 pb-5 px-4 font-pry">
        <div class="flex relative">
          <!-- Organizer heading -->
          <p class="text-24 font-medium">
            Meet The <br /><span class="font-bold text-32">Organizers</span>
          </p>
          <div>
            <img src="../assets/Images/Mobile-pointer.svg" class="absolute top-14 ml-3" alt="mobile pointer" />
          </div>
        </div>
      </div>

      <div class="bg-pastelBlue bg-opacity-100 px-4 py-6 font-pry">
        <div>
          <!-- Individual organizers -->
          <div>
            <!-- Organizer name -->
            <h2 class="font-bold text-32">{{ currentOrganizer.name }}</h2>

            <div class="flex my-4 items-center gap-3">
              <!-- organizer image -->
              <img :src="currentOrganizer.image" alt="Organizer" />
              <p class="text-30 font-medium">{{ currentOrganizer.job }}</p>
            </div>
            <p class="text-14 font-medium mt-8 leading-40">
              {{ currentOrganizer.description }}
            </p>
          </div>

          <!-- Other organizers -->
          <div class="flex mt-4 gap-8 overflow-x-scroll">
            <img v-for="(organizer, index) in organizers" :key="index" :src="organizer.image" :alt="organizer.name"
              class="w-15 other-organizer" />
          </div>
        </div>
      </div>
    </section>

    <!-- Web organizers -->
    <section id="web-organizers" class="py-8 font-pry mt-32">
      <div class="hidden lg:flex gap-20 items-center relative">
        <!-- Meet the organizers web -->
        <div class="w-1/2 flex h-full">
          <div class="bg-grey3 p-8">
            <div class="flex w-auto ">
              <div class="flex flex-col">
                <p class="text-32">Meet The</p>
                <p class="text-60 font-semibold mt-[-16px]">Organizers</p>
              </div>
              <!-- Web pointer -->
              <img src="../assets/Images/Web-pointer.svg" class="absolute w-20 arrow-style" alt="web pointer" />
            </div>
            <!-- Read more about KND here -->
            <div class="flex gap-1 mt-48">
              <a href="#" class="text-purple underline text-20">Read more about KND here</a>
              <img src="../assets/Images/arrow-link-purple.svg" class="w-4" alt="Link image" />
            </div>
          </div>
        </div>

        <!-- Individual organizers -->
        <div class="w-1/2">
          <!-- Organizer name -->
          <h2 class="font-pry font-bold text-60">{{ currentOrganizer.name }}</h2>
          <div class="flex gap-6 items-center">
            <img :src="currentOrganizer.image" alt="Organizer" class="w-16" />
            <p class="font-pry text-48 font-medium">{{ currentOrganizer.job }}</p>
          </div>
          <p class="mt-6 font-pry font-medium">{{ currentOrganizer.description }}</p>

          <!-- Other organizers -->
          <div class="flex">
            <div class="flex gap-4 mt-8">
              <img v-for="(organizer, index) in organizers" :key="index" :src="organizer.image" :alt="organizer.name"
                class="w-14 other-organizer" />
            </div>
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
      organizers: [
        {
          name: 'Andikan F. Bassey',
          job: 'Product Designer',
          image: require('@/assets/Images/Organizer1.svg'),
          description: 'Andikan is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
        },

        {
          name: 'John K. Abolarin',
          job: 'Data Analyst',
          image: require('@/assets/Images/Organizer2.svg'),
          description: 'John is a skilled Data Analyst with extensive experience in transforming data into actionable insights. He specializes in using data to drive strategic decisions and improve business outcomes.',
        },

        {
          name: 'Kojo P. Eze',
          job: 'Backend Engineer',
          image: require('@/assets/Images/Organizer3.svg'),
          description: 'Kojo is a proficient Backend Engineer with a strong background in building scalable server-side applications. He is adept at optimizing performance and ensuring the reliability of backend systems.',
        },

        {
          name: 'Danjuma O. Lamido',
          job: 'Brand Designer',
          image: require('@/assets/Images/Organizer4.svg'),
          description: 'Danjuma is a creative Brand Designer who excels in developing visually compelling brand identities. His work focuses on creating memorable and impactful brand experiences.',
        },

        {
          name: 'Ajayi C. Oladele',
          job: 'Cybersecurity',
          image: require('@/assets/Images/Organizer5.svg'),
          description: 'Ajayi is a dedicated Cybersecurity Specialist with expertise in protecting systems from security breaches. He is skilled in risk assessment and implementing robust security measures.',
        },

        {
          name: 'Sarah D. Williams',
          job: 'Frontend Engineer',
          image: require('@/assets/Images/Organizer6.svg'),
          description: 'Sarah is a talented Frontend Engineer with a passion for creating dynamic and user-friendly interfaces. She focuses on delivering seamless user experiences and innovative web solutions.',
        },

        {
          name: 'Wilson G. Obi',
          job: 'Project Manager',
          image: require('@/assets/Images/Organizer7.svg'),
          description: 'Wilson is an experienced Project Manager who excels in overseeing projects from inception to completion. He is skilled in coordinating teams, managing resources, and ensuring project success.',
        },

        {
          name: 'Tosin O. Olaoba',
          job: 'Graphics Designer',
          image: require('@/assets/Images/Organizer4.svg'),
          description: 'Tosin is a versatile Graphics Designer with a flair for creating visually appealing designs. He is experienced in various design disciplines, including branding, advertising, and digital media.',
        },
      ],
      currentOrganizerIndex: 0,
    };
  },
  computed: {
    currentOrganizer() {
      return this.organizers[this.currentOrganizerIndex];
    },
  },
  mounted() {
    setInterval(() => {
      this.currentOrganizerIndex = (this.currentOrganizerIndex + 1) % this.organizers.length;
    }, 3000);
  },
};
</script>



<style>
.other-organizer {
  position: relative;
}

.other-organizer::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: transparent;
  border-radius: 50%;
  border: 3px solid purple;
  transform: translate(-50%, -50%);
  animation: growBorder 5s linear infinite;
  z-index: 1;
}

.extra {
  line-height: 180%;
  letter-spacing: 0.02em;
}

.extra2::-webkit-scrollbar {
  background-color: transparent;
  color: transparent;
}

.overflow-x-scroll::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 5px;
}

.arrow-style {
  margin-left: 250px;
  margin-top: 100px;
}

.other-organizer {
  position: relative;
}

.other-organizer::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: transparent;
  border-radius: 50%;
  border: 3px solid purple;
  transform: translate(-50%, -50%);
  animation: growBorder 5s linear infinite;
  z-index: 1;
}
</style>
