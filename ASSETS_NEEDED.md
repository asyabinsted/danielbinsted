# Assets Required from Designer

## 🎨 Upload These 3 Files

### 1. Daniel Binsted Logo (Left Side)
**File Name:** `logo-daniel-binsted.svg`

**Upload Location:**
```
public/assets/logos/logo-daniel-binsted.svg
```

**Specifications:**
- Format: SVG
- Recommended width: ~150px (will scale proportionally)
- Color: White (to match design system)
- Should say "Daniel Binsted"

**Current Status:** ⚠️ Placeholder text SVG in place

---

### 2. Binsted Logomark (Center)
**File Name:** `logomark-binsted.svg`

**Upload Location:**
```
public/assets/logos/logomark-binsted.svg
```

**Specifications:**
- Format: SVG
- Recommended size: ~60x60px
- Color: White (to match design system)
- The creative "BINSTED" arrangement shown in reference image

**Current Status:** ⚠️ Placeholder text SVG in place

---

### 3. Daniel Binsted CV
**File Name:** `daniel-binsted-cv.pdf`

**Upload Location:**
```
public/assets/documents/daniel-binsted-cv.pdf
```

**Specifications:**
- Format: PDF
- Any size (will display in responsive modal)
- Standard CV/resume format

**Current Status:** ⚠️ Minimal placeholder PDF in place

---

## 📁 How to Upload

### Option 1: Drag & Drop (macOS Finder)
1. Open Finder and navigate to the project folder
2. Go to the appropriate subfolder:
   - For logos: `public/assets/logos/`
   - For PDF: `public/assets/documents/`
3. Drag your files into the folder
4. Replace the existing placeholder files

### Option 2: Terminal/Command Line
```bash
# From the project root directory
cp /path/to/your/logo-daniel-binsted.svg public/assets/logos/
cp /path/to/your/logomark-binsted.svg public/assets/logos/
cp /path/to/your/daniel-binsted-cv.pdf public/assets/documents/
```

---

## ✅ After Upload

The website will automatically use the new assets. You can verify by:

1. Opening browser to: `http://localhost:3000`
2. Checking that:
   - Left logo displays correctly
   - Center logomark displays correctly
   - Clicking "CV (pdf!)" shows your actual CV in the modal

**Note:** If changes don't appear immediately, hard refresh the browser:
- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

---

## 🔍 Full Paths Reference

```
/Users/asyabinsted/Documents/Daniel Binsted/
└── public/
    └── assets/
        ├── logos/
        │   ├── logo-daniel-binsted.svg    ← REPLACE THIS
        │   └── logomark-binsted.svg       ← REPLACE THIS
        └── documents/
            └── daniel-binsted-cv.pdf      ← REPLACE THIS
```

