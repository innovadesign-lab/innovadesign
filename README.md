# Innova Design

Sitio del estudio. Next.js 16, `next-intl` (es/en) y blog en Markdown. El desarrollo local usa `pnpm`.

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000). El idioma por defecto es español y las rutas llevan prefijo: `/es/` y `/en/`.

## Estructura

- `src/app/[locale]` — páginas: inicio, estudio, blog, contacto y avisos
- `src/modules/cores/i18n` — routing, mensajes y cambio de idioma
- `src/modules/features/blog` — lectura de `content/blog/*.{es,en}.md`
- `src/modules/features/pages` — secciones de la landing
- `src/proxy.ts` — detección de locale

Las notas del blog viven en `content/blog/{slug}.{locale}.md`.
