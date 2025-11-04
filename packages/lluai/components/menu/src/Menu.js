import { LitElement, html, css } from 'lit';

export class Menu extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  static get properties() {
    return {
      active: { type: String },
    };
  }

  updated(changedProperties) {
    if(changedProperties.has('active')) {
      this._updateActiveElement();
    }
  }

  _updateActiveElement() {
    const items = this.querySelectorAll('lluai-menu-item');
    items.forEach( item => item.active = item.name == this.active)
  }

  render() {
    return html`
    <div @lluai-menu-item-click=${this.onMenuChanged}>
      <slot></slot>
    </div>
    `;
  }

  onMenuChanged(e) {
    console.log(e.detail);
    this.active = e.detail.name;
    if(e.detail.href) {
      window.location = e.detail.href;
    }
  }

  
}

