<template>
  <header class="sticky top-0 z-50 bg-custom-primary-900/80 backdrop-blur-md">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group">
          <span class="font-brand text-3xl md:text-4xl font-extrabold">
            <span class="text-white group-hover:text-neutral-200 transition-colors">ry</span><!--
         --><span class="text-custom-accent-600 group-hover:text-custom-accent-500 transition-colors">hze</span>
          </span>
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-6 md:space-x-8">
          <NuxtLink
            to="/"
            class="text-neutral-200 hover:text-white transition-colors text-lg"
            active-class="text-white font-semibold"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/skills"
            class="text-neutral-200 hover:text-white transition-colors text-lg"
            active-class="text-white font-semibold"
          >
            Skills
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="text-neutral-200 hover:text-white transition-colors text-lg"
            active-class="text-white font-semibold"
          >
            Projects
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// No specific script needed for this simple navbar yet
</script>

<style scoped>
/* Scoped styles if needed, but Tailwind should cover most */
/* The `font-brand` class is globally available from main.css */

/* Ensure no space between 'ry' and 'hze' due to inline-block nature if not careful with HTML comments */
.font-brand span {
  display: inline-block; /* or just ensure no whitespace in the HTML */
}
</style>