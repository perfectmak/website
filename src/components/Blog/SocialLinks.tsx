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

    #button {
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
  size: number;
  slug: string;
}

const SocialLinks = ({ size = 30, slug }: Props) => {
  const buttonStyle = {
    height: size,
    width: size
  };

  const twitterUrl = slug
    ? `https://twitter.com/intent/tweet?url=https://marketprotocol.io/blog/post/${slug}&via=MarketProtocol`
    : 'https://twitter.com/MarketProtocol/';
  const secondaryUrl = slug
    ? `https://www.facebook.com/sharer/sharer.php?u=https://marketprotocol.io/blog/post/${slug}`
    : 'https://medium.com/market-protocol';
  const secondaryIcon = slug ? facebook : medium;

  return (
    <RootWrap>
      <div id="root">
        <Button size="small" type="primary" style={buttonStyle} id="button">
          <Link id="twitter" to={twitterUrl} target="_blank">
            <img alt="twitter" src={twitter} width="80%" />
          </Link>
        </Button>
        <Button size="small" type="primary" style={buttonStyle} id="button">
          <Link to={secondaryUrl} target="_blank">
            <img alt="fb" src={secondaryIcon} width="80%" />
          </Link>
        </Button>
      </div>
    </RootWrap>
  );
};

export { SocialLinks as default };
