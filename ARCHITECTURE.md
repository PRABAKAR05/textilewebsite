# Project Architecture & Structure Guide

Visual guide to the Handloom Heritage website architecture.

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser (index.html)                      │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              React Application Root                    │ │
│  │                   (App.js)                             │ │
│  │                                                        │ │
│  │  ┌──────────────┐                                    │ │
│  │  │   Header     │  Navigation & Logo                │ │
│  │  └──────────────┘                                    │ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────┐        │ │
│  │  │         React Router                      │        │ │
│  │  │  ┌──────┐  ┌──────────┐  ┌───────┐      │        │ │
│  │  │  │ Home │  │ Products │  │ About │ ...  │        │ │
│  │  │  └──────┘  └──────────┘  └───────┘      │        │ │
│  │  └──────────────────────────────────────────┘        │ │
│  │                                                        │ │
│  │  ┌──────────────┐                                    │ │
│  │  │   Footer     │  Contact & Links                  │ │
│  │  └──────────────┘                                    │ │
│  └────────────────────────────────────────────────────┘ │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## 📂 Complete Directory Tree

```
handloom-textiles/
│
├── 📄 Configuration Files
│   ├── package.json              (Dependencies & scripts)
│   ├── .env.example              (Environment template)
│   └── .gitignore               (Git ignore - auto generated)
│
├── 📂 public/                   (Static assets)
│   └── index.html               (HTML entry point)
│
├── 📂 src/                      (Source code)
│   │
│   ├── App.js                   (Main app routing)
│   ├── index.js                 (React DOM render)
│   │
│   ├── 📂 components/           (Reusable components)
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   │
│   ├── 📂 pages/                (Full page components)
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Products/
│   │   │   ├── Products.js
│   │   │   └── Products.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── BulkEnquiry/
│   │   │   ├── BulkEnquiry.js
│   │   │   └── BulkEnquiry.css
│   │   └── Contact/
│   │       ├── Contact.js
│   │       └── Contact.css
│   │
│   └── 📂 styles/               (Global styles)
│       └── global.css           (Color palette & utilities)
│
├── 📂 images/                   (User-provided assets)
│   ├── hero-bg.jpg
│   ├── sarees-1.jpg → sarees-4.jpg
│   └── lungis-1.jpg → lungis-4.jpg
│
├── 📂 build/                    (Generated on build)
│   └── [optimized production files]
│
└── 📄 Documentation Files
    ├── README.md                (Complete documentation)
    ├── QUICKSTART.md            (5-minute setup)
    ├── DEPLOYMENT.md            (Deployment guide)
    ├── IMAGE_GUIDELINES.md      (Image optimization)
    ├── CHECKLIST.md             (Pre-launch checklist)
    ├── PROJECT_SUMMARY.md       (Project overview)
    └── FILE_MANIFEST.md         (This file)
```

## 🔄 Data Flow

```
User Interaction
       │
       ▼
   Component
       │
       ├─► State Update (useState)
       │
       ├─► Event Handler
       │
       ├─► WhatsApp API Call / Form Submit
       │
       ▼
   External Service (WhatsApp / Email)
```

## 🎯 Page Structure

### Home Page
```
┌─────────────────────────┐
│       Header            │
├─────────────────────────┤
│   Hero Section          │ (Background image + text)
│   - Heading             │
│   - Subheading          │
│   - CTA Buttons         │
├─────────────────────────┤
│  Highlights Section     │ (4 cards)
│  - Pure Cotton & Silk   │
│  - Direct from Weavers  │
│  - Bulk & Retail Orders │
│  - Trusted Since Years  │
├─────────────────────────┤
│ Featured Products       │ (2 featured cards)
│  - Sarees              │
│  - Lungis              │
├─────────────────────────┤
│ CTA Section             │ (Call to action)
├─────────────────────────┤
│      Footer             │
└─────────────────────────┘
```

