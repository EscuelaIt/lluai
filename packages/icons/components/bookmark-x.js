import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconBookmarkX extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" /> <path d="m14.5 7.5-5 5" /> <path d="m9.5 7.5 5 5" /></svg>`;
  }
}

customElements.define('lluai-icon-bookmark-x', LluaiIconBookmarkX);
