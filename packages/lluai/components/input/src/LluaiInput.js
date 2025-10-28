import { LitElement, html, css } from 'lit';
import 'lluai-icons/components/search.js';

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
        border: 1px solid var(--lluai-border, #0B4C90);
        background-color: var(--lluai-input-background-color, #fff);
        border-radius: var(--lluai-b-radius-small, 0.25rem);
        line-height: var(--lluai-input-line-height, 1.325rem);
      }

      :host([disabled]) input {
        color: var(--lluai-on-disabled-color, #aaa);
        background-color: var(--lluai-disabled-color, #ddd);
      }

      .input {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .input input {
        flex-grow: 1;
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
        <div class="input">
          <input 
            placeholder="${this.placeholder}" 
            type="${this.type}" 
            value="${this.value}"
            ?disabled=${this.disabled}
          >
          ${this.type == 'search'
            ? html`<lluai-icon-search @click=${this.onSearchClick}></lluai-icon-search>`
            : ''
          }
        </div> 
      </section>
    `;
  }

  reset() {
    this.shadowRoot.querySelector('input').value = '';
  }

  onSearchClick() {
    this.dispatchEvent(new CustomEvent('lluai-input-search-click', { 
      bubbles: true,
      composed: true,
    }));
  }
}

