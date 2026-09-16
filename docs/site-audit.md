# Website audit — 16 September 2026

## Scope and results

- Checked all 18 public content pages (six main pages and 12 product pages) in Chromium at 320, 390, 768 and 1440px widths. No horizontal overflow, failed page responses, broken loaded images or browser JavaScript errors were detected.
- Reviewed 53 distinct link destinations. Internal routes returned 200; cross-page and local section anchors exist. Google Maps returned HTTP 200. Telephone and email links were inspected, without placing calls or sending emails; actual delivery is unverified.
- Ran axe-core WCAG 2 A/AA and WCAG 2.1 AA checks on every page at desktop and mobile widths: no automated violations. This is not a full accessibility conformance certification. Visual review separately found and fixed white founder-card headings on a pale background.
- Verified keyboard skip link and main-content focus, mobile menu opening, tab order, Escape closing and focus restoration, mobile navigation, and keyboard activation of the back-to-top button.
- Verified contact form required fields, invalid email/phone errors, focus on the first invalid field, optional phone, and valid-input feedback. The form accurately states that messages are not sent. An enquiry delivery backend remains outstanding.
- Visually reviewed main-page mobile screenshots, product detail layout, and the optimized hero. Founder cards remain two columns on mobile.

## Fixes

1. Replaced the 1,160,427-byte DNA PNG used by the hero and footer with a 24,906-byte WebP derivative; retained the original asset.
2. Gave the hero image eager loading and high fetch priority; removed its blur placeholder so image display does not depend on clearing that placeholder during hydration.
3. Added all 12 product detail URLs to the sitemap (18 URLs total).
4. Changed founder-card headings from white to navy for readability.

## Performance

Lighthouse measured against a local production build, with simulated mobile throttling. Scores are individual lab samples, not real-user field data; hosting, cache and device differences can change results. The initial and final runs were not made under identical machine load, so the score change cannot be attributed exclusively to the edits.

| Page | Performance | FCP | LCP | Total blocking time | CLS |
| --- | --- | --- | --- | --- | --- |
| Home, mobile | 94 | 1.1s | 3.1s | 70ms | 0 |
| Products, mobile | 95 | 1.0s | 2.7s | 100ms | 0 |
| Contact, mobile | 99 | 0.9s | 1.6s | 80ms | 0 |
| Home, desktop | 100 | 0.3s | 0.7s | 10ms | 0 |

Initial homepage mobile sample: 68 performance, 8.1s LCP, 1,408 KiB transferred. Optimized homepage mobile sample: 298 KiB transferred. Home and Products mobile LCP still exceed the 2.5s good threshold in these samples; remeasure on deployed hosting and tune image delivery/cache as needed.

## Remaining checks

- Connect and end-to-end test enquiry delivery after a mail service is configured.
- Check deployed HTTPS, redirects, caching and field performance after launch.
- Native Safari/iOS and Android-device testing, screen-reader testing and real phone/email delivery were not performed. Browser checks here used Chromium desktop/mobile viewport emulation.

Production compilation, TypeScript and scoped ESLint checks passed during the audit.
