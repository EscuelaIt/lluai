import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconPlus extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 12h14" /> <path d="M12 5v14" /></svg>`;
  }
}

customElements.define('lluai-icon-plus', LluaiIconPlus);
