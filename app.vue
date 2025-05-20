// app.vue
<template>
  <UApp>
    <!--
      The global background and font are applied by styles in main.css on the <body>
      Navbar is part of the default layout.
    -->
    <NuxtLayout> <!-- Render the active layout (e.g., default.vue) -->
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">

</script>

<style>
/* Global non-Tailwind styles if any */
html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden; /* Prevent horizontal scrollbars from animations */
}
</style>