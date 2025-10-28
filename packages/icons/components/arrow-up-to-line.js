import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconArrowUpToLine extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 3h14" /> <path d="m18 13-6-6-6 6" /> <path d="M12 7v14" /></svg>`;
  }
}

customElements.define('lluai-icon-arrow-up-to-line', LluaiIconArrowUpToLine);
