import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconSignalZero extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2 20h.01" /></svg>`;
  }
}

customElements.define('lluai-icon-signal-zero', LluaiIconSignalZero);
