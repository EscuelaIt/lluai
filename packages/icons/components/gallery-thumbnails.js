import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconGalleryThumbnails extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="14" x="3" y="3" rx="2" /> <path d="M4 21h1" /> <path d="M9 21h1" /> <path d="M14 21h1" /> <path d="M19 21h1" /></svg>`;
  }
}

customElements.define('lluai-icon-gallery-thumbnails', LluaiIconGalleryThumbnails);
