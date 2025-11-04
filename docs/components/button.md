---
layout: layout.html
name: button
tags: components
title: Button
description: Button UI Component, to create customized buttons.
---


# Button

## Customizable button UI Interface

The Button component is a customizable button built as a Web Component that supports different variants and states. It includes predefined styles with support for customizable CSS variables.

## Preview

<lluai-button>Click here</lluai-button>

## Install

```bash
npm install lluai
```

## Usage

Import the component:

```javascript
import 'lluai/components/button/button.js';
```

Use the component in your HTML:

```html
<lluai-button>Click here</lluai-button>
```

## Attributes

### `disabled`

Disables the button, preventing user interaction.

```html
<lluai-button disabled>Disabled Button</lluai-button>
```

### `secondary`

Applies the secondary style to the button using the `accent_2` theme colors.

```html
<lluai-button secondary>Secondary Button</lluai-button>
```

## Examples

### Primary button

<lluai-button>Primary Button</lluai-button>

```html
<lluai-button>Primary Button</lluai-button>
```

### Secondary button

<lluai-button secondary>Secondary Button</lluai-button>

```html
<lluai-button secondary>Secondary Button</lluai-button>
```

### Disabled button

<lluai-button disabled>Disabled Button</lluai-button>

```html
<lluai-button disabled>Disabled Button</lluai-button>
```

### Combined attributes

<lluai-button secondary disabled>Disabled Secondary</lluai-button>

```html
<lluai-button secondary disabled>Disabled Secondary</lluai-button>
```

## CSS Custom Properties

The component uses the following customizable CSS variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `--lluai-accent_1` | `#CDF540` | Primary button background color |
| `--lluai-on-accent_1` | `#001429` | Primary button text color |
| `--lluai-accent_1_light` | `#DCF879` | Background color on hover |
| `--lluai-accent_2` | `#FA4773` | Secondary button background color |
| `--lluai-on-accent_2` | `#001429` | Secondary button text color |
| `--lluai-disabled-color` | `#999` | Background color when disabled |
| `--lluai-on-disabled-color` | `#666` | Text color when disabled |
| `--lluai-b-radius-small` | `0.25rem` | Button border radius |
| `--lluai-s` | `0.25rem` | Vertical padding |
| `--lluai-m` | `1rem` | Horizontal padding |
| `--lluai-text-base` | `1rem` | Font size |

### Style customization

```css
:root {
  --lluai-accent_1: #00FF00;
  --lluai-on-accent_1: #FFFFFF;
  --lluai-accent_1_light: #33FF33;
  --lluai-b-radius-small: 0.5rem;
}
```
