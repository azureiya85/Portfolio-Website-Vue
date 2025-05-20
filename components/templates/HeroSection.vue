<template>
  <section id="hero" class="min-h-screen flex items-center justify-center py-16 md:py-24 relative">
    <div class="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
      <!-- Left Column: Text -->
      <div class="space-y-8 text-left px-4 md:px-0 mr-48">
        <h1
          class="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight transition-all duration-700 ease-out"
          :class="headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'"
        >
          Hello, I'm <span
            class="text-custom-accent-700 transition-opacity duration-500 delay-500"
            :class="nameVisible ? 'opacity-100' : 'opacity-0'"
          >ryhze</span><br >
          a web developer<br >
          and graphic designer
        </h1>
        <p
          class="text-2xl sm:text-3xl text-neutral-300 transition-all duration-700 ease-out delay-700" 
          :class="paragraphVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          I am a full-stack web developer who has a passion
          not only in programming but also in design, photography
          and illustration. I blend both the art of impactful UI/UX
          and the art of problem-solving.
        </p>
      </div>

      <!-- Right Column: Pagination -->
      <div class="hidden md:block h-full self-stretch">
        <!-- SectionPagination will use Nuxt UI variables like --ui-primary for active state if styled that way -->
        <SectionPagination :active-section="activeSection" :total-sections="totalSections" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SectionPagination from '~/components/atoms/Pagination.vue';

defineProps({
  activeSection: {
    type: Number,
    required: true
  },
  totalSections: {
    type: Number,
    required: true
  }
});

const headingVisible = ref(false);
const nameVisible = ref(false);
const paragraphVisible = ref(false);

onMounted(() => {
  // Staggered animations on load
  setTimeout(() => headingVisible.value = true, 100);
  setTimeout(() => nameVisible.value = true, 500); // After heading starts, ryhze fades in
  setTimeout(() => paragraphVisible.value = true, 800); // After ryhze, paragraph flies in
});
</script>