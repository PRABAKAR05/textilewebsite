# Handloom Heritage - Traditional Textiles Business Website

A modern, elegant, and mobile-responsive business website for an authentic Indian textiles business specializing in handloom sarees and premium lungis.

## 🎨 Website Features

### Pages Included
- **Home**: Hero section with featured collections and key highlights
- **Products**: Grid-based product showcase with filtering (Sarees & Lungis)
- **About Us**: Company story, values, and commitment to quality
- **Bulk Enquiry**: Form for wholesale orders and bulk purchases
- **Contact**: Multiple contact methods, business hours, and FAQ

### Key Features
✅ Mobile-first responsive design
✅ Fast loading with optimized images
✅ SEO-friendly HTML structure
✅ WhatsApp integration for inquiries
✅ Beautiful traditional color palette (Maroon, Gold, Cream)
✅ Smooth animations and hover effects
✅ Plain CSS (no frameworks)
✅ Accessibility-focused

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Routing**: React Router DOM
- **Styling**: Plain CSS (no Tailwind, Bootstrap)
- **Icons**: Unicode/Emoji
- **Build Tool**: Create React App

## 📁 Project Structure

```
handloom-textiles/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── pages/
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
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── images/
│   ├── hero-bg.jpg
│   ├── sarees-1.jpg
│   ├── sarees-2.jpg
│   ├── sarees-3.jpg
│   ├── sarees-4.jpg
│   ├── lungis-1.jpg
│   ├── lungis-2.jpg
│   ├── lungis-3.jpg
│   └── lungis-4.jpg
├── package.json
└── README.md
```

## 🎯 Color Palette

```
Primary Maroon: #8B1538
Dark Maroon: #5C1A35
Light Maroon: #B71C4A
Gold: #D4AF37
Cream: #F4E4C1
Light Cream: #FFE4B5
Earth Tone: #E8D4B0
Background Light: #F9F7F4
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add images to the public folder**
   - Place all product and hero images in the `/images` folder
   - Required images:
     - `hero-bg.jpg` (1920x600px recommended)
     - `sarees-1.jpg`, `sarees-2.jpg`, `sarees-3.jpg`, `sarees-4.jpg`
     - `lungis-1.jpg`, `lungis-2.jpg`, `lungis-3.jpg`, `lungis-4.jpg`

3. **Update WhatsApp Number**
   - Find all instances of `919876543210` in the codebase
   - Replace with your actual WhatsApp business number (include country code, no + or spaces)
   - Files to update: `Header.js`, `Footer.js`, `Home.js`, `Products.js`, `BulkEnquiry.js`, `Contact.js`

4. **Update Business Information**
   - Update contact details in:
     - `Footer.js`: Phone, email
     - `Contact.js`: Full address, phone, email
     - `public/index.html`: Meta tags and title

5. **Start development server**
   ```bash
   npm start
   ```
   The site will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Laptop**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for description and keywords
- Optimized heading hierarchy
- Fast loading images (compressed recommended)
- Mobile-friendly design
- Accessible ARIA labels

## 🎨 Design Features

### Typography
- **Headings**: Georgia (traditional serif font)
- **Body**: Segoe UI (clean sans-serif)

### Animations
- Smooth fade-in and slide-up animations
- Hover effects on cards and buttons
- Smooth transitions on all interactive elements

### Accessibility
- Keyboard navigation support
- Focus visible styles
- Proper heading hierarchy
- Alt text for all images
- Form labels for all inputs

## 📞 WhatsApp Integration

The website includes pre-filled WhatsApp messages:
- **Quick Inquiry**: From products page
- **General Inquiry**: From home page
- **Bulk Enquiry**: From bulk enquiry form with pre-filled details
- **Contact**: From contact page

## 🏢 Business Information

The website is pre-configured for a textile business. Update the following:

**Contact Details** (in `Footer.js`, `Contact.js`, `Header.js`):
- Phone: +91-9876543210
- Email: info@handloomheritage.com
- WhatsApp: 919876543210
- Address: Textile Market, Traditional Weavers District

**Business Hours** (in `Footer.js`, `Contact.js`):
- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 9:00 AM - 4:00 PM
- Sunday: Closed

## 🎯 Key Pages Overview

### Home Page
- Hero section with call-to-action
- Featured collections (Sarees & Lungis)
- Trust highlights
- WhatsApp inquiry button

### Products Page
- Filter by product type
- Grid layout with product cards
- Product images and descriptions
- WhatsApp inquiry for each product
- Alternative inquiry button

### About Us Page
- Company story
- Core values
- Experience statistics
- Why choose us section
- Commitment statement

### Bulk Enquiry Page
- Enquiry form with validation
- Pre-filled WhatsApp message
- Alternative contact methods
- Benefits and approach sections

### Contact Page
- Contact information cards
- Google Maps embed
- Business hours
- Quick contact buttons
- FAQ section

## 📊 Performance Tips

1. **Image Optimization**
   - Compress images to reduce file size
   - Use responsive image sizes
   - Use modern formats (WebP for newer browsers)

2. **Caching**
   - Enable browser caching
   - Use service workers for offline support

3. **Code Splitting**
   - Consider lazy loading routes for larger apps
   - Use React.lazy() for code splitting

## 🔒 Security Notes

- Ensure HTTPS is enabled on production
- Validate all form inputs
- Use environment variables for sensitive data
- Keep React and dependencies updated

## 📝 Customization Guide

### Adding Products
Edit `src/pages/Products/Products.js` and add to the `products` array:

```javascript
{
  id: 9,
  name: 'Product Name',
  category: 'saree' | 'lungi',
  fabric: 'Material Type',
  description: 'Product description',
  image: '/images/product-image.jpg'
}
```

### Changing Colors
Update the color palette in `src/styles/global.css`:

```css
:root {
  --primary-color: #YourColor;
  --gold: #YourGold;
  /* ... other colors */
}
```

### Adding Pages
1. Create new folder in `src/pages/`
2. Create `.js` and `.css` files
3. Add route to `App.js`
4. Add navigation link to `Header.js`

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy the 'build' folder
```

### Vercel
```bash
npm run build
# Connect repository to Vercel
```

### Traditional Hosting
```bash
npm run build
# Upload 'build' folder to web server
# Configure server to serve index.html for all routes
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This website template is provided as-is for use with traditional textile businesses.

## 📞 Support

For questions or issues, contact via:
- WhatsApp: +91-9876543210
- Email: info@handloomheritage.com
- Phone: +91-9876543210

---

**Built with ❤️ for Handloom Heritage - Celebrating Traditional Indian Textile Art**
#   t e x t i l e w e b s i t e  
 #   t e x t i l e w e b s i t e  
 