import { LitElement, html, css } from 'lit';

export class LluaiInput extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      section {
        display: flex;
        flex-direction: column;
        gap: var(--lluai-input-gap, var(--lluai-xs, 0.25rem));
      }

      label {
        font-size: var(--lluai-input-font-size, var(--lluai-text-small, 0.875rem));
        font-weight: var(--lluai-input-font-weight, bold);
      }
      input {
        padding: var(--lluai-s) var(--lluai-m);
        font-size: var(--lluai-input-font-size, var(--lluai-text-small, 0.875rem));
        border: 1px solid var(--lluai-border-light);
        background-color: var(--lluai-input-background-color, #fff);
        border-radius: var(--lluai-b-radius-small, 0.25rem);
      }

      :host([disabled]) input {
        color: var(--lluai-on-disabled-color, #999);
        background-color: var(--lluai-disabled-color, #ddd);
      }
    `
  ];

  static get properties() {
    return {
      label: { type: String },
      placeholder: { type: String},
      type: { type: String},
      value: { type: String},
      disabled: { type: Boolean},
    };
  }

  render() {
    return html`
      <section>
        <label>${this.label}</label>
        <input 
          placeholder="${this.placeholder}" 
          type="${this.type}" 
          value="${this.value}"
          ?disabled=${this.disabled}
        >
      </section>
    `;
  }

  reset() {
    this.shadowRoot.querySelector('input').value = '';
  }
}

