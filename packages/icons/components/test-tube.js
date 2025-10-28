import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconTestTube extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" /> <path d="M8.5 2h7" /> <path d="M14.5 16h-5" /></svg>`;
  }
}

customElements.define('lluai-icon-test-tube', LluaiIconTestTube);
