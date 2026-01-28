# Image Guidelines & Optimization

## Image Requirements

### Hero Background Image
**File:** `hero-bg.jpg`
- **Dimensions:** 1920x600px (minimum)
- **Size:** < 200KB (compressed)
- **Purpose:** Hero section background
- **Recommendation:** Traditional handloom weaving scene, textile patterns, or weaving loom
- **Format:** JPG for good compression

### Product Images

**Saree Images (4 files):**
- `sarees-1.jpg` - Traditional cotton saree
- `sarees-2.jpg` - Silk handloom saree
- `sarees-3.jpg` - Cotton silk blend saree
- `sarees-4.jpg` - Designer handloom saree

**Lungi Images (4 files):**
- `lungis-1.jpg` - Premium cotton lungi
- `lungis-2.jpg` - Striped cotton lungi
- `lungis-3.jpg` - Solid color lungi
- `lungis-4.jpg` - Patterned lungi

**Product Image Specifications:**
- **Dimensions:** 400x400px (square) for products page
- **Dimensions:** 600x400px for featured sections
- **Size:** < 100KB per image (compressed)
- **Format:** JPG (best for product photos)
- **Quality:** High resolution, clear, well-lit

## Image Sourcing Tips

### Where to Find Images

1. **Professional Photography**
   - Hire local photographer to shoot your actual products
   - Best for authenticity
   - Cost: ₹2,000-5,000 per session

2. **Stock Photos (Free/Paid)**
   - Unsplash.com - Free high-quality photos
   - Pexels.com - Free stock images
   - Pixabay.com - Free images
   - Shutterstock.com - Premium stock photos

3. **Stock Photo Keywords to Search**
   - "Handloom saree"
   - "Indian textile"
   - "Handwoven saree"
   - "Traditional Indian dress"
   - "Lungi"
   - "Weaving loom"
   - "Handcraft textiles"

## Image Optimization Tips

### Before Uploading

1. **Resize Images**
   ```
   Hero background: 1920x600px
   Product images: 400x400px or 600x400px
   ```

2. **Compress Images**
   - Use: TinyPNG.com, Compress.com
   - Target: < 100KB per product image
   - Hero: < 200KB

3. **Format Selection**
   - Product photos: JPG (80-85% quality)
   - Icons/logos: PNG
   - Animated: GIF or MP4

### Using Online Tools

**TinyPNG (tinypng.com)**
- Drag and drop images
- Automatically optimizes
- Download compressed versions

**ImageMagick (Command Line)**
```bash
convert input.jpg -quality 85 -resize 400x400 output.jpg
```

**FFMPEG (Convert Format)**
```bash
ffmpeg -i image.jpg -q:v 9 image_compressed.jpg
```

## Image Organization

```
/images
├── hero-bg.jpg          (1920x600px)
├── sarees-1.jpg         (400x400px)
├── sarees-2.jpg         (400x400px)
├── sarees-3.jpg         (400x400px)
├── sarees-4.jpg         (400x400px)
├── lungis-1.jpg         (400x400px)
├── lungis-2.jpg         (400x400px)
├── lungis-3.jpg         (400x400px)
└── lungis-4.jpg         (400x400px)
```

## Photo Composition Tips

### Saree Photography

**Good Composition:**
- Hang saree on a drying stand
- Lighting from front and side
- Show full length and drape
- Include border details
- Natural colors (not oversaturated)
- Clean white or neutral background

**Avoid:**
- Wrinkled sarees
- Poor lighting (shadows)
- Oversaturated colors
- Cluttered backgrounds

### Lungi Photography

**Good Composition:**
- Fold neatly in thirds
- Show fabric texture and pattern
- Flat lay on clean surface
- Natural lighting (morning/window light)
- Close-up of weave and pattern
- Show color variations if applicable

**Avoid:**
- Crumpled appearance
- Direct sunlight creating harsh shadows
- Artificial colors
- Out of focus images

## Mobile Optimization

Images display at different sizes:
- Mobile: 100% width, smaller
- Tablet: 50% width
- Desktop: Full product card

The CSS handles scaling automatically.

## SEO Image Optimization

### Alt Text Examples

