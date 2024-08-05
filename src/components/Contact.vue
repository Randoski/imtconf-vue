<template>
  <section class="my-16 px-4 md:px-12 lg:px-32 xl:px-48 md:flex">
    <div class="text-blue border border-blue p-4 md:w-2/5 md:px-12 md:pt-12 md:pb-32">
      <h2 class="uppercase font-sec text-16 font-bold md:text-24 md:font-semibold md:mb-16">Contact Us</h2>

      <form class="font-pry mt-4" @submit.prevent="submitForm">
        <!-- Name -->
        <input class="border border-blue w-full mb-2.5 py-2 px-3 outline-none" v-model="name" id="name" name="name"
          placeholder="Your Name" />

        <!-- Error for Name -->
        <p class="text-red text-4 mt-[-10px] mb-4" id="name-error"></p>

        <!-- Email -->
        <input class="border border-blue w-full mb-2.5 py-2 px-3 outline-none" v-model="email" id="email" name="email"
          placeholder="Your Email Address" />

        <!-- Error for Email -->
        <p class="text-red text-4 mt-[-10px] mb-4" id="email-error"></p>

        <!-- Assistance -->
        <div class="relative">
          <select class="border border-blue bg-white w-full mb-2.5 py-2 px-3 outline-none appearance-none"
            v-model="assistance" name="assistance" id="assistance" form="contact-form">
            <option disabled selected value="">How would you like to assist us?</option>
            <option value="volunteer">I want to volunteer</option>
            <option value="sponsor">I want to Sponsor</option>
            <option value="suggestions">I want to make Suggestions</option>
            <option value="enquiries">I want to make enquires</option>
            <option value="other">Something else</option>
          </select>

          <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="h-4 w-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 12l-6-6h12z" />
            </svg>
          </div>
        </div>

        <!-- Error for Assistane -->
        <p class="text-red text-4 mt-[-10px] mb-4" id="assistance-error"></p>

        <!-- Message -->
        <textarea class="border border-blue w-full mb-2.5 py-2 px-3 outline-none resize-none" id="message"
          name="message" v-model="message" rows="5" cols="20" placeholder="Your Message"></textarea>

        <!-- Error for Message -->
        <p class="text-red text-4 mt-[-10px] mb-4" id="message-error"></p>

        <!-- Submit Form -->
        <div class="font-pry flex items-center mt-12 mb-4 font-bold gap-1 underline ">
          <input class="uppercase ml-auto cursor-pointer" type="submit" id="submit" value="Send Message" />
          <img class="h-3" src="../assets/Images/arrow-link-blue.svg" alt="Link image" />
        </div>
      </form>
    </div>

    <!-- FAQ -->
    <div class="bg-blue py-8 px-4 text-white font-pry md:w-3/5 md:px-12 md:pt-12">
      <h2 class="uppercase font-bold text-16 md:text-24 md:font-semibold md:mb-16">Frequently Asked Questions</h2>

      <!-- Questions & Answers -->
      <div class="mt-4">
        <div class="faq-item" v-for="(question, index) in faqQuestions" :key="index">

          <!-- Question -->
          <div class="flex justify-between items-center cursor-pointer mt-6 md:mt-8" @click="toggleAnswer(index)">
            <p class="font-bold md:font-normal">{{ question.question }}</p>
            <div>
              <img :class="{ 'rotate-180': showAnswer === index }" src="../assets/Images/Up.svg" alt="Up arrow" />
            </div>
          </div>

          <!-- Answers -->
          <div v-if="showAnswer === index" class="border border-white mt-4 p-3">
            <p class="font-bold mt-2 md:font-semibold">{{ question.question }}</p>
            <p class="text-pry mt-3 font-thin md:font-normal">{{ question.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      assistance: "",
      message: "",
      showAnswer: null,
      faqQuestions: [
        {
          question: "Can I upgrade my ticket?",
          answer:
            "Yes, you can, anytime before the commencement of the event. Yes, you can, anytime before the commencement of the event.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email.",
        },
        {
          question: "Is there a refund policy?",
          answer:
            "Yes, we have a refund policy. Please check our website or contact our support team for more details.",
        },
        {
          question: "Can I change my email address?",
          answer:
            "Yes, you can change your email address in your account settings. Go to the profile section to update your email.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can contact our customer support team through the 'Contact Us' form on our website or by emailing support@example.com.",
        },
      ],
    };
  },

  methods: {
    toggleAnswer(questionNumber) {
      this.showAnswer = this.showAnswer === questionNumber ? null : questionNumber;
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    submitForm(event) {
      event.preventDefault(); // Prevent default form submission

      // Reset any previous errors
      this.resetErrors();

      // Perform validation for each field
      let hasErrors = false;
      if (!this.name) {
        this.addError('name', 'Please enter your name.');
        hasErrors = true;
      }
      if (!this.email || !this.isValidEmail(this.email)) {
        this.addError('email', 'Please enter a valid email address.');
        hasErrors = true;
      }
      if (!this.assistance) {
        this.addError('assistance', 'Please select how you would like to assist us.');
        hasErrors = true;
      }
      if (!this.message) {
        this.addError('message', 'Please enter your message.');
        hasErrors = true;
      }

      // Submit the form only if there are no errors
      if (!hasErrors) {
        alert('Form submitted successfully!');
        this.name = "";
        this.email = "";
        this.assistance = "";
        this.message = "";
      }
    },

    resetErrors() {
      const errorElements = document.querySelectorAll('.error-message');
      errorElements.forEach(error => {
        error.textContent = '';
      });
    },

    addError(field, message) {
      const errorElement = document.getElementById(`${field}-error`);
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('error-message');
      }
    }
  },
};
</script>
