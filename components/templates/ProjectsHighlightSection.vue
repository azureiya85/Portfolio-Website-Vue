<template>
  <section
    id="projects-highlight"
    class="min-h-screen flex items-center justify-center py-16 md:py-24 relative transition-opacity duration-1000"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
  >
    <div class="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr_1.5fr] gap-x-8 items-start">
      <!-- Left Column: Pagination -->
      <div class="hidden md:block h-full self-stretch sticky top-0 pt-24 pb-16">
         <SectionPagination :active-section="activeSection" :total-sections="totalSections" />
      </div>

      <!-- Center Column: Text -->
    <div class="px-4 md:px-0 flex flex-col justify-center h-full space-y-1 sm:space-y-2 text-left md:mr-4 lg:mr-8 col-start-1 md:col-start-2">
  <h2
    class="text-4xl sm:text-5xl font-bold leading-tight transition-all duration-700 ease-out"
    :class="textAnimations.line1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'"
  >
    projects that are
  </h2>
  <h2
    class="text-4xl sm:text-5xl leading-tight" 
  >
    <span
      class="text-4xl sm:text-5xl font-extrabold text-custom-accent-700 transition-all duration-700 ease-out inline-block"
      :class="textAnimations.closestWord ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'"
    >
      closest
    </span>
    <span
      class="font-bold transition-all duration-700 ease-out inline-block ml-2 sm:ml-3" 
      :class="textAnimations.toWord ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'"
      :style="{ transitionDelay: textAnimations.toWord ? '150ms' : '0ms' }"
    >
      to
    </span>
  </h2>
  <div class="relative"> 
    <h2
      class="text-4xl sm:text-5xl font-bold leading-tight transition-all duration-700 ease-out"
      :class="textAnimations.line3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'"
    >
      my heart
    </h2>
    <span
      class="absolute bottom-[-8px] sm:bottom-[-10px] left-0 h-1 sm:h-1.5 w-1/2 bg-custom-accent-700 transition-all duration-500 ease-out"
      :class="textAnimations.line3 ? 'scale-x-100' : 'scale-x-0'" 
      style="transform-origin: left;"
      :style="{ transitionDelay: textAnimations.line3 ? '200ms' : '0ms' }" 
    />
    
  </div>
  <div class="w-1/2">          
  <button
                class="text-md font-bold mt-6 w-full flex items-center justify-center px-4 py-2.5 bg-custom-accent-700 text-white rounded-md shadow-sm hover:bg-custom-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-box-800 focus:ring-custom-accent-600 transition-all hover:translate-2 duration-150 ease-in-out cursor-pointer hover:shadow-2xl"
                aria-label="See my projects"
              >
                <Icon name="i-heroicons-eye-20-solid" class="w-5 h-5 mr-2 flex-shrink-0" />
                <span class="whitespace-nowrap">see my projects</span>
            </button>
  </div>
</div>

      <!-- Right Column: Project Images -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0 mt-12 md:mt-0 col-start-1 md:col-start-3">
        <a
          v-for="(project, index) in projects"
          :key="project.id"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="relative group block bg-custom-box-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-out border-2 border-neutral-700 hover:border-custom-accent-700 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: isVisible ? `${index * 150 + 1000}ms` : '0ms' }"
        >
          <img
            :src="project.imageUrl"
            :alt="project.alt"
            class="w-full h-80 sm:h-96 md:h-[30rem] lg:h-[36rem] object-cover transition-transform duration-300 group-hover:scale-105" 
          >
          <!-- Project Title Overlay -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 ease-out"> <!-- Dimming effect for the whole image on hover -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import SectionPagination from '~/components/atoms/Pagination.vue';
const props = defineProps({
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

const textAnimations = ref({
  line1: false,       
  closestWord: false, 
  toWord: false,      
  line3: false,       
});

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    // Stagger the animations
    setTimeout(() => textAnimations.value.line1 = true, 200);
    setTimeout(() => textAnimations.value.closestWord = true, 500);
    // "to" appears shortly after "closest"
    setTimeout(() => textAnimations.value.toWord = true, 650); // Adjust delay as needed
    // "my heart" and its underline appear last
    setTimeout(() => textAnimations.value.line3 = true, 850); // Adjust delay as needed
  } else {
    // Reset animations when section is not visible
    textAnimations.value.line1 = false;
    textAnimations.value.closestWord = false;
    textAnimations.value.toWord = false;
    textAnimations.value.line3 = false;
  }
}, { immediate: false });

const projects = ref([
  { id: 1, imageUrl: '/images/elitely-ordinary.avif', alt: 'Placeholder Project Image 1', link: 'https://personal-blog-next-phi.vercel.app/', title: 'Personal Blog' },
  { id: 2, imageUrl: '/images/illuvia-web.avif', alt: 'Placeholder Project Image 2', link: 'https://illuvia-web.vercel.app/', title: 'TTRPG Homebrew' },
  { id: 3, imageUrl: '/images/livewave-web.avif', alt: 'Placeholder Project Image 3', link: 'https://minpro-eo.vercel.app/', title: 'Event Organizer' },
]);
</script>

<style scoped>
/* Ensure the underline animation for "closest" originates from the left */
.scale-x-0 {
  transform: scaleX(0);
}
.scale-x-100 {
  transform: scaleX(1);
}
/* Ensure images fill their container while maintaining aspect ratio */
.object-cover {
  object-fit: cover;
}
</style>