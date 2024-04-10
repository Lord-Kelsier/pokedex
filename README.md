# Pokedex | Examedi

Este repositorio consiste en replicar la [Pokedex oficial](https://www.pokemon.com/el/pokedex) como tarea de reclutamiento para [Examedi](https://examedi.cl/).

Comencé utilizando el template de vite: https://github.com/prettier/eslint-plugin-prettier

Luego dockerize la aplicacion para asegurarme que se comporta de la misma forma en todos los dispositivos que la vayan a ejecutar.

Los datos se obtienen a partir de la API https://pokeapi.co/

Esta página se encuentra alojada en AWS Amplify y puedes acceder en el siguiente link: https://main.d39w0ornhhbqfs.amplifyapp.com/

## Ejecución

Para ejecutar esta aplicacion debes tener instalado Docker y ejecutar:

`docker compose up`

La aplicacion estará corriendo en modo desarrollador en http://localhost:5317/

## Herramientas

Ademas de docker, en esta aplicacion se utiliza:

- React con Typescript
- Styled Components para css

## Avances

- Paginacion de 12 elementos por vez
- Mostrar detalle de Pokemon (Parcial). No se encuentran todas estadisticas de la pagina y los estilos no estan completamente logrados
- Deployear en AWS Amplify
- Despues de volver del detalle que la paginacion no se haya alterado (Parcial). La paginacion se conserva pero el scroll vuelve al inicio de la pagina

## No implementado

- Utilizar framework como Next.js
- Sorting
- Boton Sorprendeme
- Find pokemon
- Media queries para adaptar el ancho de la pagina

## Estructura de archivos

Dentro de src/ encontraremos que el proyecto se encuentra dividio en distintos elementos.

- `services`: Contiene custom hooks y funciones específicas para la obtencion de datos de la API
- `shared`: Contiene componentes (styled components) que son utilizados por varias features y contextos de React.
- `LandingPage` y `PokemonInfo`: Son las features, la pokedex y la informacion especifica de un pokemon respectivamente. Cada feature tiene el componente principal y una carpeta `components` con los JSX components y una carpeta `components/styled-poke-components` con los styled components utilizados por la feature
