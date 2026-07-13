<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo-link" @click="closeMenu">
      <img src="/logogarlisstudio.svg" alt="Garlis Studio">
    </RouterLink>

    <button
      class="menu-toggle"
      type="button"
      :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
      :aria-expanded="isMenuOpen"
      @click="isMenuOpen = !isMenuOpen"
    >
      <X v-if="isMenuOpen" :size="28" aria-hidden="true" />
      <Menu v-else :size="28" aria-hidden="true" />
    </button>

    <nav :class="['menu', { 'menu-open': isMenuOpen }]">
      <RouterLink to="/projects" @click="closeMenu">Proyectos</RouterLink>
      <RouterLink to="/about" @click="closeMenu">Sobre mí</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">Contacto</RouterLink>
    </nav>
  </header>
</template>


<style scoped>

.header {
  background-color: #ded5e9;
  color: #988cbe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  position: relative;
  z-index: 20;
}

.logo-link {
  display: inline-flex;
  width: 60px;
  flex-shrink: 0;
}

.logo-link img {
  width: 100%;
  height: auto;
  display: block;
}

.menu {
  display: flex;
  gap: 30px;
  align-items: center;
}

.menu a {
  color: inherit;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background-color: #f9f2aa;
  color: #988cbe;
  cursor: pointer;
}

@media (max-width: 768px) {
  .header {
    padding: 16px 24px;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: grid;
    gap: 0;
    padding: 12px 24px 24px;
    background-color: #ded5e9;
    border-top: 1px solid rgba(152, 140, 190, 0.25);
    box-shadow: 0 12px 24px rgba(152, 140, 190, 0.16);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .menu-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .menu a {
    padding: 16px 0;
    font-size: 1.1rem;
  }
}

@media (max-width: 390px) {
  .header {
    padding: 14px 20px;
  }

  .logo-link {
    width: 52px;
  }
}
</style>
