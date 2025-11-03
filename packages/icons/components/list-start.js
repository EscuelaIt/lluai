import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconListStart extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 5h6" /> <path d="M3 12h13" /> <path d="M3 19h13" /> <path d="m16 8-3-3 3-3" /> <path d="M21 19V7a2 2 0 0 0-2-2h-6" /></svg>`;
  }
}

customElements.define('lluai-icon-list-start', LluaiIconListStart);
