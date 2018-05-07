import React from 'react';

// souce image
// https://www.pexels.com/photo/macro-photography-of-brown-and-black-lost-cat-signage-on-black-bare-tree-159868/
// license https://www.pexels.com/photo-license/
import image404 from '@images/404.jpeg';

export default () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <div style={{ margin: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Opus!</h1>
        <h2>LOOKS LIKE SOMETHING IS MISSING ...</h2>
        <img alt="404" src={image404} />
      </div>

      <div style={{ margin: '20px', width: '600px' }}>
        <h3>
          You're seeing this page because we can't find the page you are looking
          for, or because there's a problem with our site.
        </h3>

        <h2>Get back on track</h2>
        <ul>
          <li>
            Try looking on our <a href="https://marketprotocol.io/">homepage</a>
          </li>
          <li>
            Check our{' '}
            <a href="https://docs.marketprotocol.io/#faq-general">FAQ</a>
          </li>
          <li>
            Read our <a href="https://docs.marketprotocol.io/">document</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
