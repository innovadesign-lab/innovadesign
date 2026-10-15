---
name: Innovadesign
description: Holding negro, futurista y limpio. Un color por vertical, modo oscuro por defecto.
colors:
  night: "#000000"
  carbon: "#171A20"
  graphite: "#393C41"
  pewter: "#5C5E62"
  silver: "#8E8E8E"
  ash: "#F4F4F4"
  hairline-dark: "#22262C"
  hairline: "#EEEEEE"
  white: "#FFFFFF"
  signal-orange: "#FC4400"
  sila-blue: "#102CE8"
  participacion-blue: "#0050F8"
  on-accent: "#FFFFFF"
typography:
  display:
    fontFamily: "Inter, -apple-system, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "Inter, -apple-system, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, -apple-system, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, -apple-system, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  none: "0px"
  xs: "4px"
  md: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.carbon}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "10px 24px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.ash}"
    textColor: "{colors.carbon}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "10px 24px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "10px 24px"
    height: "40px"
  button-mobility:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "10px 24px"
    height: "40px"
  button-social:
    backgroundColor: "{colors.sila-blue}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "10px 24px"
    height: "40px"
  button-government:
    backgroundColor: "{colors.white}"
    textColor: "{colors.carbon}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "10px 24px"
    height: "40px"
---

# Design System: Innovadesign

## Overview

**Creative North Star: "El showroom negro"**

Innovadesign es un holding, y el sitio se comporta como un showroom: negro, quieto, una idea por pantalla. Lo futurista no está en neones ni en tipografía gruesa. Está en la resta. El lienzo por defecto es negro puro, la fotografía va a sangre cuando existe, y la interfaz se limita a una frase, una marca y como máximo dos acciones. Tesla es la referencia de disciplina (radio de 4 px, dos pesos, cero sombras, vidrio en la navegación), invertida: aquí la noche es el modo principal y el blanco es el modo claro.

El negro es la marca del holding. El color cromático no decora la casa: nombra una vertical y solo vive dentro de ella. Movilidad, incluidos los vehículos, habla en el naranja de SubVen. Sila y participación ciudadana tienen cada una el azul de su marca. Voluntariado y lo gubernamental no tienen pigmento: su acento es el blanco.

El modo claro no es un gris invertido. Es el mismo showroom con el lienzo en blanco y la tinta en carbón. Cambian las superficies. No cambia la escasez.

**Key Characteristics:**

- Negro puro como modo por defecto; blanco puro como modo claro.
- Un solo acento de vertical por pantalla. El holding se queda en blanco y negro.
- Dos pesos tipográficos, 400 y 500. Tracking sin tocar.
- Controles con radio de 4 px. Sin píldoras.
- Sin sombras. La profundidad es fotografía, capa y vidrio esmerilado.
- Transiciones de color en 0.33 s. Sin rebotes ni escalas.

## Colors

La paleta es el negro de Tesla más el color medido en cada logo. Esos colores no se mezclan en la misma pieza.

### Primary

- **Noche** (`colors.night`): fondo de página en el modo oscuro, que es el modo por defecto. Negro puro, no carbón tibio.
- **Blanco** (`colors.white`): texto sobre la noche, fondo del modo claro, relleno del botón del holding y acento de la vertical gubernamental.

### Secondary

- **Naranja señal** (`colors.signal-orange`): movilidad. Es el naranja del logo de SubVen. Cubre cobro, telemetría, operación del transporte público y los diseños de vehículos. No se usa fuera de esa vertical.

### Tertiary

- **Azul Sila** (`colors.sila-blue`): salud mental y bienestar. Es el azul del logo de Sila. No es el botón del holding.
- **Azul participación** (`colors.participacion-blue`): participación ciudadana. Es el azul de su propia marca, más claro que el de Sila.
- Voluntariado usa el trazo blanco de su marca. No tiene un tercer azul.

### Neutral

- **Carbón** (`colors.carbon`): superficie elevada sobre la noche, y tinta principal del modo claro. Es el gris-10 de Tesla, con un leve sesgo azul. Nunca se sustituye por negro puro en el texto del modo claro.
- **Grafito** (`colors.graphite`): texto de párrafo en modo claro y texto del botón secundario cuando el fondo es blanco.
- **Peltre** (`colors.pewter`): texto terciario, cargos del equipo, enlaces menores.
- **Plata** (`colors.silver`): placeholders y estados deshabilitados.
- **Ceniza** (`colors.ash`): superficie alterna del modo claro, casi indistinguible del blanco. También el hover del botón blanco.
- **Filete noche** (`colors.hairline-dark`): división de 1 px sobre negro.
- **Filete** (`colors.hairline`): división de 1 px sobre blanco. Se usa poco; el espacio separa antes que la línea.
- **Sobre acento** (`colors.on-accent`): texto blanco encima del naranja y del azul.

