import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconOption extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 3h6l6 18h6" /> <path d="M14 3h7" /></svg>`;
  }
}

customElements.define('lluai-icon-option', LluaiIconOption);
