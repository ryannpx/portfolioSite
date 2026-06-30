# HCI Portfolio

A minimal HTML + CSS portfolio scaffold. **You write the styling** — this README walks you through content, CSS practice, and deployment.

## Quick start (preview locally)

Open `index.html` in your browser, or run a simple local server:

```bash
cd /Users/ryannpenrod/Desktop/personal/portfolioSite
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

---

## Phase 2: Replace placeholder content

Search all HTML files for `<!-- REPLACE:` and update each one. Work through this checklist:

### Personal info (all pages)

| What | Where |
|------|-------|
| Your full name | `index.html` hero, nav logo, footer; project page titles |
| Title line (e.g. "CS Student · HCI") | `index.html` `.hero-title` |
| Tagline | `index.html` `.hero-tagline` |
| Bio (2–3 sentences) | `index.html` `.bio-box` |
| Skills (4 items) | `index.html` `.skills-list` |
| Email | `index.html` nav + contact section |
| LinkedIn URL | `index.html` nav + contact |
| GitHub URL | `index.html` nav + contact |
| Copyright year + name | Footer on all pages |

### Images (`assets/images/`)

Add these files (names must match HTML `src` attributes, or update the paths):

| File | Used for |
|------|----------|
| `headshot.jpg` | Hero + About section |
| `research-screenshot.jpg` | Research project card + case study |
| `research-screenshot-2.jpg` | Research case study (second screenshot) |
| `personal-screenshot.jpg` | Personal app card + case study |
| `personal-screenshot-2.jpg` | Personal case study (second screenshot) |
| `banner.jpg` | Optional top banner (uncomment block in `index.html`) |

**Research screenshots:** redact PII (names, emails, IDs) before publishing.

### Resume (optional)

Place `assets/resume.pdf` and the Resume button on the homepage will work.

### Research project (`project-research.html`)

- Project title and one-line pitch
- Overview, role, HCI problem, process, outcomes
- Aggregate metrics only (e.g. "3,000+ users", "2 years") — no individual data
- Tech stack list
- Live link **only if your PI/advisor approves** — remove the link item if not

### Personal app (`project-personal.html`)

- App title and description
- HCI question you're exploring
- Built so far + what's next
- `Last updated: Month Year`
- GitHub / demo links if public

### Homepage project cards (`index.html` #projects)

Keep card text short (one line each). Details live on the case study pages.

---

## Phase 3: Styling (you code, get feedback)

Edit **`css/styles.css`** top to bottom. Each section has `/* === STEP N — your turn === */` comments with hints.

### Session 1 — Steps 1–3: Globals, Nav, Hero

**Step 1 — Global**

1. Add variables to `:root` in `styles.css` (colors, spacing, max-width).
2. Optional: add a Google Font in each HTML `<head>`:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
   ```

   Then set `--font-body: 'Inter', system-ui, sans-serif` and use it on `body`.

**Step 2 — Nav**

- Make `.site-header` sticky with a light background.
- Flex `.site-nav` so logo, links, and contact sit in a row.
- Style link hovers (underline or color change).

**Step 3 — Hero**

- Center everything in `.hero` with generous padding.
- Circular photo: already stubbed — tweak size and add a subtle border or shadow.
- Mute `.hero-title` and `.hero-tagline` with `color: var(--color-muted)`.

**Checkpoint:** Paste your CSS for Steps 1–3 and ask for feedback before moving on.

### Session 2 — Steps 4–6: About, Projects, Contact

**Step 4 — About**

- Two-column `.about-grid` (already stubbed) — refine gap and alignment.
- Style `.bio-box` with rounded corners and a soft gray background.
- Pill-style `.skills-list` items (partially stubbed).

**Step 5 — Projects**

- Pale accent bar on `.section-header`.
- Card hover effect: `transition` + `box-shadow` or `transform: translateY(-2px)`.
- Distinct badge colors for Research vs In Progress (stubbed — customize).

**Step 6 — Contact & footer**

- Center contact section; space out `.contact-links`.
- Subtle top border on `.site-footer`.

**Step 7 — Polish (when ready)**

- `@media (max-width: 768px)`: stack nav, hide `.nav-contact-label`, single-column about.
- `:focus-visible` on links (stub included — match your accent color).

**Checkpoint:** Share screenshots or CSS snippets for feedback after each session.

---

## Phase 4: Deploy on GitHub Pages

Git is initialized in this folder. Follow these steps:

### 1. Create a GitHub repository

- Go to [github.com/new](https://github.com/new)
- Name it `portfolio` (or `yourusername.github.io` for a user site at the root URL)
- Do **not** add a README (this repo already has one)

### 2. Push your code

```bash
cd /Users/ryannpenrod/Desktop/personal/portfolioSite
git add .
git commit -m "Initial portfolio scaffold"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your values.

### 3. Enable GitHub Pages

1. GitHub repo → **Settings** → **Pages**
2. **Source:** Deploy from branch
3. **Branch:** `main` → `/ (root)` → **Save**
4. Wait 1–2 minutes; your site will be at:
   - User site: `https://YOUR_USERNAME.github.io`
   - Project site: `https://YOUR_USERNAME.github.io/portfolio/`

### 4. Verify

- Open the live URL in a private/incognito window
- Click through both case study pages
- Test on your phone (responsive check)

### Alternatives

| Host | Best for |
|------|----------|
| **GitHub Pages** | Simplest for static HTML; no extra account |
| **Netlify** | Drag-and-drop deploy or connect same GitHub repo |
| **Cloudflare Pages** | Same as Netlify; fast CDN |

---

## File structure

```
portfolioSite/
├── index.html
├── project-research.html
├── project-personal.html
├── css/styles.css
├── assets/images/
└── README.md
```

## Showcasing your work

- **Research platform:** Lead with impact (thousands of users, 2 years). Case study = process + HCI story, not code dump.
- **Personal HCI app:** Honest "In Progress" badge + last-updated date shows active work.

Ask for a CSS review anytime by sharing what you tried in `styles.css`.
