import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconMoveRight extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 8L22 12L18 16" /> <path d="M2 12H22" /></svg>`;
  }
}

customElements.define('lluai-icon-move-right', LluaiIconMoveRight);
