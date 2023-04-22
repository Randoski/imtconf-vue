<template>
  <div class="pt-16 pb-5 px-4 font-pry">
    <div class="flex relative">
      <p class="text-24 font-medium">
        Meet The <br /><span class="font-bold text-32">Organizers</span>
      </p>
      <div>
        <img
          src="../assets/Images/Mobile-pointer.svg"
          class="absolute top-14 ml-3"
          alt="mobile pointer"
        />
      </div>
    </div>
  </div>

  <!-- Mobile organizers -->
  <div class="bg-pastelBlue bg-opacity-100 px-4 py-6 font-pry">
    <div>
      <!-- Individual organizers -->
      <div>
        <!-- Organizer name -->
        <h2 class="font-bold text-32">Andikan F. Bassey</h2>

        <div class="flex my-4 items-center gap-3">
          <!-- organizer image -->
          <img src="../assets/Images/Organizer1.svg" alt="Organizer 1" />
          <p class="text-30 font-medium">Product Designer</p>
        </div>
        <p class="text-14 font-medium extra">
          Andikan is one of the amazing kreatives of KND. He has over 4 years of
          design experience and is currently creating design solutions at
          xxxxxxxxx. Want to know more about Andikan? Follow his socials!
        </p>
      </div>

      <!-- Other organizers -->
      <div class="flex mt-4 gap-2 overflow-x-scroll">
        <!-- Other organizers Image -->
        <img
          src="../assets/Images/Organizer2.svg"
          alt="Organizer 2"
          class="w-15"
        />
        <img
          src="../assets/Images/Organizer3.svg"
          alt="Organizer 3"
          class="w-15"
        />
        <img
          src="../assets/Images/Organizer4.svg"
          alt="Organizer 4"
          class="w-15"
        />
        <img
          src="../assets/Images/Organizer5.svg"
          alt="Organizer 5"
          class="w-15"
        />
        <img
          src="../assets/Images/Organizer6.svg"
          alt="Organizer 6"
          class="w-15"
        />
        <img
          src="../assets/Images/Organizer7.svg"
          alt="Organizer 7"
          class="w-15"
        />
        <img
          src="../assets/Images/Organizer7.svg"
          alt="Organizer 7"
          class="w-15"
        />
      </div>
    </div>
  </div>

  <!-- Web organizers -->
  <section id="web-organizers" class="hidden">
    <div>
      <!-- Meet the organizers web -->
      <div>
        <div>
          <p>
            Meet the<br />
            <span>Organizers</span>
          </p>

          <!-- Web pointer -->
          <img src="../assets/Images/Web-pointer.svg" alt="web pointer" />
        </div>

        <!-- Read more about KND here -->
        <div>
          <a href="#">Read more about KND here</a>
          <img src="../assets/Images/arrow-link-purple.svg" alt="Link image" />
        </div>
      </div>

      <!-- Individual organizers -->
      <div>
        <!-- Organizer name -->
        <h2>Andikan F. Bassey</h2>

        <div>
          <img src="../assets/Images/Organizer1.svg" alt="Organizer 2" />
          <p>Product Designer</p>
        </div>
        <p>
          Andikan is one of the amazing kreatives of KND. He has over 4 years of
          design experience and is currently creating design solutions at
          xxxxxxxxx. Want to know more about Andikan? Follow his socials!
        </p>

        <!-- Other organizers -->
        <div>
          <!-- Other organizers Image -->
          <img src="../assets/Images/Organizer2.svg" alt="Organizer 2" />
          <img src="../assets/Images/Organizer3.svg" alt="Organizer 3" />
          <img src="../assets/Images/Organizer4.svg" alt="Organizer 4" />
          <img src="../assets/Images/Organizer5.svg" alt="Organizer 5" />
          <img src="../assets/Images/Organizer6.svg" alt="Organizer 6" />
          <img src="../assets/Images/Organizer7.svg" alt="Organizer 7" />
          <img src="../assets/Images/Organizer7.svg" alt="Organizer 7" />
        </div>

        <!-- View more -->
        <div>
          <a href="#">View more</a>
          <img src="../assets/Images/arrow-link-purple.svg" alt="Link image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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
</style>