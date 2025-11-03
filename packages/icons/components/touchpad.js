import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconTouchpad extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M2 14h20" /> <path d="M12 20v-6" /></svg>`;
  }
}

customElements.define('lluai-icon-touchpad', LluaiIconTouchpad);
