import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconRussianRuble extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 11h8a4 4 0 0 0 0-8H9v18" /> <path d="M6 15h8" /></svg>`;
  }
}

customElements.define('lluai-icon-russian-ruble', LluaiIconRussianRuble);
