<template>
  <footer class="footer">
    <div class="redes">
      <a href="https://www.behance.net/aitanagarcialis" target="_blank" rel="noopener noreferrer">
        Behance
      </a>

      <a href="https://www.instagram.com/garlis.studio/" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>

      <a
        href="mailto:garlis.studio@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Correo
      </a>
    </div>

    <p class="copyright"> © 2026 garlis.studio </p>

  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 20px 60px;
  background-color: #ded5e9;
}

.redes {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 1rem;
  color: #988cbe;
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding-top: 1rem;
  color: #988cbe;
  text-align: center;
}

@media (max-width: 640px) {
  .footer {
    padding: 24px 20px;
  }

  .redes {
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
  }
}
</style>
