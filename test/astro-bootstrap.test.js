import { html, fixture, expect } from '@open-wc/testing';

import '../astro-bootstrap.js';

describe('<astro-bootstrap>', () => {
  it('has a default property title', async () => {
    const el = await fixture('<astro-bootstrap></astro-bootstrap>');

    expect(el.title).to.equal('Hello world!');
  });

  it('allows property title to be overwritten', async () => {
    const el = await fixture(html`
      <astro-bootstrap title="different title"></astro-bootstrap>
    `);

    expect(el.title).to.equal('different title');
  });
});
