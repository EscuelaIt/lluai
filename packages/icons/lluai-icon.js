import { iconStylesNamedIcons } from "./src/iIconStyles.js";
import './components/dot.js';

export class LluaiIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [iconStylesNamedIcons];
    this.icon = "dot";
    this.rounded = false;
    this.render();

  }

  render() {
    this.shadowRoot.innerHTML = `
      <lluai-icon-${this.icon} ${this.rounded ? 'rounded': ''} class="flex"></lluai-icon-${this.icon}>
    `;
  }

  static get observedAttributes() {
    return ['icon', 'rounded'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon' && newValue !== null) {
      this.icon = newValue;
      this.render();
    }
    if (name === 'rounded' && newValue !== null) {
      this.rounded = true;
    } else {
      this.rounded = false;
    }
  }
}

customElements.define('lluai-icon', LluaiIcon);