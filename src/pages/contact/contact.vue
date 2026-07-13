<script setup lang="ts">
const contactEmail = 'garlis.studio@gmail.com'
const formAction = `https://formsubmit.co/${contactEmail}`
</script>

<template>
  <main class="contact-page">
    <section class="contacto">
      <div class="contact-info">
        <h1>Cuéntame tu idea</h1>

        <p>
          Si tienes un proyecto, una colaboración o simplemente quieres hablar
          sobre diseño, escríbeme y te responderé lo antes posible.
        </p>

        <a class="email-link" :href="`mailto:${contactEmail}`">
          {{ contactEmail }}
        </a>
      </div>

      <form class="contact-form" :action="formAction" method="POST">
        <input type="hidden" name="_subject" value="Nuevo mensaje desde garlis.studio">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">

        <div class="form-row">
          <label for="name">
            Nombre
            <input
              id="name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Tu nombre"
              required
            >
          </label>

          <label for="email">
            Correo electrónico
            <input
              id="email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="tu@email.com"
              required
            >
          </label>
        </div>

        <label for="subject">
          Asunto
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Branding, editorial, redes..."
          >
        </label>

        <label for="message">
          Mensaje
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Cuéntame sobre tu proyecto..."
            required
          ></textarea>
        </label>

        <button type="submit">
          Enviar mensaje
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  background-color: #ded5e9;
}

.contacto {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 5rem;
  padding: 90px 60px;
}

.contact-info {
  color: #988cbe;
  min-width: 0;
}

.eyebrow {
  margin: 0 0 1rem;
  color: #f9f2aa;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-info h1 {
  margin: 0 0 2rem;
  color: #a89acb;
  font-size: 4.8rem;
  font-weight: 400;
  line-height: 1;
}

.contact-info p {
  margin: 0 0 2rem;
  color: #988cbe;
  font-size: 1.05rem;
}

.email-link {
  display: inline-flex;
  color: #988cbe;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #f9f2aa;
  overflow-wrap: anywhere;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  color: #988cbe;
  font-size: 0.95rem;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  border: 2px solid #f9f2aa;
  border-radius: 30px;
  background-color: #ded5e9;
  color: #988cbe;
  font: inherit;
  outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

input {
  min-height: 54px;
  padding: 0 1.1rem;
}

textarea {
  min-height: 180px;
  padding: 1rem 1.1rem;
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: rgba(81, 70, 133, 0.48);
}

input:focus,
textarea:focus {
  border-color: #988cbe;
  /* background-color: rgba(255, 255, 255, 0.45); */
  /* box-shadow: 0 0 0 4px rgba(249, 242, 170, 0.45); */
}

button {
  align-self: flex-start;
  min-height: 52px;
  padding: 0 2rem;
  border: 2px solid #f9f2aa;
  border-radius: 999px;
  background-color: transparent;
  color: #988cbe;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

button:hover {
  background-color: #f9f2aa;
  color: #988cbe;
}

@media (max-width: 900px) {
  .contacto {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 70px 28px;
  }

  .contact-info h1 {
    font-size: 3.3rem;
  }
}

@media (max-width: 640px) {
  .contacto {
    padding: 56px 20px;
  }

  .contact-info h1 {
    font-size: 2.75rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  input {
    min-height: 50px;
  }

  button {
    width: 100%;
  }
}

@media (max-width: 390px) {
  .contact-info h1 {
    font-size: 2.4rem;
  }
}
</style>
