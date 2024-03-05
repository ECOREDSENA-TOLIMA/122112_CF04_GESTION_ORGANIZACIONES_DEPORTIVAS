<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") Estimado aprendiz, a través del siguiente video podrá conocer los aspectos relevantes que tratará este componente:
    figure
      .video(data-aos="fade-down")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vA91wuz8T9Q" title="Mecanismos de seguimiento, control, evaluación y mejora de un proyecto deportivo: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Mecanismos de seguimiento, control, evaluación y mejora de un proyecto deportivo: introducción

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