### Modo claro

El modo claro usa `colors.white` como lienzo, `colors.ash` como banda alterna, `colors.carbon` como tinta y `colors.graphite` como párrafo. El botón principal del holding pasa a relleno carbón con texto blanco. El naranja y el azul no se aclaran ni se apagan.

### Named Rules

**The One Voice Rule.** En una pantalla vive un solo acento de vertical. SubVen no se sienta junto a Sila. El inicio del holding puede listar las verticales, pero cada pieza lleva solo su color.

**The Scarcity Rule.** El acento aparece en la marca, en el botón de esa vertical o en un filete de 2 px. No pinta el fondo de una sección.

**The White Sector Rule.** La consultoría gubernamental es blanca sobre el sitio negro. En modo claro ese acento se invierte a carbón, porque el blanco sobre blanco desaparece. Sigue sin ser un tercer pigmento.

## Typography

**Display Font:** Inter (con -apple-system, Arial, sans-serif)
**Body Font:** Inter (con -apple-system, Arial, sans-serif)
**Label/Mono Font:** la misma Inter. No hay mono de marca.

**Character:** Una sola grotesca neutra, en el lugar de Universal Sans, que es la fuente de Tesla y no se puede licenciar aquí. Display y texto son la misma familia. La voz es plana, segura y sin adorno. Archivo estirado y Raleway quedan fuera de este mundo: pertenecen al sitio de estudio anterior.

### Hierarchy

- **Display** (500, 40 px, line-height 1.2): título de cada banda a pantalla completa. En móvil baja a 28 px. Sobre la noche va en blanco.
- **Headline** (500, 22 px, line-height 1.2): la frase corta debajo del título, o el nombre de una vertical cuando no es el héroe.
- **Title** (500, 17 px, line-height 1.18): nombre de persona, nombre de producto dentro de una lista.
- **Body** (400, 14 px, line-height 1.43): párrafos. Medida máxima 65 ch.
- **Label** (500, 14 px, line-height 1.2): navegación, botones y el rótulo pequeño encima de una vertical ("Conoce SubVen"). Sin mayúsculas forzadas.

### Named Rules

**The Two Weights Rule.** Solo existen 400 y 500. Ni 300, ni 700, ni itálica.

**The Untouched Tracking Rule.** El interletrado se queda en normal en todos los tamaños. No se aprieta para verse más técnico.

## Layout

La unidad base es 8 px. La página del holding es una secuencia de bandas a altura de ventana: una idea, alineada al inicio de la lectura en desktop y centrada solo cuando la banda es un héroe fotográfico. El contenido de texto vive en una columna de hasta 72 rem. Las verticales del inicio se listan en una sola columna ancha, no en un mosaico de tarjetas competidoras.

En desktop las dos acciones de una banda van lado a lado. Debajo de 768 px se apilan y el título de héroe pasa a 28 px. La navegación horizontal (Quiénes somos, verticales, noticias, contacto) se vuelve un panel a pantalla completa. El equipo son dos nombres en fila; en móvil se apilan.

Noticias existe en la navegación y en la página, y hoy no tiene notas. En la página el vacío es un archivo en blanco y negro, no un esqueleto de artículos falsos. En el inicio sigue siendo una sola línea.

### Named Rules

**The One Message Rule.** Cada banda mayor dice una sola cosa. Si hacen falta dos colores para explicarla, la banda está mal partida.

## Elevation & Depth

No hay sombras. En reposo todo es plano. La noche y el blanco ya separan las capas. Cuando la navegación se despega del héroe, usa vidrio: negro al 72 % en el modo oscuro, blanco al 75 % en el modo claro, con un desenfoque corto. Los modales oscurecen con un velo gris medio, no con negro sólido.

### Named Rules

**The Flat Showroom Rule.** Prohibido el box-shadow en tarjetas, botones y menús. Si un bloque no se lee, se separa con espacio o con un filete de 1 px, no con una sombra.

## Shapes

