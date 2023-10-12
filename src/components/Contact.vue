<template>
  <section class="my-16 px-4">
    <div class="text-blue border border-blue p-4">
      <h2 class="uppercase font-sec text-16 font-bold">Contact Us</h2>

      <!-- Form -->
      <form class="font-pry mt-4">
        <!-- Name -->
        <input
          class="border border-blue w-full mb-2.5 py-2 px-3 outline-none"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
        />
        <p></p>

        <!-- Email -->
        <input
          class="border border-blue w-full mb-2.5 py-2 px-3 outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Your Email Address"
        />
        <p></p>

        <!-- How would you like to assist us? -->
        <select
          class="border border-blue bg-white w-full mb-2.5 py-2 px-3 outline-none"
          name="assistance"
          id="assistance"
          form="contact-form"
        >
          <option class="font-pry">How would you like to assist us?</option>
          <option class="font-pry">I want to volunteer</option>
          <option class="font-pry">I want to Sponsor</option>
          <option class="font-pry">I want to make Suggestions</option>
          <option class="font-pry">I want to make enquires</option>
          <option class="font-pry">Something else</option>
        </select>
        <p></p>

        <!-- Message -->
        <textarea
          class="border border-blue w-full mb-2.5 py-2 px-3 outline-none resize-none"
          id="message"
          name="message"
          rows="8"
          cols="20"
          placeholder="Your Message"
        ></textarea>
        <p></p>

        <!-- Submit -->
        <div class="font-pry flex items-center mt-12 mb-4 font-bold gap-1 underline">
          <input
            class="uppercase ml-auto"
            type="submit"
            id="submit"
            value="Send Message"
          />
          <img class="h-3" src="../assets/Images/arrow-link-blue.svg" alt="Link image" />
        </div>
      </form>
    </div>

    <!-- FAQ -->
    <div class="bg-blue py-8 px-4 text-white font-pry">
      <h2 class="uppercase font-bold text-16">Frequently Asked Questions</h2>

      <!-- Questions Loop -->
      <div class="mt-4">
        <div class="faq-item" v-for="(question, index) in faqQuestions" :key="index">
          <div
            class="flex items-center cursor-pointer justify-between"
            @click="toggleAnswer(index)"
          >
            <p class="font-bold mt-6">{{ question.question }}</p>
            <div>
              <img
                :class="{ 'rotate-180': showAnswer === index }"
                src="../assets/Images/Up.svg"
                alt="Up arrow"
              />
            </div>
          </div>
          <div v-if="showAnswer === index" class="border border-white mt-4 p-3">
            <p class="font-bold mt-2">{{ question.question }}</p>
            <p class="text-pry mt-3 font-thin">{{ question.answer }}</p>
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
  },
};
</script>
