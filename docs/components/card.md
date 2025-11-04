---
layout: layout.html
name: card
tags: components
title: Card
description: Card UI Component, to create customized cards.
---


# Card

## Customizable card UI Interface

The Card component is a customizable card built as a Web Component that supports titles, icons, images, and multiple content slots. It includes predefined styles with support for customizable CSS variables.

## Preview

<lluai-card title="Component">
  <p>Description of the component.</p>
</lluai-card>

## Install

```bash
npm install lluai
```

## Usage

Import the component:

```javascript
import 'lluai/components/card/card.js';
```

Use the component in your HTML:

```html
<lluai-card title="Component">
  <p>Description of the component.</p>
</lluai-card>
```

## Attributes

### `title`

Sets the title of the card.

```html
<lluai-card title="My Card Title">
  <p>Card content goes here.</p>
</lluai-card>
```

### `icon`

Displays an icon at the top of the card using the lluai-icon component.

```html
<lluai-card title="Component" icon="ambulance">
  <p>Description of the component.</p>
</lluai-card>
```

## Slots

### Default slot

The main content area of the card.

```html
<lluai-card title="Component">
  <p>This is the main content.</p>
  <p>You can add multiple elements here.</p>
</lluai-card>
```

### `image` slot

For adding images or custom graphics at the top of the card.

```html
<lluai-card title="Component">
  <div slot="image">
    <img src="/path/to/image.png" alt="Description">
  </div>
  <p>Description of the component.</p>
</lluai-card>
```

### `actions` slot

For adding action buttons or forms at the bottom of the card.

```html
<lluai-card title="Component">
  <p>Description of the component.</p>
  <div slot="actions">
    <lluai-button>Action</lluai-button>
  </div>
</lluai-card>
```

## Examples

### Basic card

<lluai-card title="Component">
  <p>Description of the component.</p>
</lluai-card>

```html
<lluai-card title="Component">
  <p>Description of the component.</p>
</lluai-card>
```

### Card with icon

<lluai-card title="Component" icon="ambulance">
  <p>Description of the component.</p>
</lluai-card>

```html
<lluai-card title="Component" icon="ambulance">
  <p>Description of the component.</p>
</lluai-card>
```

### Card with multiple content

<lluai-card title="Component">
  <p>First paragraph with information.</p>
  <p>Second paragraph with more details.</p>
</lluai-card>

```html
<lluai-card title="Component">
  <p>First paragraph with information.</p>
  <p>Second paragraph with more details.</p>
</lluai-card>
```

### Card with custom image

<lluai-card title="Component">
  <div slot="image">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 6.528V3a1 1 0 0 1 1-1h0"/>
      <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/>
    </svg>
  </div>
  <p>Description of the component.</p>
</lluai-card>

```html
<lluai-card title="Component">
  <div slot="image">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 6.528V3a1 1 0 0 1 1-1h0"/>
      <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/>
    </svg>
  </div>
  <p>Description of the component.</p>
</lluai-card>
```

### Card with actions

<lluai-card title="Component" icon="youtube">
  <div slot="image">
    <img src="/assets/images/hirayama.png">
  </div>
  <p>Description of the component.</p>
  <div slot="actions">
    <lluai-input 
      label="Subscribe to our newsletter"
      placeholder="Your email"  
      value="user@example.com"
    ></lluai-input>
    <lluai-button>Subscribe</lluai-button>
  </div>
</lluai-card>

```html
<lluai-card title="Component" icon="youtube">
  <div slot="image">
    <img src="/hirayama.png">
  </div>
  <p>Description of the component.</p>
  <div slot="actions">
    <lluai-input 
      label="Subscribe to our newsletter"
      placeholder="Your email"  
      value="user@example.com"
    ></lluai-input>
    <lluai-button>Subscribe</lluai-button>
  </div>
</lluai-card>
```

## CSS Custom Properties

The component uses the following customizable CSS variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `--lluai-border-color` | `#0B4C90` | Card border color |
| `--lluai-b-radius-normal` | `0.5rem` | Card border radius |
| `--lluai-l` | `1.5rem` | Card padding |
| `--lluai-m` | `1rem` | Gap between card elements |
| `--lluai-text-subtitle` | `1.5rem` | Title font size |
| `--lluai-card-title-font-weight` | `bold` | Title font weight |
| `--lluai-card-title-color` | `var(--lluai-accent_1, #CDF540)` | Title text color |
| `--lluai-accent_1` | `#CDF540` | Default accent color for title |

### Style customization

```css
:root {
  --lluai-border-color: #1a5fb4;
  --lluai-card-title-color: #21e6f8;
  --lluai-b-radius-normal: 1rem;
  --lluai-l: 2rem;
}
```