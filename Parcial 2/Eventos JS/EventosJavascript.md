# Eventos JavaScript
En Javascript existe un concepto llamado *evento*, que no es más que una notificación de que alguna característica interesante acaba de ocurrir. Dichas características pueden ser de múltiples tipos y muy variadas: desde un click de ratón hasta la pulsación de una tecla de teclado o la reproducción de un audio o video, entre muchas otras.

Como desarrolladores, nuestro objetivo es preparar el código para que cuando ocurra un evento con ciertas características, se ejecute un código asociado. Cada una de estas opciones se puede utilizar para gestionar eventos en Javascript de forma equivalente, pero cada forma tiene sus ventajas y sus desventajas. Veamos detalladamente sus características.


## Propagación

El principio de propagación es simple.

Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.

Para entender la forma en que se propagan los eventos atenderemos al siguiente código:

``` 
<div id="container">
  <div id="dataList">
    <div id="clickedData"></div>
  </div>
  <button id="dataSender">Add new data</button>
</div>
``` 

que presentará la siguiente estructura:

![Imagen](https://miro.medium.com/max/324/1*OcvP-2Vf5LEnXtqDQi0jJA.png)

Cuando trabajamos con eventos, es posible añadir **Event Listeners** a cada uno de estos elementos mediante Javascript gracias a que todos ellos implementan la interfaz *EventTarget* . Para ello, basta con seleccionar el elemento (por ejemplo mediante *querySelector* ) y a continuación emplear sobre dicho elemento el método *addEventListener* (type, callback, options) para añadir el listener:

* type representa el nombre del evento que queremos escuchar.
* callback la función que será invocada cuando se reciba el evento.
* options es un objeto para modificar el comportamiento por defecto del listener.


## Captura

Hay otra fase en el procesamiento de eventos llamada “captura”. Es raro usarla en código real, pero a veces puede ser útil.

El estándar de eventos del DOM describe 3 fases de la propagación de eventos:

1. Fase de captura – el evento desciende al elemento.
2. Fase de objetivo – el evento alcanza al elemento.
3. Fase de propagación – el evento se propaga hacia arriba del elemento.

Antes solo hablamos de la propagación porque la fase de captura es raramente usada. Normalmente es invisible a nosotros.

Los manejadores agregados usando la propiedad *onEvent* ó usando atributos HTML ó *addEventListener(event, handler)* con dos argumentos no ejecutarán la fase de captura, únicamente ejecutarán la 2da y 3ra fase.

Para atrapar un evento en la fase de captura, necesitamos preparar la opción capture como true en el manejador:

``` 
elem.addEventListener(..., {capture: true})
// o, solo "true" es una forma más corta de {capture: true}
elem.addEventListener(..., true)
```

Hay dos posibles valores para la opción capture:

1. Si es false (por defecto), entonces el manejador es preparado para la fase de propagación.
2. Si es true, entonces el manejador es preparado para la fase de captura.

Es de notar que mientras formalmente hay 3 fases, la 2da fase (“la fase de objetivo”: el evento alcanzó el elemento) no es manejada de forma separada; los manejadores en ambas fases, la de captura y propagación, se disparan en esa fase.