La forma por defecto es recta. Los controles —botones, campos, ítems de navegación— usan un radio de 4 px, el chiclet de Tesla, no la píldora. Las piezas que enmarcan una vertical (la ficha "Conoce…") suben a 12 px. El círculo completo queda para un indicador de estado, no para botones.

### Named Rules

**The Chiclet Rule.** Si se puede oprimir, el radio es 4 px. Si es una ficha de vertical, 12 px. Nada más.

## Components

### Buttons

Carácter: quietos, anchos, de 40 px de alto. El texto va en peso 500 y sentence case.

- **Shape:** chiclet (4 px).
- **Primary (holding):** relleno blanco, texto carbón, en el modo oscuro. En el modo claro el relleno pasa a carbón y el texto a blanco. Hover: la ceniza reemplaza al blanco; el carbón no se aclara con un glow.
- **Secondary:** relleno carbón y texto blanco sobre la noche. Sobre el modo claro, fondo blanco, texto grafito y filete de 1 px.
- **Movilidad:** relleno naranja señal, texto blanco. Solo dentro de SubVen y de vehículos.
- **Social:** relleno azul eléctrico, texto blanco. Solo dentro de Sila, participación ciudadana y voluntariado.
- **Gubernamental:** el mismo botón blanco del holding. Se distingue por la marca del arco y el filete blanco, no por otro color.
- **Hover / Focus:** el color cambia en 0.33 s. El foco es un anillo de 2 px del color del texto, separado 2 px. Sin desplazamiento vertical.

### Chips

No hay chips de filtro. El rótulo de vertical es texto label en peltre, encima del nombre, sin fondo.

### Cards / Containers

La ficha de vertical es una banda, no una tarjeta de marketing. Fondo transparente sobre la noche, radio 12 px solo si la ficha recorta una imagen. Filete izquierdo de 2 px en el color de la vertical (blanco en consultoría). Padding interno 24 px. Sin sombra y sin borde completo.

### Inputs / Fields

Fondo transparente, texto blanco en la noche y carbón en el claro, placeholder en plata, filete inferior de 1 px. Radio 4 px si el campo es una caja cerrada. El foco cambia el filete al blanco (noche) o al carbón (claro), nunca al naranja ni al azul, salvo que el formulario viva dentro de esa vertical.

### Navigation

Barra fija, sin borde y sin sombra. Wordmark a la izquierda en peso 500. Enlaces al centro en label. A la derecha, el cambio de tema y el idioma. Sobre el héroe negro la barra es transparente y el texto es blanco. Al desplazar, vidrio negro al 72 %. En modo claro el vidrio es blanco al 75 %. El ítem activo no se subraya con el color de una vertical: se queda en blanco o carbón, al peso 500.

### Equipo

Dos personas, en la misma página de quiénes somos, no en un directorio aparte. Fila de nombres: el nombre en title, el cargo en peltre, sin foto mientras no exista, sin tarjeta y sin biografía inventada. Desktop en dos columnas; móvil en una. El modelo es el del sitio del clúster: el equipo está integrado al relato, no presentado como galería.

### Noticias

La página se renderiza vacía: título, un folder monocromo y dos líneas. Sin tarjetas placeholder, sin fechas ficticias, sin "lee también". En el inicio, la banda sigue en una sola línea.

## Do's and Don'ts

### Do:

- **Do** usar la noche como fondo por defecto y el blanco como modo claro.
- **Do** reservar el naranja señal a SubVen y a cualquier diseño de movilidad, vehículos incluidos.
- **Do** usar el azul de Sila solo en Sila, y el azul de participación solo en participación ciudadana. Voluntariado va en blanco.
- **Do** marcar la consultoría gubernamental en blanco sobre el sitio negro, y en carbón cuando el lienzo es blanco.
- **Do** dejar Noticias visible y vacía hasta que exista una nota real.
- **Do** presentar a Diego Farfán y a José Luis Macedo como nombre y cargo, en fila, dentro de quiénes somos.

### Don't:

- **Don't** usar el azul eléctrico ni el naranja como botón de la home del holding.
- **Don't** mezclar naranja y azul en el mismo componente.
- **Don't** añadir sombras, gradientes, brillos o texturas técnicas.
- **Don't** usar píldoras, peso 700, itálicas ni tracking negativo.
- **Don't** rellenar Noticias, voluntariado o el equipo con contenido que no haya llegado.
