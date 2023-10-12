<template>
  <div class="scroll-edit font-pry font-bold text-32 mt-3">
    <div class="animate-slide">
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
    </div>

    <div class="animate-slide">
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
    </div>
  </div>
</template>

<style>
.scroll-edit {
  white-space: nowrap;
  overflow: hidden;
}

.animate-slide {
  display: flex;
  gap: 8px;
  animation: slide-in-out 15s linear infinite;
  width: 100%;
}

.animate-slide div {
  flex-shrink: 0;
}

@keyframes slide-in-out {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%); /* Adjust as needed */
  }
}
</style>
