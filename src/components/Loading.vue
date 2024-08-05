<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-purple">
    <div>

      <!-- Loading Text -->
      <h1 class="font-pry font-bold text-white text-2xl lg:text-32 lg:font-bold lg:tracking-wider">
        Influencers Meet Tech <br />
        is <span class="text-pink">back.</span>
      </h1>

      <!-- Loading Bar -->
      <div class="loading-container relative mt-6">
        <div class="loading-bar" :style="{ width: `${progress * 100}%` }"></div>
        <p class="loading-text font-sec font-semibold lg:font-semibold lg:text-2xl">
          Loading {{ progress.toFixed(2) }}
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
    };
  },
  mounted() {
    const endTime = Date.now() + 8000;

    const intervalId = setInterval(() => {
      const now = Date.now();
      const timeLeft = endTime - now;
      const percentageLeft = timeLeft / 8000;
      this.progress = 1 - percentageLeft;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
      }
    }, 10);
  },
};
</script>

<style>
.loading-container {
  min-width: 32px;
  width: 70vw;
  height: 52px;
  max-width: 40rem;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
}

.loading-bar {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(0);
  height: 100%;
  background-color: white;
  animation: loading-animation 8s linear forwards;
  z-index: 1;
}

.loading-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: black;
}

@media (max-width: 768px) {
  .loading-text {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .loading-container {
    width: 90vw;
    max-width: unset;
  }

  .loading-text {
    font-size: 0.8rem;
  }
}

@keyframes loading-animation {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
