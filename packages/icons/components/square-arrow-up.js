import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconSquareArrowUp extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m16 12-4-4-4 4" /> <path d="M12 16V8" /></svg>`;
  }
}

customElements.define('lluai-icon-square-arrow-up', LluaiIconSquareArrowUp);