### Products Page
```
┌─────────────────────────┐
│       Header            │
├─────────────────────────┤
│   Page Header           │ (Title + Description)
├─────────────────────────┤
│   Filter Section        │ (3 buttons)
│  [All] [Sarees] [Lungis]│
├─────────────────────────┤
│  Products Grid          │ (Responsive - 1/2/3/4 cols)
│  ┌─────┬─────┬─────┐   │
│  │ P1  │ P2  │ P3  │   │
│  └─────┴─────┴─────┘   │
│  ┌─────┬─────┬─────┐   │
│  │ P4  │ P5  │ P6  │   │
│  └─────┴─────┴─────┘   │
├─────────────────────────┤
│ CTA Section             │
├─────────────────────────┤
│      Footer             │
└─────────────────────────┘
```

### Bulk Enquiry Page
```
┌─────────────────────────┐
│       Header            │
├─────────────────────────┤
│   Page Header           │
├─────────────────────────┤
│  ┌──────────┬──────────┐│
│  │          │          ││
│  │   Form   │ Info     ││
│  │          │ Cards    ││
│  │ • Name   │ • Bulk   ││
│  │ • Phone  │   Order  ││
│  │ • City   │   Benefits│
│  │ • Product│ • Our    ││
│  │ • Qty    │   Approach│
│  │ • Message│ • Why    ││
│  │ • Submit │   Choose ││
│  │          │          ││
│  └──────────┴──────────┘│
├─────────────────────────┤
│  Alt Contact Methods    │
│  [WhatsApp] [Phone]     │
│  [Email]                │
├─────────────────────────┤
│      Footer             │
└─────────────────────────┘
```

## 🎨 Component Hierarchy

```
<App>
  │
  ├─ <Header>
  │   ├─ <Link> to each page
  │   ├─ <button> menu toggle
  │   └─ <a> WhatsApp
  │
  ├─ <main>
  │   │
  │   ├─ <Home>
  │   │   ├─ Hero section
  │   │   ├─ Highlights (4 cards)
  │   │   ├─ Featured products (2 cards)
  │   │   └─ CTA section
  │   │
  │   ├─ <Products>
  │   │   ├─ Filter buttons
  │   │   ├─ Product grid (8 cards)
  │   │   └─ CTA section
  │   │
  │   ├─ <About>
  │   │   ├─ Story section
  │   │   ├─ Value cards (4)
  │   │   ├─ Experience stats (4)
  │   │   ├─ Why choose list
  │   │   └─ Commitment section
  │   │
  │   ├─ <BulkEnquiry>
  │   │   ├─ Enquiry form
  │   │   │   ├─ Name input
  │   │   │   ├─ Phone input
  │   │   │   ├─ City input
  │   │   │   ├─ Product select
  │   │   │   ├─ Quantity input
  │   │   │   ├─ Message textarea
  │   │   │   └─ Submit button
  │   │   ├─ Info cards (3)
  │   │   └─ Alt contact methods
  │   │
  │   └─ <Contact>
  │       ├─ Contact cards (4)
  │       ├─ Google Maps embed
  │       ├─ Business hours
  │       ├─ Quick contact buttons
  │       └─ FAQ section (6 items)
  │
  └─ <Footer>
      ├─ About section
      ├─ Quick links
      ├─ Contact info
      └─ Business hours
```

## 🌐 Routing Map

```
/                    ← Home Page
│
├─ /products         ← Products Page
│
├─ /about            ← About Us Page
│
├─ /bulk-enquiry     ← Bulk Enquiry Page
│
└─ /contact          ← Contact Page

External Links:
├─ WhatsApp (wa.me/919876543210)
├─ Phone (tel:+91-9876543210)
└─ Email (mailto:info@...)
```

## 📱 Responsive Breakpoint Behavior

```
Mobile (< 480px)
├─ Single column layout
├─ Full-width buttons
├─ Hamburger menu
└─ Stacked cards

Tablet (480-768px)
├─ 2-column grid
├─ Sidebar navigation
├─ Medium buttons
└─ 2-column cards

Laptop (768-1024px)
├─ 2-3 column grid
├─ Full navigation
├─ Normal spacing
└─ 3-column cards

Desktop (> 1024px)
├─ 3-4 column grid
├─ Full navigation
├─ Optimal spacing
└─ 4-column cards
```

