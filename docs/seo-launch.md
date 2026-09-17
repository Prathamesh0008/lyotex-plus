# SEO implementation and launch

Target: India-wide project enquiries for biosimilar development, analytical method development, biopharmaceutical quality systems, and technology transfer. Product pages target their actual product names. Location remains the verified Navi Mumbai office; no invented branch locations or certifications.

## Implemented

- Unique titles, descriptions, canonical URLs, and social metadata for main pages and 12 product pages.
- Clear service introduction, expanded service descriptions, project questions, product enquiry context, and relevant internal links.
- Organization and WebSite JSON-LD; page-specific WebPage, AboutPage, ContactPage, and CollectionPage data; a service list; product breadcrumbs matching visible navigation.
- Existing XML sitemap and robots.txt retained; missing URLs use the custom 404 and noindex behavior.
- Permanent redirects for `/index.html`, `/Input/services.html`, and `/Input/team.html` to their current equivalents.
- No fabricated reviews, prices, availability, certifications, or claims of guaranteed rankings. FAQ content is for visitors, without promising FAQ rich results. Product offer markup is omitted because prices and commercial availability are not verified.

## After deployment

1. Verify ownership of `lyotexlifesciences.in` in Google Search Console using DNS verification. The site owner or DNS administrator must do this; no account access or verification token was supplied.
2. Submit `https://www.lyotexlifesciences.in/sitemap.xml`. Inspect the homepage, services page, and a sample product URL, then request indexing where appropriate.
3. Validate deployed structured data using Google's Rich Results Test and Schema.org Validator. Organization and breadcrumb markup help understanding; not every schema type generates a rich result.
4. Confirm HTTPS and one hostname are enforced by hosting (the canonical hostname is `www.lyotexlifesciences.in`). Redirect the non-www host to www. Check HTTP responses for legacy paths; if the hosting server serves old HTML before Next.js, apply the same redirects there and remove obsolete legacy pages after verifying backups.
5. Test mobile page experience using PageSpeed Insights with the deployed URL. Local checks do not establish real-user Core Web Vitals.
6. Review Search Console impressions, clicks, queries, index coverage, and enquiry conversions monthly. Establish a baseline before claiming improvements.
7. Add owner-approved case studies with real project context and outcomes, confirmed product specifications, and relevant technical articles based on the team's experience. Avoid duplicate city pages or keyword stuffing.
8. Maintain consistent company name, address, and phone details across genuine business profiles. Obtain relevant mentions from actual partners and industry organizations; do not buy ranking links.

Ranking position is determined by Google, competition, content relevance, reputation, and other factors. Code and metadata changes do not guarantee first place or immediate indexing. Deployment, Search Console verification, submission, and live performance measurement are separate from these local changes.

## References

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/structured-data/organization

Content uses the existing project data and user-supplied company information. Legacy live pages were checked on 2026-09-17 for migration issues; their placeholder contact information was not reused.
