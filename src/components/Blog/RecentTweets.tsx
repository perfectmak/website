import React from 'react';
import styled from 'styled-components';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    width: 100%;
    display: block;

    #tweet {
      color: #646469;
      font-size: 14px;
      line-height: 20px;
      margin-top: 10px;

      #highlight {
        color: #00ccae;
      }

      #timestamp {
        opacity: 0.5;
      }
    }

    #title {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
    }

    #subtitle {
      color: #646469;
      font-size: 14px;
      line-heigh: 20px;
      margin-top: 10px;
    }
  }
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">Recent Tweets</h2>
        <div id="tweet">
          RT <span id="highlight">@twitteruser</span>: Lorem ipsum dolor sit
          amet consectetuer adsplicing nonummy pellentesque curabitur lorem
          ipsum dolor <span id="highlight">@VLM @canaryhealth</span>
          <div id="timestamp">13 hours ago</div>
        </div>
        <div id="tweet">
          RT <span id="highlight">@twitteruser</span>: Lorem ipsum dolor sit
          amet consectetuer adsplicing nonummy pellentesque curabitur lorem
          ipsum dolor <span id="highlight">@VLM @canaryhealth</span>
          <div id="timestamp">13 hours ago</div>
        </div>
      </div>
    </RootWrap>
  );
};
