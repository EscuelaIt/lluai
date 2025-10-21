const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      background-color: var(--lluai-accent_1, #CDF540);
      color: var(--lluai-on-accent_1, #001429);
      border: 2px solid var(--lluai-accent_1, #CDF540);
      border-radius: var(--lluai-b-radius-small, 0.25rem);
      padding: var(--lluai-s, 0.25rem) var(--lluai-m, 1rem);
      font-size: var(--lluai-text-base, 1rem);
      cursor: pointer;
      transition: background-color 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: bold;
    }
    button:hover {
      background-color: var(--lluai-accent_1_light, #DCF879);
    }
    :host([disabled]) button {
      background-color: var(--lluai-disabled-color, #999);
      border-color: var(--lluai-disabled-color, #999);
      color: var(--lluai-on-disabled-color, #666);
    }
    :host([secondary]) button {
      background-color: var(--lluai-accent_2, #FA4773);
      border-color: var(--lluai-accent_2, #FA4773);
      color: var(--lluai-on-accent_2, #001429);
    }
  </style>
  <button>
    <slot></slot>
  </button>
`;

export class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }
}