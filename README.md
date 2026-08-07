# Green-Infinity-Website# Green Infinity

## Official Website — Version 1.0

Green Infinity is a research group under the **Institute of Materials Research and Engineering (IMRE)** focused on sustainable materials, advanced processing technologies, biomaterials, and biomedical engineering.

The Green Infinity website provides an accessible and professional platform for presenting the group's research activities, team, publications, news, and opportunities for collaboration.

---

## Website

The website is designed for deployment through **GitHub Pages** and uses a lightweight, dependency-free front-end architecture based on:

* HTML5
* CSS3
* Vanilla JavaScript

No front-end framework is required.

---

## Research Areas

Green Infinity's research focuses on three primary areas.

### 1. Lignin-based Functional Materials

Research into functional materials derived from lignin, a renewable and underutilized component of biomass.

The work explores opportunities to transform lignin into value-added materials with useful functional properties and potential applications.

### 2. Lignocellulose Pretreatment and 3D Printing

Research into lignocellulosic biomass pretreatment and advanced manufacturing approaches, including 3D printing.

The objective is to develop sustainable material platforms and processing strategies that can make better use of renewable resources.

### 3. Biomedical Scaffolds for Tissue Engineering

Development of advanced scaffold materials for biomedical and tissue-engineering applications.

Research focuses on material functionality, processing and biological performance for potential biomedical applications.

---

## Team

### Dr. Kai Dan

**Team Leader**

Dr. Kai Dan's professional profile includes:

* Top 2% Scientist in Biomedical Engineering and Nanotechnology.
* 10 years' experience in sustainable materials synthesis, materials characterization and processing.
* 12 years solid research experience in biomaterials, biomedical engineering and consumer care products.

---

## Publications

Green Infinity publications are available through the team's Google Scholar profile.

**Google Scholar:**

https://scholar.google.com/citations?hl=en&user=jdz7kJIAAAAJ&view_op=list_works&sortby=pubdate

The publications section of the website provides a direct link to the profile so visitors can access the latest research outputs.

---

## Contact

For research enquiries, collaboration opportunities and scientific discussions:

**Email:** [kaid@a-star.edu.sg](mailto:kaid@a-star.edu.sg)

---

# Project Structure

```text
Green-Infinity/
│
├── index.html
├── README.md
├── LICENSE
├── robots.txt
├── sitemap.xml
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── images/
    ├── logo.png
    ├── hero.jpg
    ├── kaidan.jpg
    └── additional research images
```

---

# Local Development

The website is a static website and does not require a build system.

You can run it locally by opening:

```text
index.html
```

directly in a modern web browser.

For a more accurate development environment, a local HTTP server is recommended.

For example, if Python is installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

# GitHub Pages Deployment

The website can be deployed using GitHub Pages.

## 1. Create a repository

Create a GitHub repository for the website.

For example:

```text
Green-Infinity
```

---

## 2. Upload the project

Upload the project files while preserving the directory structure:

```text
index.html
README.md
LICENSE
robots.txt
sitemap.xml

css/
    styles.css

js/
    script.js

images/
    logo.png
    hero.jpg
    kaidan.jpg
```

---

## 3. Configure GitHub Pages

In the repository:

1. Open **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the main branch.
5. Select the `/ (root)` folder.
6. Click **Save**.

GitHub will then build and publish the static website.

---

# Image Requirements

The website expects the primary images to be located inside the `images` directory.

Required images include:

```text
images/logo.png
images/hero.jpg
images/kaidan.jpg
```

Additional research images can be added to the same directory.

When adding new images:

* Use descriptive filenames.
* Prefer `.webp` or optimized `.jpg` files where appropriate.
* Keep image dimensions appropriate for their intended use.
* Avoid unnecessarily large files.
* Use meaningful `alt` text in HTML.
* Compress images before uploading whenever possible.

---

# Performance

The website is designed with performance in mind.

Current optimizations include:

* Minimal external dependencies.
* No JavaScript frameworks.
* No CSS frameworks.
* Deferred JavaScript loading.
* Responsive images.
* Lazy loading for non-critical images.
* Reduced-motion support.
* Lightweight CSS.
* Browser-native APIs.
* Semantic HTML.

---

# Accessibility

Accessibility considerations include:

* Semantic HTML5 elements.
* Keyboard-accessible navigation.
* Skip-to-content link.
* Visible focus states.
* ARIA labels where appropriate.
* Accessible mobile navigation.
* Descriptive image alternative text.
* Reduced-motion support.
* Sufficient colour contrast.
* Proper form labels.
* Logical heading hierarchy.

---

# SEO

The website includes foundational SEO features including:

* Descriptive page title.
* Meta description.
* Relevant keywords.
* Search-engine indexing instructions.
* Open Graph metadata.
* Structured data using Schema.org.
* Semantic HTML.
* `robots.txt`.
* `sitemap.xml`.

---

# Browser Support

The website is designed for current versions of major modern browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Mobile Safari
* Chrome for Android

Some advanced visual effects may vary slightly between browsers.

---

# JavaScript

The website uses native browser JavaScript only.

The main JavaScript file provides:

* Responsive mobile navigation.
* Sticky header behaviour.
* Active navigation highlighting.
* Smooth scrolling.
* Scroll reveal animations.
* Back-to-top functionality.
* Dynamic copyright year.
* Contact-form validation.
* Accessibility-related interactions.

No JavaScript package manager is required.

---

# Contact Form

The current contact form uses the visitor's local email application through a `mailto:` action.

This approach works with a static GitHub Pages website without requiring a server-side backend.

For a future production deployment, the form can be connected to a dedicated form service or backend if required.

---

# Versioning

Current release:

```text
Version 1.0
```

Suggested future versions:

```text
Version 1.1
Version 1.2
Version 2.0
```

Major visual or structural changes should be tracked using Git commits and release tags.

---

# Recommended Git Workflow

Before making major changes:

```bash
git status
```

Create a meaningful commit:

```bash
git add .
git commit -m "Update Green Infinity website"
```

Push the changes:

```bash
git push
```

---

# Maintenance Guidelines

When updating the website:

1. Preserve the existing folder structure.
2. Avoid unnecessary dependencies.
3. Keep HTML semantic and accessible.
4. Keep CSS modular and organized.
5. Keep JavaScript dependency-free where practical.
6. Optimize images before uploading.
7. Test the website on desktop and mobile.
8. Check all navigation links after structural changes.
9. Update the sitemap when additional pages are introduced.
10. Test GitHub Pages deployment after major changes.

---

# Future Development

The Version 1.0 website provides a foundation for future expansion.

Potential future additions include:

* Dedicated research pages.
* Individual project pages.
* Full publication database.
* Research news and articles.
* Team member profiles.
* Research project galleries.
* Laboratory facilities.
* Collaboration information.
* Downloadable publications.
* Interactive research visualizations.
* Search functionality.
* Dedicated contact backend.
* Analytics.
* Additional accessibility improvements.

---

# License

See the [`LICENSE`](LICENSE) file for licensing information.

---

## Green Infinity

**Research • Materials • Innovation**

Green Infinity
Institute of Materials Research and Engineering (IMRE)

Email: [kaid@a-star.edu.sg](mailto:kaid@a-star.edu.sg)
