import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconIterationCw extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 10a8 8 0 1 1 8 8H4" /> <path d="m8 22-4-4 4-4" /></svg>`;
  }
}

customElements.define('lluai-icon-iteration-cw', LluaiIconIterationCw);
