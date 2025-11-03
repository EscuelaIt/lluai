import { LluaiBaseIcon } from '../src/LluaiBaseIcon.js';

export class LluaiIconChartBarBig extends LluaiBaseIcon {
  getSvgIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <rect x="7" y="13" width="9" height="4" rx="1" /> <rect x="7" y="5" width="12" height="4" rx="1" /></svg>`;
  }
}

customElements.define('lluai-icon-chart-bar-big', LluaiIconChartBarBig);
