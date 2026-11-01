# RC TECH — Web Development POE (Parts 1–3)

## Project overview
RC TECH is a South African electronics and technology accessories website concept. The site presents practical products such as USB-C cables, chargers, phone covers, audio accessories and adapters. The project is developed in HTML5, CSS3 and JavaScript.

## Target audience and objectives
The target audience is people who need practical accessories for phones, computers and other everyday devices. The website aims to make product information easy to browse, provide a clear enquiry route and work across desktop, tablet and mobile devices. Product prices in the prototype are illustrative starting prices in South African rand (ZAR), not live stock or confirmed offers.

## Website pages
- `index.html` — Home page, key information and FAQ.
- `about.html` — Business concept, mission, vision and target audience.
- `products.html` — Dynamically rendered product catalogue with search and sorting.
- `enquiry.html` — Product enquiry form with browser-side validation and email preparation.
- `contact.html` — Contact form with message type, validation and email preparation.

## Part 1 — Project foundation
The initial project established the RC TECH concept, target audience, page structure and core content. The five-page structure was retained for later development.

## Part 2 — CSS styling and responsive design
A shared external stylesheet (`css/style.css`) is linked to all five pages. It includes a reset, CSS variables, typography, colour palette, Grid and Flexbox layouts, hover/focus states and responsive breakpoints. The site adapts its navigation, hero and product layout for desktop, tablet and mobile screens. SVG illustrations scale within their containers.

### Responsive testing evidence
Capture real screenshots using Chrome DevTools and save them in `screenshots/`:
- `desktop.png` — suggested viewport 1366 × 768.
- `tablet.png` — suggested viewport 768 × 1024.
- `mobile.png` — suggested viewport 390 × 844.
Do not submit placeholder screenshots. Record any additional browser/device tests you perform.

## Part 3 — Functionality and SEO
### JavaScript functionality
- `js/script.js` controls the responsive navigation and validates both forms before preparing a structured email.
- `js/products.js` stores the sample catalogue in a JavaScript array, dynamically creates product cards, filters by search term and sorts by featured order, price or name.
- The home page includes native HTML disclosure accordions using `details` and `summary`.

### Forms and submission behaviour
The enquiry and contact forms use required fields, email input types, minimum lengths, maximum lengths, quantity limits and a phone-number pattern where applicable. JavaScript checks `checkValidity()` and uses `reportValidity()` to display browser validation feedback. After successful validation, the site opens a pre-addressed email draft to `rctech402@gmail.com` with the submitted values in the subject/body. The user must review and press **Send** in their email application.

**Important limitation:** this static-site implementation does not transmit form data automatically, does not store submissions, and does not provide AJAX/backend processing. It uses a `mailto:` workflow as a no-backend solution. For server-side/AJAX submission, connect a form service or backend endpoint and configure its destination and spam protection before claiming that capability.

### On-page SEO
Each page has a unique title and meta description, descriptive headings, a responsive viewport declaration, descriptive image alternative text, internal links and a canonical URL placeholder. A basic Schema.org Store JSON-LD block is included. Replace the canonical domain placeholders with the final deployed domain before publication.

### Technical SEO and performance
- `robots.txt` allows normal crawling and points to the sitemap placeholder.
- `sitemap.xml` lists the five public pages. Replace `https://YOUR-DOMAIN` with the final Netlify/custom domain.
- Product images use lazy loading on the catalogue page and explicit dimensions to reduce layout shift.
- The site uses HTTPS when deployed on Netlify.

### Deployment
The website can be deployed as a static site on Netlify. Publish the contents of the `website` folder (the folder containing `index.html`) as the site root. After deployment, update canonical URLs, `robots.txt` and `sitemap.xml` with the real domain. Test every page and form on the deployed URL.

## Changelog
### Version 3.0 — Part 3 functionality and SEO
- `index.html`: added page-specific SEO metadata, Store structured data, descriptive image alt text, FAQ accordions and internal calls to action.
- `about.html`: added unique SEO title/description, structured headings and internal product navigation.
- `products.html`: replaced hardcoded product cards with an empty catalogue container populated by JavaScript; added search, sorting and live result count.
- `enquiry.html`: expanded the enquiry form with phone, device model, product, quantity and message fields; added constraints and email-draft workflow.
- `contact.html`: added phone (optional), message type and message fields; added validation and email-draft workflow to `rctech402@gmail.com`.
- `js/products.js`: created a JavaScript product data array and DOM rendering, search filtering and sorting.
- `js/script.js`: improved accessible mobile navigation and added form validation, error feedback and mailto message compilation.
- `css/style.css`: added catalogue controls, FAQ, form feedback and small-screen styling.
- Added `robots.txt` and `sitemap.xml`; domain placeholders must be updated after deployment.

### Version 2.0 — Part 2 CSS and responsive design
- Added a shared external stylesheet, CSS reset, variables, typography, Grid/Flexbox, interactive states and responsive breakpoints.
- Updated all five pages for a consistent visual design and responsive layout.
- Added responsive navigation and product search foundation.

### Version 1.0 — Part 1 foundation
- Established the RC TECH website concept, target audience, five-page structure and initial content.

## Testing checklist
- [ ] All five pages load and internal links work.
- [ ] Mobile navigation opens, closes and updates `aria-expanded`.
- [ ] Product catalogue renders all five sample products.
- [ ] Search filters products and sorting changes their order.
- [ ] Enquiry form rejects missing/invalid values.
- [ ] Contact form rejects missing/invalid values.
- [ ] Valid forms open an email draft addressed to `rctech402@gmail.com`; test by reviewing the draft, not by sending test personal data.
- [ ] FAQ accordions open and close using mouse and keyboard.
- [ ] Desktop, tablet and mobile layouts tested.
- [ ] Replace domain placeholders in canonical URLs, `robots.txt` and `sitemap.xml`.
- [ ] Add genuine desktop/tablet/mobile screenshots to `screenshots/`.
- [ ] Test the deployed Netlify site.

## References
- Google Search Central. (n.d.). *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 1 November 2026).
- MDN Web Docs. (n.d.). *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 1 November 2026).
- MDN Web Docs. (n.d.). *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 1 November 2026).
- MDN Web Docs. (n.d.). *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 1 November 2026).
- Schema.org. (n.d.). *Store*. Available at: https://schema.org/Store (Accessed: 1 November 2026).
- W3C. (n.d.). *Web Content Accessibility Guidelines (WCAG) 2.0*. Available at: https://www.w3.org/TR/WCAG20/ (Accessed: 1 November 2026).
- IIE. (2026). *Web Development POE: Part 1, Part 2 and Part 3 learning material*. Institution-provided learning material.

## AI assistance disclosure
AI assistance was used to support code drafting, debugging and documentation. The student must review, understand, test and adapt the implementation and disclose assistance according to the institution's academic integrity requirements.
