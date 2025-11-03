import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconMoveDownLeft extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M11 19H5V13" /> <path d="M19 5L5 19" /></svg>`;
  }
}

customElements.define('lluai-icon-move-down-left', LluaiIconMoveDownLeft);
