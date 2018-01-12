# Aterrizaje-Lunar-
Juego final del aterrizaje lunar

## Paso 1: diseño de imágenes de fondo.
En primer lugar, he buscado imágenes de libre distribución sobre la luna y el universo y las he modelado con Photoshop para crear el fondo de pantalla. 

También he buscado una imágen de nave y la he recortado para poder usarla en la web.

## Paso 2: codificación del html y css.
El siguiente paso ha consistido en crear tantos html como pantallas accesibles desde un menú desplegable. En ellos, he ocultado y mostrado elementos acordes a las pantallas a las cuales se va accediendo.

Los estilos de dichos html están codificados en dos css, uno, utilizado para dispositivos móviles (en orientación vertical) y otro utilizado para  ordenadores o dispositivos con mayor definición de pantalla. 

En cada html está codificada una media query para identificar, dependiendo de la pantalla del dispositivo, a que hoja de estilos acceder, con lo cual conseguimos un diseño paralelo que se diferencia en el tamaño de los elementos y su posición en pantalla: cabaceras, desplegable, tabla, nave...

Dado lo anterior, tenemos tan solo, en nuestro caso, 7 ficheros html: index, como_jugar, confirmación1, confirmación2, modo_difícil, modo_fácil y sobre_el_juego.

## Paso 3: comprobación de media query.
Para comprobar la funcionalidad del media query, he copiado los archivos y ejecutado los html en un dipositivo móvil (bq Aquaris U lite en mi caso), para comprobar la redimensión de los elementos acorde a la resolución de pantalla.

## Paso 4: paleta de colores.
Los colores del html, los he ido comprobando desde la web [htmlcolordes](http://htmlcolorcodes.com/es/). Los colores que he escogido son los siguientes:

![Color 1](/img/color1.PNG).

![Color 2](/img/color2.PNG).

![Color 3](/img/color3.PNG).

![Color 4](/img/color4.PNG).

También he usado los colores por defecto: red, grey, white.

## Paso 5: crear repositorio GitHub.
He creado el repositorio GitHub con todos los archivos incluidos.

## Paso 6: validar el HTML.
Para 
Una vez establecidos todos los archivos, he validado el html. Para ello, he copiado el enlace del html de GitHub y lo he añadido a [RawGit](https://rawgit.com) para obtener un enlace. Mediante dicho enlace, me he dirigido a la web [validador w3](https://validator.w3.org) y he copiado allí el enlace.

Para validar los css, he introducido sus links de GitHub en RawGit y los enlaces proporcionados los he insertado en la web [validador w3 css](https://jigsaw.w3.org/css-validator/).

## Paso 7: corrección de html y css.
Tras la validación de los html y css:

![Validacion 1](/img/validacion1.PNG).

![Validacion 2](/img/validacion2.PNG).

![Validacion 3](/img/validacion3.PNG).

![Validacion 4](/img/validacion4.PNG).

![Validacion 5](/img/validacion5.PNG).

![Validacion 6](/img/validacion6.PNG).

![Validacion 7](/img/validacion7.PNG).

Las validaciones de css son las siguientes:

![Validacion 8](/img/validacion8.PNG).

![Validacion 9](/img/validacion9.PNG).

## Paso 8: minificación de código.
Para minificar el código, nos dirigimos a la página [willpeavy](https://www.willpeavy.com/minifier/) y pegamos el código de los html y css. A continuación, copiamos el código en nuevos html y css e introduciremos un branch en GitHub (Master Aterrizaje Lunar) donde se incluyen con los códigos minimificados.

## Paso 9: Introducción de javascript.
En este paso, hemos introducido dos ficheros javascript para conseguir el movimiento de la nave, así como los indicadores de velocidad, altura, carburante y el umbral establecido.

## Paso 10: Creación del README.md.
Por último, he creado el presente fichero README en el repositorio con los detalles de los pasos que he seguido para llevar a cabo la tarea. 

## Dirección URL.
El enlace de RawGit a mi web es: https://rawgit.com/Pimpollo21/Aterrizaje-Lunar-/master/index.html
El enlace de RawGit del código minificado es: https://rawgit.com/Pimpollo21/Aterrizaje-Lunar-/Master-Aterrizaje/index.html

