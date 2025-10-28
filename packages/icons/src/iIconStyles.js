export const iconStyles = new CSSStyleSheet();
iconStyles.replaceSync(`
  :host {
    display: inline-block;
    transition-duration: var(--lluai-icon-transition-duration, 0.3s);
    transition-timing-function: ease-in-out;
    transition-property: background-color;
  }

  :host([rounded]) {
    background-color: var(--lluai-icon-rounded-background-color, #eee);
    border-radius: 50%;
    padding: var(--lluai-icon-rounded-padding, 0.5rem);
  }

  .icon-container {
    display: flex;
  }
  svg {
    width: var(--lluai-icon-size, 24px);
    height: var(--lluai-icon-size, 24px);
    display: block;
    color:  var(--lluai-icon-color, #888);
    stroke-width: var(--lluai-icon-stroke-width, 2px); !important;
    transition-duration:  var(--lluai-icon-transition-duration, 0.3s);
    transition-timing-function: ease-in-out;
    transition-property: color;
    }
`);