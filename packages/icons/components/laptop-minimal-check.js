import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconLaptopMinimalCheck extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2 20h20" /> <path d="m9 10 2 2 4-4" /> <rect x="3" y="4" width="18" height="12" rx="2" /></svg>`;
  }
}

customElements.define('lluai-icon-laptop-minimal-check', LluaiIconLaptopMinimalCheck);
