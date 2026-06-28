# Wanderlust Labs Explorer

A multi-page travel experience explorer built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Home hero page with strong call-to-action to start discovery.
- URL-driven search and stacked filters on `/experiences`.
- Dynamic detail pages for each experience at `/experiences/[id]`.
- Shared favorites state and heart toggles across all relevant views.
- Favorites page empty state and profile KPI showing live favorite count.

## Routes

- `/`
- `/experiences`
- `/experiences/[id]`
- `/favorites`
- `/profile`

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design References

- Airbnb Experiences: card density, simple typography hierarchy, and heart-toggle placement. https://www.airbnb.com/s/experiences
- GetYourGuide: discoverability model using stackable filters and keyword search behavior. https://www.getyourguide.com/
- Klook: mobile card scaling and compact filter ergonomics. https://www.klook.com/
