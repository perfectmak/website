import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';
import { MarketHeader, MarketList } from '@src/Styles';
import SharedCollateralPool from '@images/whitepaper/shared_collateral_pool.svg';
import OrderSubmissionAndExecution from '@images/whitepaper/order_submission_execution.svg';
import UserNetPosition from '@images/whitepaper/user_net_position.svg';
import Callback from '@images/whitepaper/callback.svg';
import Settlement from '@images/whitepaper/settlement.svg';

export const Section = styled.section`
  padding: 70px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 40px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 70px;
  }

  @media ${device.desktopS} {
    padding: 150px;
  }
`;

export const TextWrapper = styled.div`
  .userNetPosition {
    width: 100%;
  }
  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px 40px;

    .order {
      width: 100%;
    }
    .userNetPosition {
      width: 100%;
    }
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 0px 0px;
    .order {
      width: 100%;
    }
    .userNetPosition {
      width: 100%;
    }
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 40px;
    .order {
      width: 100%;
    }
    .userNetPosition {
      width: 100%;
    }
  }
`;

export const Header = MarketHeader.extend`
  font-size: 27px;
  font-weight: 600;
`;

const SubHeading = styled.h4`
  font-size: 22px;
  font-weight: 100;
  padding: 5px 0px;
`;

export const ContentWrapper = styled.p`
    font-size: 16px
    font-weight: 300;
    line-height: 1.5rem;
    text-align: justify;

`;

export const IllustrationWrapper = styled.img`
  width: 100%;
`;

