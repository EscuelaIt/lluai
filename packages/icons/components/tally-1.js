import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconTally1 extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 4v16" /></svg>`;
  }
}

customElements.define('lluai-icon-tally-1', LluaiIconTally1);
