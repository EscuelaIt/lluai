---
layout: layout.html
name: started
title: Getting Started with Lluai
---

# lluai UI Kit

It provides a set of reusable web components and styles that can be easily integrated into any web project.

---

## 🚀 Installation

Install via npm:

```bash
npm install lluai
```

## 🧩 Usage

Import the components you need into your project:

```javascript
import 'lluai/components/button/button.js';
import 'lluai/components/card/card.js';
```

Then use them directly in your HTML:

```html
<lluai-button>Click Me</lluai-button>
<lluai-card title="Welcome">This is a sample card</lluai-card>
```

---

## ⚙️ Features

* 🧱 Collection of reusable and accessible UI components
* 🎨 Customizable styles with CSS variables
* ⚡ Built with modern web standards (Lit + Web Components)
* 🧩 Easy to integrate with any framework (React, Vue, Angular, or Vanilla JS)
* 📦 Lightweight and optimized for performance

---

## 🎨 Theming

lluai supports global customization through CSS variables.
You can override them in your stylesheet or global theme:

```css
:root {
  --lluai-bg_primary: #4b9ce2;
  --lluai-foreground: #fff;
  --lluai-b-radius-small: 12px;
  --lluai-text-small: 14px;
}
```

---

## 🧱 Components

Here are some of the available components:

* `<lluai-button>` – Buttons with multiple variants and states
* `<lluai-card>` – Simple and flexible card container
* `<lluai-input>` – Styled input fields
* `<lluai-menu>` – Create menu items
* `<lluai-icon>` – Icon library based on Lucide icons

For a full list of components and examples, see the [documentation](https://lluai.escuelait.com) *(or your docs site)*.
