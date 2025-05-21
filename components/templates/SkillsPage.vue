<template>
  <section id="skills-page" class="min-h-screen py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Page Title with fade-in animation -->
    <div class="mb-16 text-center md:text-left animate-fade-in">
      <h1 class="text-5xl sm:text-6xl font-extrabold text-custom-accent-700 inline-block relative">
        my skills
        <span class="absolute bottom-[-10px] left-0 h-1.5 w-1/2 bg-custom-accent-700"/>
      </h1>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
      <!-- Left Column: Skills & Experience -->
      <div class="space-y-20">
        <!-- Web Development Skills Section -->
        <div class="animate-slide-up" style="--delay: 0.2s">
          <h2 class="text-3xl font-bold text-neutral-100 mb-8 flex items-center">
            <Icon name="uil:brackets-curly" class="text-custom-accent-700 mr-3 text-3xl flex-shrink-0" />
            Web Development
          </h2>

          <!-- Skills Categories -->
          <div class="space-y-10">
            <!-- Fundamentals -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-200 mb-4 pl-2 border-l-4 border-custom-accent-700">Fundamentals</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div
                  v-for="(skill, index) in webDevSkills.fundamentals" 
                  :key="skill.name" 
                  class="bg-custom-box-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square hover:border hover:border-custom-accent-700 transition-all duration-300 hover:scale-105 group animate-fade-in"
                  :style="`--delay: ${0.3 + index * 0.1}s`"
                >
                  <Icon :name="skill.icon" class="text-5xl text-neutral-400 group-hover:text-custom-accent-600 transition-colors duration-300" />
                  <span class="mt-3 text-sm text-neutral-300 group-hover:text-custom-accent-500 transition-colors duration-300">{{ skill.name }}</span>
                </div>
              </div>
            </div>
            
            <!-- Frameworks -->
            <div class="animate-slide-up" style="--delay: 0.5s">
              <h3 class="text-xl font-semibold text-neutral-200 mb-4 pl-2 border-l-4 border-custom-accent-700">Frameworks</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div
                  v-for="(skill, index) in webDevSkills.frameworks" 
                  :key="skill.name" 
                  class="bg-custom-box-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square hover:border hover:border-custom-accent-700 transition-all duration-300 hover:scale-105 group animate-fade-in"
                  :style="`--delay: ${0.6 + index * 0.1}s`"
                >
                  <Icon :name="skill.icon" class="text-5xl text-neutral-400 group-hover:text-custom-accent-600 transition-colors duration-300" />
                  <span class="mt-3 text-sm text-neutral-300 group-hover:text-custom-accent-500 transition-colors duration-300">{{ skill.name }}</span>
                </div>
              </div>
            </div>
            
            <!-- Back-End -->
            <div class="animate-slide-up" style="--delay: 0.7s">
              <h3 class="text-xl font-semibold text-neutral-200 mb-4 pl-2 border-l-4 border-custom-accent-700">Back-End</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div
                  v-for="(skill, index) in webDevSkills.backend" 
                  :key="skill.name" 
                  class="bg-custom-box-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square hover:border hover:border-custom-accent-700 transition-all duration-300 hover:scale-105 group animate-fade-in"
                  :style="`--delay: ${0.8 + index * 0.1}s`"
                >
                  <Icon :name="skill.icon" class="text-5xl text-neutral-400 group-hover:text-custom-accent-600 transition-colors duration-300" />
                  <span class="mt-3 text-sm text-neutral-300 group-hover:text-custom-accent-500 transition-colors duration-300">{{ skill.name }}</span>
                </div>
              </div>
            </div>
            
            <!-- Other Web Dev Tools -->
            <div class="animate-slide-up" style="--delay: 0.9s">
              <h3 class="text-xl font-semibold text-neutral-200 mb-4 pl-2 border-l-4 border-custom-accent-700">Tools & Deployment</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div
                  v-for="(skill, index) in webDevSkills.tools" 
                  :key="skill.name" 
                  class="bg-custom-box-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square hover:border hover:border-custom-accent-700 transition-all duration-300 hover:scale-105 group animate-fade-in"
                  :style="`--delay: ${1.0 + index * 0.1}s`"
                >
                  <Icon :name="skill.icon" class="text-5xl text-neutral-400 group-hover:text-custom-accent-600 transition-colors duration-300" />
                  <span class="mt-3 text-sm text-neutral-300 group-hover:text-custom-accent-500 transition-colors duration-300">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Programming Languages Section -->
        <div class="animate-slide-up" style="--delay: 1.1s">
          <h2 class="text-3xl font-bold text-neutral-100 mb-8 flex items-center">
            <Icon name="uil:code" class="text-custom-accent-700 mr-3 text-3xl flex-shrink-0" />
            Game Development & Programming
          </h2>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div
              v-for="(skill, index) in otherProgrammingSkills" 
              :key="skill.name" 
              class="bg-custom-box-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square hover:border hover:border-custom-accent-700 transition-all duration-300 hover:scale-105 group animate-fade-in"
              :style="`--delay: ${1.2 + index * 0.1}s`"
            >
              <Icon :name="skill.icon" class="text-5xl text-neutral-400 group-hover:text-custom-accent-600 transition-colors duration-300" />
              <span class="mt-3 text-sm text-neutral-300 group-hover:text-custom-accent-500 transition-colors duration-300">{{ skill.name }}</span>
              <span class="text-xs text-neutral-500 italic mt-1">{{ skill.level }}</span>
            </div>
          </div>
        </div>

        <!-- Creative Skills Section -->
        <div class="animate-slide-up" style="--delay: 1.3s">
          <h2 class="text-3xl font-bold text-neutral-100 mb-8 flex items-center">
            <Icon name="uil:palette" class="text-custom-accent-700 mr-3 text-3xl flex-shrink-0" />
            Creative Skills
          </h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-for="(skill, index) in creativeSkills" 
              :key="skill.title" 
              class="bg-custom-box-800 p-6 rounded-lg shadow-md text-left transition-all duration-300 hover:border hover:border-custom-accent-700 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              :style="`--delay: ${1.4 + index * 0.15}s`"
            >
              <Icon :name="skill.icon" class="text-custom-accent-700 text-4xl mb-4" />
              <h3 class="text-xl font-bold mb-2 text-neutral-100">{{ skill.title }}</h3>
              <p class="text-sm text-neutral-300 mb-4">{{ skill.description }}</p>
              
              <div class="mt-4">
                <h4 class="text-sm font-medium text-neutral-400 mb-2">Tools:</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tool in skill.tools" 
                    :key="tool" 
                    class="text-xs bg-custom-box-900 text-neutral-400 px-2 py-1 rounded">
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Experience & Education -->
      <div class="space-y-16">
        <!-- Experience Section -->
        <div class="animate-slide-in-right" style="--delay: 0.4s">
          <h2 class="text-3xl font-bold text-neutral-100 mb-8 flex items-center">
            <Icon name="uil:briefcase" class="text-custom-accent-700 mr-3 text-3xl flex-shrink-0" />
            Experience
          </h2>
          
          <div class="bg-custom-box-800 p-6 rounded-lg shadow-md text-center">
            <div class="text-5xl font-extrabold text-custom-accent-700 leading-none">7+</div>
            <div class="text-2xl font-bold text-neutral-200 mt-2">years</div>
            <div class="text-xl text-neutral-300">freelance experience</div>
            
            <!-- Timeline -->
            <div class="mt-10 relative border-l-2 border-custom-accent-700 pl-6 space-y-8">
              <div 
                v-for="(exp, index) in experience" 
                :key="index" 
                class="relative animate-fade-in"
                :style="`--delay: ${0.8 + index * 0.15}s`"
              >
                <!-- Timeline dot -->
                <div class="absolute w-4 h-4 bg-custom-accent-700 rounded-full -left-[1.65rem] top-0.5"/>
                
                <div class="text-left mb-6">
                  <h3 class="text-lg font-bold text-neutral-100">{{ exp.title }}</h3>
                  <p class="text-sm text-custom-accent-500 font-medium">{{ exp.period }}</p>
                  <p class="text-sm text-neutral-300 mt-2">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Education Section -->
        <div class="animate-slide-up" style="--delay: 0.6s">
          <h2 class="text-3xl font-bold text-neutral-100 mb-8 flex items-center">
            <Icon name="uil:graduation-cap" class="text-custom-accent-700 mr-3 text-3xl flex-shrink-0" />
            Education
          </h2>
          
          <div class="bg-custom-box-800 p-6 rounded-lg shadow-md space-y-8">
            <div 
              v-for="(edu, index) in education" 
              :key="index" 
              class="text-left animate-fade-in"
              :style="`--delay: ${1.0 + index * 0.15}s`"
            >
              <h3 class="text-lg font-bold text-neutral-100">{{ edu.degree || '' }}</h3>
              <p class="text-md text-neutral-200">{{ edu.institution }}</p>
              <p class="text-sm text-custom-accent-500 font-medium mt-1">{{ edu.period }}</p>
              <p class="text-sm text-neutral-300 mt-2">{{ edu.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- CTA - Download CV -->
        <div class="mt-8 animate-bounce-in" style="--delay: 1.5s">
          <button class="w-full text-md font-bold py-3 px-4 bg-custom-accent-700 text-white rounded-md shadow-md hover:bg-custom-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-box-800 focus:ring-custom-accent-600 transition-colors duration-150 ease-in-out cursor-pointer flex items-center justify-center">
            <Icon name="i-heroicons-arrow-down-tray-20-solid" class="w-5 h-5 mr-2" />
            download my CV
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Web Development Skills
const webDevSkills = ref({
  fundamentals: [
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'TypeScript', icon: 'logos:typescript-icon' },
    { name: 'HTML5', icon: 'logos:html-5' },
    { name: 'CSS3', icon: 'logos:css-3' },
  ],
  frameworks: [
    { name: 'React / Next.js', icon: 'logos:nextjs-icon' },
    { name: 'Vue / Nuxt', icon: 'logos:nuxt-icon' },
    { name: 'Svelte', icon: 'logos:svelte-icon' },
    { name: 'Astro', icon: 'logos:astro' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  ],
  backend: [
    { name: 'PostgreSQL', icon: 'logos:postgresql' },
    { name: 'MySQL', icon: 'logos:mysql' },
    { name: 'Supabase', icon: 'logos:supabase-icon' },
    { name: 'MariaDB', icon: 'logos:mariadb-icon' },
  ],
  tools: [
    { name: 'Vercel', icon: 'logos:vercel-icon' },
    { name: 'GitHub', icon: 'logos:github-icon' },
    { name: 'npm', icon: 'logos:npm-icon' },
    { name: 'Vite', icon: 'logos:vitejs' },
  ],
});

// Other Programming Skills (Game Dev)
const otherProgrammingSkills = ref([
  { name: 'GDScript', icon: 'logos:godot-icon', level: 'Intermediate' },
  { name: 'Python', icon: 'logos:python', level: 'Intermediate' },
  { name: 'Lua', icon: 'logos:lua', level: 'Beginner' },
  { name: 'Ruby', icon: 'logos:ruby', level: 'Beginner' },
]);

// Creative Skills
const creativeSkills = ref([
  { 
    title: 'Graphic Design & Illustration',
    icon: 'uil:brush-alt',
    description: 'Creating unique visual assets including logos, illustrations, and digital artwork with a focus on expressive design.',
    tools: ['Inkscape', 'Krita', 'GIMP', 'Aseprite (Pixel Art)']
  },
  { 
    title: 'Photography & Videography',
    icon: 'uil:camera',
    description: 'Capturing and editing visual stories through photography and video production with an eye for composition and storytelling.',
    tools: ['darktable', 'kdenlive', 'GIMP']
  },
  { 
    title: 'Design Consultation',
    icon: 'uil:comment-dots',
    description: 'Providing expert advice on UI/UX, brand identity, and content creation strategies to enhance visual communication.',
    tools: ['Scribus', 'Inkscape', 'Open-source design tools']
  },
  { 
    title: 'Game Development',
    icon: 'uil:game-structure',
    description: 'Designing and developing indie games with a focus on innovative mechanics, pixel art styles, and engaging storytelling.',
    tools: ['Godot Engine', 'Aseprite (Pixel Art)', 'Krita', 'Blender (3D)']
  },
]);

// Experience Timeline
const experience = ref([
  {
    title: 'Full Stack Developer (Freelance)',
    period: '2025 - Present',
    description: 'Developing web and mobile applications with a focus on user experience and functionality.'
  },
  {
    title: 'Game Designer (Freelance)',
    period: '2021 - Present',
    description: 'Creating indie games with a focus on pixel art, game design, balancing and storytelling.'
  },
  {
    title: 'Videographer (Freelance)',
    period: '2019 - Present',
    description: 'Video editing and production for content creation mainly for YouTube and Twitch.'
  },
  {
    title: 'Graphic Designer (Freelance)',
    period: '2017 - Present',
    description: 'Created visual assets for clients, including logos, photography, illustrations, and digital artwork.'
  }
]);

// Education
const education = ref([
  {
    institution: 'Universitas Multimedia Nusantara',
    period: '2015 - 2017',
    description: 'Specialized in interactive media and game design.'
  },
  {
    degree: 'Bachelor of Accounting',
    institution: 'Sekolah Tinggi Ilmu Ekonomi Y.A.I',
    period: '2017 - 2021',
    description: 'Specialized in accounting systems, finance, and business management.'
  },
  {
    degree: 'Master of Business Administration',
    institution: 'Universitas Gadjah Mada',
    period: '2021 - 2023',
    description: 'Specialized in business strategy and organizational development in the context of digital transformation.'
  },
  {
    degree: 'Certificate in Taxation',
    institution: 'Ikatan Akuntansi Indonesia',
    period: '2024',
    description: 'Specialized in taxation and its application on business activities.'
  },
  {
    degree: 'Certificate in Web Development',
    institution: 'Purwadhika Digital School',
    period: '2025',
    description: 'Specialized in full-stack web development.'
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

@keyframes slideInRight {
  from { 
    opacity: 0;
    transform: translateX(40px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
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

.animate-slide-in-right {
  opacity: 0;
  animation: slideInRight 0.8s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

.animate-bounce-in {
  opacity: 0;
  animation: bounceIn 0.8s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>