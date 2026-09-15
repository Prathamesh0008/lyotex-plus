# Lyotex Life Sciences

Next.js App Router website with TypeScript. Includes Home, About, Services, Products, 12 product detail pages, Quality, and Contact.

## Run locally

- Install dependencies: npm ci
- Development: npm run dev
- Lint: npm run lint
- Production build: npm run build
- Serve production: npm start

## Structure

- app/: active App Router pages, shared layout, and global styling.
- components/: shared site sections, header, footer, and contact form.
- data/: company introduction and service content.
- src/data/products.ts: the 12 product names, abbreviations, and slugs.
- src/data/company.ts: supplied company address, phone numbers, and email.
- src/app/products/[slug]/: product detail implementation, re-exported by the active route in app/products/[slug]/page.tsx.
- public/images/: local optimized scientific imagery.
- public/lyotex.svg: site logo.

The @/* alias resolves from the project root.

## Content and assets

Company and service content is based on https://www.lyotexlifesciences.in/index.html and its services page. Product names and contact details were supplied by the site owner. Scientific imagery is illustrative; it does not establish ownership of facilities or equipment. The About biologics illustration comes from the original site's images/biologics-image-1.jpg.

## Contact form limitation

The contact form validates entries in the browser only, as requested. It does not send or store messages and explicitly tells visitors this. Email sending requires a separately authorized backend integration. Phone and email links work directly; the location section links to Google Maps using the supplied address.

## LAN development

The current allowed development origin is 192.168.1.24. Update next.config.ts if the development computer's LAN IP changes.
