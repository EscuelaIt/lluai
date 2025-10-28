import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconCircleSlash2 extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 2 2 22" /> <circle cx="12" cy="12" r="10" /></svg>`;
  }
}

customElements.define('lluai-icon-circle-slash-2', LluaiIconCircleSlash2);
