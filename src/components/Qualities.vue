<template>
  <div class="scroll-edit font-pry font-bold text-32 mt-3 md:text-48">
    <div class="animate-slide">
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>

      <!-- Duplicate content for continuous scroll -->
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
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
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>

      <!-- Duplicate content for continuous scroll -->
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Inclusiveness.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Accessibility.</div>
      <div class="text-purple">Give.</div>
      <div class="text-orange">Equity.</div>
      <div class="text-purple">Give.</div>
      <div class="text-blue">Community.</div>
      <div class="text-purple">Give.</div>
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
  position: relative;
}

.animate-slide {
  display: inline-flex;
  gap: 8px;
  animation: slide-in-out 15s linear infinite;
}

@keyframes slide-in-out {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-slide div {
  flex-shrink: 0;
}

/* Mobile view: Split into two lines */
@media (max-width: 768px) {
  .scroll-edit {
    display: flex;
    flex-wrap: wrap;
  }
  .animate-slide {
    width: 100%;
    animation: none; 
  }
  .animate-slide:nth-child(1) {
    animation: slide-in-out 15s linear infinite;
  }
  .animate-slide:nth-child(2) {
    animation: slide-in-out 15s linear infinite 7.5s; 
  }
}

/* Desktop view: Single line */
@media (min-width: 769px) {
  .scroll-edit {
    display: block;
  }
  .animate-slide {
    width: auto;
    animation: slide-in-out 45s linear infinite;
  }
}
</style>
