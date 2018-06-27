import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

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
      margin-bottom: 0px;
    }

    #subtitle {
      color: #646469;
      font-size: 14px;
    }
  }
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">About Our Blog</h2>
        <p id="subtitle">
          Mauris ornare lacus est, eu efficitur felis faucibus tristique. Nam
          sit amet magna eu nisi gravida convallis.
        </p>
      </div>
    </RootWrap>
  );
};
