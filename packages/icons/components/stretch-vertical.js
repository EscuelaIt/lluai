import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconStretchVertical extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="6" height="20" x="4" y="2" rx="2" /> <rect width="6" height="20" x="14" y="2" rx="2" /></svg>`;
  }
}

customElements.define('lluai-icon-stretch-vertical', LluaiIconStretchVertical);
