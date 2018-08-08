import React from 'react';
import styled from 'styled-components';
import {
  ContentWrapper,
  MarketHeader,
  MarketList,
  TextWrapper
} from '@src/Styles';

export const Header = MarketHeader.extend`
  font-size: 27px;
  font-weight: 600;
`;

export const SubHeading = styled.h4`
  font-size: 22px;
  font-weight: 100;
  padding: 5px 0px;
`;

class Problems extends React.Component {
  render() {
    return (
      <TextWrapper id="problems">
        <Header>Problems Addressed By MARKET Protocol</Header>
        <SubHeading>Decoupling Price from Utility - A Scaling Issue</SubHeading>
        <ContentWrapper>
          Price volatility is one factor limiting growth in the blockchain
          space. Holders of crypto assets, ERC20 or otherwise, currently have no
          effective way to manage their price exposure. A Bloomberg article
          entitled “Ethereum’s Volatility is Undermining its Viability" 1
          mentions an 8% move in the British Pound during Brexit as abnormally
          large and unprecedented. In 2017, Ethereum’s standard deviation was
          ~7.5% compared to ~0.5% in the EUR/USD currency pair. Price volatility
          must be decoupled from utility in order for crypto assets to mature as
          a store of value, a medium of exchange or other utility applications.
        </ContentWrapper>
        <SubHeading>Traditional Centralized Exchanges</SubHeading>
        <MarketList>
          Margin Funding, Forced Liquidations and Leverage
          <ContentWrapper>
            Price volatility is one factor limiting growth in the blockchain
            space. Holders of crypto assets, ERC20 or otherwise, currently have
            no effective way to manage their price exposure. A Bloomberg article
            entitled “Ethereum’s Volatility is Undermining its Viability" 1
            mentions an 8% move in the British Pound during Brexit as abnormally
            large and unprecedented. In 2017, Ethereum’s standard deviation was
            ~7.5% compared to ~0.5% in the EUR/USD currency pair. Price
            volatility must be decoupled from utility in order for crypto assets
            to mature as a store of value, a medium of exchange or other utility
            applications.
          </ContentWrapper>
        </MarketList>
        <MarketList>
          Clearing Firms and Custody of Funds
          <ContentWrapper>
            Centralized derivatives exchanges rely on clearing firms to handle
            customer funds. In 2011, MF Global reported a shortfall in customer
            accounts as large as $1.2 billion. When MF 2 Global declared
            bankruptcy, approximately 33,000 customers had their funds frozen. 3
            Custody of funds and segregation of customer funds are concerns with
            current exchange models.
          </ContentWrapper>
        </MarketList>
        <MarketList>
          Market Solvency
          <ContentWrapper>
            By design, exchanges obfuscate counterparties and in doing so make
            it difficult to view the market as a whole. Participants must trust
            that clearing firms and exchanges are appropriately monitoring
            trader's positions and capital balances. There is no way to
            guarantee market solvency.
          </ContentWrapper>
        </MarketList>
        <MarketList>
          Commercial Contracts
          <ContentWrapper>
            Exchanges, as for-profit entities, only offer contracts they believe
            will be commercially successful. They have minimum market
            participation and open interest goals for new contracts to attract
            more significant institutional clients. As a result, potentially
            useful contracts may not get listed, forcing traders and businesses
            to transact only in contracts the exchanges choose to list.
          </ContentWrapper>
        </MarketList>
        <MarketList>
          Limited Access/Credit Verification
          <ContentWrapper>
            Existing exchanges require credit verification and minimum account
            balances restricting availability.
          </ContentWrapper>
        </MarketList>
        <SubHeading>Cryptocurrency Exchanges</SubHeading>
        <ContentWrapper>
          Cryptocurrency exchanges are different from derivatives exchanges and
          more closely resemble the US equity markets. Many fragmented
          cryptocurrency exchanges provide a venue for participants to engage in
          discrete transactions like trading Bitcoin (“BTC”) for US dollars
          (“USD”) or Ethereum (“ETH”) for other ERC20 tokens.
        </ContentWrapper>
        <ContentWrapper>
          Typically, the exchanges charge the user a fee expressed as a
          percentage of the trade or charges for withdrawals or fiat currency
          deposits. The fee can vary depending on the order type. Cryptocurrency
          prices differ from exchange to exchange due to the market
          participants’ perception of each exchange’s capital controls,
          solvency, liquidity, regulatory regime, and other factors.
        </ContentWrapper>
        <ContentWrapper>
          Given the increasing worldwide user base for cryptocurrency exchanges
          and institutional demand, The Chicago Board Options Exchange, The CME
          Group, and LedgerX began trading BTC options and derivatives. However,
          these projects were built on top of traditional exchange and clearing
          models and will continue to perpetuate the problems discussed in prior
          sections. They also require traders to post USD margin.
        </ContentWrapper>
        <MarketList>
          Digital IOUs
          <ContentWrapper>
            Trades on centralized crypto exchanges such as Coinbase and Kraken
            do not result in actual transactions on the blockchain; instead,
            they are internal transactions on the exchange’s ledger. Only when a
            user withdraws crypto tokens from an exchange to the user’s digital
            wallet does a blockchain transaction take place, thus giving users
            control over the tokens. Until that point, funds reside in a
            commingled exchange wallet leaving trader's funds at risk.
          </ContentWrapper>
        </MarketList>
        <MarketList>
          Limited Products
          <ContentWrapper>
            Limited products exist and proposed decentralized exchanges limit
            trading to ERC20 tokens with no ability to trade the majority of
            other cryptocurrencies, including Bitcoin, Litecoin or Ripple.
            Additionally, all trades are A for B, atomic transactions. traders
            can only trade assets they own. If they want price exposure to
            multiple crypto assets, they must buy, hold and store each one.
          </ContentWrapper>
        </MarketList>
        <MarketList>
          Cannot Short
          <ContentWrapper>
            Traders have limited options to short crypto assets or bet on a
            decline in price. Currently, there is no easy way for traders to
            borrow or sell assets and shorting crypto assets for the average
            trader is complicated.
          </ContentWrapper>
        </MarketList>
        <MarketList>
          Inefficient Markets
          <ContentWrapper>
            Short sellers provide an essential force in the marketplace by
            allowing speculators and hedgers to bet on a decrease in price.
            Without short sellers, a fundamental piece of an efficient market is
            missing. Further, most traders, including U.S. based traders, cannot
            deploy leverage on crypto assets and are thus forced to post the
            entire value of their open position resulting in inefficient capital
            allocations.
          </ContentWrapper>
        </MarketList>
      </TextWrapper>
    );
  }
}

export default Problems;
