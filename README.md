<h1 align=center>  LADS Battle Companion Guide Project </h1>

<div align="left">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/next--intl-4-0070F3?style=for-the-badge&logo=next.js&logoColor=white" alt="Next-Intl" />
  <img src="https://img.shields.io/badge/i18n-EN/JA/RU-4ECDC4?style=for-the-badge" alt="i18n 3 Languages" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

## 📋 Project Overview
A fan-made guide website for Love and Deepspace (LADS) battle mechanics, providing detailed companion guides with weapon information, skills, and gameplay strategies. Built to help players understand character mechanics in multiple languages.

> **Note for Japanese Recruiters**:  
> 日本語の説明が必要な場合は、[日本語版README](README.ja.md)をご覧ください。  
> 翻訳の経験を活かした国際化対応が得意です。

<details>
<summary><h2>📸 Demo</h2></summary>

[Live Demo](https://lads-battles.vercel.app/)

## Project Screenshots
| Pages | EN Locale | 日本語 Locale | РУС Locale |
|:-------:|:----------:|:---------:|:---------:|
| **Home Page** | ![Home Page EN](./public/images/readme_showcase/en/home.png) | ![Home Page JP](./public/images/readme_showcase/ja/home.png) | ![Home Page RU](./public/images/readme_showcase/ru/home.png) |
| **Character List** | ![Character List EN](./public/images/readme_showcase/en/character_list.png)| ![Character List JP](./public/images/readme_showcase/ja/character_list.png) | ![Character List RU](./public/images/readme_showcase/ru/character_list.png) |
| **Companion List** | ![Companion List EN](./public/images/readme_showcase/en/companion_list.png) | ![Companion List JP](./public/images/readme_showcase/ja/companion_list.png) | ![Companion List RU](./public/images/readme_showcase/ru/companion_list.png) |
| **Guide not available** | ![Guide not available EN](./public/images/readme_showcase/en/guide_not_available.png) | ![Guide not available JP](./public/images/readme_showcase/ja/guide_not_available.png) | ![Guide not available RU](./public/images/readme_showcase/ru/guide_not_available.png) |
| **Standard Companion Guide** | ![Standard Companion Guide EN](./public/images/readme_showcase/en/standard_companion_guide.png) | ![Standard Companion Guide JP](./public/images/readme_showcase/ja/standard_companion_guide.png) | ![Standard Companion Guide RU](./public/images/readme_showcase/ru/standard_companion_guide.png) |
| **5★ Companion Guide** | ![5★ Companion Guide EN](./public/images/readme_showcase/en/5star_guide.png) | ![5★ Companion Guide JP](./public/images/readme_showcase/ja/5star_guide.png) | ![5★ Companion Guide RU](./public/images/readme_showcase/ru/5star_guide.png) |
| **Page 404** | ![Page 404 EN](./public/images/readme_showcase/en/404.png) | ![Page 404 JP](./public/images/readme_showcase/ja/404.png) | ![Page 404 RU](./public/images/readme_showcase/ru/404.png) |
| **Contact Page** | ![Contact Page EN](./public/images/readme_showcase/en/contact.png) | ![Contact Page JP](./public/images/readme_showcase/ja/contact.png) | ![Contact Page RU](./public/images/readme_showcase/ru/contact.png) |

</details>

<details>
<summary><h2>💡 What This Project Demonstrates</h2></summary>

- App Router–first Next.js architecture
- Complex i18n with dynamic routes
- Type-safe JSON-driven content systems
- Performance optimization for fonts, images, and JS bundles
- Practical UX decisions for content-heavy layouts
</details>

<details>
<summary><h2>📊 Project Stats</h2></summary>

- **6** detailed companion guides
- **3** languages fully localized (EN/JA/RU)  
- **100+** images optimized
- **90%** font size reduction (JP fonts, local WOFF2)
- **90+** Average Lighthouse performance score

> - Lighthouse audits conducted in production environment (Vercel)
> - Desktop performance: 90–100
> - Mobile performance: 80–90 (content-heavy pages)
> - Accessibility / Best Practices / SEO: consistently 100

![Lighthouse Performance](https://img.shields.io/badge/performance-80+%25-brightgreen)
![Lighthouse Accessibility](https://img.shields.io/badge/accessibility-100%25-brightgreen)
![Lighthouse Best Practices](https://img.shields.io/badge/best%20practices-100%25-brightgreen)
![Lighthouse SEO](https://img.shields.io/badge/seo-100%25-brightgreen)
</details>

<details>
<summary><h2>📈 Motivation</h2></summary>

This project was built as my first full Next.js App Router application to deeply understand:
- Internationalized routing at scale
- Data-driven dynamic pages
- Performance constraints with large localized assets (JP fonts, images)

I chose a real game system to avoid artificial demo logic and to simulate real-world complexity.

It was an important project for me personally since I chose the game I did enjoy playing myself and it was an interesting journey to learn and actually build an image I had in my head and turn it into an actual "thing".
</details>

<details>
<summary><h2>🏗️ Architecture</h2></summary>

### Data Layer
- **Structure:** JSON files for all dynamic data
- **Rationale:** Started with TypeScript files but migrated to JSON for better performance with dynamic routing
- **Organization:** Separate JSON files for companions, weapons, and game data
- **Type Safety:** TypeScript interfaces for all JSON data structures

### Internationalization
- **Structure:** Namespaced translation files in `/messages/[locale]/`
- **Languages:** EN (English), JA (日本語), RU (Русский)
- **Organization:** Separated by feature/section to avoid monolithic files
- **Implementation:** Custom `request.ts` to load all namespaced translations

### Component Structure

```
lads-next/
├── src/
│ ├── app/                            # Next.js 16 App Router
│ │ ├── [locale]/                     # i18n routing (en/ja/ru)
│ │ │ ├── characters/                 # Dynamic companion pages
│ │ │ ├── contact/                    # Contact form
│ │ │ └── layout.tsx                  #  Root layout with navigation
│ │ ├── components/                   # React components
│ │ │ ├── side-nav/                   # Sidebar navigation
│ │ │ ├── loading-skeletons/          # Loading states
│ │ │ └── ...                         # Reusable UI components
│ │ ├── utils/                        # Utilities & helpers
│ │ │ ├── loaders/                    # Type-safe data loaders
│ │ │ └── types/                      # TypeScript interfaces
│ │ └── hooks/                        # Custom React hooks
│ ├── data/                           # All game data (JSON)
│ │ ├── characters/                   # Character metadata
│ │ ├── gameplay/                     # Companion gameplay guides
│ │ ├── skills/                       # Skill descriptions
│ │ └── weapons/                      # Weapon data
│ └── messages/                       # next-intl translations
│ ├── en/                             # English
│ ├── ja/                             # Japanese
│ └── ru/                             # Russian
├── public/                           # Static assets
│ ├── fonts/                          # Localized WOFF2 fonts
│ ├── images/                         # Game assets
│ │ ├── companions/                   # Character banners & icons
│ │ └── standard_weapons/             # Weapon images
│ └── ...                             # Icons etc
└── config files                      # Next.js, TypeScript configs
```

</details>

<details>
<summary><h2>🛠️ Key Features</h2></summary>

### 1. Dynamic Companion Guides
- Detailed character pages with protocores, skills, weapons, and gameplay tips
- Section navigation with smooth scrolling
- Back/Up buttons for easy navigation
- Responsive design for all screen sizes

### 2. Multi-language Search
- Real-time search using Fuse.js
- Locale-aware search functionality
- Lazy-loaded search module for performance
- Results displayed with relevant context

### 3. Image Optimization
- Dynamic image blocks with Lightbox integration
- Proper aspect ratio handling with `object-cover`
- Optimized loading for weapon/companion images
- WOFF2 font optimization for Japanese characters

### 4. Navigation System
- Main Navigation at top and Footer at the bottom of the page
- Left sidebar navigation for additional functions
- Section jump functionality
- Mobile-responsive navigation buttons
- Loading states and skeletons

</details>


<details>
<summary><h2>📦 Installation & Setup</h2></summary>

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
</details>

<details>
<summary><h2>🔖 Development Notes & Solutions</h2></summary>

### Challenges & Solutions

1. **Data Management**
   - **Problem:** TypeScript data files became too large and inflexible
   - **Solution:** Migrated to JSON files with TypeScript interfaces
   - **Benefit:** Better performance with dynamic routing

2. **Internationalization Scaling**
   - **Problem:** Single translation file became unmanageable
   - **Solution:** Namespaced JSON files per section
   - **Challenge:** Manual updates to `request.ts` for new files

3. **Component Organization**
   - **Problem:** Component folder became cluttered
   - **Solution:** Feature-based subfolders (skills, weapons, etc.)
   - **Result:** Better maintainability and easier navigation

4. **Performance Optimization**
   - **Japanese Fonts:** Converted to WOFF2 and hosted locally
   - **CSS Blocking:** Minimized font imports and optimized delivery
   - **Search:** Lazy-loaded Fuse.js to reduce initial bundle size
   - **Images:** Proper sizing with `fill` + `object-cover`

5. **Error Handling**
   - **Challenge:** Error pages with locale routing
   - **Solution:** Custom error components within locale folder
   - **Implementation:** Leveraged next-intl documentation

6. **UI/UX Improvements**
   - **Section Navigation:** Added detection for fully loaded sections
   - **Mobile Responsiveness:** Redesigned navigation for smaller screens
   - **Accessibility:** Proper focus management and keyboard navigation

### Performance Metrics
- **Font Optimization:** Reduced Japanese font size to 1.3Mb
- **Code Splitting:** Dynamic imports for heavy components
- **Image Optimization:** Proper formats and sizes for all assets
- **Search:** Lazy-loaded to improve initial page load

</details>

<details>
<summary><h2>🌍 Localization</h2></summary>

### Localization Transparency
- **English**: Original content (fluent proficiency)
- **Russian**: Self-translated (native proficiency)  
- **Japanese**: Self-translated with AI assistance for natural phrasing
  - N2-level foundation + AI refinement for game terminology
  - Non-game UI translations primarily self-created
  - All translations verified for accuracy

### Translation Structure
```
messages/
├── en/
│   ├── characters.json
│   ├── gameplay.json
│   ├── weapons.json
│   └── ...
├── ja/
└── ru/
```

### Adding New Languages
1. Create new locale folder in `/messages/` for each respective locale
2. Add locale to `i18n.ts` configuration
3. Update `routing.ts` and `request.ts` to add new locale and message paths
4. Add language switcher component in `LanguageSwitch.tsx`

NB: Translation keys for data-driven sections are located in `src/data`

</details>

<details>
<summary><h2>🎨 Styling & Design</h2></summary>

### Design System
- **Typography:** Local fonts with proper language fallbacks
- **Colors:** Theme-based with Tailwind classes
- **Spacing:** Consistent spacing scale
- **Components:** Reusable with variant props
### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

</details>

<details>
<summary><h2>⚙️ Testing & Quality</h2></summary>

### Development Tools
- ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for consistent styling
- Next.js built-in optimizations

### Performance Checks
- Lighthouse audits for PWA metrics
- DevTools Coverage for unused CSS/JS
- Image optimization verification
- Bundle size analysis

</details>

<details>
<summary><h2>📝 To-Do & Roadmap</h2></summary>

### Completed ✅
- [x] Multi-language support (EN/JA/RU)
- [x] Companion guide pages structure
- [x] Rafayel companion pages 6/6
- [x] No guide page for other companions
- [x] Weapon section
- [x] Gameplay section
- [x] Search functionality
- [x] Responsive design
- [x] Custom error pages (404, 500)
- [x] Loading states
- [x] Performance optimizations
- [x] Navigation improvements
- [x] Font optimization

### Future Improvements
- [ ] More companions and updates
- [ ] Login interface
- [ ] User accounts (for saving favorites)
- [ ] Comment section
- [ ] More battle related sections like Open Orbits etc

</details>

<details>
<summary><h2>⚡ Contributing</h2></summary>

1. Fork the repository
2. Create a feature branch
3. Make changes with proper TypeScript types
4. Test with multiple screen sizes
5. Ensure translations are updated for all languages (empty translation keys included)
6. Submit a pull request

### 📑 Translation Contributions
- Follow existing JSON structure
- Maintain consistent terminology
- Check glossary structure for the terms that might need explanation for the users
- Test with actual UI components
- Check for text overflow issues

</details>

<details>
<summary><h2>⚠️ Known Limitations</h2></summary>

- Data is static JSON
- Search is client-side only
- Content accuracy depends on community knowledge
- No automated tests yet (manual QA + Lighthouse used instead)
</details>


## 📄 License
This project is a fan-made guide for Love and Deepspace. All game assets and intellectual property belong to their respective owners. This guide is created for educational purposes under fair use.

## 🙏 Acknowledgments
- Love and Deepspace development team
- Community contributors and testers
- Open source libraries used in this project
- All players who provided feedback and suggestions

## 📨 Contact & Support
- **Suggestions:** Pull requests or discussions
- **Bug Reports:** Please include steps to reproduce
- **Email**: shigoto.el@gmail.com

---

**Note:** This is a fan project not affiliated with the official Love and Deepspace team. All game data is based on player experience and may not be 100% accurate to the latest game updates.

---

<div align="right">
<i>
First Uploaded: Feb 7, 2026 </br>
Last Updated: Feb 10, 2026
</div>