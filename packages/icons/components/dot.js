import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconDot extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12.1" cy="12.1" r="1" /></svg>`;
  }
}

customElements.define('lluai-icon-dot', LluaiIconDot);
