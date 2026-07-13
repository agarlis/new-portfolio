<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '@/data/projects'

const activeFilter = ref('Todos')

const filters = computed(() => [
  'Todos',
  ...new Set(projects.map(project => project.tag)),
])

const filteredProjects = computed(() => {
  return activeFilter.value === 'Todos'
    ? projects
    : projects.filter(
        project => project.tag === activeFilter.value
      )
})
</script>

<template>
  <main class="min-h-screen bg-[#DED5E9] text-[#514685] px-5 py-8 sm:px-8 md:px-12 lg:px-16">

    <section class="max-w-7xl mx-auto">

      <!-- FILTROS -->
      <div
        class="flex flex-wrap gap-3 mb-6"
        aria-label="Filtrar proyectos por rama"
      >
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          class="min-h-11 px-4 sm:px-5 rounded-full border-2 border-[#f9f2aa] transition-all text-sm sm:text-base"
          :class="
            activeFilter === filter
              ? 'bg-[#f9f2aa] text-[#b8abd4]'
              : 'bg-transparent text-[#988cbe] hover:bg-[#f9f2aa] hover:text-[#b8abd4]'
          "
        >
          {{ filter }}
        </button>
      </div>

      <!-- CONTADOR -->
      <p class="mb-6 text-[#988cbe] font-semibold">
        {{ filteredProjects.length }}
        {{ filteredProjects.length === 1 ? 'proyecto' : 'proyectos' }}
      </p>

      <!-- GRID -->
      <div class="grid gap-6 md:grid-cols-2">
        <RouterLink
                  v-for="project in filteredProjects"
                  :key="project.slug"
                  :to="`/projects/${project.slug}`"
                  class="group overflow-hidden rounded-[28px] bg-[#f9f2aa] transition-all duration-300"
                >
                  <!-- IMAGEN -->
                  <div class="relative h-60 overflow-hidden sm:h-72">
                    <img
                      :src="project.imageUrl"
                      :alt="project.title"
                      class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    >

                    <span
                      class="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#988cbe] text-[#f9f2aa] text-sm font-bold backdrop-blur-sm"
                    >
                      {{ project.tag }}
                    </span>
                  </div>

                  <!-- INFO -->
                  <div class="p-5 sm:p-6">
                    <h2 class="text-xl sm:text-2xl mb-2 text-[#988cbe]">
                      {{ project.title }}
                    </h2>

                    <p class="text-[#988cbe] leading-relaxed">
                      {{ project.description }}
                    </p>
                  </div>
                </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.project-list-enter-active,
.project-list-leave-active {
  transition: all .3s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.project-list-move {
  transition: transform .3s ease;
}
</style>
