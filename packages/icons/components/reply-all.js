import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconReplyAll extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m12 17-5-5 5-5" /> <path d="M22 18v-2a4 4 0 0 0-4-4H7" /> <path d="m7 17-5-5 5-5" /></svg>`;
  }
}

customElements.define('lluai-icon-reply-all', LluaiIconReplyAll);
