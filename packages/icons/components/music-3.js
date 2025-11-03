import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconMusic3 extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="18" r="4" /> <path d="M16 18V2" /></svg>`;
  }
}

customElements.define('lluai-icon-music-3', LluaiIconMusic3);
