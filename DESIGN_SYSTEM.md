# Daniel Binsted Portfolio - Design System

## Overview
This document outlines the design system implementation for the Daniel Binsted portfolio website, including color tokens and typography specifications.

---

## Color System

### Base Colors (HSL Format)
Defined in `src/app/globals.css`:

```css
--color-white: 0 0% 100%
--color-black: 0 0% 13%
--color-blue: 212 64% 55%
```

### Semantic Color Tokens
**IMPORTANT:** Always use semantic tokens in components, never use base colors directly.

```css
--primary: var(--color-blue)
--primary-foreground: var(--color-white)
--background: var(--color-black)
--foreground: var(--color-white)
```

### Usage in Components

**With Tailwind CSS:**
```jsx
// Background colors
<div className="bg-background">...</div>
<div className="bg-primary">...</div>

// Text colors
<p className="text-foreground">Text</p>
<p className="text-primary">Text</p>
<p className="text-primary-foreground">Text</p>
```

**With CSS Variables (if needed):**
```css
background-color: hsl(var(--background));
color: hsl(var(--foreground));
```

---

## Typography System

### Font Families

**Inter (Weight: 500 - Medium)**
- Used for headings and body text
- Loaded via Next.js font optimization

**IBM Plex Mono (Weight: 400 - Regular)**
- Used for supporting text and navigation
- Loaded via Next.js font optimization

### Typography Styles

#### H1 (Heading)
```
Font: Inter
Weight: 500
Size: 26px
Line Height: 1.2
Letter Spacing: -2%
```

**Usage:**
```jsx
<h1 className="text-h1">Heading Text</h1>
```

#### Body
```
Font: Inter
Weight: 500
Size: 14px
Line Height: 1.5
Letter Spacing: -2%
```

**Usage:**
```jsx
<p className="text-body">Body text</p>
```

**Note:** Body styles are applied to the `<body>` element by default, so all text inherits these styles unless otherwise specified.

#### Supporting Text / Navbar
```
Font: IBM Plex Mono
Weight: 400
Size: 14px
Line Height: 1.5
Letter Spacing: -5%
```

**Usage:**
```jsx
<span className="text-supporting">Supporting text</span>
```

### Tailwind Font Family Classes

You can also use Tailwind font family utilities:

```jsx
<div className="font-inter">Inter text</div>
<div className="font-mono">IBM Plex Mono text</div>
```

---

## Where Variables Are Defined

### 1. CSS Custom Properties
**Location:** `src/app/globals.css`
- Base color values (HSL)
- Semantic color tokens
- Typography variables (font family, size, weight, line-height, letter-spacing)
- Typography utility classes (`.text-h1`, `.text-body`, `.text-supporting`)

### 2. Tailwind Configuration
**Location:** `tailwind.config.ts`
- Color tokens mapped to Tailwind classes
- Font family utilities
- Extended theme configuration

### 3. Font Imports
**Location:** `src/app/layout.tsx`
- Google Fonts loaded via Next.js `next/font/google`
- Inter (weight: 500)
- IBM Plex Mono (weight: 400)

---

## Updated Components

### Components Using Design System

1. **Works Section** (`src/components/home/Works.tsx`)
   - Background: `bg-background` (black)
   - Text: `text-foreground` (white)
   - Typography: `text-h1` for headings, `text-body` for descriptions

2. **Body Element** (`src/app/globals.css`)
   - Default background: `hsl(var(--background))` (black)
   - Default text color: `hsl(var(--foreground))` (white)
   - Default typography: Body style (Inter, 14px, etc.)

---

## Adding New Colors

When the designer provides new colors:

1. **Add base color to `globals.css`:**
   ```css
   --color-new-color: [H] [S]% [L]%;
   ```

2. **Create semantic token if needed:**
   ```css
   --semantic-name: var(--color-new-color);
   ```

3. **Add to Tailwind config:**
   ```typescript
   colors: {
     "semantic-name": "hsl(var(--semantic-name))",
   }
   ```

4. **Use in components:**
   ```jsx
   <div className="bg-semantic-name text-semantic-name">
   ```

---

## Best Practices

1. **Always use semantic tokens**, not base colors
2. **Use typography utility classes** (`.text-h1`, `.text-body`, `.text-supporting`)
3. **If unsure which variable to use**, ask the designer
4. **Test changes** on the live development server
5. **Keep design system documentation updated** when adding new variables

---

## Design System Files

```
src/
├── app/
│   ├── globals.css          # CSS custom properties & utility classes
│   └── layout.tsx            # Google Fonts import
└── tailwind.config.ts        # Tailwind theme configuration
```

