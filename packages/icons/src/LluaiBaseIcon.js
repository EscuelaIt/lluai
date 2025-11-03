import { iconStyles } from "./iIconStyles.js";

export class LluaiBaseIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [iconStyles];
    this.render();
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <div class="icon-container">
        ${this.getSvgIcon()}
      </div>
    `;
  }

  getSvgIcon() {
    throw new Error('getSvgIcon() must be implemented by subclass');
  }
}

