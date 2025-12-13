# Style Guide

This project follows the utility-first philosophy of **Tailwind CSS** combined with the pre-designed components of **DaisyUI**.

## Core Principles
1.  **Don't reinvent the wheel**: Use DaisyUI components (`btn`, `card`, `input`, `modal`) before creating custom styles.
2.  **Utility Classes**: Use Tailwind utilities for layout (`flex`, `grid`), spacing (`p-4`, `m-2`), and sizing.
3.  **Theming**: We use DaisyUI themes. Define global colors in `tailwind.config.js` or `app.css` (e.g., `primary`, `secondary`, `accent`).

## Component Examples

### Buttons
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-ghost">Secondary Action</button>
<button class="btn btn-error btn-sm">Delete</button>
```

### Cards
```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Content goes here.</p>
  </div>
</div>
```

### Forms
```html
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">What is your name?</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</label>
```

## Icons
- We use SVG strings directly in components or Lucide/Heroicons (if added).
- Keep icons consistent in stroke width and size.

## File Structure
- `src/app.css`: Global styles and Tailwind imports.
- `src/routes/+layout.svelte`: Global layout structure.

## Customizing Styles

### Colors (The Easy Way)
This project includes a built-in **Theme Editor**.
1.  Navigate to `/styles` (e.g., `http://localhost:5173/styles`).
2.  Use the color pickers to adjust the palette.
3.  Toggle "Light/Dark" to edit each mode independently.
4.  Click **Save** to write changes to `src/app.css` automatically.
5.  Click **Restore** to reset to the project defaults (`src/lib/theme-defaults.ts`).

### Colors (The Manual Way)
To manually change the palette:
1.  Open `src/app.css`.
2.  Locate the `@plugin "daisyui/theme"` blocks.
    - `saasstartertheme`: Dark Mode
    - `saasstartertheme-light`: Light Mode
3.  Modify the CSS variables (e.g., `--color-primary`, `--color-base-100`).

Example `src/app.css`:
```css
@plugin "daisyui/theme" {
  name: "saasstartertheme"; /* Dark */
  default: true;
  --color-primary: #42a1fa;
  /* ... */
}

@plugin "daisyui/theme" {
  name: "saasstartertheme-light"; /* Light */
  /* ... */
}
```

### Fonts
To change fonts:
1.  Import your font in `src/app.html` (e.g., from Google Fonts).
2.  Set the font family in `src/app.css` using Tailwind v4 theme variables.

Example:
```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui;
}
```

