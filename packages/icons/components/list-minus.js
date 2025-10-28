import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconListMinus extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 5H3" /> <path d="M11 12H3" /> <path d="M16 19H3" /> <path d="M21 12h-6" /></svg>`;
  }
}

customElements.define('lluai-icon-list-minus', LluaiIconListMinus);
