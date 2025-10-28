import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconClosedCaption extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10 9.17a3 3 0 1 0 0 5.66" /> <path d="M17 9.17a3 3 0 1 0 0 5.66" /> <rect x="2" y="5" width="20" height="14" rx="2" /></svg>`;
  }
}

customElements.define('lluai-icon-closed-caption', LluaiIconClosedCaption);
