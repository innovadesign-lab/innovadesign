# Landing del holding Innovadesign

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar la home del estudio por la landing del holding, con el contenido ya escrito, el showroom negro y las marcas que ya están en `public/`.

**Architecture:** La home sigue siendo `src/app/[locale]/page.tsx`. El texto vive en `messages/{es,en}/home.json`. Cada banda es un componente en `src/modules/features/pages/src/sections/home/`. Los acentos salen de variables CSS, no de clases sueltas. Las imágenes se sirven desde `public/{producto}/mark.webp`.

**Tech Stack:** Next.js 16, next-intl, Tailwind 4, tokens de `DESIGN.md`. No hay runner de tests: cada tarea cierra con `pnpm exec tsc --noEmit`.

**Fuentes que no se reinterpretan:** `content/propuesta-contenido.md` y `DESIGN.md`. Facebook se publica como llegó escrito: `Innovadeisgn`.

**Fuera de esta landing:** biografías, texto de voluntariado, ficha de vehículos, notas de blog inventadas. Esas secciones se muestran vacías.

---

## Archivos

| Archivo | Responsabilidad |
| --- | --- |
| `src/app/globals.css` | Noche, blanco, carbón, naranja, azules, radio 4 px, sin sombra |
| `src/app/[locale]/layout.tsx` | Inter en lugar de Archivo y Raleway |
| `src/modules/cores/site/src/config/site.ts` | Nombre, correo y teléfono del holding |
| `src/modules/cores/i18n/messages/es/home.json` | Copia en español |
| `src/modules/cores/i18n/messages/en/home.json` | La misma copia, traducida |
| `src/modules/cores/i18n/messages/es/common.json` | Nav y footer |
| `src/modules/cores/i18n/messages/en/common.json` | Nav y footer en inglés |
| `src/modules/features/pages/src/data/verticals.ts` | Id, marca, acento y ancla de cada producto |
| `src/modules/features/pages/src/sections/home/hero.tsx` | Banda de apertura |
| `src/modules/features/pages/src/sections/home/about.tsx` | Quiénes somos y equipo |
| `src/modules/features/pages/src/sections/home/vertical-band.tsx` | Una vertical |
| `src/modules/features/pages/src/sections/home/news.tsx` | Noticias vacía |
| `src/modules/features/pages/src/sections/home/contact-band.tsx` | Datos de contacto |
| `src/app/[locale]/page.tsx` | Orden de las bandas |
| `src/modules/features/site/src/components/organisms/header.tsx` | Anclas del holding |
| `src/modules/features/site/src/components/organisms/footer.tsx` | Contacto y lema |

Las secciones viejas (`services.tsx`, `stories.tsx`, `process.tsx`, `closing-cta.tsx`) dejan de montarse en la home. No se borran en la primera tarea.

## Orden visual

1. Héroe, blanco y negro.
2. Quiénes somos y equipo, blanco y negro.
3. SubVen, filete `#FC4400`.
4. Sila, filete `#102CE8`.
5. Participación ciudadana, filete `#0050F8`.
6. Voluntariado, filete blanco, sin párrafo y sin botón.
7. Consultoría, filete blanco.
8. Noticias, una línea.
9. Contacto.

---

### Task 1: Tokens del showroom

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Sustituir las superficies cálidas por la noche de Tesla**

En `:root` y en `[data-theme="dark"]`, el modo oscuro es el default. Valores:

```css
[data-theme="dark"] {
  --bg-base: #000000;
  --bg-subtle: #171a20;
  --bg-elevated: #171a20;
  --border-default: #22262c;
  --text-primary: #ffffff;
  --text-secondary: #d0d1d2;
  --text-muted: #5c5e62;
  --text-on-brand: #171a20;
  --link: #ffffff;
  --focus-ring: rgb(255 255 255 / 0.7);
  --brand-accent: #ffffff;
  --on-accent: #171a20;
  --accent-soft: rgb(255 255 255 / 0.08);
  --card-shadow: none;
}
```

Modo claro, en `:root, [data-theme="light"]`:

```css
--bg-base: #ffffff;
--bg-subtle: #f4f4f4;
--bg-elevated: #ffffff;
--border-default: #eeeeee;
--text-primary: #171a20;
--text-secondary: #393c41;
--text-muted: #5c5e62;
--brand-accent: #171a20;
--on-accent: #ffffff;
--card-shadow: none;
```

Los sectores ya existen y se quedan:

```css
--sector-subven: #fc4400;
--sector-sila: #102ce8;
--sector-participacion: #0050f8;
```

- [ ] **Step 2: Radio y botones**

