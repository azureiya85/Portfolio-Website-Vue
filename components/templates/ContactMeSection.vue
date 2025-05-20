<template>
  <section
    id="contact-me"
    class="min-h-screen flex items-center justify-center py-16 md:py-24 relative transition-opacity duration-1000"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
  >
    <div class="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-8 items-start">
      <!-- Left Column: Pagination  -->
      <div class="hidden md:block h-full self-stretch sticky top-0 pt-24 pb-16">
        <SectionPagination :active-section="activeSection" :total-sections="totalSections" />
      </div>

      <!-- Right Column: Contact Form (Now second in order) -->
      <div
        class="px-4 md:px-0 md:ml-12 lg:ml-24 transition-all duration-700 ease-out order-first md:order-last" 
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div class="mb-12 md:mb-16 text-center md:text-left relative"> 
          <h2 class="text-4xl sm:text-5xl font-bold leading-tight inline-block"> 
            contact
            <span
              class="font-extrabold text-custom-accent-700 transition-all duration-700 ease-out inline-block"
              :class="textAnimations.meWord ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'"
              :style="{ transitionDelay: textAnimations.meWord ? '200ms' : '0ms' }"
            >
              me
            </span>
          </h2>
          <span
            class="absolute bottom-[-8px] left-0 h-1 w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] bg-custom-accent-700 transition-all duration-500 ease-out origin-left"

            :class="textAnimations.meWord ? 'scale-x-100' : 'scale-x-0'"
            :style="{ transitionDelay: textAnimations.meWord ? '400ms' : '0ms' }"
          />
        </div>

        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="name" class="sr-only">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              class="block w-full px-4 py-3 rounded-md shadow-sm bg-custom-box-700 border-neutral-600 focus:border-custom-accent-500 focus:ring-custom-accent-500 placeholder-neutral-400 text-neutral-100 transition-all duration-300 ease-out"
              :class="formElementsAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
              :style="{ transitionDelay: formElementsAnimation ? '300ms' : '0ms' }"
              placeholder="your name"
            >
          </div>
          <div>
            <label for="email" class="sr-only">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              class="block w-full px-4 py-3 rounded-md shadow-sm bg-custom-box-700 border-neutral-600 focus:border-custom-accent-500 focus:ring-custom-accent-500 placeholder-neutral-400 text-neutral-100 transition-all duration-300 ease-out"
              :class="formElementsAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
              :style="{ transitionDelay: formElementsAnimation ? '450ms' : '0ms' }"
              placeholder="your email"
            >
          </div>
          <div>
            <label for="message" class="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class="block w-full px-4 py-3 rounded-md shadow-sm bg-custom-box-700 border-neutral-600 focus:border-custom-accent-500 focus:ring-custom-accent-500 placeholder-neutral-400 text-neutral-100 transition-all duration-300 ease-out"
              :class="formElementsAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
              :style="{ transitionDelay: formElementsAnimation ? '600ms' : '0ms' }"
              placeholder="your message"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-custom-accent-700 hover:bg-custom-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-bg focus:ring-custom-accent-500 transition-all duration-300 ease-out cursor-pointer"
              :class="formElementsAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
              :style="{ transitionDelay: formElementsAnimation ? '750ms' : '0ms' }"
            >
              Submit
            </button>
          </div>
        </form>
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
    required: true,
  },
  totalSections: {
    type: Number,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const textAnimations = ref({
  meWord: false,
});

const formElementsAnimation = ref(false);

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    setTimeout(() => textAnimations.value.meWord = true, 300); // "me" and underline animation
    setTimeout(() => formElementsAnimation.value = true, 500); // Trigger form elements animation
  } else {
    textAnimations.value.meWord = false;
    formElementsAnimation.value = false; // Reset form elements animation
  }
}, { immediate: false });

const handleSubmit = () => {
  // Placeholder for form submission logic
  console.log('Form submitted (UI only)');
};
</script>

      
<style scoped>
/* Add custom styles if needed, e.g., for focus states if Tailwind defaults aren't enough */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--color-neutral-100); 
  -webkit-box-shadow: 0 0 0px 1000px var(--color-custom-box-700) inset; 
  transition: background-color 5000s ease-in-out 0s;
}

.origin-left {
  transform-origin: left;
}
</style>

    