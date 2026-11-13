# Tamilarasan | MERN Full-Stack Developer Portfolio

A responsive, high-performance developer portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

## 🚀 Key Features

- **Modern MERN Architecture**: Tailored for full-stack developer roles showcasing MongoDB, Express.js, React.js, and Node.js capabilities.
- **Categorized Skills Matrix**: Clear separation into Frontend, Backend, Database, and DevOps / Enterprise Systems with interactive tabs and proficiency indicators.
- **Featured Projects**:
  1. **E-Commerce Shopping Platform (Tapo-Trend)**: Complete MERN full-stack application with dynamic catalog, cart, checkout flow, and video walkthrough.
  2. **Internal Approval Request Management System (In Progress)**: Multi-tiered enterprise workflow management with interactive approval simulation, RBAC, and audit trail.
  3. **Hotel Management System**: Multi-room reservation system with responsive screenshot carousel modal.
  4. **Instagram Clone**: Interactive social feed prototype.
- **Dedicated Experience Section**: 3.2 years as Support Technician at **IFF Pvt Ltd** (under sub-contract with **Sri Venkateswara Enterprises**), highlighting enterprise systems uptime, hardware/software diagnostics, and operational SLA achievements.
- **Academic Milestones**: B.E. Computer Science & Engineering (2020), HSC (2016), and SSLC (2014).
- **Interactive Contact Hub**: Quick copy for email and phone numbers, direct WhatsApp chat, and message composer.
- **100% Mobile & Desktop Responsive**: Clean glassmorphism styling, zero horizontal scrolling issues, and smooth animations.

---

## 🛠️ Development & Build Commands

Inside this project directory, run:

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates optimized static production assets in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
PersonalWebsite/
├── public/                 # Static assets (images, videos, favicon)
│   ├── images/             # Profile & project screenshots
│   ├── videos/             # Project video recordings
│   └── favicon.svg         # Developer favicon
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Responsive header with mobile menu
│   │   ├── Hero.jsx        # Developer intro with floating badges
│   │   ├── About.jsx       # Professional journey & metrics
│   │   ├── Skills.jsx      # Categorized MERN & tools matrix
│   │   ├── Experience.jsx  # 3.2 Yrs at IFF Pvt Ltd (Sri Venkateswara Ent.)
│   │   ├── Projects.jsx    # E-Commerce, Approval System (In Progress), etc.
│   │   ├── ProjectModal.jsx# Interactive modal with video & carousels
│   │   ├── Education.jsx   # Academic background
│   │   ├── Contact.jsx     # Copy-to-clipboard contact hub & form
│   │   └── Footer.jsx      # Quick links & back-to-top
│   ├── data/
│   │   └── portfolioData.js# Centralized portfolio data
│   ├── App.jsx             # Main application layout
│   ├── main.jsx            # React root mount
│   └── index.css           # Tailwind directives & glassmorphism
├── legacy-backup/          # Safe backup of previous raw HTML/CSS files
├── index.html              # HTML entry point with modern fonts
├── tailwind.config.js      # Tailwind theme configuration
├── vite.config.js          # Vite server & build configuration
└── package.json            # Dependencies & scripts
```
