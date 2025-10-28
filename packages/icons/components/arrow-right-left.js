import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconArrowRightLeft extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m16 3 4 4-4 4" /> <path d="M20 7H4" /> <path d="m8 21-4-4 4-4" /> <path d="M4 17h16" /></svg>`;
  }
}

customElements.define('lluai-icon-arrow-right-left', LluaiIconArrowRightLeft);
