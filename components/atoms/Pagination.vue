<template>
  <div class="flex flex-col items-center justify-center space-y-3 relative h-full py-8">
    <div
class="absolute top-0 bottom-0 left-1/2 w-0.5 opacity-50 transform -translate-x-1/2 bg-custom-accent-700" 
         style="z-index: -1; height: calc(100% - 2rem); margin-top: 1rem; margin-bottom: 1rem;"/>

    <div
      v-for="i in totalSections"
      :key="i"
      class="w-4 h-4 rounded-full transition-all duration-300 ease-in-out"
      :class="[
        i === activeSection ? 'bg-custom-accent-700 scale-110' : 'border-2 border-custom-accent-700 bg-transparent'
      ]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  activeSection: {
    type: Number,
    required: true
  },
  totalSections: {
    type: Number,
    default: 5
  }
});
</script>