<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, el éxito de un proyecto deportivo está estrechamente vinculado a la implementación de mecanismos sólidos de seguimiento, control, evaluación y mejora. Durante este componente, se exploraron elementos fundamentales para lograr un seguimiento y control eficiente de proyectos en el sector deportivo. Se abordaron temas esenciales, como el control de actividades, la gestión de costos y riesgos, el aseguramiento de calidad y la generación de informes. La evaluación del proyecto y un plan de mejora se destacan como elementos clave para optimizar resultados y alcanzar los objetivos en la gestión deportiva. Un enfoque proactivo en la administración y el uso de herramientas adecuadas son factores fundamentales para fomentar la excelencia y el crecimiento continuo en el ámbito deportivo. A continuación, se presenta un mapa conceptual que resume de manera visual estos aspectos:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
