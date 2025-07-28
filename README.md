# Dotify 🎯

Dotify is a customizable, animated, theme-aware JavaScript cursor library designed to enhance user interactions with beautiful and expressive cursors. Whether you're building a portfolio, dashboard, or web app — Dotify gives your UI a little extra magic ✨.

> **Live Demo:** [https://spdly14.github.io/dotify/](https://spdly14.github.io/dotify/)

---

## 🚀 Features

- 🖱️ Fully animated, fluid, and theme-aware custom cursor
- 🌗 Supports dark and light color schemes automatically
- 🔁 20+ built-in cursor styles: `hover`, `active`, `text`, `grab`, `loading`, `success`, `error`, `magic`, `zoom`, `pointer`, and more
- 🎨 Easily themeable using CSS variables
- 📦 Lightweight: Just two files – one JS and one CSS
- 📱 Automatically disabled on touch devices

---

## 📦 Installation

### 1. CDN (Recommended)

```html
<link rel="stylesheet" href="https://spdly14.github.io/dotify/core.css">
<script src="https://spdly14.github.io/dotify/core.js" defer></script>
```

### 2. Local

Download `core.css` and `core.js` from this repo and include:

```html
<link rel="stylesheet" href="core.css">
<script src="core.js" defer></script>
```

---

## 🛠️ Usage

Dotify auto-initializes on page load. It replaces the native mouse cursor and tracks interactions using built-in selectors.

You can trigger cursor states using classes or data attributes:

```html
<button class="cursor-hover">Hover Me</button>
<div class="cursor-loading">Loading...</div>
<input class="cursor-text" type="text" placeholder="Type here..." />
```

### Manually control states:

```js
cursorAPI.setState('magic');          // Force magic cursor
cursorAPI.temporary('error', 1000);   // Show error cursor for 1 second
cursorAPI.hide();                     // Hide cursor
cursorAPI.show();                     // Show cursor
cursorAPI.destroy();                  // Destroy Dotify and restore native cursor
cursorAPI.onHover('.my-element', 'zoom-in'); // Apply zoom-in when hovering
```

---

## 🎨 Customization

Dotify is powered by CSS variables. You can override them globally or per theme:

```css
:root {
  --cursor-primary: #ff5722;
  --cursor-shadow: rgba(255, 87, 34, 0.2);
}
```

To manually switch themes:

```html
<body data-theme="dark">
```

---

## 🎯 Cursor States

| State       | Trigger Class/Selector   | Description                 |
|-------------|--------------------------|-----------------------------|
| `default`   | -                        | Standard dot                |
| `hover`     | `.cursor-hover`, `a`     | Link hover                  |
| `text`      | `.cursor-text`, `input`  | Text input                  |
| `active`    | -                        | On mouse down               |
| `grab`      | `.cursor-grab`           | Grabbable items             |
| `grabbing`  | Auto                     | While grabbing              |
| `loading`   | `.cursor-loading`        | Spinners, async ops         |
| `error`     | `.cursor-error`          | Error states                |
| `success`   | `.cursor-success`        | Success confirmation        |
| `warning`   | `.cursor-warning`        | Warnings                    |
| `magic`     | `.cursor-magic`          | Eye-catching glowing cursor |
| `zoom-in`   | `.cursor-zoom-in`        | Zoom functionality          |
| `zoom-out`  | `.cursor-zoom-out`       | Zoom out                    |
| `pointer`   | `.cursor-pointer`        | Classic pointer             |
| `crosshair` | `.cursor-crosshair`      | Crosshair aim               |
| `resize-h`  | `.cursor-resize-h`       | Horizontal resize           |
| `resize-v`  | `.cursor-resize-v`       | Vertical resize             |
| `help`      | `.cursor-help`           | Help or tooltip             |
| `forbidden` | `.cursor-forbidden`      | Disabled or invalid items   |

---

## 📱 Mobile Friendly

Dotify automatically disables itself on touch-enabled devices to prevent UI issues.

---

## 📄 License

MIT © [Shivaprasad V](https://github.com/spdly14)

---

## 🙌 Contributing

Pull requests are welcome! If you have ideas, suggestions, or bug reports, feel free to open an issue or PR.

---

## 🔗 Related

- [Live Demo](https://spdly14.github.io/dotify/)
- [GitHub Repository](https://github.com/spdly14/dotify)

---

Enjoy using Dotify? Consider giving it a ⭐ on GitHub!
