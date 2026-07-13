<script setup lang="ts">
import { RouterLink } from 'vue-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface Props {
  title?: string
  description?: string
  imageUrl?: string
  footerText?: string
  to?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Nuevo Proyecto Creativo',
  description: 'Una visión detallada de nuestra última iniciativa de diseño y desarrollo web.',
  imageUrl: '',
  footerText: 'Ver más detalles',
  to: '',
})
</script>

<template>
  <RouterLink v-if="to" :to="to" class="card-link">
    <Card class="card-custom">
      <div v-if="imageUrl" class="image-container">
        <img :src="imageUrl" :alt="title" class="project-image" />
      </div>

      <CardHeader class="header-custom">
        <CardTitle class="title-custom">{{ title }}</CardTitle>
        <CardDescription class="description-custom">{{ description }}</CardDescription>
      </CardHeader>

      <CardContent class="content-custom">
        <slot>
          <p>Contenido del proyecto</p>
        </slot>
      </CardContent>

      <CardFooter v-if="$slots.footer || footerText" class="footer-custom">
        <slot name="footer">
          <span class="footer-link">{{ footerText }} &rarr;</span>
        </slot>
      </CardFooter>
    </Card>
  </RouterLink>

  <Card v-else class="card-custom">
    <div v-if="imageUrl" class="image-container">
      <img :src="imageUrl" :alt="title" class="project-image" />
    </div>

    <CardHeader class="header-custom">
      <CardTitle class="title-custom">{{ title }}</CardTitle>
      <CardDescription class="description-custom">{{ description }}</CardDescription>
    </CardHeader>

    <CardContent class="content-custom">
      <slot>
        <p>Contenido del proyecto</p>
      </slot>
    </CardContent>

    <CardFooter v-if="$slots.footer || footerText" class="footer-custom">
      <slot name="footer">
        <span class="footer-link">{{ footerText }} &rarr;</span>
      </slot>
    </CardFooter>
  </Card>
</template>

<style scoped>
.card-link {
  display: flex;
  color: inherit;
  text-decoration: none;
}

.card-custom {
  overflow: hidden !important; /* Fuerza a recortar las esquinas de la foto */
  border-radius: 25px !important; 
  width: 100%;
  max-width: none;
  border: 0 !important;
  background-color: #ded5e9;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Reset por si acaso: elimina paddings heredados que rompen la foto */
  padding: 0 !important; 
}

.card-custom:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Contenedor de la foto al borde absoluto */
.image-container {
  width: 100%;
  height: 224px;
  overflow: hidden;
  
  /* Forzamos que se acople perfectamente arriba sin importar Shadcn */
  margin-top: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.card-custom:hover .project-image {
  transform: scale(1.05);
}

/* Espaciados internos consistentes para la información de abajo */
.header-custom {
  padding: 24px 24px 8px 24px !important;
}

.title-custom {
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  color: #988cbe;
  letter-spacing: -0.025em;
}

.description-custom {
  margin-top: 8px;
  font-size: 0.875rem !important;
  color: #988cbe !important;
  line-height: 1.5;
}

.content-custom {
  padding: 0 24px 12px 24px !important;
  font-size: 0.875rem;
  color: #988cbe;
  line-height: 1.5;
}

.footer-custom {
  padding: 12px 24px 24px 24px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #988cbe;
  cursor: pointer;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #988cbe;
}

.footer-icon {
  width: 20px;
  height: 20px;
  color: #988cbe;
}
</style>
