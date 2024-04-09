# Pokedex | Examedi

Este repositorio consiste en replicar la [Pokedex oficial](https://www.pokemon.com/el/pokedex) como tarea de reclutamiento para [Examedi](https://examedi.cl/).

Comencé utilizando el template de vite: https://github.com/prettier/eslint-plugin-prettier

Luego dockerize la aplicacion para asegurarme que se comporta de la misma forma en todos los dispositivos que la vayan a ejecutar.

Para ejecutar esta aplicacion debes tener instalado Docker y ejecutar:

`docker compose up`

La aplicacion estará corriendo en modo desarrollador en http://localhost:5317/

## Herramientas

Ademas de docker, en esta aplicacion se utiliza:

- React con Typescript
- Styled Components para css

## backlog

- [x] Paginacion de 12 elementos por vez
- [ ] Mostrar detalle de Pokemon
- [ ] Deployear en AWS Amplify
- [ ] Despues de volver del detalle que la paginacion no se haya alterado

Mis Extras

- [ ] Sorting
- [ ] Boton Sorprendeme
- [ ] Find pokemon
