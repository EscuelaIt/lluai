import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconArrowUp01 extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m3 8 4-4 4 4" /> <path d="M7 4v16" /> <rect x="15" y="4" width="4" height="6" ry="2" /> <path d="M17 20v-6h-2" /> <path d="M15 20h4" /></svg>`;
  }
}

customElements.define('lluai-icon-arrow-up-0-1', LluaiIconArrowUp01);
