<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mecanismos de control y evaluación del proyecto

    .row.justify-content-center
      .col-md-8.col-lg-9.mb-4(data-aos="fade-right")
        p En los proyectos son necesarios los mecanismos que permitan su control y evaluación, pues controlar un proyecto consiste en medir el avance real y compararlo periódicamente con el avance previsto en el plan. La fase de planeación es de gran importancia porque 
          strong brinda una ruta y direcciona el proyecto. 
          | Sin embargo, no se puede pretender que el plan se cumpla a cabalidad sin establecer algún tipo de control sobre este, por lo anterior, realizar un proyecto sin un control, será exponerse a una constante incertidumbre, sin saber si se está ejecutando acorde a lo esperado, por debajo de lo esperado o incluso más rápido a lo esperado. 
      .col-md-4.col-lg-3.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img-1.png', alt='Mecanismos de control y evaluación del proyecto')

      
    p.mb-4(data-aos="fade") El control abarca no solo el cumplimiento del cronograma en el tiempo, sino también con los recursos dispuestos para su ejecución. Por ello, el control se considera un proceso que comprende tres acciones principales:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-3.col-8.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/linea1-ico1.svg', alt='')
            .col-md-8
              h5 Medir el progreso hacia el objetivo preestablecido.
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              h5 Evaluar lo que se requiere para alcanzar los objetivos.
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/temas/tema1/linea1-ico2.svg', alt='')
          .row.justify-content-center.align-items-center
            .col-md-3.col-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/linea1-ico3.svg', alt='')
            .col-md-8
              h5 Aplicar acciones correctivas para alcanzar o superar lo proyectado.   
    
    p.mb-4(data-aos="fade")  Son muchas las situaciones que pueden acontecer durante la ejecución del proyecto que impidan o faciliten el cumplimiento del plan, por lo que el control cobra especial importancia para asegurarse de que todo marche según lo estipulado; es decir, #[strong medir el avance real y compararlo con el avance previsto.] Un insumo fundamental para el control del proyecto será el #[strong cronograma de actividades,] en donde se debe tener certeza sobre:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-3.col-8.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/linea2-ico1.svg', alt='')
            .col-md-8
              p ¿Cuándo se inician las actividades?
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              p ¿Cómo se están desarrollando?
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/temas/tema1/linea2-ico2.svg', alt='')
          .row.justify-content-center.align-items-center
            .col-md-3.col-8.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/linea2-ico3.svg', alt='')
            .col-md-8
              p ¿Cuál es la fecha de finalización de las actividades?  

    
    p(data-aos="fade") Otro aspecto a considerar será la #[strong periodicidad del control de un proyecto,] la que dependerá de la duración, complejidad y alcance, entre otros. Esta periodicidad podrá ser diaria, semanal, mensual, bimestral, trimestral entre otras frecuencias. 
    p.mb-4(data-aos="fade") A continuación, se presentan algunos ejemplos de periodicidad del control en diferentes tipos de proyectos, aunque cabe aclarar que esta la define cada organización según las necesidades del control que se vaya a realizar. 


    .row.mb-4
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-flip.color-acento-botones.text-center
          .tarjeta-flip__contenedor.text-white
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/temas/tema1/tarj1-a.png', alt='Proyectos de obra civil.')
              h4.p-3 Proyectos de obra civil.
            .tarjeta-flip__contenido.bg-tarjeta-flip
              img.mb-3(src='@/assets/curso/temas/tema1/tarj1-b.png', alt='Control sobre avances de obra.')
              h4.p-3 Control sobre avances de obra. 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-flip.color-acento-botones.text-center
          .tarjeta-flip__contenedor.text-white
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/temas/tema1/tarj2-a.png', alt='Proceso de gestión del talento humano de una organización.')
              h4.p-3 Proceso de gestión del talento humano de una organización.
            .tarjeta-flip__contenido.bg-tarjeta-flip
              img.mb-3(src='@/assets/curso/temas/tema1/tarj2-b.png', alt='Control de actividades ejecutadas vs. las programadas del mes.')
              h4.p-3 Control de actividades ejecutadas vs. las programadas del mes.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-flip.color-acento-botones.text-center
          .tarjeta-flip__contenedor.text-white
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/temas/tema1/tarj3-a.png', alt='Proceso operativo de un club deportivo.')
              h4.p-3 Proceso operativo de un club deportivo.
            .tarjeta-flip__contenido.bg-tarjeta-flip
              img.mb-3(src='@/assets/curso/temas/tema1/tarj3-b.png', alt='Desarrollo de eventos, actividades programadas para el trimestre.')
              h4.p-3 Desarrollo de eventos, actividades programadas para el trimestre.
      
    p(data-aos="fade") En el control del proyecto es factible identificar posibles desviaciones del plan en materia de recursos o tiempo. Un error frecuente es pretender que las desviaciones del proyecto se solucionen solas, ya que en el momento de detectar desviaciones en la ejecución del proyecto respecto a lo planeado se deberán establecer acciones correctivas, que consisten en identificar cuál es la mejor alternativa en materia de costo beneficio para encaminar nuevamente las actividades del proyecto al cumplimiento de los objetivos. 




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