```html
<!-- For Sarees -->
alt="Traditional handwoven cotton saree with intricate border design"

<!-- For Lungis -->
alt="Premium cotton lungi in traditional striped pattern"

<!-- For Hero -->
alt="Handloom weaving loom showing traditional textile craftsmanship"
```

### Image Naming Convention

```
❌ Bad:  image1.jpg, photo.jpg, pic123.jpg
✅ Good: traditional-cotton-saree-red.jpg
✅ Good: striped-lungi-blue-white.jpg
✅ Good: handloom-weaving-process.jpg
```

## Performance Impact

### File Size Impacts

```
Hero image: 200KB    = ~1 second load
Product images: 100KB each = ~0.3 seconds each
Total 9 images: ~1MB = ~2-3 seconds total

With compression:
Hero image: 80KB     = ~0.3 seconds load
Product images: 40KB each = ~0.1 seconds each
Total 9 images: ~450KB = ~1 second total
```

**Recommendation:** Compress all images to improve loading speed

## Backup & Updates

### Image Management

1. **Original Copies**
   - Keep high-res originals in separate folder
   - Store in cloud (Google Drive, OneDrive)
   - Backup annually

2. **Update Process**
   - Optimize new image
   - Upload to /images folder
   - Update product data if needed
   - Test on live site

3. **Image Versioning**
   ```
   images/
   ├── hero-bg-v1.jpg
   ├── hero-bg-v2.jpg (latest)
   └── sarees-1-v2.jpg
   ```

## Accessibility

### Image Alt Text

All images have alt text for:
- Screen readers (accessibility)
- SEO (image search)
- Loading failures (shows as text)

### Currently Used Alt Text

Update in respective page files:
- `src/pages/Home/Home.js`
- `src/pages/Products/Products.js`
- And others...

## Color Correction

### Ensuring Color Accuracy

1. **Lighting Consistency**
   - Shoot in similar lighting conditions
   - Use color checker card for consistency
   - Avoid mixed lighting (cool + warm)

2. **Post-Processing**
   - Use Lightroom/Photoshop for adjustments
   - Adjust exposure, contrast, saturation
   - Maintain natural color representation
   - Don't oversaturate colors

3. **White Balance**
   - Set correct white balance during shoot
   - Or correct in post-processing
   - Ensures colors look natural

## Recommended Tools

### Free Image Editors
- GIMP (gimp.org)
- Canva (canva.com)
- Pixlr (pixlr.com)

### Paid Options
- Adobe Lightroom ($10/month)
- Adobe Photoshop ($20/month)
- Affinity Photo ($70 one-time)

### Online Tools
- TinyPNG (tinypng.com) - Compression
- Pixlr (pixlr.com) - Editing
- Canva (canva.com) - Design
- ImageResizer (imageresizer.com) - Resize

## Quick Checklist

Before uploading images:

- [ ] Image is the correct size
- [ ] File is compressed (< 100KB)
- [ ] Image is sharp and clear
- [ ] Colors are accurate
- [ ] No watermarks visible
- [ ] Background is appropriate
- [ ] Image is cropped well
- [ ] File name is descriptive
- [ ] Alt text is ready
- [ ] Backup is saved

## Example Image Metrics

### Current Setup

```
Images per page:
- Home: 3 featured images
- Products: 8 product images
- About: 0 images (content-focused)
- Contact: 0 images (Google Maps instead)
- Bulk Enquiry: 0 images (form-focused)

Total: 11 images recommended
```

### File Size Budget

```
Recommended total: 1-1.5MB
- Hero: 80-120KB
- Each product: 40-60KB
- Others: As needed

Typical load time: 2-3 seconds on 4G
```

## Future Enhancements

### Coming Soon (Optional)

- Image gallery with lightbox
- Product image zoom
- Before/after sliders
- Image carousel on product page
- Video demonstrations
- 360-degree product views

## Need Help?

### Image Resources
- Free images: unsplash.com, pexels.com
- Compression: tinypng.com, compressor.io
- Editing: gimp.org, pixlr.com
- Design: canva.com

### Questions?
- Check image guidelines in README.md
- Review existing code examples
- Test locally before deploying

---

**Pro Tip:** Spend time getting good product photos. They're the most important visual element of your e-commerce presence!

*Last Updated: January 28, 2026*
