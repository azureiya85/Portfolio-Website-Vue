<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <HeroSection
      ref="heroSectionRef"
      :active-section="activeSectionIndex"
      :total-sections="totalSections"
    />
    <WhatIDoSection
      ref="whatIDoSectionRef"
      :active-section="activeSectionIndex"
      :total-sections="totalSections"
      :is-visible="visibleSections.whatIDo"
    />
    <MySkillsSection 
      ref="mySkillsSectionRef"
      :active-section="activeSectionIndex"
      :total-sections="totalSections"
      :is-visible="visibleSections.mySkills"
    />
    <ProjectsHighlightSection
     ref="projectsHighlightsSectionRef"
     :active-section="activeSectionIndex"
     :total-sections="totalSections"
     :is-visible="visibleSections.projectsHighlights"
   />
   <ContactMeSection
  ref="contactMeSectionRef"
  :active-section="activeSectionIndex"
  :total-sections="totalSections"
  :is-visible="visibleSections.contact"
/>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import HeroSection from '~/components/templates/HeroSection.vue';
import WhatIDoSection from '~/components/templates/WhatIDoSection.vue';
import MySkillsSection from '~/components/templates/MySkillsSection.vue'
import ProjectsHighlightSection from '~/components/templates/ProjectsHighlightSection.vue';       
import ContactMeSection from '~/components/templates/ContactMeSection.vue';

    

const totalSections = 5; // Total number of sections
const activeSectionIndex = ref(1); // 1-indexed for easier prop passing to pagination

// Refs for section elements
const heroSectionRef = ref<InstanceType<typeof HeroSection> | null>(null);
const whatIDoSectionRef = ref<InstanceType<typeof WhatIDoSection> | null>(null);
const mySkillsSectionRef = ref<InstanceType<typeof MySkillsSection> | null>(null); 
const projectsHighlightsSectionRef = ref<InstanceType<typeof ProjectsHighlightSection> | null>(null);
const contactMeSectionRef = ref<InstanceType<typeof ContactMeSection> | null>(null);
  
// Add refs for other sections

// Reactive state for section visibility (for scroll-triggered animations)
const visibleSections = ref({
  hero: true, 
  whatIDo: false,
  mySkills: false,
  projectsHighlights: false,
  contact: false,
});

const sectionElements = ref<Array<{ id: string, el: HTMLElement | undefined, index: number }>>([]);

let observer: IntersectionObserver | null = null;

definePageMeta({
  layout: 'default'
});

onMounted(async () => {
  await nextTick();

  sectionElements.value = [
    { id: 'hero', el: (heroSectionRef.value?.$el as HTMLElement), index: 1 },
    { id: 'what-i-do', el: (whatIDoSectionRef.value?.$el as HTMLElement), index: 2 },
    { id: 'my-skills', el: (mySkillsSectionRef.value?.$el as HTMLElement), index: 3 },
    { id: 'projects-highlight', el: (projectsHighlightsSectionRef.value?.$el as HTMLElement), index: 4 },
    { id: 'contact-me', el: (contactMeSectionRef.value?.$el as HTMLElement), index: 5 },

    
  ].filter(section => section.el);

  if (!sectionElements.value.length) {
    console.warn("No section elements found to observe.");
    return;
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4 // Section is 40% visible
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const htmlId = entry.target.id; // e.g., 'hero', 'what-i-do'
      let keyToUpdateInVisibleSections: keyof typeof visibleSections.value | null = null;

      if (htmlId === 'hero') {
        keyToUpdateInVisibleSections = 'hero';
      } else if (htmlId === 'what-i-do') {
        keyToUpdateInVisibleSections = 'whatIDo'; 
       } else if (htmlId === 'my-skills') { 
      keyToUpdateInVisibleSections = 'mySkills';
      } else if (htmlId === 'projects-highlight') {
        keyToUpdateInVisibleSections = 'projectsHighlights';
      } else if (htmlId === 'contact-me') {
        keyToUpdateInVisibleSections = 'contact';
    }
 
      if (entry.isIntersecting) {
        console.log(`DEBUG: ${htmlId} is intersecting.`); // For debugging
        if (keyToUpdateInVisibleSections) {
          visibleSections.value[keyToUpdateInVisibleSections] = true;
          console.log(`DEBUG: Set visibleSections.${keyToUpdateInVisibleSections} to true`); // For debugging
        }
        const observedSection = sectionElements.value.find(s => s.el === entry.target);
        if (observedSection) {
          activeSectionIndex.value = observedSection.index;
        }
      } else {
        // Animations to re-trigger when scrolling out and back in
         if (keyToUpdateInVisibleSections) {
           visibleSections.value[keyToUpdateInVisibleSections] = false;
         }
      }
    });
  }, options);

  sectionElements.value.forEach(section => {
    if (section.el) {
      console.log("DEBUG: Observing element with ID:", section.el.id); // For debugging
      observer?.observe(section.el);
    } else {
      console.warn(`DEBUG: Element for section id '${section.id}' in sectionElements was undefined and cannot be observed.`);
    }
  });

  if (heroSectionRef.value?.$el) {
      const heroRect = (heroSectionRef.value.$el as HTMLElement).getBoundingClientRect();
      if (heroRect.top < window.innerHeight && heroRect.bottom >= 0) {
          if (!visibleSections.value.hero) { // Only set if not already set by its own animation
             // visibleSections.value.hero = true; // Hero handles its own initial animation
          }
      }
  }
});

onUnmounted(() => {
  if (observer) {
    sectionElements.value.forEach(section => {
      if (section.el) {
        observer?.unobserve(section.el);
      }
    });
    observer.disconnect();
  }
});
</script>