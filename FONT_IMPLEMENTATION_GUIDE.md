# Font Implementation Guide for Ekta Gandhi Website

## Overview
This guide shows you how to implement different font combinations throughout your website. You can choose from several options based on your preference.

## Font Options Available

### 1. **Current Font: Outfit (Recommended to Keep)**
- **Headers & Body**: `font-outfit`
- **Style**: Modern, clean, professional
- **Best For**: Contemporary, tech-savvy audience

### 2. **Harvard Style: Canela Deck Web + GT America Standard**
- **Headers**: `font-canela-deck` (serif - elegant, prestigious)
- **Body**: `font-gt-america` (sans-serif - clean, readable)
- **Best For**: Academic prestige, traditional institutions

### 3. **Brown University Style: Source Sans Pro + Merriweather**
- **Headers**: `font-merriweather` (serif - academic, professional)
- **Body**: `font-source-sans` (sans-serif - modern, accessible)
- **Best For**: Modern academic institutions

### 4. **Alternative Option 1: Merriweather + Poppins**
- **Headers**: `font-merriweather` (serif - academic)
- **Body**: `font-poppins` (sans-serif - friendly, modern)
- **Best For**: Friendly academic environment

### 5. **Alternative Option 2: Roboto Condensed + Inter**
- **Headers**: `font-roboto-condensed` (condensed - modern, tech-focused)
- **Body**: `font-inter` (sans-serif - excellent readability)
- **Best For**: Modern, tech-focused audience

### 6. **Alternative Option 3: Poppins + Roboto**
- **Headers**: `font-poppins` (sans-serif - friendly, modern)
- **Body**: `font-roboto` (sans-serif - highly readable)
- **Best For**: Contemporary, friendly audience

## How to Implement

### Step 1: Choose Your Font Combination
Decide which combination you prefer from the options above.

### Step 2: Update CSS Classes
Replace the font classes throughout your components. Here are the main areas to update:

#### Headers (H1, H2, H3)
```jsx
// Current
className="font-outfit text-h1 lg:text-h1-lg"

// Harvard Style
className="font-canela-deck text-h1 lg:text-h1-lg"

// Brown Style
className="font-merriweather text-h1 lg:text-h1-lg"

// Alternative Options
className="font-merriweather text-h1 lg:text-h1-lg"
className="font-roboto-condensed text-h1 lg:text-h1-lg"
className="font-poppins text-h1 lg:text-h1-lg"
```

#### Body Text
```jsx
// Current
className="font-outfit text-body lg:text-body-lg"

// Harvard Style
className="font-gt-america text-body lg:text-body-lg"

// Brown Style
className="font-source-sans text-body lg:text-body-lg"

// Alternative Options
className="font-poppins text-body lg:text-body-lg"
className="font-inter text-body lg:text-body-lg"
className="font-roboto text-body lg:text-body-lg"
```

### Step 3: Update Global CSS
In `src/index.css`, change the global body font:

```css
/* For Harvard Style */
body {
  font-family: 'Georgia', 'Times New Roman', serif; /* Canela Deck fallback */
}

/* For Brown Style */
body {
  font-family: 'Inter', 'Arial', sans-serif; /* Source Sans fallback */
}

/* For Alternative Options */
body {
  font-family: 'Merriweather', serif; /* or your chosen header font */
}
```

## Component-by-Component Implementation

### 1. **Navbar** (`src/components/navbar.jsx`)
```jsx
// Logo text
<span className="text-black font-semibold text-xs sm:text-sm font-canela-deck">LogoLogoLogo</span>

// Navigation links
<Link className="font-canela-deck text-button lg:text-button-lg">Find Counselor</Link>

// Button text
<span className="font-gt-america text-button lg:text-button-lg">Login</span>
```

### 2. **Home Header** (`src/components/Home/Header.jsx`)
```jsx
// Main title
<h1 className="font-canela-deck text-h1 lg:text-h1-lg leading-tight text-black">
  Smart College Counselling Powered by Real Experience
</h1>

// Search placeholder
<span className="text-[#5B7C99] font-gt-america text-body lg:text-body-lg flex-1">
  Search
</span>
```

### 3. **Home Steps** (`src/components/Home/Steps.jsx`)
```jsx
// Section title
<h2 className="text-h2 lg:text-h2-lg font-normal text-black font-canela-deck leading-tight">
  Get started in 3 simple steps
</h2>

// Step titles
<h3 className="text-black font-canela-deck font-normal leading-tight mb-4 sm:mb-6 text-h3 lg:text-h3-lg">
  {step.title}
</h3>
```

### 4. **Counselor Cards** (`src/components/Home/Counselors.jsx`)
```jsx
// Counselor names
<h3 className="font-canela-deck font-normal text-black mb-2 text-h3 lg:text-h3-lg leading-[100%]">
  {counselor.name}
</h3>

// Descriptions
<p className="font-gt-america font-normal text-black text-body lg:text-body-lg leading-relaxed">
  {counselor.description}
</p>
```

### 5. **Forms** (`src/components/Register/Register.jsx`, `src/components/Contact/Contact.jsx`)
```jsx
// Form titles
<h1 className="text-h1 lg:text-h1-lg font-normal text-gray-900 font-canela-deck">
  Create an Account
</h1>

// Labels
<label className="block text-body lg:text-body-lg font-normal text-gray-700 font-gt-america">
  Full Name*
</label>

// Input text
<input className="font-gt-america text-sm sm:text-base" />
```

## Quick Implementation Script

If you want to quickly implement a font combination across the entire website, you can use this approach:

### Option A: Global CSS Override
```css
/* In src/index.css */
body {
  font-family: 'Georgia', 'Times New Roman', serif; /* Your chosen body font */
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Merriweather', serif; /* Your chosen header font */
}
```

### Option B: Tailwind CSS Classes
Update your `tailwind.config.js` to make your chosen fonts the default:
```js
fontFamily: {
  'sans': ['Inter', 'Arial', 'sans-serif'], // Your body font
  'serif': ['Merriweather', 'Georgia', 'serif'], // Your header font
}
```

## Testing Your Font Choice

1. **View Font Samples**: Visit `/font-samples` to see all options
2. **Test on Different Devices**: Check how fonts look on mobile, tablet, and desktop
3. **Check Readability**: Ensure text is easy to read at all sizes
4. **Brand Consistency**: Make sure fonts align with your brand identity

## Our Recommendations

1. **Keep Current (Outfit)**: If you want modern, clean, and professional
2. **Harvard Style**: If you want academic prestige and tradition
3. **Brown Style**: If you want modern academic with excellent readability
4. **Merriweather + Poppins**: If you want friendly academic environment
5. **Poppins + Roboto**: If you want contemporary and highly readable

## Need Help?

If you need assistance implementing your chosen fonts or want to see more examples, let me know which combination you prefer, and I can help you implement it throughout the entire website!
