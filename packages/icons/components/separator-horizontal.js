import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconSeparatorHorizontal extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m16 16-4 4-4-4" /> <path d="M3 12h18" /> <path d="m8 8 4-4 4 4" /></svg>`;
  }
}

customElements.define('lluai-icon-separator-horizontal', LluaiIconSeparatorHorizontal);
