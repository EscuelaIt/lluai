import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconMoveUp extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M8 6L12 2L16 6" /> <path d="M12 2V22" /></svg>`;
  }
}

customElements.define('lluai-icon-move-up', LluaiIconMoveUp);
