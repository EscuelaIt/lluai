import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconWifiLow extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" /></svg>`;
  }
}

customElements.define('lluai-icon-wifi-low', LluaiIconWifiLow);
