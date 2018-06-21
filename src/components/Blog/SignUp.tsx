import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

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

    #button {
      margin-top: 12px;
      width: 100%;
    }
  }
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">Join Market Protocol</h2>
        <h3 id="subtitle">Create an account today and let’s get started.</h3>
        <Button id="button" type="primary">
          Sign Up Now
        </Button>
      </div>
    </RootWrap>
  );
};
