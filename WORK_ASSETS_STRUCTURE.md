# Work Projects Asset Structure

## Overview
Each work project has its own dedicated folder using a **descriptive slug** based on the project title. This makes organization intuitive and scalable as your portfolio grows.

---

## ✅ NEW Improved Folder Structure

### Project-Specific Structure (Using Descriptive Slugs)

```
public/
├── assets/
│   ├── icons/                           # SHARED icons (back arrow, sound toggle)
│   │   ├── back-arrow-icon.svg         ✅ Uploaded
│   │   ├── sound-off-icon.svg          ✅ Uploaded
│   │   └── sound-on-icon.svg           ✅ Uploaded
│   │
│   └── works/                           # PROJECT-SPECIFIC assets
│       └── the-unknown-soldier/         # Slug based on project title
│           └── awards/
│               ├── work-01-award-01.svg ✅ Uploaded
│               ├── work-01-award-02.svg ✅ Uploaded
│               ├── work-01-award-03.svg ✅ Uploaded
│               ├── work-01-award-04.svg ✅ Uploaded
│               └── work-01-award-05.svg ✅ Uploaded
│
├── images/
│   └── works/                           # ONE folder for all work images
│       └── the-unknown-soldier/
│           └── unknown-soldier-placeholder.jpg ✅ Uploaded
│
└── videos/
    └── works/
        └── the-unknown-soldier/
            └── unknown-soldier-video.mp4 ✅ Uploaded
```

---

## Key Improvements Made

### ✅ Descriptive Slugs Instead of Numbers
**Before:** `work-01`, `work-02`, `work-03` (confusing as portfolio grows)  
**After:** `the-unknown-soldier`, `project-name` (clear and descriptive)

### ✅ Consolidated Image Folders
**Before:** Both `images/works/` and `images/work-pages/` (redundant)  
**After:** Only `images/works/` (one source of truth)

The same placeholder image is used:
- As video poster on work detail pages
- As thumbnail on the main Works section

### ✅ Removed Empty Folders
**Removed:** `/assets/awards/` (empty, not needed)  
**Kept:** Project-specific award folders under `/assets/works/[slug]/awards/`

---

## The Unknown Soldier ✅ COMPLETE

**URL:** `/work/the-unknown-soldier`  
**Slug:** `the-unknown-soldier`

### All Assets Organized:
- **Video:** `/public/videos/works/the-unknown-soldier/unknown-soldier-video.mp4` ✅
- **Placeholder:** `/public/images/works/the-unknown-soldier/unknown-soldier-placeholder.jpg` ✅
- **Awards (5):** `/public/assets/works/the-unknown-soldier/awards/work-01-award-0[1-5].svg` ✅
- **Shared Icons:** `/public/assets/icons/` ✅

---

## Adding New Work Projects

### Step 1: Choose a Descriptive Slug
Convert the project title to a URL-friendly slug:
- "The Unknown Soldier" → `the-unknown-soldier`
- "Urban Stories" → `urban-stories`
- "Beneath the Surface" → `beneath-the-surface`

**Rules:**
- All lowercase
- Replace spaces with hyphens
- Remove special characters
- Keep it descriptive and memorable

### Step 2: Create Folder Structure
```bash
# Replace [slug] with your project slug
mkdir -p public/assets/works/[slug]/awards
mkdir -p public/images/works/[slug]
mkdir -p public/videos/works/[slug]
```

**Example:**
```bash
mkdir -p public/assets/works/urban-stories/awards
mkdir -p public/images/works/urban-stories
mkdir -p public/videos/works/urban-stories
```

### Step 3: Upload Assets
- **Video:** `public/videos/works/[slug]/[descriptive-name]-video.mp4`
- **Placeholder:** `public/images/works/[slug]/[descriptive-name]-placeholder.jpg`
- **Awards (optional):** `public/assets/works/[slug]/awards/[slug]-award-[number].svg`

### Step 4: Update Data File
Edit `/src/lib/worksData.ts`:

```typescript
export const works: Record<string, WorkData> = {
  'the-unknown-soldier': {
    // ... existing data
  },
  'your-project-slug': {
    title: 'Your Project Title',
    metadata: 'Genre · Type',
    role: 'Your Role',
    videoSrc: '/videos/works/your-project-slug/video.mp4',
    posterSrc: '/images/works/your-project-slug/poster.jpg',
    credits: [
      'Director: Name',
      'Cinematographer: Name',
    ],
    location: 'Location',
    year: '2024',
    description: 'Project description...',
    link: 'https://vimeo.com/...',  // Optional
    awards: [  // Optional
      { src: '/assets/works/your-project-slug/awards/award-01.svg', alt: 'Award 1' },
    ],
  },
};
```

### Step 5: Update Works Listing
Edit `/src/components/home/Works.tsx`:

