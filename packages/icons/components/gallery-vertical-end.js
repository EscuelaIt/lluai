import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconGalleryVerticalEnd extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M7 2h10" /> <path d="M5 6h14" /> <rect width="18" height="12" x="3" y="10" rx="2" /></svg>`;
  }
}

customElements.define('lluai-icon-gallery-vertical-end', LluaiIconGalleryVerticalEnd);
