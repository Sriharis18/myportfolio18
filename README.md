# Srihari S – Personal Portfolio Website

A modern, high-performance, and fully responsive personal developer portfolio website engineered for **Internship Task 1**.

Built using **HTML5 Semantic Elements**, **CSS3 (Custom Properties, Flexbox, Grid, Modern Micro-Animations)**, and **Vanilla JavaScript (ES6+)**. Fully accessible (WCAG 2.2 AA compliant), featuring seamless dark/light theme switching, responsive layouts from 375px mobile to 4K ultra-wide, and populated strictly from **Srihari S's verified resume**.

---

## 🌟 Live Demo & Preview

- **Live URL (GitHub Pages):** [https://sriharis18.github.io/Portfolio/](https://sriharis18.github.io/Portfolio/)
- **Repository:** [https://github.com/sriharis18/portfolio](https://github.com/sriharis18)
- **Official Resume (Downloadable):** Located in `assets/docs/Srihari_S_Resume.pdf`

---

## 📱 Responsive Screenshots

Verified on Chrome at Desktop, Tablet, and Mobile viewport standards:

| Device Viewport | Section Captured | File Location |
| :--- | :--- | :--- |
| **Desktop (1280px+)** | Hero & Introduction | `assets/screenshots/desktop_1280px_hero.png` |
| **Desktop (1280px+)** | Featured Project Cards | `assets/screenshots/desktop_1280px_projects.png` |
| **Tablet (768px)** | Hero & Navigation | `assets/screenshots/tablet_768px_hero.png` |
| **Tablet (768px)** | Responsive Project Cards | `assets/screenshots/tablet_768px_projects.png` |
| **Mobile (375px)** | Mobile Hero Layout | `assets/screenshots/mobile_375px_hero.png` |
| **Mobile (375px)** | Animated Drawer Menu Open | `assets/screenshots/mobile_375px_menu_open.png` |
| **Mobile (375px)** | Mobile Project Cards View | `assets/screenshots/mobile_375px_projects.png` |
| **Interactive Modal** | Full Project Case Study Modal | `assets/screenshots/project_modal_case_study.png` |

---

## 📂 Project Structure

```text
portfolio/
├── index.html                   # Semantic HTML5 markup with accessible landmarks
├── style.css                    # Design system, CSS variables, dark/light themes, animations
├── script.js                    # Vanilla JS: themes, mobile drawer, modal, validation, filters
├── README.md                    # Project documentation, setup, and deployment guide
└── assets/
    ├── favicon.svg              # Custom high-res SVG brand icon
    ├── docs/
    │   └── Srihari_S_Resume.pdf # Original verified resume PDF
    ├── images/
    │   ├── professional pic.jpeg      # Professional portrait headshot
    │   ├── style-kart-preview.jpg     # Style Kart boutique e-commerce mockup
    │   ├── cbs-college-preview.jpg    # CBS college web portal with AI chatbot mockup
    │   ├── analytics-preview.jpg      # Shopping behaviour analytics system dashboard mockup
    │   └── nivratech-preview.jpg      # NivraTech tech studio & client website mockup
    └── screenshots/             # Responsive testing proof captures
        ├── desktop_1280px_hero.png
        ├── desktop_1280px_projects.png
        ├── tablet_768px_hero.png
        ├── tablet_768px_projects.png
        ├── mobile_375px_hero.png
        ├── mobile_375px_menu_open.png
        ├── mobile_375px_projects.png
        └── project_modal_case_study.png
```

---

## 🚀 Key Features Implemented

### 1. Responsive Navigation Header
- Sticky navigation bar with subtle backdrop blur and elevation on scroll.
- Animated mobile hamburger menu with smooth slide-in drawer and click-outside backdrop dismiss.
- Dark / Light mode toggle switch with persistent `localStorage` preference and OS `prefers-color-scheme` fallback.
- Smooth scrolling to all section targets with appropriate sticky header offset.
- Active navigation link indicator highlighting the current section using `IntersectionObserver`.
- Quick-access "Resume" download pill directly in the header.

### 2. Hero Section
- Dynamic role rotator cycling through: *Front-End Developer*, *Software Developer*, *MCA Scholar @ CBS Hubli*, *Full-Stack Web Builder*, *React & Python Enthusiast*, and *NivraTech Co-Founder*.
- Live status badge: `Available for Front-End & Software Developer Roles`.
- Direct action CTAs: `Explore My Work` (scrolls to projects) and `Download Resume` (links to actual `assets/docs/Srihari_S_Resume.pdf`).
- Verified contact & social chips: GitHub, LinkedIn, direct email, and phone number (+91-8073754161).
- Profile visual with glowing rotating ambient ring and floating interactive stat badges (React/JS, BCA 8.31 CGPA, NivraTech 2026).

### 3. About Me Section
- Authentic professional objective extracted from resume.
- Comprehensive education narrative covering current **MCA (2025–2027)** and **BCA (2022–2025, CGPA 8.31/10)** at Chetan Business School (CBS), Hubli.
- Highlight cards detailing full-stack expertise, commercial client delivery via NivraTech, cloud certifications, and technical club leadership.
- Language proficiencies: English (Proficient) and Kannada (Native).

### 4. Technical Skills Matrix
- Interactive category filter tabs:
  - `All Skills`
  - `Frontend & UI` (HTML5, CSS3, JavaScript, React.js, Bootstrap)
  - `Backend & APIs` (Python, Node.js, Java Servlets & JSP, Django, Flask)
  - `Databases & Cache` (MySQL, MongoDB, SQL Server, Redis & Celery)
  - `Tools & DevOps` (Git & GitHub, VS Code, NetBeans, Apache Tomcat, Windows & Linux Ubuntu)
  - `Core CS & Analytics` (Data Structures & Algorithms, OOP, DBMS, Computer Networks, Pandas & Chart.js)
- Skill cards with category labels, descriptions grounded in actual projects, and hover micro-animations. No fabricated percentages.

### 5. Featured Projects
Extracted faithfully from resume with real architecture details:
1. **Style Kart – Home Boutique Online Store**
   - *Tech:* React.js, Node.js, MySQL, HTML5, CSS3, JavaScript.
   - *Features:* Replaced WhatsApp status selling with a complete digital storefront, product browsing, dynamic price filtering, address management, and admin dashboard with secure image upload validation (JPG, JPEG, PNG).
2. **CBS College Website Redesign with AI Chatbot**
   - *Tech:* Java, JSP, Servlets, MySQL, HTML5, CSS3, Apache Tomcat.
   - *Features:* Online admissions, contact management, session management, and an AI-powered FAQ chatbot answering admission, fee, and course questions 24/7.
3. **Online Shopping Behaviour Analysis System**
   - *Tech:* Python, Flask, MySQL, Redis, Celery, Pandas, Chart.js.
   - *Features:* High-speed pipeline processing 100,000+ transaction records, Apriori association rules, RFM analysis, and real-time revenue analytics dashboard.
4. **NivraTech Client Digital Platform**
   - *Tech:* HTML5, CSS3, JavaScript, UI/UX.
   - *Features:* Co-founded NivraTech and successfully built and deployed a production website for a commercial client.
5. **CBS Cafeteria Management System (PWA)**
   - *Tech:* PWA, Service Workers, JavaScript, Local Storage.
   - *Features:* Progressive Web App for campus cafeteria ordering and contactless token generation, actively demonstrated at Chetan Business School.

### 6. Interactive Project Modal
- Evaluators can click `Quick View` or `Full Case Study` on any project to launch an accessible dialog displaying the project domain, problem solved, architecture details, technologies leveraged, and outcomes.
- Closes via close button, clicking outside backdrop, or pressing the `Escape` key.

### 7. Education & Experience Timeline
- Dual-column chronological layout:
  - **Academic Education:** MCA (2025–2027), BCA (2022–2025, 8.31 CGPA), 12th PUC Commerce (2020–2022, 81.33%).
  - **Ventures & Leadership:** Co-Founder at NivraTech (2026), Core Member at Web Wave Club CBS (organized Spark Tank 2026), Hackathon participant (UI Master Line, HackLite, HackLite 2.0).

### 8. Certifications & Achievements
- **Microsoft Azure Cloud Certification (2026):** Microsoft Learn in collaboration with FICE.
- **Scaler Master Certification (2026):** DevOps, Cloud Computing, and Cyber Security.
- **NivraTech Co-Founding (2026):** Commercial client website delivery.
- **CBS Cafeteria PWA:** Campus-wide operational demo.

### 9. Contact Section & Interactive Form
- Direct contact details with one-click copy buttons for email (`sriharis.mca@gmail.com`) and phone (`+918073754161`).
- Client-side validated form (Name, Email, Subject, Message) with real-time feedback, character counter, and accessible error alerts.
- Dedicated button `Open in Mail App` which pre-populates the visitor's mail client with the entered subject and message via `mailto:`.
- Saves submitted messages to `localStorage` for offline review.

### 10. Accessibility & Performance
- WCAG 2.2 AA compliant contrast ratios in both light and dark modes.
- Keyboard navigable with clear `:focus-visible` focus rings.
- Skip-to-content landmark link.
- Respects `prefers-reduced-motion` media queries.
- Zero external CSS/JS framework dependencies. Sub-second initial load.

---

## 🛠️ Local Development & Setup

You can run this project locally using any simple HTTP server or directly in your browser:

### Option A: VS Code Live Server (Recommended)
1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension (`ritwickdey.liveserver`).
3. Right-click on `index.html` and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/`.

### Option B: Node.js `npx serve` / `http-server`
```bash
# Navigate to the portfolio directory
cd portfolio

# Run a local web server
npx -y serve ./
# OR
npx -y http-server -p 8080
```
Open `http://localhost:3000` or `http://localhost:8080`.

### Option C: Python Built-In Server
```bash
# In the portfolio directory
python -m http.server 8000
```
Open `http://localhost:8000`.

---

## 📸 Updating Resume, Avatar, or Project Images

### How to Update Your Resume File
1. Replace `assets/docs/Srihari_S_Resume.pdf` with your updated PDF file.
2. Keep the filename as `Srihari_S_Resume.pdf` so all download links in the header, hero, contact section, and footer continue to resolve automatically without code changes.

### How to Update Your Profile Picture
1. Save your new photo as `assets/images/professional pic.jpeg`.
2. The portfolio will automatically display the new picture.

### How to Update Project Screenshots
- Replace `assets/images/style-kart-preview.jpg`
- Replace `assets/images/cbs-college-preview.jpg`
- Replace `assets/images/analytics-preview.jpg`
- Replace `assets/images/nivratech-preview.jpg`
(Recommended 16:9 aspect ratio, e.g. 1280x720px).

---

## 🌐 Deployment Instructions

### 1. Deploying to GitHub Pages (Free & Fast)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Task 1: Complete Responsive Personal Portfolio"
   git branch -M main
   git remote add origin https://github.com/sriharis18/Portfolio.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then click **Save**.
5. Your portfolio will be live at `https://sriharis18.github.io/Portfolio/` within 1–2 minutes!

### 2. Deploying to Netlify
1. Go to [netlify.com](https://www.netlify.com/) and log in.
2. Drag and drop the `portfolio` folder into the Netlify dashboard.
3. Your site is deployed immediately with a free HTTPS URL (e.g., `https://srihari-portfolio.netlify.app`).

### 3. Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel` or log into [vercel.com](https://vercel.com).
2. Run `vercel` inside the `portfolio` directory and follow the prompts.
3. Your site will be deployed with global CDN distribution.

---

## 📄 License & Credits
Designed and engineered for **Task 1: Build a Premium Responsive Personal Portfolio Website**.
&copy; 2026 Srihari S. All rights reserved.
