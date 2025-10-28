import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconArrowDownRight extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m7 7 10 10" /> <path d="M17 7v10H7" /></svg>`;
  }
}

customElements.define('lluai-icon-arrow-down-right', LluaiIconArrowDownRight);
