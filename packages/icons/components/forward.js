import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconForward extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m15 17 5-5-5-5" /> <path d="M4 18v-2a4 4 0 0 1 4-4h12" /></svg>`;
  }
}

customElements.define('lluai-icon-forward', LluaiIconForward);
