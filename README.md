# Daniel Binsted Portfolio Website

Portfolio website for Daniel Binsted - Director/Editor/Cinematographer

## Prerequisites

Before running this project, you need to have Node.js installed on your system.

### Installing Node.js

**On macOS:**
```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/
```

**On Windows/Linux:**
Download and install from [https://nodejs.org/](https://nodejs.org/)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Upload Placeholder Images

The designer should upload the following placeholder images to their respective folders:

#### Cover Section
- **File:** `cover-placeholder.jpg`
- **Location:** `public/images/cover/`
- **Full path:** `public/images/cover/cover-placeholder.jpg`

#### Works Section (Thumbnails)
- **File:** `works-placeholder.jpg`
- **Location:** `public/images/works/`
- **Full path:** `public/images/works/works-placeholder.jpg`

#### Footer Section
- **File:** `footer-placeholder.jpg`
- **Location:** `public/images/footer/`
- **Full path:** `public/images/footer/footer-placeholder.jpg`

#### About Page
- **File:** `about-placeholder.jpg`
- **Location:** `public/images/about/`
- **Full path:** `public/images/about/about-placeholder.jpg`

#### Work Detail Pages
- **File:** `work-01-placeholder.jpg`
- **Location:** `public/images/work-pages/`
- **Full path:** `public/images/work-pages/work-01-placeholder.jpg`

- **File:** `work-02-placeholder.jpg`
- **Location:** `public/images/work-pages/`
- **Full path:** `public/images/work-pages/work-02-placeholder.jpg`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
danielbinsted/
├── public/                      # Static assets
│   ├── images/                 # Image assets
│   │   ├── cover/             # Cover section images
│   │   ├── works/             # Works section thumbnails
│   │   ├── about/             # About page images
│   │   ├── footer/            # Footer section images
│   │   └── work-pages/        # Individual work detail images
│   └── videos/                # Video assets
│       └── works/             # Work-related videos
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx          # Main page (Cover + Works + Footer)
│   │   ├── about/            # About page (separate route)
│   │   │   └── page.tsx
│   │   ├── work/             # Work detail pages
│   │   │   └── [slug]/       # Dynamic routes for each work
│   │   │       └── page.tsx
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/            # React components
│   │   ├── home/             # Home page components
│   │   │   ├── Cover.tsx    # Cover/Hero section
│   │   │   ├── Works.tsx    # Works grid section
│   │   │   └── Footer.tsx   # Footer section
│   │   └── work/             # Work-related components
│   └── lib/                   # Utility functions and helpers
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies
```

## Page Structure

### Main Page (`/`)
The main page consists of three sections, all on a single page:
1. **Cover Block** - Hero section with main image
2. **Works Block** - Grid of portfolio work thumbnails
3. **Footer Block** - Contact information and footer image

### About Page (`/about`)
Separate page with biography and information about Daniel Binsted

### Work Detail Pages (`/work/[slug]`)
Individual pages for each portfolio piece, displaying:
- High-resolution images
- Project details
- Self-hosted video content (when available)

## Video Optimization

This project is configured to handle self-hosted video content efficiently:
- Optimized video loading
- Multiple format support (MP4, WebM, OGV)
- Responsive video players

## Image Optimization

Next.js Image component is used throughout for:
- Automatic image optimization
- Responsive images
- Lazy loading
- AVIF and WebP format support

## Design Specifications

Design specifications including colors, fonts, spacing, and detailed layouts will be provided in future tasks. The current implementation uses placeholder styling with Tailwind CSS.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image Optimization:** Next.js Image component
- **Deployment Ready:** Vercel, Netlify, or any Node.js hosting

## Future Development

- Custom design implementation (colors, fonts, layouts)
- Content management system integration
- Animation and transitions
- SEO optimization
- Performance enhancements

