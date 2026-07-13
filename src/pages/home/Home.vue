<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import Logo from '@/assets/icons/Logomulticolor.svg'
import fotoperfil from '@/assets/images/fotoperfil.jpg'

import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'

const visibleProjects = computed(() => projects.slice(0, 3))
</script>

<template>
  <section class="hero">
    <div class="hero-left">
      <h1>
        Diseño que
        <span>conecta</span>
        ideas y personas.
      </h1>

      <p>
        Branding · Identidad Visual · Diseño gráfico
        <br />
        Para marcas que quieran dejar huella.
      </p>

      <RouterLink to="/projects" class="button">
        Ver proyectos →
      </RouterLink>
    </div>

    <div class="hero-right">
      <img :src="Logo" alt="Garlis Studio" />
    </div>
  </section>


<section class="sobre-mi-seccion">
    <div class="sobre-mi-contenedor">
      <div class="contenido-texto">
        <h1 class="titulo-nombre">
          Aitana García Lis
        </h1>

        <p class="descripcion-perfil">
          Diseñadora gráfica en proceso de especialización en diseño y tecnologías creativas.
          Creo en el diseño como una herramienta para conectar personas, ideas y marcas.
          Mi objetivo es crear diseños estratégicos, funcionales y con personalidad.
        </p>

        <div class="contenedor-boton">
          <RouterLink to="/about" class="button">
            Conóceme →
          </RouterLink>
        </div>
      </div>

      <div class="contenido-imagen">
        <div class="marco-foto">
          <img
            :src="fotoperfil"
            alt="Aitana García Lis"
            class="foto-perfil"
          />
        </div>
      </div>
    </div>
  </section>




  <section class="projects-section">
    <div class="projects-header">
      <h2>Proyectos destacados</h2>
    </div>

    <div class="carousel-wrapper">
      <div class="projects-carousel">
        <div class="projects-track">
          <div
            v-for="project in visibleProjects"
            :key="`${project.title}-${project.description}`"
            class="project-slide"
          >
            <ProjectCard
              :title="project.title"
              :description="project.description"
              :image-url="project.imageUrl"
              :to="`/projects/${project.slug}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  
</template>

<style scoped>
.hero {
  background-color: #ded5e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 60px;
  gap: 3rem;
  overflow: hidden;
}

.hero-left {
  max-width: 600px;
  min-width: 0;
}

.hero-left h1 {
  font-size: 6rem;
  font-weight: 400;
  line-height: 0.95;
  color: #b4a8d6;
}

.hero-left span {
  color: #f9f2aa;
}

.hero-left p {
  margin-top: 2rem;
  color: #b4a8d6;
  font-size: 1.1rem;
}

.button {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: #f9f2aa;
  color: #b8abd4;
  text-decoration: none;
  text-align: center;
}

.hero-right img {
  width: 500px;
  max-width: 100%;
  height: auto;
}

.projects-section {
  background-color: #ded5e9;
  padding: 100px 60px;
}

.projects-header h2 {
  color: #988cbe;
  margin: 0;
  font-size: 1.5rem;
}

.carousel-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.projects-carousel {
  overflow: hidden;
  width: min(1200px, 100%);
}

.projects-track {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  align-items: stretch;
}

.project-slide {
  box-sizing: border-box;
  display: flex;
  min-width: 0;
}

.project-slide :deep(.card-link) {
  display: flex;
  width: 100%;
  height: 100%;
}

.project-slide :deep(.card-custom) {
  width: 100%;
  max-width: none;
  height: 100%;
  min-height: 430px;
  border: 0 !important;
  background-color: #f9f2aa;
}

.project-slide :deep(.content-custom) {
  flex: 1;
}

.project-slide :deep(.title-custom),
.project-slide :deep(.description-custom),
.project-slide :deep(.content-custom),
.project-slide :deep(.footer-link) {
  color: #988cbe !important;
}

.project-slide :deep(.image-container) {
  width: 100%;
  aspect-ratio: 4 / 3;
  height: auto;
  background-color: #f9f2aa;
}

.project-slide :deep(.project-image) {
  object-fit: cover;
}

.project-slide :deep(.card-custom:hover .project-image) {
  transform: scale(1.1);
}

.sobre-mi-seccion {
  background-color: #b8abd4;
  padding: 100px 60px;
}

.sobre-mi-contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.contenido-texto {
  flex: 1;
  max-width: 600px;
  min-width: 0;
}

.titulo-nombre {
  font-family: 'Syne', sans-serif;
  font-size: 3.75rem;
  font-weight: 500;
  color: #f9f2aa;
  margin: 0 0 24px 0;
}

.descripcion-perfil {
  font-size: 1.1rem;
  color: #ded5e9;
  line-height: 1.6;
  margin: 0;
}

.contenido-imagen {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.marco-foto {
  width: 360px;
  height: 480px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.foto-perfil {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

@media (max-width: 1180px) {
  .hero,
  .projects-section,
  .sobre-mi-seccion {
    padding: 80px 40px;
  }

  .hero-left h1 {
    font-size: 4.75rem;
  }

  .hero-right img {
    width: 380px;
  }

  .projects-track {
    gap: 2rem;
  }
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    padding: 72px 32px;
  }

  .hero-left {
    max-width: 100%;
  }

  .hero-left h1 {
    font-size: 4rem;
  }

  .hero-right {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .hero-right img {
    width: min(420px, 85vw);
  }

  .sobre-mi-seccion,
  .projects-section {
    padding: 72px 32px;
  }

  .sobre-mi-contenedor {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  .contenido-texto {
    max-width: 100%;
  }

  .contenido-imagen {
    width: 100%;
    justify-content: center;
  }

  .marco-foto {
    width: min(420px, 100%);
    height: auto;
    aspect-ratio: 3 / 4;
  }

  .projects-track {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .hero,
  .sobre-mi-seccion,
  .projects-section {
    padding: 48px 18px;
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    text-align: left;
  }

  .hero-left h1 {
    font-size: 3.25rem;
    line-height: 1;
  }

  .hero-left p,
  .descripcion-perfil {
    font-size: 1rem;
  }

  .hero-left br {
    display: none;
  }

  .button {
    width: auto;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  .hero-right {
    display: none;
  }

  .sobre-mi-contenedor {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .titulo-nombre {
    font-size: 2.85rem;
    line-height: 1;
  }

  .contenido-imagen {
    display: none;
  }

  .projects-header h2 {
    font-size: 1.35rem;
  }

  .projects-track {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-slide :deep(.card-custom) {
    min-height: auto;
  }

  .project-slide :deep(.image-container) {
    aspect-ratio: 4 / 3;
    height: auto;
  }

  .project-slide :deep(.header-custom) {
    padding: 20px 20px 8px 20px !important;
  }

  .project-slide :deep(.content-custom) {
    padding: 0 20px 10px 20px !important;
  }

  .project-slide :deep(.footer-custom) {
    padding: 10px 20px 22px 20px !important;
  }
}

@media (max-width: 390px) {
  .hero-left h1 {
    font-size: 2.8rem;
  }

  .titulo-nombre {
    font-size: 2.4rem;
  }

  .hero-left p,
  .descripcion-perfil {
    font-size: 0.95rem;
  }

  .project-slide :deep(.card-custom) {
    min-height: auto;
  }
}
</style>