```typescript
const works = [
  {
    id: 1,
    slug: "the-unknown-soldier",
    title: "The Unknown Soldier",
    description: "Documentary · Short · Drama",
    thumbnail: "/images/works/the-unknown-soldier/unknown-soldier-placeholder.jpg",
  },
  {
    id: 2,
    slug: "your-project-slug",
    title: "Your Project Title",
    description: "Genre · Type",
    thumbnail: "/images/works/your-project-slug/poster.jpg",
  },
];
```

---

## File Naming Conventions

### Slugs (Folder Names)
- **Format:** `project-title-in-lowercase-with-hyphens`
- **Examples:** 
  - `the-unknown-soldier`
  - `urban-stories`
  - `beneath-the-surface`

### Videos
- **Format:** `[descriptive-name]-video.mp4`
- **Example:** `unknown-soldier-video.mp4`

### Images
- **Format:** `[descriptive-name]-placeholder.jpg`
- **Example:** `unknown-soldier-placeholder.jpg`

### Awards
- **Format:** `[slug]-award-[number].svg` or just `award-[number].svg`
- **Examples:** 
  - `work-01-award-01.svg`
  - `award-01.svg`

### Shared Icons
- **Format:** `[function]-icon.svg`
- **Examples:** `back-arrow-icon.svg`, `sound-on-icon.svg`

---

## Folder Structure Benefits

### ✅ Scalability
As your portfolio grows to 20, 50, 100+ projects, descriptive slugs remain clear:
- ❌ `work-47` - What was this?
- ✅ `the-unknown-soldier` - Instantly recognizable

### ✅ SEO Benefits
URLs are more descriptive:
- ❌ `/work/work-01`
- ✅ `/work/the-unknown-soldier`

### ✅ Easy Maintenance
Finding assets is intuitive:
- Want to update "The Unknown Soldier" video? 
- Go to `videos/works/the-unknown-soldier/`

### ✅ No Conflicts
Each project has isolated assets:
- Different projects can have different numbers of awards
- No naming conflicts between projects
- Easy to add/remove projects

---

## Shared vs Project-Specific Assets

### Shared Assets (`/assets/icons/`)
Used across **all work pages:**
- Back arrow button
- Sound toggle icons (on/off)
- Any universal UI elements

### Project-Specific Assets (`/assets/works/[slug]/`)
Unique to **each project:**
- Awards/laurels
- Project-specific graphics
- Anything that varies between projects

---

## URL Structure

### Work Detail Pages
Format: `/work/[slug]`

Examples:
- `/work/the-unknown-soldier`
- `/work/urban-stories`
- `/work/beneath-the-surface`

### Main Works Section
- Homepage: `/#works`
- Works section scrolls into view

---

## Testing the Page

### What to Verify:
- [ ] Navigate to `/work/the-unknown-soldier`
- [ ] Placeholder image loads first
- [ ] Video autoplays (muted) once loaded
- [ ] Click screen to pause/play
- [ ] Sound toggle works (icon swaps)
- [ ] Timer counts down during playback
- [ ] Progress bar animates
- [ ] "Information ↓" scrolls to description
- [ ] Awards display correctly
- [ ] Back button returns to Works section
- [ ] All interactions are smooth

### Troubleshooting:
**Page won't load?**
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check dev server is running
- Verify slug in URL matches slug in `worksData.ts`

**Assets not loading?**
- Check file paths match exactly (case-sensitive)
- Verify files exist in correct folders
- Check file extensions are correct (.mp4, .jpg, .svg)

**Video won't play?**
- Check video format (MP4 H.264 recommended)
- Try a different browser
- Check browser console for errors

---

## Current Status

### ✅ The Unknown Soldier
- Slug: `the-unknown-soldier`
- URL: `/work/the-unknown-soldier`
- All assets uploaded and organized
- Page fully functional
- Ready for testing

### 🔄 Future Projects
- Use the structure above
- Follow naming conventions
- Test each project thoroughly

---

## Migration Complete! 🎉

### What Changed:
1. ❌ Removed `work-01`, `work-02` numbering
2. ✅ Added descriptive slugs: `the-unknown-soldier`
3. ❌ Removed duplicate `work-pages` folder
4. ✅ Consolidated to single `works` folder
5. ❌ Removed empty `assets/awards` folder
6. ✅ Project-specific award folders only

### Benefits:
- More scalable as portfolio grows
- Better SEO with descriptive URLs
- Easier to maintain and find assets
- Clearer organization
- No confusion with numbered projects

---

## Next Steps

1. **Test the page:** Navigate to `/work/the-unknown-soldier` and verify everything works
2. **Hard refresh:** Clear browser cache if you see old data
3. **Check interactions:** Video, sound, timer, progress bar, scroll, back button
4. **Add more projects:** Follow the structure above when ready

Need help? Check the troubleshooting section or ask!
