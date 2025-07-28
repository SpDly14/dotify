Dotify 🎯
Custom Cursor System for the Modern Web

Dotify is a highly customizable, theme-aware, JavaScript-powered cursor system that replaces the native mouse cursor with expressive, animated states. It's designed for modern web interfaces that care about UX polish, accessibility cues, and delightful interactions.


✨ Features
🎨 Multiple Cursor States: hover, active, text, grab, move, zoom, loading, error, success, and more.

🌗 Dark & Light Mode Support: Fully adaptive via prefers-color-scheme and CSS variables.

⚡ Smooth Animations: Uses CSS transitions and keyframes for buttery-smooth effects.

🧠 Intelligent State Detection: Automatically responds to user actions (hover, click, input, etc).

🔌 Tiny & Dependency-Free: No libraries required, just drop it in and go.

🛠️ Developer API: Control cursor state dynamically from JS.

🚀 Getting Started
1. Include CSS and JS
html
Copy
Edit
<link rel="stylesheet" href="core.css" />
<script src="core.js" defer></script>
2. That’s It!
Dotify initializes automatically on page load for non-touch devices.

🧪 Usage
Dotify reacts automatically to element states using class names, roles, attributes, and more.

Automatic States (via CSS selectors):
State	Triggers
hover	Links, buttons, .cursor-hover
text	Input, textarea, [contenteditable], .cursor-text
grab	[draggable], .draggable, .cursor-grab
loading	.loading, [data-loading="true"], .cursor-loading
error	.error, [aria-invalid="true"], .cursor-error
success	.success, .cursor-success
warning	.warning, .cursor-warning
magic	.magic, .cursor-magic
zoom-in	.zoom-in, [data-zoom="in"]
zoom-out	.zoom-out, [data-zoom="out"]
...and more!	See core.js for the full list.

🧩 Customization
Programmatic API
js
Copy
Edit
// Manually set a state
ProfessionalCursorAPI.setState('magic');

// Temporarily show a state
ProfessionalCursorAPI.temporary('success', 1500);

// Hide/show cursor
ProfessionalCursorAPI.hide();
ProfessionalCursorAPI.show();

// Attach custom hover behavior
ProfessionalCursorAPI.onHover('.my-button', 'pointer');

// Destroy and reset to native cursor
ProfessionalCursorAPI.destroy();
Supported States
default, hover, active, text, grab, grabbing, move

loading, error, success, warning, magic

zoom-in, zoom-out, pointer, crosshair

resize-h, resize-v, help, forbidden

🎨 Theming
Dotify uses CSS variables scoped for dark and light modes:

css
Copy
Edit
:root {
  --cursor-primary: #007AFF;
  --cursor-success: #34C759;
  --cursor-error: #FF3B30;
  ...
}
Supports:

Automatic dark/light switching via prefers-color-scheme

Manual dark theme override with [data-theme="dark"]

📦 File Structure
core.css — All cursor styles and animations.

core.js — Cursor logic, DOM bindings, auto detection, and public API.

📁 Example
html
Copy
Edit
<button class="cursor-success">Submit</button>
<div class="cursor-grab draggable">Drag Me</div>

<script>
  ProfessionalCursorAPI.onHover('.custom-element', 'magic');
</script>
📜 License
MIT © [YourNameHere]
Contributions welcome — please open an issue or pull request!
