import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconTv extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m17 2-5 5-5-5" /> <rect width="20" height="15" x="2" y="7" rx="2" /></svg>`;
  }
}

customElements.define('lluai-icon-tv', LluaiIconTv);
