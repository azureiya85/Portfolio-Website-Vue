<template>
  <section id="what-i-do" ref="sectionRef" class="min-h-screen flex items-center justify-center py-16 md:py-24 relative transition-opacity duration-1000" :class="isVisible ? 'opacity-100' : 'opacity-0'">
    <div class="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
      <!-- Left Column: Content -->
      <div class="px-4 md:px-0 mr-48">
        <div class="mb-12 md:mb-16 text-center md:text-left">
          <h2 class="text-4xl sm:text-5xl font-extrabold text-custom-accent-700 inline-block relative"> 
            what I do
            <span class="absolute bottom-[-8px] left-0 h-1 w-1/2 bg-custom-accent-700"/> 
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="bg-custom-box-800 p-6 rounded-lg shadow-md text-left transition-all duration-500 ease-out hover:border hover:border-custom-accent-700 hover:shadow-xl hover:-translate-y-2"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            :style="{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }"
          >
            <Icon :name="service.icon" class="text-custom-accent-700 text-4xl mb-4" /> 
            <h3 class="text-md md:text-xl font-bold mb-2 text-neutral-100">{{ service.title }}</h3> 
            <p class="text-sm md:text-md text-neutral-300">{{ service.description }}</p> 
          </div>
        </div>
      </div>

      <!-- Right Column: Pagination -->
      <div class="hidden md:block h-full self-stretch">
         <SectionPagination :active-section="activeSection" :total-sections="totalSections" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionPagination from '~/components/atoms/Pagination.vue';

defineProps({
  activeSection: {
    type: Number,
    required: true
  },
  totalSections: {
    type: Number,
    required: true
  },
  isVisible: { // Prop to control visibility for scroll-triggered animation
    type: Boolean,
    default: false,
  }
});

const services = ref([
  { icon: 'uil:brackets-curly', title: 'front end development', description: 'Crafting responsive and engaging user interfaces with modern technologies.' },
  { icon: 'uil:server-network', title: 'back end development', description: 'Building robust and scalable server-side applications and APIs.' },
  { icon: 'uil:mobile-android', title: 'app development', description: 'Developing cross-platform mobile applications for iOS and Android.' },
  { icon: 'uil:camera', title: 'photography', description: 'Capturing moments and stories through a creative lens.' },
  { icon: 'uil:palette', title: 'illustration', description: 'Creating unique and expressive digital illustrations and graphics.' },
  { icon: 'uil:comment-dots', title: 'design consultation', description: 'Providing expert advice on UI/UX and visual design strategies.' },
]);

// Note: The `isVisible` prop passed from the parent page will handle the scroll reveal for the whole section.
// The internal staggering of boxes is handled by conditional class and transition-delay.
</script>