`--radius-sm` y el radio de `.btn` pasan a `4px`. Quitar `box-shadow` de `.btn-primary:hover`. Transición `0.33s`.

- [ ] **Step 3: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: sin errores nuevos.

---

### Task 2: Tipografía Inter

**Files:**
- Modify: `src/app/[locale]/layout.tsx`

- [ ] **Step 1: Cambiar las fuentes**

Quitar `Archivo` y `Raleway`. Cargar Inter con pesos 400 y 500:

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});
```

En `<html className>`, dejar solo `inter.variable`.

- [ ] **Step 2: Apuntar los tokens de fuente**

En `globals.css`, `--font-display` y `--font-body` usan `var(--font-inter), Inter, sans-serif`. Quitar `font-stretch: 112%` y el `font-weight: 700` de `h1, h2, h3`. Los títulos quedan en 500.

- [ ] **Step 3: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 3: Datos de contacto del holding

**Files:**
- Modify: `src/modules/cores/site/src/config/site.ts`

- [ ] **Step 1: Reemplazar STUDIO**

```ts
export const SITE_NAME = "Innovadesign";

export const STUDIO = {
  email: "info@innovadesign.com.mx",
  phone: "(221) 5334922",
  phoneHref: "tel:+522215334922",
  instagram: "https://instagram.com/innova_.design",
  instagramHandle: "@innova_.design",
  facebook: "Innovadeisgn",
  locality: "Puebla",
  region: "Puebla",
  country: "México",
  countryCode: "MX",
} as const;
```

No inventar la URL de Facebook. El texto visible es `Innovadeisgn`, sin enlace, hasta que exista la página.

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS. Si otro archivo espera solo `email`, `locality`, `region`, `country`, no borrar esos campos.

---

### Task 4: Copia de la home

**Files:**
- Modify: `src/modules/cores/i18n/messages/es/home.json`
- Modify: `src/modules/cores/i18n/messages/en/home.json`

- [ ] **Step 1: Reescribir el namespace Home en español**

Claves exactas:

```json
{
  "Home": {
    "metaTitle": "Innovadesign",
    "metaDescription": "En Innovadesign desarrollamos tecnología aplicada, soluciones urbanas e iniciativas de impacto social.",
    "hero": {
      "kicker": "Innovadesign",
      "title": "Tecnología aplicada, soluciones urbanas e impacto social.",
      "lede": "Transformando el futuro, cuidando el presente.",
      "body": "En Innovadesign desarrollamos tecnología aplicada, soluciones urbanas e iniciativas de impacto social.",
      "primaryCta": "Quiénes somos",
      "secondaryCta": "Contacto"
    },
    "about": {
      "title": "Quiénes somos",
      "body": "En Innovadesign diseñamos e impulsamos soluciones estratégicas que transforman la dinámica comunitaria y la gestión pública. A través del diseño centrado en las personas, la tecnología y la innovación social, abordamos proyectos de diversa índole para responder a las necesidades cambiantes de nuestro entorno. Articulamos a la ciudadanía, las instituciones y el sector privado para convertir ideas en resultados tangibles, sostenibles y de alto impacto que mejoren la calidad de vida en las ciudades.",
      "people": [
        { "name": "Diego Farfán", "role": "Director general" },
        { "name": "José Luis Macedo", "role": "Director financiero" }
      ]
    },
    "verticals": {
      "subven": {
        "kicker": "Conoce SubVen",
        "title": "SubVen",
        "body": "Solución integral de cobro digital, telemetría y gestión operativa para el transporte público.",
        "cta": "Contacto"
      },
      "sila": {
        "kicker": "Conoce Sila",
        "title": "Sila",
        "body": "Plataforma de salud mental y bienestar integral para usuarios y esquemas corporativos.",
        "cta": "Contacto"
      },
      "participacion": {
        "kicker": "Conoce participación ciudadana",
        "title": "Participación ciudadana",
        "body": "Iniciativas que conectan la participación comunitaria, estudiantil y el comercio local.",
        "cta": "Contacto"
      },
      "voluntariado": {
        "kicker": "Voluntariado",
        "title": "Voluntariado",
        "body": "",
        "cta": ""
      },
      "consultoria": {
        "kicker": "Servicios de consultoría",
        "title": "Consultoría",
        "body": "Asesoría en administración gubernamental, diseño de políticas públicas e innovación urbana.",
        "cta": "Contacto"
      }
    },
    "news": {
      "title": "Noticias",
      "empty": "Todavía no hay notas."
    },
    "contact": {
      "title": "Contacto"
    }
  }
}
```

- [ ] **Step 2: Traducir las mismas claves al inglés**

Traducir solo el texto. Nombres propios se quedan: Diego Farfán, José Luis Macedo, SubVen, Sila, Innovadesign. `voluntariado.body` y `voluntariado.cta` siguen vacíos. `news.empty` = `No notes yet.`

- [ ] **Step 3: Comprobar que el JSON parsea**

Run: `node -e "JSON.parse(require('fs').readFileSync('src/modules/cores/i18n/messages/es/home.json','utf8')); JSON.parse(require('fs').readFileSync('src/modules/cores/i18n/messages/en/home.json','utf8'))"`
Expected: sin salida.

---

### Task 5: Catálogo de verticales

**Files:**
- Create: `src/modules/features/pages/src/data/verticals.ts`

- [ ] **Step 1: Declarar el catálogo**

```ts
export const VERTICALS = [
  { id: "subven", mark: "/subven/mark.webp", accent: "var(--sector-subven)", cta: true },
  { id: "sila", mark: "/sila/mark.webp", accent: "var(--sector-sila)", cta: true },
  { id: "participacion", mark: "/participacion/mark.webp", accent: "var(--sector-participacion)", cta: true },
  { id: "voluntariado", mark: "/voluntariado/mark.webp", accent: "#ffffff", cta: false },
  { id: "consultoria", mark: "/consultoria/mark.webp", accent: "#ffffff", cta: true },
] as const;

