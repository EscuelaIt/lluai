import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconMove3d extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 3v16h16" /> <path d="m5 19 6-6" /> <path d="m2 6 3-3 3 3" /> <path d="m18 16 3 3-3 3" /></svg>`;
  }
}

customElements.define('lluai-icon-move-3d', LluaiIconMove3d);
