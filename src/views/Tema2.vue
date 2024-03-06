<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan de mejora

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Para que todo proyecto u organización evolucione y mejore en el tiempo, se deberán identificar continuamente los aspectos a mejorar y establecer acciones para lograrlo, ya que cada vez existe más competencia, y los productos y servicios son más especializados, y gracias a la tecnología, los clientes tienen mayor acceso al mercado. Este poder de decisión que tienen los clientes los convierte ahora en protagonistas, a diferencia de hace algunos años que eran actores pasivos acogiéndose a lo que el mercado les ofreciera.
        p Ahora 
          strong el cliente, 
          | al tener una oferta tan amplia en el mercado, es quien decide cómo, cuándo y dónde desea sus productos o servicios. El cliente ha adquirido gran poder en la toma de decisiones y esto es un aspecto que las organizaciones deberán tener en cuenta si desean seguir siendo competitivas. Para tal fin, las organizaciones deberán buscar altos estándares de calidad y esto se logra mejorando continuamente sus procesos.
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-img.png', alt='Plan de mejora')  
   
    p.mb-4(data-aos="fade-down-left") Esto daría cumplimiento al principio de mejora continua en donde siempre en alguna fase, periodo, proceso o servicio, se encontrarán oportunidades las que deberán ser gestionadas para estar en continuo mejoramiento.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-acento-contenido.custom-cardBlock.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-bloque.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El 
              strong plan de mejora 
              | es un proceso que se utiliza para alcanzar la calidad total y mejora de las organizaciones de manera progresiva, y obtener resultados eficientes y eficaces. El punto clave del plan de mejora es 
              strong conseguir una relación entre los procesos y el personal generando una sinergia que contribuya al progreso constante.

    p.mb-4(data-aos="fade") Para trabajar a partir de los planes de mejora, es importante reconocer cuáles son los componentes para generar su impacto:

    .row.justify-content-center.bg-gris.mb-5.py-5(data-aos="fade-down")
      .col-md-9
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img.px-md-5(src='@/assets/curso/temas/tema2/tema2-infografia.svg', alt='Componentes')

          div.row.justify-content-center.bg-gris2.py-5.px-4.px-md-1(x="50%" y="2.3%" tooltip="Clic para ver más" numero="1")
            .col-md-2.col-4
              img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico1.svg', alt='Icono decorativo')
            .col-md-9
              h4 Identificación de las necesidades de mejora
              p Posterior a la evaluación del proyecto, se identifican los aspectos a mejorar a partir del cumplimiento de los objetivos. Para esto es importante articular los actores que participaron en el proceso y tener en cuenta, las oportunidades de mejora y efectos para el proyecto.
              p
                strong Por ejemplo, en un proceso centrado en la calidad, la oportunidad de mejora se puede centrar en las falencias en el servicio al cliente y su efecto puede ser impactar en la deserción, disminución del número de clientes y la reducción de las ventas. 

          div.row.justify-content-center.bg-gris2.py-5.px-4.px-md-1(x="91.5%" y="26.6%" tooltip="Clic para ver más" numero="2")
            SlyderA
              .row.justify-content-center
                .col-md-2.col-4.mb-4.mb-md-0
                  img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico2.svg', alt='Icono decorativo')
                .col-md-9
                  h4 Diagnosticar las causas del problema
                  p Un error frecuente es concentrarnos en tratar de solucionar los efectos de un problema en vez de identificar de dónde viene el problema, cuáles son sus causas. Generalmente, un problema trae consigo múltiples causas que deberán ser identificadas y analizadas para su correcta gestión.
                  p 
                    strong Siguiendo en el ejemplo sobre la disminución del cliente, la causa del problema es porque hay mejores ofertas de la competencia, un deficiente servicio al cliente y la inexistencia de programas de fidelización.
              .row.justify-content-center
                .col-md-2.col-4.mb-4.mb-md-0
                  img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico2-2.svg', alt='Icono decorativo')
                .col-md-9
                  h4 Para identificar las causas se puede utilizar: 5w – 2h
                  p.mb-0 <b>What (qué):</b> ¿Qué está pasando? 
                  p.mb-0 <b>When (cuándo):</b> ¿Cuándo se está presentando?
                  p.mb-0 <b>Where (dónde):</b> ¿Dónde se están viendo los problemas?
                  p.mb-0 <b>Who (quién):</b> ¿Quién le están sucediendo?
                  p.mb-0 <b>Why (por qué):</b> ¿Por qué sucede el problema?
                  p.mb-0 <b>How (cómo):</b> ¿Cómo se diferencia el problema a la situación óptima?
                  p.mb-0 <b>How much (cuántos):</b> ¿Cuántos problemas se presentan en el tiempo?, ¿cuánto cuesta?
              .row.justify-content-center
                .col-md-2.col-4.mb-4.mb-md-0
                  img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico2-3.svg', alt='Icono decorativo')
                .col-md-9
                  h4 Lluvia de ideas
                  p Consiste en reunir un grupo de personas conocedoras del tema, en este caso serían las partes interesadas: 
                  ul.lista-ul--color.color-acento-botones
                    li.mb-0
                      i.fas.fa-check
                      | Equipo ejecutor del proyecto.
                    li.mb-0
                      i.fas.fa-check
                      | Líder del proyecto.
                    li.mb-0
                      i.fas.fa-check
                      | Personas externas del proyecto.
                    li.mb-0
                      i.fas.fa-check
                      | Proveedores.
                    li.mb-0
                      i.fas.fa-check
                      | Clientes.  
              .row.justify-content-center
                .col-md-2.col-4.mb-4.mb-md-0
                  img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico2-4.svg', alt='Icono decorativo')
                .col-md-9
                  h4 Diagrama de espina de pescado
                  p Herramienta útil para identificar las causas principales y secundarias de un problema o efecto. Los pasos para su construcción son los siguientes:
                  ul.lista-ul--color.color-acento-botones
                    li.mb-0
                      i.fas.fa-check
                      | Definir claramente el problema.
                    li.mb-0
                      i.fas.fa-check
                      | Diseñar una flecha horizontal apuntando hacia la derecha y escribir el problema dentro del recuadro en el extremo derecho de la flecha.
                    li.mb-0
                      i.fas.fa-check
                      | Identificar las causas y ubicarlas en las flechas secundarias que apunten a la flecha principal (entre ellas formarán una estructura similar a la espina de un pescado).
                    li.mb-0
                      i.fas.fa-check
                      | Para la identificación de causas, se podrá emplear otras herramientas como la lluvia de ideas, para recopilar una cantidad más amplia de causas.
              .row.justify-content-center
                .col-md-11
                  img(src='@/assets/curso/temas/tema2/tema2-ico2-5.svg', alt='Infografia')


          div.row.justify-content-center.bg-gris2.py-5.px-4.px-md-1(x="90.8%" y="74.5%" tooltip="Clic para ver más" numero="3")
            .col-md-2.col-4
              img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico3.svg', alt='Icono decorativo')
            .col-md-9
              h4 Definir objetivos
              p Después de tener claridad sobre las acciones de mejora y sus respectivas causas se procede a definir los objetivos y al definirlos se deberá tener en cuenta las siguientes características:
              ul.lista-ul--color.color-acento-botones
                li.mb-0
                  i.fas.fa-check
                  | Medibles y verificados en el tiempo.
                li.mb-0
                  i.fas.fa-check
                  | Retadores y que inviten a la mejora y evolución del proceso.
                li.mb-0
                  i.fas.fa-check
                  | Alcanzables en el tiempo.
                li.mb-0
                  i.fas.fa-check
                  | Rentables a partir de los recursos disponibles.
                li.mb-0
                  i.fas.fa-check
                  | Concretos y concisos en su redacción.        


          div.row.justify-content-center.bg-gris2.py-5.px-4.px-md-1(x="50%" y="97.6%" tooltip="Clic para ver más" numero="4")
            .col-md-2.col-4
              img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico4.svg', alt='Icono decorativo')
            .col-md-9
              h4 Seleccionar las acciones de mejora
              p Se identifican las posibles alternativas que brinden soluciones en mejora al problema identificado. Se deberá contemplar el costo-beneficio para la organización y la decisión y compromiso de las diferentes partes interesadas.
              p 
                strong Por ejemplo: reducir los efectos, controlar las causas y establecer el costo-beneficio.

          div.row.justify-content-center.bg-gris2.py-5.px-4.px-md-1(x="9.3%" y="74.5%" tooltip="Clic para ver más" numero="5")
            .col-md-2.col-4
              img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico5.svg', alt='Icono decorativo')
            .col-md-9
              h4 Establecer un plan de acción 
              p Se documenta el plan de acción incluyendo los tiempos, responsables, responsabilidades y recursos destinados para el cumplimiento de los objetivos de mejora.

          div.row.justify-content-center.bg-gris2.py-5.px-4.px-md-1(x="8.5%" y="26.6%" tooltip="Clic para ver más" numero="6")
            .col-md-2.col-4
              img.px-md-2(src='@/assets/curso/temas/tema2/tema2-ico6.svg', alt='Icono decorativo')
            .col-md-9
              h4 Controlar el plan de trabajo
              p Se debe controlar el cumplimiento de las actividades estipuladas conforme a los recursos y tiempo establecido.     

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZhwkNEQWqx8" title="Componentes de un plan de mejora" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Componentes de un plan de mejora

    p.mb-4(data-aos="fade-down-left") Todos los procesos son susceptibles de mejora por más funcionales y exitosos que sean; y para tal fin existen varios métodos en los que el equipo de trabajo identifica los aspectos a mejorar. Uno de los métodos más populares para esta tarea, es la matriz DOFA, que permite establecer fortalezas, debilidades, amenazas y oportunidades. Para entender un poco más, se definirá, explicará su metodología y se realizará ejercicio práctico. 

    p.mb-4(data-aos="fade-down-left") La matriz DOFA (Debilidades, Oportunidades, Fortalezas y Amenazas), permite hacer un diagnóstico integral del proyecto desde los aspectos internos (fortalezas y debilidades) y los aspectos externos (oportunidades y amenazas). A continuación, se definen cada uno de los aspectos que integran la matriz DOFA.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-4.mb-3.mb-md-0
        .content  
          .content-overlay
          .btn-numero.btn-bottom-right
            h3 F
          img(src="@/assets/curso/temas/tema2/tema-2-img1.svg", alt="Fortalezas") 
          .tarjeta-details.fadeIn-top.p-1
            h3 Fortalezas
            p Constituyen sus mejores y principales elementos, que les permite cumplir con sus objetivos.
            p Ejemplos: cuáles son mis ventajas, qué hacemos bien.
      .col-md-4.mb-3.mb-md-0
        .content  
          .content-overlay
          .btn-numero.btn-bottom-left
            h3 D
          img(src="@/assets/curso/temas/tema2/tema-2-img2.svg", alt="Fortalezas") 
          .tarjeta-details.fadeIn-top.p-1
            h3.text-right Debilidades
            p Son los aspectos negativos de la organización-proyecto que, si no se superan, podrán afectar el desarrollo del mismo.
            p Ejemplos: qué podría ser mejorado, qué se está haciendo mal, qué podría ser evitado. 
    
    .row.justify-content-center(data-aos="fade-down")  
      .col-md-4.mb-3.mb-md-0
        .content  
          .content-overlay
          .btn-numero.btn-top-right
            h3 A
          img(src="@/assets/curso/temas/tema2/tema-2-img3.svg", alt="Fortalezas") 
          .tarjeta-details.fadeIn-top.p-1
            h3 Amenazas
            p Factores sobre los cuales no se puede incidir, pero que pueden afectar el funcionamiento del proyecto, dificultando o impidiendo su cumplimiento. 
            p Ejemplo: obstáculos, competencia, cambios continuos en la dinámica del sector, cambios tecnológicos, impacto de la legislación, efectos ambientales que puedan favorecer la competencia, demanda del mercado, publicidad negativa, vulnerabilidad ante grandes competidores.
      .col-md-4.mb-3.mb-md-0
        .content  
          .content-overlay
          .btn-numero.btn-top-left
            h3 O
          img(src="@/assets/curso/temas/tema2/tema-2-img4.svg", alt="Fortalezas") 
          .tarjeta-details.fadeIn-top.p-1
            h3.text-right Oportunidades
            p Factores del entorno que pueden favorecer el cumplimiento del proyecto.
            p Ejemplo: buenas oportunidades de cambio, tendencias interesantes, cambios en políticas relacionadas con el sector, cambios en estilos de vida y patrones sociales, desarrollo de nuevos productos o servicios, mejores acuerdos con los proveedores.


</template>

<script>
export default {
  name: 'Tema2',
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
