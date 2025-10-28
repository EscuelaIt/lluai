import { LluaiIcon } from '../src/LluaiIcon.js';

export class LluaiIconBatteryLow extends LluaiIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 14v-4" /> <path d="M6 14v-4" /> <rect x="2" y="6" width="16" height="12" rx="2" /></svg>`;
  }
}

customElements.define('lluai-icon-battery-low', LluaiIconBatteryLow);
