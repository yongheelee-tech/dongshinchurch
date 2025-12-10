# How to Add Custom Fonts to Your React Project

## Method 1: Using Local Font Files (Recommended for Custom Fonts)

### Step 1: Add Font Files
1. Place your font files in the `src/fonts/` folder
   - Supported formats: `.woff2` (best), `.woff`, `.ttf`, `.otf`
   - Example: `src/fonts/MyFont-Regular.woff2`

### Step 2: Add @font-face in CSS
Open `src/index.css` and add:

```css
@font-face {
  font-family: 'MyFont';
  src: url('./fonts/MyFont-Regular.woff2') format('woff2'),
       url('./fonts/MyFont-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'MyFont';
  src: url('./fonts/MyFont-Bold.woff2') format('woff2'),
       url('./fonts/MyFont-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Step 3: Update Tailwind Config
Open `tailwind.config.js` and add your font:

```js
fontFamily: {
  'sans': ['Noto Sans KR', 'sans-serif'],
  'custom': ['MyFont', 'sans-serif'], // Add your custom font
}
```

### Step 4: Use in Components
```jsx
<h1 className="font-custom">Your Text</h1>
```

---

## Method 2: Using Google Fonts (Already Set Up)

You're already using Google Fonts (Noto Sans KR). To add more:

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select fonts and copy the import URL
3. Add to `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

4. Update `tailwind.config.js`:

```js
fontFamily: {
  'sans': ['Noto Sans KR', 'sans-serif'],
  'yourfont': ['YourFont', 'sans-serif'],
}
```

---

## Method 3: Using CDN Links

Add to `index.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

---

## Font File Formats Explained

- **.woff2** - Best compression, modern browsers (recommended)
- **.woff** - Good compression, wide support
- **.ttf** - Larger file size, universal support
- **.otf** - Similar to TTF, sometimes better for design

**Best Practice**: Include both `.woff2` and `.woff` for maximum compatibility.

---

## Example: Complete Setup

1. **Font files structure:**
```
src/
  fonts/
    MyFont-Regular.woff2
    MyFont-Regular.woff
    MyFont-Bold.woff2
    MyFont-Bold.woff
```

2. **CSS (`src/index.css`):**
```css
@font-face {
  font-family: 'MyFont';
  src: url('./fonts/MyFont-Regular.woff2') format('woff2'),
       url('./fonts/MyFont-Regular.woff') format('woff');
  font-weight: 400;
  font-display: swap;
}
```

3. **Tailwind Config:**
```js
fontFamily: {
  'myfont': ['MyFont', 'sans-serif'],
}
```

4. **Use in component:**
```jsx
<p className="font-myfont">Hello World</p>
```

