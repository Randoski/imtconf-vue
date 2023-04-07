<template>
  <section>
    <div>
      <h2>Contact Us</h2>

      <!-- Form -->
      <form>
        <!-- Name -->
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <p></p>

        <!-- Email -->
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email Address"
        />
        <p></p>

        <!-- How would you like to assist us? -->
        <select name="assistance" id="assistance" form="contact-form">
          <option>How would you like to assist us?</option>
          <option>I want to volunteer</option>
          <option>I want to Sponsor</option>
          <option>I want to make Suggestions</option>
          <option>I want to make enquires</option>
          <option>Something else</option>
        </select>
        <p></p>

        <!-- Message -->
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="20"
          placeholder="Your Message"
        ></textarea>
        <p></p>

        <!-- Submit -->
        <div>
          <input type="submit" id="submit" value="Send Message" />
          <img src="../assets/Images/arrow-link-blue.svg" alt="Link image" />
        </div>
      </form>
    </div>

    <!-- FAQ -->
    <div>
      <h2>Frequently Asked Questions</h2>

      <!-- Questions -->
      <div>
        <!-- Question 1 -->

        <div>
          <p>Can I upgrade my ticket?</p>
          <div>
            <img src="../assets/Images/Up.svg" alt="Up arrow" />
          </div>
        </div>
        <p></p>

        <!-- Question 2 -->
        <div>
          <p>Can I upgrade my ticket?</p>
          <div>
            <img src="../assets/Images/Up.svg" alt="Up arrow" />
          </div>
        </div>
        <p></p>

        <!-- Question 3 -->
        <div>
          <p>Can I upgrade my ticket?</p>
          <div>
            <img src="../assets/Images/Up.svg" alt="Up arrow" />
          </div>
        </div>
        <p></p>

        <!-- Question 4 -->
        <div>
          <p>Can I upgrade my ticket?</p>
          <div>
            <img src="../assets/Images/Up.svg" alt="Up arrow" />
          </div>
        </div>
        <p></p>

        <!-- Question 5 -->
        <div>
          <p>Can I upgrade my ticket?</p>
          <div>
            <img src="../assets/Images/Up.svg" alt="Up arrow" />
          </div>
        </div>
        <p></p>
      </div>
    </div>
  </section>
</template>