export type VerticalId = (typeof VERTICALS)[number]["id"];
```

El texto no va aquí. Se lee con `t(\`verticals.${id}.title\`)`.

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 6: Héroe

**Files:**
- Modify: `src/modules/features/pages/src/sections/home/hero.tsx`

- [ ] **Step 1: Reemplazar el héroe del estudio**

Una banda `min-h-[100svh]`, fondo transparente (lo pone la página), texto a la izquierda en desktop. Título a 40 px, peso 500, line-height 1.2. En móvil, 28 px. El lema va debajo, a 22 px. El párrafo a 14 px, máximo 65 ch.

Dos enlaces, lado a lado, y apilados bajo 768 px:

- Primario: `Quiénes somos` → `#quienes`. Fondo blanco, texto `#171A20`, alto 40 px, radio 4 px, padding `10px 24px`.
- Secundario: `Contacto` → `#contacto`. Fondo `#171A20`, texto blanco, mismas medidas.

Sin números, sin tarjeta lateral, sin sombra.

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 7: Quiénes somos y equipo

**Files:**
- Create: `src/modules/features/pages/src/sections/home/about.tsx`

- [ ] **Step 1: Sección `#quienes`**

`id="quienes"`. Título y el párrafo de Diego, máximo 65 ch. Debajo, un `ul` en `grid-cols-1 sm:grid-cols-2`, sin borde y sin fondo.

Cada persona:

```tsx
<li>
  <p className="text-[17px] font-medium leading-[1.18]">{person.name}</p>
  <p className="mt-1 text-sm text-ink-muted">{person.role}</p>
</li>
```

`people` llega como `{ name: string; role: string }[]`. Sin `img`.

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 8: Banda de vertical

**Files:**
- Create: `src/modules/features/pages/src/sections/home/vertical-band.tsx`

- [ ] **Step 1: Un solo componente para las cinco**

Props: `id`, `kicker`, `title`, `body`, `cta`, `mark`, `accent`.

```tsx
<section id={id} className="border-t border-line py-24">
  <div className="container-site grid items-center gap-10 md:grid-cols-[160px_1fr]">
    <img src={mark} alt="" width={320} height={320} className="h-28 w-auto" />
    <div className="max-w-[65ch] border-l-2 pl-6" style={{ borderColor: accent }}>
      <p className="text-sm font-medium text-ink-muted">{kicker}</p>
      <h2 className="mt-2 text-[22px] font-medium leading-[1.2]">{title}</h2>
      {body ? <p className="mt-3 text-sm leading-[1.43] text-ink-secondary">{body}</p> : null}
      {cta ? (
        <a
          href="#contacto"
          className="btn mt-6"
          style={{
            background: accent,
            color: accent === "#ffffff" ? "#171A20" : "#ffffff",
          }}
        >
          {cta}
        </a>
      ) : null}
    </div>
  </div>
</section>
```

Si `accent` es `#ffffff`, el texto del botón es carbón. En naranja y en los dos azules, el texto es blanco. Voluntariado no renderiza botón ni párrafo cuando `body` y `cta` llegan vacíos.

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 9: Noticias vacía

**Files:**
- Create: `src/modules/features/pages/src/sections/home/news.tsx`

- [ ] **Step 1: Sección `#noticias`**

`id="noticias"`. Un `h2` con `Noticias` y un párrafo `Todavía no hay notas.` en color muted. Sin lista, sin fechas, sin enlace al blog.

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 10: Banda de contacto

**Files:**
- Create: `src/modules/features/pages/src/sections/home/contact-band.tsx`

- [ ] **Step 1: Sección `#contacto`**

`id="contacto"`. Título `Contacto`. Lista:

- `mailto:info@innovadesign.com.mx`
- `https://instagram.com/innova_.design` con texto `@innova_.design`
- texto `Innovadeisgn`, sin `<a>`
- `tel:+522215334922` con texto `(221) 5334922`

Los valores salen de `STUDIO` en `site.ts`.

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 11: Montar la home

**Files:**
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Cambiar el árbol**

Quitar `Services`, `Stories`, `Process`, `ClosingCta` y `listPosts`. Orden:

```tsx
<Hero ... />
<About id="quienes" title={t("about.title")} body={t("about.body")} people={t.raw("about.people")} />
{VERTICALS.map((item) => (
  <VerticalBand
    key={item.id}
    id={item.id}
    kicker={t(`verticals.${item.id}.kicker`)}
    title={t(`verticals.${item.id}.title`)}
    body={t(`verticals.${item.id}.body`)}
    cta={item.cta ? t(`verticals.${item.id}.cta`) : ""}
    mark={item.mark}
    accent={item.accent}
  />
))}
<News title={t("news.title")} empty={t("news.empty")} />
<ContactBand title={t("contact.title")} />
```

- [ ] **Step 2: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 12: Navegación

**Files:**
- Modify: `src/modules/cores/i18n/messages/es/common.json`
- Modify: `src/modules/cores/i18n/messages/en/common.json`
- Modify: `src/modules/features/site/src/components/organisms/header.tsx`

- [ ] **Step 1: Nuevas claves de nav**

Español: `about` Quiénes somos, `news` Noticias, `contact` Contacto. Inglés: About, News, Contact. Se puede dejar `home`, `studio` y `blog` en el JSON; el header deja de usarlos.

- [ ] **Step 2: Ítems del header**

```ts
const ITEMS = [
  { key: "about", href: "/#quienes" },
  { key: "news", href: "/#noticias" },
  { key: "contact", href: "/#contacto" },
];
```

Quitar la pastilla `rounded-full` y la sombra del header condensado. La barra queda fija, sin borde, fondo `rgb(0 0 0 / 0.72)` y `backdrop-blur` al hacer scroll. En modo claro, `rgb(255 255 255 / 0.75)`.

El logo que ya apunta a `/innovadesign/mark.webp` no se vuelve a tocar.

- [ ] **Step 3: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 13: Footer

**Files:**
- Modify: `src/modules/cores/i18n/messages/es/common.json`
- Modify: `src/modules/cores/i18n/messages/en/common.json`
- Modify: `src/modules/features/site/src/components/organisms/footer.tsx`

- [ ] **Step 1: Texto**

`Footer.name` en español: `Transformando el futuro, cuidando el presente.`
En inglés: `Shaping the future, taking care of the present.`

- [ ] **Step 2: Columna de contacto**

Mostrar correo, Instagram, Facebook como texto y teléfono, con los mismos href de la Task 10. Quitar "Estudio" y el enlace al blog de esta columna.

- [ ] **Step 3: Comprobar tipos**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

---

### Task 14: Revisión en el navegador

**Files:**
- Ninguno, salvo un defecto que aparezca en pantalla.

- [ ] **Step 1: Arrancar y abrir**

Run: `pnpm dev --port 3010`
Abrir `http://localhost:3010/es/`.

- [ ] **Step 2: Recorrer la página**

Confirmar, en este orden:

- El header muestra el arco y la palabra INNOVADESIGN.
- El héroe dice el título, el lema y los dos botones.
- Quiénes somos muestra el párrafo y a Diego Farfán y José Luis Macedo.
- SubVen es naranja, Sila es `#102CE8`, participación es `#0050F8`, voluntariado no tiene párrafo ni botón, consultoría es blanca.
- Noticias dice solo "Todavía no hay notas."
- Contacto lista los cuatro datos. Facebook no es un enlace.
- El mismo recorrido en `/en/` no deja claves crudas (`Home.hero.title`).
- A 390 px de ancho los botones se apilan y el equipo pasa a una columna.

---

## Después de la landing

No entra en las tareas de arriba. Cuando la home esté cerrada, cada `Conoce…` puede ser una ruta corta (`/subven`, `/sila`, `/participacion`, `/voluntariado`, `/consultoria`) que reutilice `VerticalBand` y el mismo párrafo. Voluntariado sigue sin cuerpo.
