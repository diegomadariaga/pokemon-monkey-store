# Pokemon Monkey Store

Aplicación Next.js que muestra cartas de "Pokémon" temática monos con distintos tipos. Proyecto inicializado con pnpm, TypeScript y componentes UI personalizados.

## Stack
- Next.js 14 (App Router)
- TypeScript
- pnpm
- CSS (global + utilidades)

## Scripts
```bash
pnpm dev       # Modo desarrollo
pnpm build     # Compila producción
pnpm start     # Sirve build
pnpm lint      # (Añadir más adelante si se configura)
```

## Requisitos
- Node 18+
- pnpm instalado (`npm i -g pnpm`)

## Ejecutar local
```bash
pnpm install
pnpm dev
```
Abrir http://localhost:3000

## Estructura breve
```
app/           # Rutas (App Router)
components/    # Componentes UI
hooks/         # Hooks reutilizables
lib/           # Utilidades
public/        # Assets estáticos
```

## Roadmap (ideas)
- Filtro por tipo
- Búsqueda
- Paginación / Infinite scroll
- Dark mode persistente
- Tests (Vitest / Jest + Testing Library)
- Lint + formateo automático

## Contribución
Pendiente agregar guías (CONTRIBUTING). Por ahora:
1. Crear rama feature: `git checkout -b feat/nombre`
2. Commit mensajes claros (convencionales sugeridos)
3. Abrir Pull Request a `main`

## Licencia
MIT (ver `LICENSE`).
