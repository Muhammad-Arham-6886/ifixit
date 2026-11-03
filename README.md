# IFix It – Device Repair Website (React + Vite)

A multi-page React site (React Router) modelled on the Gadgetcare "Home Layout 2" theme, with scroll-driven animations built on `framer-motion`.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/team` | Team |
| `/track-your-repair` | Track Your Repair (try `IFX-24817`, or the ID you get after booking) |
| `/pricing` | Pricing Plan |
| `/testimonials` | Testimonials |
| `/faqs` | FAQs (filter by category) |
| `/book-a-repair` | Book A Repair (4-step booking wizard) |
| `/contact` | Contact (with map) |
| `/services/:slug` | Phone, Tablet, Laptop, Smart Watch, Game Console, Software Repair |
| `/projects/:slug` | Project Details |
| `/blog/:slug` | Blog Details |

All content (services, prices, projects, posts, team, FAQs, contact details) lives in `src/data.jsx`. Bookings and tracking are a front-end demo stored in the browser (`src/tracking.js`); connect them to a real backend before launch.

**Hosting note:** this is a single-page app, so the host must serve `index.html` for every route (Netlify: `/* /index.html 200`; Vercel/Apache/Nginx have equivalent rewrites).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

- `src/pages/` – one file per page; `src/components/PageBanner.jsx` – inner-page title banner
- `src/components/motion.jsx` – reusable animation helpers: `Reveal`, `SplitHeading`, `Counter`, `ParallaxImg`, `WipeImg`
- `src/components/Header.jsx` – preloader, sticky header, dropdowns, off-canvas panel, mobile menu, scroll progress bar
- `src/components/Hero.jsx` – hero with parallax background, line-by-line heading, rotating badge counter
- `src/components/SectionsA.jsx` – About, Services, Why Choose Us (tabs), How It Works
- `src/components/SectionsB.jsx` – Latest Work (pinned horizontal scroll), CTA, FAQ, scroll marquee, Benefits (video modal), Testimonials slider
- `src/components/SectionsC.jsx` – Team, Pricing (monthly/yearly), Contact form, brand ticker, Blog, Footer
- `src/index.css` – all styles (theme colours `#52c834` / `#1c2029` / `#ecf9ed`)

## Image credits

All photos are free-license images from [Magnific (formerly Freepik)](https://www.magnific.com/). The free license requires attribution, so keep a credit such as "Images: Magnific" on the live site.

| File | Magnific image |
|---|---|
| hero.jpg | technician-antistatic-gloves-using-screwdriver-disassemble-borken-mobile-phone_343059-485 |
| about1.jpg | technician-wearing-white-antistatic-gloves-plaid-shirt_343059-487 |
| about2.jpg | electronic-technician-showing-modern-smartphone-with-broken-body-repair-shop_613910-20942 |
| ser-phone.jpg | technician-repairing-mobile-phone_39768-2881 |
| ser-tablet.jpg | tattooed-man-working-tablet-screen-mockup_53876-95860 |
| ser-laptop.jpg | professional-accurately-unscrewing-case-metallic-slim-laptop_346278-1796 |
| ser-console.jpg | view-3d-video-game-controller_23-2151005757 |
| ser-watch.jpg | man-touching-his-smartwatch_1134-157 |
| ser-software.jpg | close-up-code-running-laptop-screen-data-center_482257-124594 |
| software2.jpg | computer-scientist-designing-developing-software-applications_482257-103751 |
| support.jpg | customer-service-operator-talking-phone-office_1301-7537 |
| why.jpg | young-male-technician-wearing-gloves-fixing-computer-motherboard_23-2147922176 |
| circuit.jpg | closeup-electronic-circuit-board-with-cpu-microchip_1387-744 |
| benefits.jpg | motherboard-circuit-background_23-2151733763 |
| cta.jpg | closeup-shot-person-repair-mobile-smartphone-workshop_181624-60063 |
| contact.jpg | repairman-uses-magnifier-tweezers-repair-damaged-smartphone_613910-20862 |
| work1.jpg | black-broken-smartphone-broken-screen_220873-2747 |
| work2.jpg | front-view-man-repairing-computer_23-2148419159 |
| work3.jpg | computer-technician-fixing-laptop-desk-with-tools_155686-175 |
| work4.jpg | yung-bearded-master-looks-inside-disassembled-electronic-device_346278-1786 |
| team1–4.jpg | portrait-businessman-smiling_23-2150771061, portrait-business-woman-office_1398-6, portrait-male-engineer_23-2151614989, smiling-portrait-studio-woman_1303-2289 |
| testi1–2.jpg | portrait-happy-european-young-female-student_273609-28413, elegant-young-handsome-man-studio-fashion-portrait_1301-4955 |
| blog1–3.jpg | sideways-man-repairing-computer_23-2148419164, top-view-broken-phone-with-electronic-tools_23-2148419103, computer-technician-fixinglaptop-desk_155686-167 |
