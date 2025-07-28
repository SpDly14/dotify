
# Dotify 🎯  
**Custom Cursor System for the Modern Web**

Dotify is a customizable, animated cursor system built with vanilla JavaScript and CSS. It enhances UX with expressive states like hover, loading, grab, success, error, magic, and more — all responsive to user interaction and theme-aware.

![dotify demo](https://your-demo-image-or-gif-url.com)

---

## ✨ Features

- 🎨 **Multiple Cursor States**: hover, active, text, grab, move, zoom, loading, error, success, magic...
- 🌗 **Dark & Light Mode Support**: via `prefers-color-scheme` or `[data-theme]` attribute
- ⚡ **Smooth Animations**: hardware-accelerated transitions
- 🧠 **Auto Detection**: reacts to roles, attributes, and classes
- 🔌 **Zero Dependencies**: just plug-and-play
- 🛠️ **Developer API**: full control over cursor state

---

## 📦 Installation

### ➤ Quick Start (via CDN)

Include the following in your `<head>`:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/your-username/dotify@latest/core.css" />

<!-- JS -->
<script src="https://cdn.jsdelivr.net/gh/your-username/dotify@latest/core.js" defer></script>
```

> ✅ Replace `your-username` with your GitHub username once the repo is public.

---

## 🚀 Usage

Dotify initializes automatically and handles most use cases out of the box.

### Common States (auto-detected):

| State        | Trigger Selectors |
|--------------|-------------------|
| `hover`      | `a`, `button`, `.btn`, `.cursor-hover` |
| `text`       | `input`, `textarea`, `[contenteditable]` |
| `grab`       | `[draggable]`, `.draggable`, `.cursor-grab` |
| `loading`    | `.loading`, `[data-loading="true"]` |
| `error`      | `.error`, `[aria-invalid="true"]` |
| `success`    | `.success`, `.cursor-success` |
| `magic`      | `.magic`, `.cursor-magic` |
| ...          | See full list in [`core.js`](./core.js) |

---

## 🧪 API Usage

```js
// Set cursor to a custom state
ProfessionalCursorAPI.setState('loading');

// Temporarily flash a state
ProfessionalCursorAPI.temporary('success', 1500);

// Hide/show manually
ProfessionalCursorAPI.hide();
ProfessionalCursorAPI.show();

// Apply a state when hovering a specific element
ProfessionalCursorAPI.onHover('.my-element', 'zoom-in');

// Remove and restore native cursor
ProfessionalCursorAPI.destroy();
```

---

## 🎨 Customization & Theming

Dotify uses CSS variables for all colors, borders, and animations.

Supports:
- System theme switching via `prefers-color-scheme`
- Manual override with `[data-theme="dark"]` or `[data-theme="light"]`

Example:
```css
:root {
  --cursor-primary: #007AFF;
  --cursor-error: #FF3B30;
  --cursor-dotify: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## 🔍 Demo

Live demo available at:  
👉 **https://your-username.github.io/dotify/**

To host your own:

### 📁 Steps to Host a Demo on GitHub Pages

1. Create a file `demo.html` in your repo.
2. Push your changes to the `main` branch.
3. In your GitHub repository:
   - Go to **Settings > Pages**
   - Set **Source** to `main` branch and root (`/`) or `/docs` folder
4. Visit: `https://your-username.github.io/dotify/`

---

## 📁 File Structure

```
.
├── core.css      # Cursor styles and animation
├── core.js       # Cursor logic and event handling
├── demo.html     # Optional: demo file for GitHub Pages
└── README.md
```

---

## 📜 License

MIT © [Your Name]  
PRs and contributions welcome!

---

## ✅ TODOs

- [ ] Publish on npm
- [ ] Add unit tests
- [ ] Add theme switcher example
