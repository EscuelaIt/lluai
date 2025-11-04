import { LitElement, html, css } from 'lit';
import 'lluai-icons/components/dot.js';
import 'lluai-icons/lluai-icon.js';

export class MenuItem extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      a {
        font-size: var(--lluai-text-small, 0.875rem);
        display: flex;
        align-items: center;
        padding: var(--lluai-s, 0.5rem) var(--lluai-m, 1rem);
        color: var(--lluai-foreground, #888);
        text-decoration: none;
      }
      :host([subitem]) {
        margin-left: var(--lluai-m, 1rem);
      }
      :host([active]) a {
        margin-left: -0.5rem;
        color: var(--lluai-accent_1, #CDF540);
        --lluai-icon-color: var(--lluai-accent_2, #FA4773);
      }
    `
  ];

  static get properties() {
    return {
      label: { type: String },
      active: { type: Boolean, reflect: true },
      name: { type: String },
      href: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = "dot";
  }

  render() {
    return html`
      <a @click=${this.setActive} href="${this.href ? this.href : ''}">
        ${this.active
          ? html`<lluai-icon icon="${this.icon}"></lluai-icon>`
          : ''
        }
        ${this.label}
      </a>
    `;
  }

  setActive(e) {
    if(! this.href) {
      e.preventDefault();
    }
    this.dispatchEvent(new CustomEvent('lluai-menu-item-click', { 
      bubbles: true,
      composed: true,
      detail: {
        name: this.name,
        href: this.href,
      }
    }));
  }
}

