import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconDice2 extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M15 9h.01" /> <path d="M9 15h.01" /></svg>`;
  }
}

customElements.define('lluai-icon-dice-2', LluaiIconDice2);
