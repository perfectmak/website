import React from 'react';
import { ContentWrapper, MarketHeader, TextWrapper } from '@src/Styles';

class MarketProtocol extends React.Component {
  render() {
    return (
      <TextWrapper id="market">
        <MarketHeader>MARKET Protocol</MarketHeader>

        <ContentWrapper>
          MARKET Protocol provides developers with a trustless and secure
          framework to create decentralized exchanges, including the necessary
          clearing and collateral pool infrastructure. As a protocol, MARKET
          enables third parties to build applications for trading, order routing
          and related activities.
        </ContentWrapper>
        <ContentWrapper>
          The decentralized protocol facilitates risk transference and a
          trustless trading system through smart contracts on the Ethereum
          blockchain. MARKET Protocol contracts derive their price from an
          underlying asset, either digital or real-world. traders are not
          limited to owned or existing ERC20 tokens, allowing price exposure to
          other cryptocurrencies like Bitcoin, Ripple, and Monero.
        </ContentWrapper>
        <ContentWrapper>
          As derivatives, MARKET Protocol contracts offer users continuous price
          exposure and future settlement. Traders can quickly enter long or
          short positions in any contract where they find liquidity. Trade
          participants then contribute funds to a collateral pool before trade
          execution. The contract then distributes funds in a rule-based manner
          at an agreed-upon settlement date or when traders exit positions
          before the settlement date.
        </ContentWrapper>
        <ContentWrapper>
          The clearing functionality provides a safe and secure framework to
          manage crypto assets, positions, and leverage in a systemically
          responsible way. All smart contracts and collateral pool balances are
          publicly available on the blockchain. No person or entity controls the
          flow of assets among participants, order matching, contract creation
          or dispute resolution.
        </ContentWrapper>
        <ContentWrapper>
          Participants will govern the protocol in a democratic and equitable
          fashion. Traders of the protocol will be the owners and decision
          makers. The goal of MARKET Protocol is to provide users the most
          efficient, safe, and secure environment possible while creating a
          robust and fair marketplace.
        </ContentWrapper>
      </TextWrapper>
    );
  }
}

export default MarketProtocol;
