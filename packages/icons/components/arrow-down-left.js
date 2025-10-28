import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconArrowDownLeft extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M17 7 7 17" /> <path d="M17 17H7V7" /></svg>`;
  }
}

customElements.define('lluai-icon-arrow-down-left', LluaiIconArrowDownLeft);
