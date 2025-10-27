import { LitElement, html, css } from 'lit';

export class LluaiCard extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      section {
        border: 1px solid var(--lluai-border-color, #0B4C90);
        padding: var(--lluai-l, 1.5rem);
        display: flex;
        gap: var(--lluai-m, 1rem);
        flex-direction: column;
        border-radius: var(--lluai-b-radius-normal, 0.5rem);
      }

      h2 {
        font-size: var(--lluai-text-subtitle, 1.5rem);
        font-weight: var(--lluai-card-title-font-weight, bold);
        margin: 0;
        color: var(--lluai-card-title-color, var(--lluai-accent_1, #CDF540));
      }
    `
  ];

  static get properties() {
    return {
      title: { type: String },
      iconSrc: { type: String },
    };
  }

  render() {
    return html`
      <section>
        <slot name="image"></slot>
        <h2>${this.title}</h2>  
        <div class="body">
          <slot></slot>
        </div>
        <slot name="actions"></slot>
      </section>
    `;
  }
}

