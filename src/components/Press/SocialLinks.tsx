import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-static';

import twitter from '@images/twitter-white.svg';
import facebook from '@images/facebook-white.svg';
import medium from '@images/medium-white.svg';

const RootWrap = styled.div`
  > #root {
    text-align: center;
    display: inline-block;

    button {
      margin-left: 10px;
      border: none;
      background: black;

      :hover {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

interface Props {
  size?: number;
  slug?: string;
  external?: boolean;
}

const isClient = typeof window !== 'undefined';

const SocialLinks = ({ size = 30, slug }: Props) => {
  const buttonStyle = {
    height: size,
    width: size
  };

  const twitterUrl = slug
    ? `https://twitter.com/intent/tweet?url=${slug}&via=MarketProtocol`
    : 'https://twitter.com/MarketProtocol/';

  const secondaryUrl = slug
    ? `https://www.facebook.com/sharer/sharer.php?=${slug}`
    : 'https://medium.com/market-protocol';

  const secondaryIcon = slug ? facebook : medium;

  const openLink = (e: React.FormEvent<{}>, url: string) => {
    e.preventDefault();

    if (isClient) {
      window.open(url, '_blank');
    }
  };

  return (
    <RootWrap>
      <div id="root">
        <Button
          size="small"
          type="primary"
          style={buttonStyle}
          onClick={e => openLink(e, twitterUrl)}
        >
          <img alt="twitter" src={twitter} width="80%" />
        </Button>
        <Button
          size="small"
          type="primary"
          style={buttonStyle}
          onClick={e => openLink(e, secondaryUrl)}
        >
          <img alt="fb" src={secondaryIcon} width="80%" />
        </Button>
      </div>
    </RootWrap>
  );
};

export { SocialLinks as default };
