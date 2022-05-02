# ¿Qué es Ajax?
Las siglas de Ajax responden a Asynchronous JavaScript y XML, o Javascript y XML Asincrono. Ajax es un lenguaje de programación que permite la actualización de secciones específicas de contenido en una página web, sin necesidad de recargar completamente la página.

El término Ajax fue utilizado por primera vez por Jesse James Garret en 2005, en su publicación "Ajax: a New Approach to Web Applications".


## Componentes de Ajax

Ajax es una combinación de los siguientes lenguajes de programación y elementos:

* HTML (o XHTML) y CSS: Base para el diseño de la página.
* DOM y Javascript: Forma de acceder dinámicamente a las partes de la página.
* objeto XMLHttpRequest: Es el que permite la comunicación asíncrona (en segundo plano) con el servidor.
* XML : Formato en el que están los datos que se solicitan al servidor; aunque otros formatos también pueden funcionar, como son HTML, texto plano(txt), json ... etc.
* PHP : En este manual trataremos también cómo mandar datos al servidor. Este los recoge mediante PHP. Una vez enviados pueden guardarse en una base de datos o procesarlos para enviar alguna información.

Como aquí también trabajaremos con PHP sería conveniente para poder seguir los ejemplos que tengamos instalado en el ordenador un servidor local.


## Aplicaciones del Ajax

Con Ajax, las aplicaciones web pueden enviar datos desde un servidor y recuperarlos de forma asíncrona (cargando de fondo), sin interferir con la visualización y el comportamiento de la página existente. Por desacoplamiento de la capa de intercambio de datos de la capa de presentación, Ajax permite a las páginas web, y por extensión a las aplicaciones web, cambiar el contenido de forma dinámica sin necesidad de recargar la página entera. Los datos pueden ser recuperados utilizando el objeto "XMLHttpRequest". 

A pesar del nombre, no se requiere el uso de XML (JSON se utiliza a menudo en la variante AJAJ), y las solicitudes no tiene por qué ser asincrónicas.

Ajax no es una tecnología, sino un grupo de tecnologías. HTML y CSS se pueden utilizar en combinación con esta. JavaScript y el objeto «XMLHttpRequest» proporcionan un método para el intercambio de datos de forma asíncrona entre el navegador y el servidor para evitar cargar la página por completo.

Los siguientes gráficos muestran la forma de trabajar pidiendo datos al servidor de forma sincrona (sin ajax) o asíncrona (con ajax):

1. Forma clásica de trabajar al interactuar con el servidor:
![Imagen](https://aprende-web.net/progra/objetos/modeloAjax1.gif)

2. Forma de trabajar con ajax al interactuar con el servidor:
![Imagen](https://aprende-web.net/progra/objetos/modeloAjax2.gif)