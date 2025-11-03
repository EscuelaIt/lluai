import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconArrowRightFromLine extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 5v14" /> <path d="M21 12H7" /> <path d="m15 18 6-6-6-6" /></svg>`;
  }
}

customElements.define('lluai-icon-arrow-right-from-line', LluaiIconArrowRightFromLine);
