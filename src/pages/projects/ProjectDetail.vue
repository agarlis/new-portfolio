<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { projects } from '@/data/projects'

const route = useRoute()
const selectedImage = ref<{ src: string; alt: string } | null>(null)

const project = computed(() => (
  projects.find((item) => item.slug === route.params.slug)
))

const relatedProjects = computed(() => (
  projects.filter((item) => item.slug !== route.params.slug).slice(0, 2)
))

const galleryImages = computed(() => {
  if (!project.value) {
    return []
  }

  return [
    {
      src: project.value.imageUrl,
      alt: project.value.title,
      format: 'feature',
    },
    ...project.value.gallery,
  ]
})
</script>


<template>
  <main
  v-if="project"
  class="min-h-screen bg-[#DED5E9] text-[#514685]"
>
  <div class="mx-auto max-w-7xl px-5 py-8 sm:px-8 md:px-12 lg:px-16 lg:py-12">

    <!-- HERO -->
    <section class="mb-16 lg:mb-20">

      <p class="mb-4 text-xs font-extrabold uppercase tracking-wider text-[#B8ABD4]">
        {{ project.tag }}
      </p>

      <h1 class="mb-6 text-[clamp(2.4rem,12vw,7rem)] leading-[0.95] font-normal text-[#988CBE] sm:mb-8">
        {{ project.title }}
      </h1>

      <p class="max-w-2xl text-[15px] leading-7 text-[#988cbe] sm:text-lg sm:leading-8">
        {{ project.summary }}
      </p>

      <div class="mt-10 grid grid-cols-1 border-y-2 border-[#F9F2AA] sm:mt-12 md:grid-cols-3">
        <div class="py-5 border-b border-[#F9F2AA] last:border-b-0 md:border-b-0">
          <span class="block text-xs uppercase font-bold text-[#B8ABD4]">
            Año
          </span>

          <strong class="text-[#988CBE]">
            {{ project.year }}
          </strong>
        </div>

        <div class="py-5 border-b border-[#F9F2AA] last:border-b-0 md:border-b-0">
          <span class="block text-xs uppercase font-bold text-[#B8ABD4]">
            Rama
          </span>

          <strong class="text-[#988CBE]">
            {{ project.tag }}
          </strong>
        </div>

        <div class="py-5 border-b border-[#F9F2AA] last:border-b-0 md:border-b-0">
          <span class="block text-xs uppercase font-bold text-[#B8ABD4]">
            Rol
          </span>

          <strong class="text-[#988CBE]">
            {{ project.role }}
          </strong>
        </div>
      </div>

    </section>

    <!-- IMAGEN PRINCIPAL
    <section class="mb-24">

      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="w-full rounded-3xl object-cover"
      >

    </section> -->

    <!-- SOBRE EL PROYECTO
    <section class="grid gap-12 md:grid-cols-[280px_1fr] mb-24">

      <h2 class="text-4xl font-normal text-[#A89ACB]">
        Sobre el proyecto
      </h2>

      <div>
        <p class="text-lg leading-8 text-[#7C70AA]">
          {{ project.description }}
        </p>
      </div>

    </section> -->

    <!-- PROCESO -->
    <section class="grid gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">

      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#b8abd4]">
        Proceso creativo
      </h2>

      <ul class="space-y-5">

        <li
          v-for="detail in project.details"
          :key="detail"
          class="border-b-2 border-[#F9F2AA] pb-4 text-[#988cbe]"
        >
          {{ detail }}
        </li>

      </ul>

    </section>

    <!-- GALERÍA -->
    <section class="mt-16 lg:mt-24">
      <div class="mb-10">

        <h2 class="text-3xl font-normal text-[#B8ABD4] sm:text-4xl">
          Resultado final
        </h2>

      </div>

      <div class="grid gap-4">
        <button
          v-for="image in galleryImages"
          :key="image.src"
          type="button"
          @click="selectedImage = image"
          class="overflow-hidden rounded-xl bg-[#F9F2AA] transition duration-300 hover:scale-[1.01] sm:rounded-3xl"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="block w-full h-auto object-cover"
          >
        </button>
      </div>

    </section>

    <!-- MÁS PROYECTOS -->
    <section>

      <div class="mt-10">

        <p class="mb-3 text-xs uppercase font-extrabold text-[#B8ABD4]">
          Sigue explorando
        </p>

        <h2 class="text-3xl font-normal text-[#A89ACB] sm:text-4xl lg:text-5xl">
          Más proyectos
        </h2>

      </div>

      <div class="mt-5 grid gap-4 md:grid-cols-2">

        <RouterLink
          v-for="item in relatedProjects"
          :key="item.slug"
          :to="`/projects/${item.slug}`"
          class="grid overflow-hidden rounded-2xl bg-[#F9F2AA] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] lg:rounded-3xl"
        >

          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="h-52 w-full object-cover sm:h-full"
          >

          <div class="flex flex-col justify-end p-5 sm:p-6">

            <span class="mb-2 text-xs uppercase font-bold text-[#B8ABD4]">
              {{ item.tag }}
            </span>

            <h2 class="text-2xl font-medium text-[#988CBE] sm:text-3xl">
              {{ item.title }}
            </h2>

          </div>

        </RouterLink>

      </div>

    </section>

  </div>
</main>
</template>
