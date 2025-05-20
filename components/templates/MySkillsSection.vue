<template>
  <section id="my-skills" class="min-h-screen flex items-center justify-center py-16 md:py-24 relative transition-opacity duration-1000" :class="isVisible ? 'opacity-100' : 'opacity-0'">
    <div class="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
      <!-- Left Column: Content -->
      <div class="px-4 md:px-0 md:mr-24"> <!-- Consider if mr-48 is still needed or adjust based on pagination width -->
        <div class="mb-12 md:mb-16 text-center md:text-left">
          <h2 class="text-4xl sm:text-5xl font-extrabold text-custom-accent-700 inline-block relative">
            my skills
            <span class="absolute bottom-[-8px] left-0 h-1 w-1/2 bg-custom-accent-700"/>
          </h2>
        </div>

        <!-- Grid for Experience and Skills -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          <!-- Experience Box -->
          <div
            class="lg:col-span-1 text-center lg:row-span-2 bg-custom-box-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center transition-all duration-500 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            :style="{ transitionDelay: isVisible ? '0ms' : '0ms' }"
          >
            <span class="text-center text-4xl lg:text-5xl font-extrabold text-custom-accent-700 leading-none">seven</span>
            <span class="text-center font-bold text-xl lg:text-2xl text-neutral-200 mt-1">years</span>
            <span class="text-center font-bold text-xl lg:text-2xl text-neutral-200">freelance</span>
            <span class="text-center font-bold text-xl lg:text-2xl text-neutral-200">experience</span>

            <!-- Download CV Button -->
            <button
                class="text-md font-bold mt-6 w-full flex items-center justify-center px-4 py-2.5 bg-custom-accent-700 text-white rounded-md shadow-sm hover:bg-custom-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-box-800 focus:ring-custom-accent-600 transition-colors duration-150 ease-in-out cursor-pointer"
              >
                <Icon name="i-heroicons-arrow-down-tray-20-solid" class="w-5 h-5 mr-2" />
                download myy CV
              </button>
          </div>
   
          <!-- Skill Icons (occupy remaining 3 columns on lg screens) -->
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="bg-custom-box-800 p-6 rounded-lg shadow-md text-left flex flex-col items-center justify-center aspect-square transition-all duration-300 ease-out group hover:scale-105 hover:border hover:border-custom-accent-700"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            :style="{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }" 
          >
            <Icon
              :name="skill.icon"
              class="text-6xl md:text-7xl text-neutral-400 group-hover:text-custom-accent-600 transition-colors duration-300"
            />
            <span class="mt-3 text-sm text-neutral-300 group-hover:text-neutral-100 transition-colors duration-300">{{ skill.name }}</span>
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
  isVisible: {
    type: Boolean,
    default: false,
  }
});

const skills = ref([
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'React / Next.js', icon: 'logos:nextjs-icon' }, 
  { name: 'Svelte', icon: 'logos:svelte-icon' },
  { name: 'NuxtJS', icon: 'logos:nuxt-icon' },
]);

</script>

<style scoped>
/* Add any specific scoped styles if needed */
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>