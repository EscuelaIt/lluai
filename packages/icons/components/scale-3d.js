import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconScale3d extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 7v11a1 1 0 0 0 1 1h11" /> <path d="M5.293 18.707 11 13" /> <circle cx="19" cy="19" r="2" /> <circle cx="5" cy="5" r="2" /></svg>`;
  }
}

customElements.define('lluai-icon-scale-3d', LluaiIconScale3d);
