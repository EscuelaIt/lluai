import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconCircleArrowOutUpLeft extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2 8V2h6" /> <path d="m2 2 10 10" /> <path d="M12 2A10 10 0 1 1 2 12" /></svg>`;
  }
}

customElements.define('lluai-icon-circle-arrow-out-up-left', LluaiIconCircleArrowOutUpLeft);