class Technical extends React.Component {
  render() {
    return (
      <Section
        id="technical"
        style={{
          background: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <Row type="flex" align="left">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <TextWrapper>
              <Header>Technical Specifications</Header>
              <SubHeading>Overview</SubHeading>
              <ContentWrapper>
                MARKET allows third parties to create “markets” by hosting an
                order book. The order book hosts, referred to hereafter as
                “nodes”, are incentivized to host order books by collecting
                transaction fees, which they set and control. MARKET simplifies
                the complexity of securing collateral, validating
                creditworthiness, executing settlement and the custody of
                customer funds with smart contracts.
              </ContentWrapper>
              <ContentWrapper>
                At this time, nodes are not responsible for the matching of
                trades and never have custody of funds. Traders of the protocol
                can post orders as makers, or they can trade against resting
                orders as takers. Nodes act in a bulletin board like fashion and
                broadcast all maker orders transmitted to them providing
                potential matches to takers, who ultimately select and execute
                the trade.
              </ContentWrapper>
              <ContentWrapper>
                In the future, MARKET may pursue alternative node solutions,
                such as a fully decentralized order book and matching, as well
                as other scaling implementations.
              </ContentWrapper>
              <SubHeading>Contract Creation and Clearing</SubHeading>
              <ContentWrapper>
                MARKET allows users to create a contract, specify its terms,
                publish those terms, and provide a mechanism for automated
                settlement while ensuring contract solvency through collateral
                pools. Any trader can create a new contract by outlining the
                contract specifications. The contract creator will be presented
                with the following options:
              </ContentWrapper>
              <MarketList>
                Underlying Instrument: What is the underlying asset for pricing?
                This could be a real world or digital asset.
              </MarketList>
              <MarketList>
                Price Floor and Cap: This defines the maximum loss or gain for
                participants and the amount of collateral each participant must
                post in order to take a short or long position.
              </MarketList>
              <MarketList>Expiration Date</MarketList>
              <MarketList>
                Settlement mechanism: Creators select an oracle-based solution
                for the final settlement price of the contract used in profit
                and loss calculations.
              </MarketList>
              <MarketList>
                Base Token: What will the base currency be for pricing? This
                dictates the ERC20 token contributed to the collateral pool.
              </MarketList>
              <ContentWrapper>
                Since the value of the contract is derived from the value of a
                held cryptocurrency, contracts can be created for any physical
                asset, digital asset, or ERC20 token.
              </ContentWrapper>
              <SubHeading>Shared Collateral Pool</SubHeading>
              <ContentWrapper>
                Each MARKET contract is comprised of multiple smart contracts
                that create the shared collateral pool and needed accounting of
                an individual traders’ balances denoted in the defined base
                token (any ERC20 ).
              </ContentWrapper>
              <ContentWrapper>
                Traders will deposit collateral in the form of ERC20-compatible
                tokens to the smart contract prior to trading, and all profits
                and losses from trades will be settled using the tokens.
              </ContentWrapper>
              <ContentWrapper>
                After depositing tokens, the trader can submit orders and enter
                positions based on their smart contract balance. When a trader
                opens a position, tokens will be transferred from the trader’s
                balance to the collateral pool. The tokens in the collateral
                pool fully fund the max loss of all open positions within a
                specific contract. If a trader closes a position prior to
                settlement, their previously allocated capital - plus or minus
                any profit or loss - is available for withdrawal or further
                trading. Alternatively, a trader can hold their position through
                expiration. In that case, a oracle will provide a settlement
                value which is used to determine the trader’s profit or loss.
                Once the contract enters a settled state, users may call a
                function to return their collateral.
              </ContentWrapper>
              <ContentWrapper>
                <span>
                  All open positions are fully collateralized at the time of
                  execution removing counterparty risk and replacing one of the
                  core functionalities of traditional exchanges.
                </span>
                A smart contract governing the collateral pool will provide a
                reliable and trustless solution to traditional custody of funds
                issues.
              </ContentWrapper>
              <ContentWrapper>
                The executed trade price and quantity determine the amount of
                collateral moved from the trader’s balance to the collateral
                pool. Allocated collateral equals the maximum loss possible for
                that position. For buyers, it is the entry price minus the
                contract minimum, and for sellers, it’s the contract maximum
                minus the entry price.
              </ContentWrapper>
              <img
                style={{
                  width: '100%'
                }}
                src={SharedCollateralPool}
                alt="Market Protocol Shared Collateral Pool"
              />
              <ContentWrapper>
                This collateral remains in the pool until the trade is closed.
                Next, the contract updates the price and quantity of the user’s
                open positions.
              </ContentWrapper>
              <SubHeading>Leverage and Contract Range</SubHeading>
              <ContentWrapper>
                MARKET contracts offer continuous profit and loss exposure
                derived from an underlying asset up to a PRICE_CAP and
                PRICE_FLOOR specified during contract creation defining the
                contract range. Leverage offered through the MARKET protocol
                differs from traditional leverage, which runs the risk of forced
                liquidations and unfunded positions.
              </ContentWrapper>
              <ContentWrapper>
                Traders will commit the difference between the executed price
                and their maximum loss to the collateral pool when they initiate
                a new trade. This action will require less equity than the total
                notional value of the position providing implicit leverage. All
                prices between initial entry within the contract range are
                tradeable. The outcomes are not binary.
              </ContentWrapper>
              <ContentWrapper>
                If the high or low of the range is breached the contracts is
                settled with the participants on one side awarded their maximum
                gain, while the other side receives nothing (their maximum
                loss). It is possible neither is breached, in that case the
                contract trades and expires conventionally. We plan to implement
                this functionality to ensure that the market remains solvent.
                <span>
                  This process is one of the most important features of the
                  contract framework and the MARKET protocol.
                </span>
                The amount of leverage afforded to an open position depends on
                where the price of the trade executed relative to the ranges of
                the current contract. For example, users will post less margin
                when selling near the maximum as they have less downside
              </ContentWrapper>
              <ContentWrapper>
                Traders can replicate uncapped payoff structures by stripping
                together a series of contracts. We expect third-party
                implementations of MARKET to provide multiple strikes per
                contract and an easy, cost-effective way for traders to create
                the exposure they want. This may present traders with arbitrage
                opportunities as traders can spread-trade multiple contracts
                against each other.
              </ContentWrapper>
              <ContentWrapper>
                Two detailed examples of trading the MARKET protocol are
                including later in the document.
              </ContentWrapper>
              <SubHeading>Short Selling</SubHeading>
              <ContentWrapper>
                Currently, there are limited and inefficient options to short
                crypto assets. However, a MARKET contract makes shorting simple.
              </ContentWrapper>
              <ContentWrapper>
                If two parties are willing to transact at a predefined price
                they can trade. There is no need for the short to locate or
                borrow the underlying asset. With MARKET, if a contract is
                listed and has liquidity, it can be shorted.
              </ContentWrapper>
              <SubHeading>Order Submission and Execution</SubHeading>
              <ContentWrapper>
                To begin trading, a user will first commit the requisite amount
                of the base token to the collateral pool smart contract, thus
                ensuring funds are available to trade. Funding the smart
                contract prior to execution results in fewer transactional
                failures during matching and creates a better user experience.
              </ContentWrapper>
              <ContentWrapper>
                For a to enter a trade, they will submit an order, as a maker,
                to a node providing both a price and quantity. Upon receipt, the
                node confirms that the maker’s address has the necessary balance
                in the smart contract to place the order. Next, the node will
                post and maintain the order in the order book until another
                trader (taker) fills it. For providing this service, the node
                sets and collects a transaction fee. The taker is responsible
                for filling the maker order by calling the trade function via a
                smart contract and supplying their address. The taker controls
                order matching, reinforcing the trustless role of the node. At
                that point, funds are moved from the trader’s smart contract
                balance to the collateral pool. The node never handles funds.
                Finally, the new positions for each participant are recorded in
                the smart contract and on the blockchain.
              </ContentWrapper>
              <img
                className="order"
                src={OrderSubmissionAndExecution}
                alt="Market Protocol Order Submission and Execution"
              />
              <ContentWrapper>
                If multiple executions exist, positions are exited in a LIFO
                (Last In, First Out) manner. After exiting a position, the
                appropriate amount of collateral (including any gain or loss)
                will be allocated back to the user’s smart contract balance and
                become available for trading or withdrawal.
              </ContentWrapper>
              <img
                src={UserNetPosition}
                className="userNetPosition"
                alt="Market Protocol User Net Position"
              />
              <SubHeading>Expiration and Settlement</SubHeading>
              <ContentWrapper>
                Upon the expiration of a contract, functionality built into
                MARKET allows contracts to be settled using an oracle such as
                Oraclize.it or Thomson Reuters Block1IQ. Oracles provide
                external data to the blockchain. The contract creator will have
                the ability to set the frequency for oracle queries.
              </ContentWrapper>
              <IllustrationWrapper
                src={Callback}
                alt="Market Protocol Expiration and Settlement"
              />
              <ContentWrapper>
                Typically, the oracle is queried once a day to determine if a
                contracts price bands have been exceeded or if the contract is
                past the expiration date. If either of these criteria are met,
                the contract enters an expired state, and the settlement process
                begins. Additionally, a user may call a function at any time to
                induce settlement if a settlement condition is met, such as, an
                exceeded price band.
              </ContentWrapper>
              <IllustrationWrapper
                src={Settlement}
                alt="Market Protocol Check Settlement"
              />
              <ContentWrapper>
                Contracts can be settled to the price of any actively traded
                ERC20 token, crypto currency or other listed asset by calling an
                exchange API via an oracle, e.g., the contract defined
                settlement procedure could specify the last traded price of a
                token on Kraken at a predetermined time.
              </ContentWrapper>
              <ContentWrapper>
                To avoid incorrect or inaccurate settlement prices, we will
                implement a time delay between the initial execution (contract
                expiration) and the time at which users may withdraw their
                funds. If more than a certain percentage of the participants
                with open positions initiate a settlement dispute, then the
                contract enters a disputed state.
              </ContentWrapper>
              <ContentWrapper>
                In the event of a settlement dispute, a backup oracle or group
                of backup oracles can be used to obtain a settlement value. As
                crowd based consensus mechanisms evolve MARKET intends to
                implement additional resolution mechanisms. Until that point,
                disputed settlements may also get resolved through a more
                centralized process to ensure funds are equitably returned to
                participants and not permanently trapped in the contract.
              </ContentWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Technical;
