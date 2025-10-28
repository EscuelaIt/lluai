import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconMoveDiagonal2 extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M19 13v6h-6" /> <path d="M5 11V5h6" /> <path d="m5 5 14 14" /></svg>`;
  }
}

customElements.define('lluai-icon-move-diagonal-2', LluaiIconMoveDiagonal2);
