import { LitElement, html } from 'lit-element';

/* eslint-disable no-unused-vars */
// import { RuxStatus } from '@astrouxds/rux-status';
// import { RuxButton } from '@astrouxds/rux-button';
// import { RuxIcon } from '@astrouxds/rux-icon';
// import { RuxClock } from '@astrouxds/rux-clock';
import { RuxGlobalStatusBar } from '@astrouxds/rux-global-status-bar';
// import { RuxLog } from '@astrouxds/rux-log';
// import { RuxModal } from '@astrouxds/rux-modal';
// import { RuxMonitoringIcon } from '@astrouxds/rux-monitoring-icon';
// import { RuxPopUpMenu } from '@astrouxds/rux-pop-up-menu';
// import { RuxProgress } from '@astrouxds/rux-progress';
// import { RuxPushButton } from '@astrouxds/rux-push-button';
// import { RuxSegmentedButton } from '@astrouxds/rux-segmented-button';
// import { RuxSlider } from '@astrouxds/rux-slider';

/* eslint-enable no-unused-vars */

export class AstroBootstrap extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.appName = 'Astro!';
  }

  render() {
    return html`
      <div class="app-container">
        <rux-global-status-bar appName="Astro Bootstrap"> </rux-global-status-bar>
      </div>
    `;
  }
}
