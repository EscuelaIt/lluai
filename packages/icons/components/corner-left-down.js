import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconCornerLeftDown extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m14 15-5 5-5-5" /> <path d="M20 4h-7a4 4 0 0 0-4 4v12" /></svg>`;
  }
}

customElements.define('lluai-icon-corner-left-down', LluaiIconCornerLeftDown);
