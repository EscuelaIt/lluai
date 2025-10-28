import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconMoveDownRight extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M19 13V19H13" /> <path d="M5 5L19 19" /></svg>`;
  }
}

customElements.define('lluai-icon-move-down-right', LluaiIconMoveDownRight);
