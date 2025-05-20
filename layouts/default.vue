<template>
  <div>
    <LayoutTheNavbar />
    <main>
      <slot /> <!-- Page content will be injected here -->
    </main>
    <!-- TODO add Footer component here later -->
  </div>
</template>

<script setup lang="ts">
import LayoutTheNavbar from '~/components/atoms/Navbar.vue';
</script>