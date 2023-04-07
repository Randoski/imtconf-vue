<template>
  <nav>
    <!-- Logo -->
    <div>
      <img src="./assets/Images/Logo.svg" alt="Logo" />
    </div>

    <!-- Main Links -->
    <div>
      <router-link to="/about">About</router-link>
      <router-link to="/">Speakers</router-link>
      <router-link to="/">Organizers</router-link>
      <router-link to="/">Volunteer</router-link>
      <router-link to="/about">Sponsors</router-link>
      <router-view />
    </div>

    <!-- Contact Link -->
    <div>
      <router-link to="/about">Buy tickets</router-link>
      <img src="./assets/Images/arrow-link-purple.svg" alt="arrow" />
    </div>
  </nav>
</template>



<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
