<script setup lang="ts">
import fotoperfil from '@/assets/images/fotoperfil.jpg'
</script>


  <template>
  <main class="about">
<!-- SOBRE MÍ -->
<section class="about-hero">

  <div class="about-text">
    <h1>Aitana García Lis</h1>

    <p>
      Soy una diseñadora gráfica en formación apasionada por transformar
      ideas en experiencias visuales con significado. Me interesa
      especialmente el desarrollo de identidades visuales, el diseño
      editorial y la creación de proyectos que conecten con las personas
      a través de la creatividad y la emoción.
    </p>

    <p>
      Considero el diseño una herramienta capaz de comunicar, inspirar y
      generar impacto. Por eso, en cada proyecto busco equilibrar estética
      y funcionalidad, cuidando cada detalle para construir soluciones
      visuales coherentes, atractivas y efectivas.
    </p>

    <p>
      Actualmente continúo desarrollando mis habilidades y explorando
      nuevas formas de expresión gráfica, siempre con curiosidad,
      dedicación y ganas de aprender.
    </p>
  </div>

  <div class="about-image">
    <img
    :src="fotoperfil"
    alt="Aitana García Lis"
    class="foto-perfil"
  />
  </div>

</section>

<!-- COMPETENCIAS -->
<section class="competencias">

  <h2>Competencias</h2>

  <ul>
    <li>Investigación visual y creación de moodboards</li>
    <li>Diseño de cartelería y comunicación gráfica</li>
    <li>Desarrollo de conceptos creativos</li>
    <li>Maquetación y composición visual</li>
    <li>Gestión de proyectos creativos</li>
    <li>Tipografía y jerarquía visual</li>
    <li>Diseño para redes sociales</li>
    <li>Identidad visual y branding</li>
    <li>Diseño editorial</li>
    <li>Packaging</li>
  </ul>

</section>

<!-- HERRAMIENTAS -->
<section class="herramientas">

  <h2>Herramientas</h2>

  <div class="skills">

     <div class="skill">
      <span>Valenciano</span>
      <progress value="100" max="100"></progress>
    </div>

    <div class="skill">
      <span>Illustrator</span>
      <progress value="100" max="100"></progress>
    </div>

    <div class="skill">
      <span>InDesign</span>
      <progress value="100" max="100"></progress>
    </div>

    <div class="skill">
      <span>Figma</span>
      <progress value="80" max="100"></progress>
    </div>

    <div class="skill">
      <span>Castellano</span>
      <progress value="100" max="100"></progress>
    </div>

    <div class="skill">
      <span>Photoshop</span>
      <progress value="90" max="100"></progress>
    </div>

    <div class="skill">
      <span>After Effects</span>
      <progress value="70" max="100"></progress>
    </div>

    <div class="skill">
      <span>Premiere</span>
      <progress value="80" max="100"></progress>
    </div>


    <div class="skill">
      <span>Inglés</span>
      <progress value="65" max="100"></progress>
    </div>

    <div class="skill">
      <span>Word</span>
      <progress value="100" max="100"></progress>
    </div>

    <div class="skill">
      <span>PowerPoint</span>
      <progress value="100" max="100"></progress>
    </div>

    <div class="skill">
      <span>Excel</span>
      <progress value="100" max="100"></progress>
    </div>

  </div>

</section>

  </main>
</template>



<style scoped>
.about {
  background: #ded5e9;
}

.about-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  padding: 80px 60px;
  align-items: center;
}

.about-text h1 {
  color: #a89acb;
  font-size: 5rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 2rem;
}

.about-text p {
  color: #a89acb;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.about-image img {
  width: 100%;
  border-radius: 40px;
}

.competencias {
  background: #b8abd4;
  text-align: center;
  padding: 60px;
}

.competencias h2 {
  color: #f9f2aa;
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1rem;
}

.competencias ul {
  list-style: none;
  color: white;
  line-height: 2;
  margin: 0;
  padding: 0;
}

.herramientas {
  text-align: center;
  padding: 60px;
}

.herramientas h2 {
  color: #988cbe;
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 2rem;
}

.skills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
}

.skill {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
}

.skill span {
  color: #988cbe;
}

progress {
  width: 100%;
  height: 18px;
  cursor: pointer;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
}


progress::-webkit-progress-bar {
  background-color: #ded5e9;
  border: 2px solid #f9f2aa;
  border-radius: 999px;
}

progress::-webkit-progress-value {
  background-color: #f9f2aa;
  border-radius: 999px;
  transform-origin: left;
}

progress::-moz-progress-bar {
  background-color: #f9f2aa;
  border-radius: 999px;
  transform-origin: left;
}

progress:hover::-webkit-progress-value {
  animation: progress-fill 1.5s ease forwards;
}

progress:hover::-moz-progress-bar {
  animation: progress-fill 0.7s ease forwards;
}

@keyframes progress-fill {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

@media (max-width: 1024px) {
  .about-hero {
    gap: 3rem;
    padding: 72px 40px;
  }

  .about-text h1 {
    font-size: 4rem;
  }

  .competencias,
  .herramientas {
    padding: 56px 40px;
  }

  .skills {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .about-hero {
    grid-template-columns: 1fr;
    padding: 64px 28px;
  }

  .about-image {
    max-width: 480px;
    margin: 0 auto;
  }

  .competencias h2,
  .herramientas h2 {
    font-size: 3rem;
  }

  .skills {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .about-hero,
  .competencias,
  .herramientas {
    padding: 52px 20px;
  }

  .about-text h1 {
    font-size: 3rem;
  }

  .about-text p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .about-image img {
    border-radius: 28px;
  }

  .competencias h2,
  .herramientas h2 {
    font-size: 2.35rem;
  }

  .competencias ul {
    line-height: 1.8;
  }

  .skills {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

</style>
