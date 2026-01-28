# Deployment Guide - Handloom Heritage Website

This guide covers deploying the Handloom Heritage website to various platforms.

## Pre-Deployment Checklist

- [ ] All images are optimized and placed in `/images` folder
- [ ] WhatsApp number is updated throughout the site
- [ ] Business information is current (address, phone, email)
- [ ] Meta tags in `public/index.html` are updated
- [ ] All links and URLs are correct
- [ ] Tested on mobile devices
- [ ] Google Analytics setup (optional)
- [ ] Google Business Profile updated

## Local Build

```bash
npm run build
```

This creates an optimized production build in the `/build` folder.

## Deployment Options

### 1. Netlify (Recommended)

**Benefits:**
- Free HTTPS
- Automatic deployments from Git
- Free tier includes custom domain
- Excellent performance

**Steps:**

1. Create account at [netlify.com](https://netlify.com)
2. Connect your GitHub/GitLab repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

**Environment Variables:**
- Go to Site settings → Build & deploy → Environment
- Add your `.env` variables

### 2. Vercel

**Benefits:**
- Made by Next.js creators
- Excellent performance
- Free tier available
- Automatic HTTPS

**Steps:**

1. Create account at [vercel.com](https://vercel.com)
2. Import your Git repository
3. Click Deploy (auto-detected React app)
4. Configure environment variables if needed

### 3. GitHub Pages

**Benefits:**
- Free hosting
- Directly from GitHub

**Steps:**

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/handloom-heritage"
   ```

2. Install gh-pages:
   ```bash
   npm install gh-pages --save-dev
   ```

3. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Traditional Web Hosting (cPanel, etc.)

**Steps:**

1. Build locally:
   ```bash
   npm run build
   ```

2. Upload `build` folder contents to `public_html` via FTP

3. Configure `.htaccess` for React routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. Ensure server has Node.js or use pre-built static files

### 5. AWS S3 + CloudFront

**Steps:**

1. Create S3 bucket
2. Build locally: `npm run build`
3. Upload `build` folder to S3
4. Create CloudFront distribution
5. Configure bucket for static website hosting
6. Point domain via Route 53

### 6. Docker Deployment

**Create `Dockerfile`:**

```dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build"]
```

**Build and run:**

```bash
docker build -t handloom-heritage .
docker run -p 3000:3000 handloom-heritage
```

## Post-Deployment

### 1. SEO Setup

- [ ] Add Google Search Console property
- [ ] Submit sitemap
- [ ] Verify domain ownership
- [ ] Monitor search performance

### 2. Google Analytics

Add to `public/index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 3. Google Business Profile

- [ ] Create/update Google Business profile
- [ ] Add business information
- [ ] Add products and services
- [ ] Encourage customer reviews

### 4. Domain Setup

**Nameserver Configuration:**

1. Point your domain nameservers to hosting provider
2. Wait for DNS propagation (24-48 hours)
3. Verify domain ownership in hosting panel

**SSL Certificate:**

- Most platforms provide free SSL (HTTPS)
- Verify it's enabled in settings
- Test at https://www.sslshopper.com

### 5. Performance Optimization

**Lighthouse Score Check:**
1. Visit deployed site
2. Right-click → Inspect → Lighthouse
3. Audit performance
4. Fix any issues

**Image Optimization:**
- Use compressed images
- Consider WebP format
- Use lazy loading

### 6. Monitoring

Set up monitoring for:
- Website uptime (Uptime Robot)
- Performance metrics (Google Analytics)
- Error tracking (Sentry)

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No sensitive data in code
- [ ] Regular backups scheduled
- [ ] DDoS protection enabled (Cloudflare)
- [ ] Regular security updates

## Troubleshooting

### Routes not working
- Configure server to serve `index.html` for all routes
- Update `.htaccess` for Apache servers
- Check hosting provider's documentation

### Images not loading
- Verify image paths are correct
- Check file extensions (case-sensitive)
- Ensure images are in `/images` folder
- Use absolute paths: `/images/filename.jpg`

### Performance issues
- Compress images
- Enable gzip compression
- Use CDN for static assets
- Enable caching headers

### WhatsApp links not working
- Verify phone number format (include country code)
- Test on mobile device
- Ensure WhatsApp is installed
- Check URL encoding

## Scaling

For high traffic:
- [ ] Use CDN (Cloudflare, CloudFront)
- [ ] Enable caching
- [ ] Use image compression
- [ ] Monitor resource usage
- [ ] Consider upgrading hosting tier

## Backup & Recovery

- [ ] Regular GitHub commits
- [ ] Backup database if used later
- [ ] Document all changes
- [ ] Keep deployment logs

## Rollback Procedure

1. Go to hosting dashboard
2. Select previous deployment
3. Click "Rollback"
4. Verify site is working
5. Investigate issue in new version

---

**Need Help?**
- Check hosting provider's documentation
- Review error logs in hosting dashboard
- Test locally before deploying changes
- Contact hosting provider support
