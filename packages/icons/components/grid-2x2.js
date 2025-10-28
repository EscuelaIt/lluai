import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconGrid2x2 extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 3v18" /> <path d="M3 12h18" /> <rect x="3" y="3" width="18" height="18" rx="2" /></svg>`;
  }
}

customElements.define('lluai-icon-grid-2x2', LluaiIconGrid2x2);