## 💾 State Management

```
Component Level State:
├─ <Home>
│   └─ No state (static)
│
├─ <Header>
│   └─ menuOpen (boolean)
│
├─ <Products>
│   └─ activeFilter (string: 'all'|'saree'|'lungi')
│
├─ <BulkEnquiry>
│   ├─ formData (object)
│   │   ├─ name
│   │   ├─ phone
│   │   ├─ city
│   │   ├─ productType
│   │   ├─ quantity
│   │   └─ message
│   └─ submitted (boolean)
│
└─ <Contact>
    └─ No state (static)
```

## 🎨 CSS Architecture

```
Global Styles (global.css)
├─ Color Palette
│   ├─ Primary: #8B1538
│   ├─ Gold: #D4AF37
│   ├─ Cream: #F4E4C1
│   └─ ... more colors
│
├─ Typography
│   ├─ Headings (Georgia serif)
│   ├─ Body (Segoe UI sans-serif)
│   └─ Responsive sizes
│
├─ Reusable Classes
│   ├─ .container
│   ├─ .grid
│   ├─ .shadow
│   └─ utilities
│
└─ Responsive Media Queries
    ├─ 1024px breakpoint
    ├─ 768px breakpoint
    └─ 480px breakpoint

Component Styles
├─ Header.css
├─ Footer.css
├─ Home.css
├─ Products.css
├─ About.css
├─ BulkEnquiry.css
└─ Contact.css
```

## 🔗 External Integrations

```
WhatsApp Integration
└─ https://wa.me/{phone}?text={message}
    ├─ Header: Direct message link
    ├─ Home: Inquiry CTA
    ├─ Products: Product inquiry
    ├─ BulkEnquiry: Form submission
    └─ Contact: Direct messaging

Google Maps
└─ iframe embed on Contact page

Meta Tags (SEO)
├─ Title
├─ Description
├─ Keywords
└─ Theme color

CSS
├─ Google Fonts (optional)
├─ Local fonts
└─ Font Awesome (emoji used instead)
```

## 🚀 Build & Deployment Flow

```
Development
└─ npm start
    └─ Localhost:3000

Production Build
└─ npm run build
    └─ /build folder (optimized)
        └─ Minified JS/CSS
        └─ Optimized assets
        └─ index.html

Deployment
└─ Upload /build to hosting
    ├─ Netlify
    ├─ Vercel
    ├─ GitHub Pages
    ├─ Traditional hosting
    └─ AWS S3 + CloudFront
```

## 📊 Performance Optimization

```
Image Optimization
├─ Hero: 1920x600 → 150KB
└─ Products: 400x400 → 40KB each

Code Splitting
├─ react-router handles lazy loading
├─ Each page loads on demand
└─ Better initial load

Caching
├─ Browser caching
├─ Service worker ready
└─ Static assets cached

Compression
├─ Gzip enabled
├─ CSS minified
└─ JS minified
```

## 🔐 Security Architecture

```
Data Protection
├─ No sensitive data in code
├─ Environment variables ready
├─ HTTPS recommended
└─ No API keys exposed

Form Security
├─ Client-side validation
├─ WhatsApp submission (no backend)
├─ No database storage
└─ Privacy focused

Content Security
├─ No external scripts
├─ Content Security Policy ready
└─ Secure image delivery
```

---

## Summary

This architecture provides:
- ✅ **Scalable structure** - Easy to add pages/components
- ✅ **Responsive design** - Works on all devices
- ✅ **Performance** - Fast loading with optimized assets
- ✅ **Maintainability** - Clean code organization
- ✅ **Security** - No sensitive data exposed
- ✅ **SEO** - Semantic HTML and meta tags

---

*For more details, see README.md*

**Last Updated: January 28, 2026**
