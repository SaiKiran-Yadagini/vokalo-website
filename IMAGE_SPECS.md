# Voxzen AI - Image Assets Specifications

## Required Images for SEO

### 1. Open Graph Image (og-image.png)
- **Size**: 1200 x 630 pixels
- **Format**: PNG or JPG
- **Design Elements**:
  - Voxzen AI logo (prominent)
  - Tagline: "Your YouTube, Every Language, Zero Effort"
  - Brand colors: #ff1a1a (red), #0a0404 (dark background)
  - Visual elements showing voice/audio waves
  - "AI Dubbing | Voice Cloning | Channel Management" text

### 2. Twitter Card Image (twitter-card.png)
- **Size**: 1200 x 630 pixels
- **Format**: PNG
- **Same as OG image or slightly modified**

### 3. Favicons

| File | Size | Format |
|------|------|--------|
| favicon-16x16.png | 16x16 | PNG |
| favicon-32x32.png | 32x32 | PNG |
| apple-touch-icon.png | 180x180 | PNG |
| android-chrome-192x192.png | 192x192 | PNG |
| android-chrome-512x512.png | 512x512 | PNG |
| android-chrome-maskable-192x192.png | 192x192 | PNG (with safe zone) |
| android-chrome-maskable-512x512.png | 512x512 | PNG (with safe zone) |
| mstile-70x70.png | 70x70 | PNG |
| mstile-150x150.png | 150x150 | PNG |
| mstile-310x310.png | 310x310 | PNG |
| mstile-310x150.png | 310x150 | PNG |
| safari-pinned-tab.svg | any | SVG (monochrome) |

### 4. Logo (logo.png)
- **Size**: 512 x 512 pixels
- **Format**: PNG with transparent background
- **Use**: Schema.org logo, email signatures

### 5. Screenshots for PWA

| File | Size | Use |
|------|------|-----|
| screenshot-wide.png | 1280x720 | Desktop preview |
| screenshot-mobile.png | 640x1136 | Mobile preview |

### 6. Shortcut Icons

| File | Size | Use |
|------|------|-----|
| shortcut-apply.png | 96x96 | PWA shortcut |
| shortcut-demos.png | 96x96 | PWA shortcut |

---

## Brand Guidelines

### Colors
- **Primary Red**: #ff1a1a
- **Dark Red**: #cc0000
- **Deep Red**: #8b0000
- **Background**: #0a0404
- **Text Light**: #e8d4d4
- **Gray**: #a3a3a3

### Fonts
- **Primary**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Logo Design
- V-shaped icon suggesting voice/video
- Gradient from #ff1a1a to #8b0000
- Glow effect for premium feel

---

## Image Generation Tools

You can use these tools to generate the images:
1. **Figma** - Design tool
2. **Canva** - Quick designs
3. **RealFaviconGenerator.net** - Favicon generation
4. **Adobe Express** - OG image templates

---

## Placement Instructions

1. Copy all generated images to `/public/` folder
2. Verify images load correctly with:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
