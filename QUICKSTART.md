# Quick Start Guide

## 5-Minute Setup

### Step 1: Install Dependencies
```bash
cd "d:\website\own website"
npm install
```

### Step 2: Add Your Images
Place these images in the `/images` folder:
- `hero-bg.jpg` - Hero section background
- `sarees-1.jpg`, `sarees-2.jpg`, `sarees-3.jpg`, `sarees-4.jpg` - Saree products
- `lungis-1.jpg`, `lungis-2.jpg`, `lungis-3.jpg`, `lungis-4.jpg` - Lungi products

### Step 3: Update Business Info
Open these files and replace placeholder details:

**File: `src/components/Header/Header.js`**
```javascript
const whatsappNumber = '919876543210'; // Change to your number
```

**File: `src/components/Footer/Footer.js`**
```javascript
const whatsappNumber = '919876543210';
const phoneNumber = '+91-9876543210';
const businessEmail = 'info@handloomheritage.com';
```

**File: `src/pages/Contact/Contact.js`**
```javascript
const businessPhone = '+91-9876543210';
const businessEmail = 'info@handloomheritage.com';
const businessAddress = 'Your actual address here';
const whatsappNumber = '919876543210';
```

### Step 4: Start Development
```bash
npm start
```

Your website will open at `http://localhost:3000`

## Customization Quick Tips

### Change Business Name
1. Go to `src/components/Header/Header.js`
2. Change "Handloom Heritage" to your business name
3. Update `public/index.html` title

### Change Colors
1. Open `src/styles/global.css`
2. Find `:root` section
3. Modify color values

### Add More Products
1. Open `src/pages/Products/Products.js`
2. Add to `products` array:
```javascript
{
  id: 9,
  name: 'Your Product',
  category: 'saree',
  fabric: 'Cotton',
  description: 'Description here',
  image: '/images/your-image.jpg'
}
```

### Update Business Hours
1. Go to `src/components/Footer/Footer.js`
2. Update hours in the code

## Key Features to Know

✅ **WhatsApp Integration**
- Pre-filled messages for inquiries
- Works on mobile and desktop
- No backend needed

✅ **Mobile Responsive**
- Automatically adapts to all screen sizes
- Tested on iPhone, Android, tablets

✅ **Product Filtering**
- Switch between Sarees and Lungis
- Click filter buttons on products page

✅ **Bulk Enquiry Form**
- Collects customer information
- Sends via WhatsApp with pre-filled message
- Form validation included

## File Structure Explained

```
src/
├── components/      → Reusable components (Header, Footer)
├── pages/          → Full page components (Home, Products, etc.)
├── styles/         → Global CSS styles
├── App.js          → Main app component with routing
└── index.js        → App entry point

public/
└── index.html      → HTML template

images/
├── hero-bg.jpg     → Hero section image
├── sarees-*.jpg    → Saree product images
└── lungis-*.jpg    → Lungi product images
```

## Testing Checklist

Before deploying, test:
- [ ] All pages load correctly
- [ ] Links work (internal and external)
- [ ] WhatsApp buttons work
- [ ] Forms submit properly
- [ ] Mobile view looks good
- [ ] Images load correctly
- [ ] Text is readable
- [ ] No console errors

## Common Issues & Solutions

**Images not showing?**
- Check filename spelling (case-sensitive)
- Ensure file is in `/images` folder
- Use path: `/images/filename.jpg`

**WhatsApp links not working?**
- Include country code: `919876543210` (India)
- Remove `+` or `-` from number
- Test on mobile device

**Styles look broken?**
- Clear browser cache (Ctrl+F5)
- Restart npm server
- Check CSS file syntax

**Form not submitting?**
- Verify WhatsApp number is correct
- Check browser console for errors
- Test on different device

## Deployment (One Command)

```bash
npm run build
```

Upload the `build` folder to your hosting provider.

## Need More Help?

See full documentation:
- `README.md` - Complete documentation
- `DEPLOYMENT.md` - Deployment guide
- Check code comments for detailed explanations

---

**Happy to help! Your website is ready to customize.** 🎉
