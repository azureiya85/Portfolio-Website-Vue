<template>
  <section id="projects-page" class="min-h-screen py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Page Title with fade-in animation -->
    <div class="mb-16 text-center md:text-left animate-fade-in">
      <h1 class="text-5xl sm:text-6xl font-extrabold text-custom-accent-700 inline-block relative">
        my projects
        <span class="absolute bottom-[-10px] left-0 h-1.5 w-1/2 bg-custom-accent-700"/>
      </h1>
    </div>

    <!-- Categories Selection -->
    <div class="mb-12 animate-slide-up" style="--delay: 0.2s">
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        <button 
          v-for="category in categories" 
          :key="category.id"
          class="px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ease-in-out"
          :class="activeCategory === category.id 
            ? 'bg-custom-accent-700 text-white shadow-md' 
            : 'bg-custom-box-800 text-neutral-300 hover:bg-custom-box-700'"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- GitHub Profile Link -->
    <div class="mb-16 flex justify-center md:justify-start animate-slide-up" style="--delay: 0.3s">
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center gap-3 px-6 py-3 bg-custom-box-800 rounded-full hover:bg-custom-box-700 transition-all duration-300 group"
      >
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-custom-accent-700">
          <img src="https://avatars.githubusercontent.com/u/52884561?v=4" alt="GitHub Profile" class="w-full h-full object-cover" > 
        </div>
        <span class="text-neutral-300 group-hover:text-custom-accent-500 font-medium transition-colors duration-300">
          <span class="hidden sm:inline">Check out my </span>GitHub Profile
        </span>
        <Icon name="uil:external-link-alt" class="text-custom-accent-700 text-lg" />
      </a>
    </div>

    <!-- Web Development Projects Section -->
    <div v-if="activeCategory === 'web'" class="animate-fade-in" style="--delay: 0.4s">
      <!-- Sub-Category Tabs -->
      <div class="mb-8 border-b border-custom-box-700 flex overflow-x-auto pb-1">
        <button 
          v-for="tab in webDevTabs" 
          :key="tab.id"
          class="px-5 py-3 font-medium whitespace-nowrap transition-all duration-200"
          :class="activeWebTab === tab.id 
            ? 'text-custom-accent-700 border-b-2 border-custom-accent-700' 
            : 'text-neutral-400 hover:text-neutral-300'"
          @click="activeWebTab = tab.id"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Deployed Projects -->
      <div v-if="activeWebTab === 'deployed'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in deployedProjects" 
          :key="project.title" 
          class="bg-custom-box-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
          :style="`--delay: ${0.5 + index * 0.1}s`"
        >
          <!-- Project Image -->
          <div class="h-52 overflow-hidden">
            <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" >
          </div>
          
          <!-- Project Content -->
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-neutral-100">{{ project.title }}</h3>
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-custom-accent-700 hover:text-custom-accent-500 transition-colors">
                <Icon name="uil:external-link-alt" class="text-xl" />
              </a>
            </div>
            
            <p class="text-neutral-300 text-sm">{{ project.description }}</p>
            
            <!-- Tech Stack -->
            <div>
              <h4 class="text-xs font-semibold uppercase text-neutral-400 mb-2">Tech Stack</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech" 
                  class="px-2 py-1 bg-custom-box-900 text-xs rounded-md text-neutral-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <!-- Features -->
            <div>
              <h4 class="text-xs font-semibold uppercase text-neutral-400 mb-2">Key Features</h4>
              <ul class="text-sm text-neutral-300 pl-5 space-y-1 list-disc">
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Undeployed Projects -->
      <div v-else-if="activeWebTab === 'undeployed'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in undeployedProjects" 
          :key="project.title" 
          class="bg-custom-box-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
          :style="`--delay: ${0.5 + index * 0.1}s`"
        >
         <!-- Project Image -->
          <div class="h-52 overflow-hidden">
            <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" >
          </div>
          
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-neutral-100">{{ project.title }}</h3>
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-custom-accent-700 hover:text-custom-accent-500 transition-colors">
                <Icon name="uil:github" class="text-xl" />
              </a>
            </div>
            
            <p class="text-neutral-300 text-sm">{{ project.description }}</p>
            
            <!-- Tech Stack -->
            <div>
              <h4 class="text-xs font-semibold uppercase text-neutral-400 mb-2">Tech Stack</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech" 
                  class="px-2 py-1 bg-custom-box-900 text-xs rounded-md text-neutral-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Projects Section -->
    <div v-else-if="activeCategory === 'others'" class="animate-fade-in" style="--delay: 0.4s">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in otherProjects" 
          :key="project.title" 
          class="bg-custom-box-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
          :style="`--delay: ${0.5 + index * 0.1}s`"
        >
          <!-- Project Image -->
          <div class="h-52 overflow-hidden bg-custom-box-700 relative">
            <img :src="project.imageUrl || '/images/elitely-ordinary.avif'" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" >
            <div class="absolute top-3 right-3 bg-custom-accent-700 text-white text-xs font-bold uppercase px-2 py-1 rounded">
              {{ project.category }}
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-neutral-100">{{ project.title }}</h3>
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-custom-accent-700 hover:text-custom-accent-500 transition-colors">
                <Icon name="uil:external-link-alt" class="text-xl" />
              </a>
            </div>
            
            <p class="text-neutral-300 text-sm">{{ project.description }}</p>
            
            <!-- Tools -->
            <div v-if="project.tools && project.tools.length">
              <h4 class="text-xs font-semibold uppercase text-neutral-400 mb-2">Tools Used</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tool in project.tools" 
                  :key="tool" 
                  class="px-2 py-1 bg-custom-box-900 text-xs rounded-md text-neutral-300"
                >
                  {{ tool }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="mt-20 text-center animate-bounce-in" style="--delay: 0.7s">
      <div class="p-8 bg-custom-box-800 rounded-lg shadow-md inline-block md:max-w-xl">
        <h3 class="text-2xl font-bold text-custom-accent-700 mb-4">Interested in working together?</h3>
        <p class="text-neutral-300 mb-6">Let's discuss how we can bring your next project to life!</p>
        <button class="text-md font-bold py-3 px-6 bg-custom-accent-700 text-white rounded-md shadow-md hover:bg-custom-accent-500 transition-colors duration-150 ease-in-out cursor-pointer flex items-center justify-center mx-auto">
          <Icon name="uil:message" class="w-5 h-5 mr-2" />
          contact me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Category selection
const categories = [
  { id: 'web', name: 'Web Development' },
  { id: 'others', name: 'Other Projects' }
];
const activeCategory = ref('web');

// Web development tabs
const webDevTabs = [
  { id: 'deployed', name: 'Deployed' },
  { id: 'undeployed', name: 'Undeployed' }
];
const activeWebTab = ref('deployed');

// Deployed web development projects
const deployedProjects = ref([
  {
    title: 'Elitely Ordinary',
    description: 'My personal blog with dynamic content, admin features, and full CRUD capabilities.',
    imageUrl: '/images/elitely-ordinary.avif',
    link: 'https://personal-blog-next-phi.vercel.app/',
    techStack: ['NextJS 15', 'Backendless', 'Axios', 'Tailwind'],
    features: [
      'Dynamic pages for blog posts',
      'CRUD operations',
      'Admin dashboard',
      'Responsive design'
    ]
  },
  {
    title: 'Illuvia Web',
    description: 'Homepage for my Savage Worlds Adventure Edition homebrew settings with thematic design.',
    imageUrl: '/images/illuvia-web.avif',
    link: 'https://illuvia-web.vercel.app/',
    techStack: ['Svelte 5', 'SvelteKit', 'Skeleton v3', 'Tailwind 4', 'Lucide Icon'],
    features: [
      'Dynamic rules reference system',
      'Unique thematic design',
      'Cohesive content organization',
      'Responsive layout'
    ]
  },
  {
    title: 'Livewave Web',
    description: 'A comprehensive music concert organizing platform with complete event management features.',
    imageUrl: '/images/livewave-web.avif',
    link: 'https://minpro-eo.vercel.app/',
    techStack: ['NextJS 15', 'Prisma', 'Supabase', 'Shadcn-UI', 'Tailwind 4', 'Lucide-React', 'Cloudinary', 'Next-Auth v5'],
    features: [
      'Admin dashboard',
      'Dynamic concert pages',
      'Ticket purchasing system',
      'Payment status tracking',
      'Authentication system',
      'Customer & organizer dashboards',
      'Coupon & discount calculation'
    ]
  },
  {
    title: 'Glint (NextJS)',
    description: 'A design agency website with full CMS integration and authentication capabilities.',
    imageUrl: '/images/glint-studio.avif',
    link: 'https://glint-vercel-next.vercel.app/',
    techStack: ['NextJS 15', 'Shadcn-UI', 'Tailwind 4', 'Backendless'],
    features: [
      'Authentication system',
      'CMS integration',
      'Contact system'
    ]
  },
  {
    title: 'Portofolio Website (This Site)',
    description: 'A website to showcase my work and skills as a web developer.',
    imageUrl: '/images/vue-port.avif',
    link: 'https://portfolio-ryhze-vue.vercel.app/projects',
    techStack: ['Vue 3', 'Nuxt 3', 'Tailwind 4', 'Nuxt UI'],
    features: [
      'Portofolio showcase',
      'Responsive design',
      'Thematic design'
    ]
  },
  {
    title: 'Prototype Designer',
    description: 'A tool for testing various color and typeface combinations for Svelte applications using Skeleton 3.',
    imageUrl: '/images/prototype-designer.avif',
    link: 'https://prototyping-site-svelte5.vercel.app/',
    techStack: ['Svelte 5', 'Tailwind 4', 'Skeleton 3'],
    features: [
      'Modern UI/UX',
      'Comprehensive way to prototype',
      'Skeleton 3 components integration'
    ]
  }
]);

// Undeployed web development projects
const undeployedProjects = ref([
  {
    title: 'Glint (Svelte)',
    description: 'Alternative version of the Glint design agency website built with Svelte 5.',
    imageUrl: '/images/glint-studio.avif',
    link: 'https://github.com/azureiya85/glint-studio-svelte5',
    techStack: ['Svelte 5', 'Skeleton v3', 'Backendless', 'Authentication']
  },
  {
    title: 'Verdant',
    description: 'A microblogging platform for sharing short-form content. It has very basic authentication and some CRUD capabilities.',
    imageUrl: '/images/Verdant.avif',
    link: 'https://github.com/azureiya85/Microblog-Verdant',
    techStack: ['Svelte 5', 'Skeleton v3', 'Backendless', 'Tailwind']
  },
  {
    title: 'Svelte-5-Playground',
    description: 'Collection of mini-applications built to explore Svelte 5 runes and capabilities.',
    imageUrl: '/images/svelte-pg.avif',
    link: 'https://github.com/azureiya85/Svelte-5-Playground',
    techStack: ['Svelte 5', 'Bits-UI', 'Tailwind 4']
  },
  {
    title: 'Bakery Shop',
    description: 'A full-fledged bakery shop website with storefront and admin dashboard, comprehensive product, inventory, and order management features.',
    imageUrl: '/images/jo-bakery.avif',
    link: 'https://github.com/azureiya85/jo-bakery-shop',
    techStack: ['Svelte 3', 'Skeleton v3', 'Tailwind 4', 'Supabase']
  } 
]);

// Other creative projects
const otherProjects = ref([
  {
    title: 'Project Amethyst',
    description: 'A Metroidvania game inspired by Castlevania: Symphony of the Night with exploration, platforming, and RPG elements.',
    imageUrl: '/images/elitely-ordinary.avif',
    category: 'Game',
    link: 'https://github.com',
    tools: ['Godot 4.4', 'GDScript', 'Aseprite']
  },
  {
    title: 'Event Posters Collection',
    description: 'Various poster designs created for events, showcasing layout and typography skills.',
    imageUrl: '/images/elitely-ordinary.avif',
    category: 'Poster',
    link: 'https://github.com',
    tools: ['Inkscape', 'GIMP']
  },
  {
    title: 'Photography Portfolio',
    description: 'A collection of landscape and portrait photography highlighting composition techniques.',
    imageUrl: '/images/elitely-ordinary.avif',
    category: 'Photos',
    link: 'https://github.com',
    tools: ['darktable', 'GIMP']
  },
  {
    title: 'Short Film Collection',
    description: 'A series of short narrative videos exploring storytelling through visual medium.',
    imageUrl: '/images/elitely-ordinary.avif',
    category: 'Video',
    link: 'https://github.com',
    tools: ['kdenlive']
  },
  {
    title: 'Illuvia: The Clockwork Age',
    description: 'Book version of my homebrew Savage Worlds settings: Illuvia.',
    imageUrl: '/images/illuvia-book.avif',
    category: 'Book',
    link: 'https://drive.google.com/file/d/108-gi6lVnvdMjNRvAFos-8AKEB_PcYPj/view?usp=sharingm',
    tools: ['Inkscape', 'GIMP', 'Scribus']
  }
]);
</script>

<style>
/* Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(40px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

/* Animation classes */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.7s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

.animate-bounce-in {
  opacity: 0;
  animation: bounceIn 0.8s ease-out forwards;
  animation-delay: var(--delay, 0s);
}
</style>