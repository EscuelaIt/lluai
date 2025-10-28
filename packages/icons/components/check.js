import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconCheck extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 6 9 17l-5-5" /></svg>`;
  }
}

customElements.define('lluai-icon-check', LluaiIconCheck);
