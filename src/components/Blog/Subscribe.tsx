import React from 'react';
import styled from 'styled-components';
import Cta from '@components/Cta';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    width: 100%;
    display: block;

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

    #subscribe-button {
      margin-top: 12px;
      width: 100%;
    }
  }
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">Sign up for our newsletter</h2>
        <h3 id="subtitle">
          Receive our newsletter to stay on top of the latest posts.
        </h3>
        <Cta onlyShowSubscribeButton={true} id="button" />
      </div>
    </RootWrap>
  );
};
