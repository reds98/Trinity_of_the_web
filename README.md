# Trinity_of_the_web


## Tabla de Contenidos
* [Informacion General](#informacion-general)
* [Cursos Recomendados](#cursos-recomendados)
* [Herramientas](#herramientas-necesarias-y-recomendadas)
* [HTML](#setup)
  * [Template de todo Documento HTML](#template-de-todo-documento-html)
  * [Etiqueta](#etiqueta)
  * [Etiquetas Basicas](#etiquetas-basicas)
    * [Comentarios](#comentarios)
    * [Titulos](#titulos)
    * [Parrafos](#parrafos)
  * [Listas](#listas)
    * [Listas ordenadas](#listas-ordenadas)
    * [Listas no ordenadas](#listas-no-ordenadas)

## Informacion General
Este repositorio es mi propia colección de información de HTML,CSS y Javascript con tres simples propósitos:
* Compartirlo con la comunidad
* Tener  una referencia funcional  y  en español
* Aprender sobre estas tres tecnologias

## Cursos Recomendados
La información presente  ha sido recolectada de múltiples sitios pero aun así hay ciertos cursos o tutoriales que han inspirado mayoritariamente este  trabajo por lo que me gustaría dar una mención antes de iniciar.


* [MDN](https://developer.mozilla.org/es/)
* [Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)

## Herramientas Necesarias y Recomendadas

Las herramientas para poder desarrollar en angular son las siguientes:
 * [Visual Studio Code](https://code.visualstudio.com/)


## HTML
HTML es un lenguaje de marcado para la elaboracion  de paginas web  el trabajo de  HTML en una pagina web es decir organizar y darle formato a los elementos, en palabras mas simples es es organizar todos los elementos que conforman las paginas web

##  Template de todo Documento HTML

La mayoria de documentos html tiene que seguir el siguiente formato:

```html
<!DOCTYPE html>
<html lang="en">
<head>    
    <!-- La metada va aqui -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- El contenido ira aqui  -->
</body>
</html>

```


## Etiqueta

Los documentos html estan conformados por etiquetas como la siguiente:

```html

<h1></h1>
```
Hay etiquetas que se conocen como block level  elemets que significa que cada uno de ellos tiene su propia linea un ejemplo es `<h1>` que es la etiqueta de titulo y tambien hay otros elementos conocidos como inline level elements que pueden compartir una linea con mas elementos, como es el caso de los la etiqueta de parrafo `<p>`

## Etiquetas Basicas

#### Comentarios
```html
  <!-- Esto es un comentario  -->
```
### Titulos
Hay seis diferentes tipos de titulos en HTML los cuales son los siguientes:
 * ```html
 <h1> Titulo 1</h1>
 ```
 <h1> Titulo 1</h1>
 * ```html
 <h2> Titulo 2</h2>
 ```
 <h2> Titulo 2</h2>
 * ```html
 <h3> Titulo 3</h3>
 ```
  <h3> Titulo 3</h3>
 * ```html
 <h4> Titulo 4</h4>
 ```
 <h4> Titulo 4</h4>
 * ```html
 <h5> Titulo 5</h5>
 ```
 <h5> Titulo 5</h5>
 * ```html
 <h6> Titulo 6</h6>
 ```
 <h6> Titulo 6</h6>

En donde h1 seria el titulo mas importante y el h6 el menos importante de todos, como se puede observar previamente cada uno tiene diferente  tamaño.

### Parrafos
Este elemento tambien es un block level element que  sirve para poner  parrafos y poder separar un parrafo de otros parafos o de los demas elementos

```html
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui lorem, suscipit ut pulvinar id, fringilla ac sapien. Aliquam posuere dapibus cursus. Nulla facilisi. Donec pulvinar massa sem, at suscipit est sagittis vel. In vehicula lectus vel purus venenatis pretium. Vestibulum ipsum erat, hendrerit ac odio at, volutpat consectetur nisl. Fusce vestibulum augue nec nulla rutrum vestibulum. Aliquam nisl justo, finibus sed venenatis sed, lobortis eget nisl. Sed et mattis nisl. Pellentesque id aliquet dui. Quisque nec sapien purus. Etiam sagittis nunc in turpis ultricies malesuada. Suspendisse nec posuere erat. Integer at eros velit. Sed ornare posuere volutpat. </p>
```
**Resultado del Codigo anterior:**
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui lorem, suscipit ut pulvinar id, fringilla ac sapien. Aliquam posuere dapibus cursus. Nulla facilisi. Donec pulvinar massa sem, at suscipit est sagittis vel. In vehicula lectus vel purus venenatis pretium. Vestibulum ipsum erat, hendrerit ac odio at, volutpat consectetur nisl. Fusce vestibulum augue nec nulla rutrum vestibulum. Aliquam nisl justo, finibus sed venenatis sed, lobortis eget nisl. Sed et mattis nisl. Pellentesque id aliquet dui. Quisque nec sapien purus. Etiam sagittis nunc in turpis ultricies malesuada. Suspendisse nec posuere erat. Integer at eros velit. Sed ornare posuere volutpat. </p>

## Listas

### Listas ordenadas
 Las listas ordenas son para crear listas de este tipo:
 1. Item 1
 1. Item 2
 1. Item 3
 1. Item 4
 1. Item 5

El Codigo para hacer algo similar a lo anterior es el siguiente:
 ```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ol>
 ```
En donde la etiqueta `<ol>` es  para indicar que haremos una lista y la etiqueta `<li> ` es para agregar un elemento a la lista

### Listas no ordenadas
 Las listas no ordenas son para crear listas de este tipo:
 * Item
 * Item
 * Item

El Codigo para hacer algo similar a lo anterior es el siguiente:
 ```html
 <ul>
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
 </ul>
 ```
En donde la etiqueta `<ul>` es  para indicar que haremos una lista no ordenada y la etiqueta `<li> ` es para agregar un elemento a la lista


#### Nota

Cabe recalcar que uno puede tener una lista dentro de otra lista algo asi:

<ul>
  <li>Item 1</li>
  <li> Item of a kind:
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ol>
  </li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>

```html

<ul>
  <li>Item 1</li>
  <li> Item of a kind:
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ol>
  </li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>

```
