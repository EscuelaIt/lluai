import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconSquareArrowRight extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M8 12h8" /> <path d="m12 16 4-4-4-4" /></svg>`;
  }
}

customElements.define('lluai-icon-square-arrow-right', LluaiIconSquareArrowRight);
