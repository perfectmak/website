import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';
import { MarketHeader, MarketList } from '@src/Styles';
import MKTContractImage from '@images/whitepaper/mkt_contract.svg';
import PreTrade from '@images/whitepaper/pre_trade.svg';
import PlacingOrder from '@images/whitepaper/placing_order.svg';
import TradeExecution from '@images/whitepaper/trade_execution.svg';
import PostTrade from '@images/whitepaper/post_trade.svg';
import ContractSpecs from '@images/whitepaper/contract_specs.svg';
import ExampleBPreTrade from '@images/whitepaper/example_b_pre_trade.svg';
import ExampleBPostTradeScenario1 from '@images/whitepaper/example_b_post_trade_scenario1.svg';
import ExampleBPostTradeScenario2 from '@images/whitepaper/example_b_post_trade_scenario2.svg';

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
  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px 40px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 0px 0px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 40px;
  }
`;

export const Header = MarketHeader.extend`
  font-size: 27px;
  font-weight: 600;
`;

export const SubHeading = styled.h4`
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

export const ExampleIllustrationWrapper = styled.img`
  width: 50%;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;

class MKTContract extends React.Component {
  render() {
    return (
      <Section
        id="contract"
        style={{
          background: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <Row type="flex" align="left">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <TextWrapper>
              <Header>MKT Contract Examples</Header>
              <SubHeading>Example A - Single Stock Contract</SubHeading>
              <ContentWrapper>
                In this example, we showcase how the MARKET protocol can be used
                to create a derivative contract between ETH and a traditional
                security, Tesla stock (NASDAQ, TSLA).
              </ContentWrapper>
              <IllustrationWrapper
                src={MKTContractImage}
                alt="MarketProtocol Single Stock Contract"
              />
              <ContentWrapper>User A will define:</ContentWrapper>
              <MarketList>
                A base currency (any ERC20 token, in this case ERC20 compliant
                ETH)
              </MarketList>
              <MarketList>An underlying asset (in this case TSLA)</MarketList>
              <MarketList>Settlement (with oracle)</MarketList>
              <MarketList>
                CAP and FLOOR- If the price of TSLA/ETH is currently 10, the
                contract may be created with a CAP of 15 and FLOOR or 5. If the
                contract underlying instrument goes to 5 or 15 it expires. All
                prices are tradeable between 5 and 15.
              </MarketList>
              <ContentWrapper>
                At expiration all users are paid out their gain or loss.
              </ContentWrapper>
              <SubHeading>Pre-Trade</SubHeading>
              <MarketList>
                The trader identifies a contract spec they want to trade. In
                this case it is TSLA/ETH
              </MarketList>
              <MarketList>
                Trader A deposits 10 ETH and Trader B 7 ETH to the smart
                contract to begin trading. They also deposit 25 MKT each.
              </MarketList>
              <MarketList>
                Users with balances can withdraw their balance at any time.
                Funds committed to open positions are not eligible for
                withdrawal.
              </MarketList>
              <MarketList>
                Contracts have a shared collateral pool used to hold funds for
                open orders and positions.
              </MarketList>
              <div style={{ textAlign: 'center' }}>
                <ExampleIllustrationWrapper
                  src={PreTrade}
                  alt="MarketProtocol Whitepaper"
                />
              </div>
              <SubHeading>Placing and Order</SubHeading>
              <MarketList>
                Trader A creates an order object to buy 1 TSLA/ETH at price 10,
                signs it and transmits the order to the node.
              </MarketList>
              <MarketList>
                The defined TSLA/ETH contract has a CAP of 15 and a FLOOR of 5.
              </MarketList>
              <MarketList>
                Node confirms that Trader A has funds available in smart
                contract to create this
              </MarketList>
              <IllustrationWrapper
                src={PlacingOrder}
                alt="MarketProtocol Placing Order"
              />
              <MarketList>
                Node accepts order, and displays a bid for 1 TSLA/ETH at price
                10.
              </MarketList>
              <SubHeading>Trade Execution</SubHeading>
              <MarketList>
                User B looks at the orders held by the node sees user A’s order
                for 1 bid at price 10. User B wants to sell 1 ETH/Tesla at price
                10.
              </MarketList>
              <MarketList>
                User B then takes User A’s order calling the fill trade function
                to the MARKET smart contract with the order information.
              </MarketList>
              <MarketList>
                The MARKET smart contract then fills the order and allocates
                positions.
              </MarketList>
              <MarketList>
                Collateral balances and user balances are updated. Each user has
                their max loss added to the collateral pool.
              </MarketList>
              <MarketList>
                Transaction fees designated for the nodes (in MKT tokens) are
                sent at execution.
              </MarketList>
              <IllustrationWrapper
                src={TradeExecution}
                alt="MarketProtocol Trade Execution"
              />
              <SubHeading>Post-Trade</SubHeading>
              <ContentWrapper>
                Using an TSLA/ETH contract with a CAP of 15 and FLOOR of 5 there
                are three post trade scenarios. If either 15 or 5 is traded in
                the underlying TSLA/ETH pair, then the contract expires and goes
                to settlement.
              </ContentWrapper>
              <MarketList>
                Traders exit position prior to expiration.
              </MarketList>
              <MarketList>Traders hold position to expiration</MarketList>
              {/* Contract price CAP or FLOOR is breached */}
              <SubHeading>Scenario 1:</SubHeading>
              <ContentWrapper>
                Users exit positions prior to expiration
              </ContentWrapper>
              <ContentWrapper>
                Both traders have an open position, A is long 1 at 10 and B is
                short 1 at 10. The TSLA/ETH relationship which was trading at 10
                is now trading at 13.
              </ContentWrapper>
              <ContentWrapper>
                Trader B wants to realize a loss and creates a new order in the
                same process indicated previously and submits the order to a
                node. As a closing order, there is no need for additional
                collateral.
              </ContentWrapper>
              <ContentWrapper>
                Trader A wants to realize a profit and fills User B’s order.
              </ContentWrapper>
              <ContentWrapper>
                Both traders are flat. Trader A has made 3 ETH and Trader B has
                lost 3 ETH.
              </ContentWrapper>
              <ContentWrapper>
                Initial collateral balances were 5 ETH each. Trader A receives
                back 8 ETH and Trader B 2 ETH. Total balance of pool was 10 ETH
                and is now 0. If they are done trading this contract, both
                receive back their MKT tokens.
              </ContentWrapper>
              <IllustrationWrapper
                src={PostTrade}
                alt="MarketProtocol Post Trade"
              />
              <SubHeading>Scenario 2:</SubHeading>
              <ContentWrapper>
                Traders hold trade till expiration - 1 month from contract
                creation.
              </ContentWrapper>
              <ContentWrapper>
                Both users have an open position, A is long 1 at 10 and B is
                short 1 at 10. The contract organically settles. An oracle
                delivers the necessary settlement price based on the contract
                specification which is is used to determine the traders’ PNL.
              </ContentWrapper>
              <ContentWrapper>
                In this case, the contract settles at 7.
              </ContentWrapper>
              <ContentWrapper>
                User A has lost 3 ETH and receives back 2 ETH (initial deposit +
                PNL) and User B made 3 ETH and receives back 8 ETH (initial
                deposit + PNL).
              </ContentWrapper>
              <IllustrationWrapper
                src={PostTrade}
                alt="MarketProtocol Post Trade"
              />
              <SubHeading>Scenario 3:</SubHeading>
              <ContentWrapper>Contract Hits CAP of 15</ContentWrapper>
              <ContentWrapper>
                Both traders have an open position, A is long 1 at 10 and B is
                short 1 at 10.
              </ContentWrapper>
              <ContentWrapper>
                In this case, the contract hits the upper bound trading 15 When
                this happens the contract automatically expires at a price of
                15.
              </ContentWrapper>
              <ContentWrapper>
                Trader A made 5 ETH and receives back 10 ETH (initial deposit
                +/- PNL) and Trader B lost 5 ETH and receives back 0 ETH
                (initial deposit +/- PNL).
              </ContentWrapper>
              <IllustrationWrapper
                src={PostTrade}
                alt="MarketProtocol Post Trade"
              />
              <ContentWrapper>
                <span>
                  All open positions are recorded on the blockchain and
                  transparent to all users. The balance of the collateral pool
                  is always fully funded to cover all open positions. As a user
                  trades out of open positions, the accounting is done in a last
                  in first out method.
                </span>
              </ContentWrapper>
              <SubHeading>Example B – Hedging a Utility Token</SubHeading>
              <ContentWrapper>
                Users can hedge utility tokens with MARKET removing price
                movement both up and down. The majority of existing and future
                ICO tokens provide the owner some benefit or utility. These
                tokens, however, may have considerable price volatility which
                could actually outweigh any potential benefit associated with
                the token. MARKET provides owners of utility tokens a way to
                hedge their price exposure while maintaining the utility
                associated with owning the tokens. Token owners never sell or
                transfer their tokens.
              </ContentWrapper>
              <ContentWrapper>
                In this example, we will use SALT lending tokens. SALT is a peer
                to peer lending platform allowing users to borrow fiat through
                loans backed by crypto holdings. SALT Lending tokens are
                necessary to participate on the platform and obtain loans.
              </ContentWrapper>
              <ContentWrapper>
                Since they were issued, SALT tokens have traded from the low $2s
                to a high of over $17. With MARKET traders can hedge this price
                volatility.
              </ContentWrapper>
              <ContentWrapper>
                To illustrate this example, suppose Trader A owns a number of
                SALT tokens and wants to hedge their price exposure:
              </ContentWrapper>
              <div style={{ textAlign: 'center' }}>
                <ExampleIllustrationWrapper
                  src={ContractSpecs}
                  alt="MarketProtocol Whitepaper"
                />
              </div>
              <SubHeading>Pre-Trade</SubHeading>
              <MarketList>
                Trader A owns 10 SALT tokens worth 5 ETH and wants to hedge
                them, he would need to sell 10 contracts.
              </MarketList>
              <MarketList>
                Trader B doesn't own SALT tokens but wants to speculate on the
                price of SALT tokens.
              </MarketList>
              <ContentWrapper>
                It is important to note, that Trader A still has his SALT tokens
                and can use them to access the platform. Trader B never had SALT
                tokens and still doesn’t.
              </ContentWrapper>
              <div style={{ textAlign: 'center' }}>
                <ExampleIllustrationWrapper
                  src={ExampleBPreTrade}
                  alt="MarketProtocol Whitepaper"
                />
              </div>
              <ContentWrapper>
                For Trader A to hedge his SALT token price exposure, he would
                need to sell 10 contracts. The current price is 0.5 ETH. This
                means they have a maximum downside of 0.25 ETH * 10 = 2.5 ETH
                Trader B is willing to buy SALT/ETH at the same price. From here
                SALT tokens can go up or down.
              </ContentWrapper>
              <SubHeading>Post Trade</SubHeading>
              <ContentWrapper>
                We will cover two post trade scenarios:
              </ContentWrapper>
              <MarketList>SALT goes down.</MarketList>
              <MarketList>SALT goes up.</MarketList>
              <SubHeading>Scenario 1:</SubHeading>
              <ContentWrapper>
                SALT goes down from 0.5 to 0.375 and traders exit positions.
              </ContentWrapper>
              <div style={{ textAlign: 'center' }}>
                <ExampleIllustrationWrapper
                  src={ExampleBPostTradeScenario1}
                  alt="MarketProtocol Whitepaper"
                />
              </div>
              <ContentWrapper>
                Trader A gains 0 125 * 10 contracts = + 1.25 ETH
              </ContentWrapper>
              <ContentWrapper>
                Trader B loses 0 .125 * 10 contracts = - 1.25 ETH
              </ContentWrapper>
              <ContentWrapper>Trader balances are updated.</ContentWrapper>
              <ContentWrapper>
                Trader A’s original SALT tokens were worth 5 ETH
              </ContentWrapper>
              <ContentWrapper>
                (0.5 * 10), they have since decreased in value to 3.75 ETH
                (0.375 * 10).
              </ContentWrapper>
              <ContentWrapper>
                Trader A gained 1.25 on the SALT/ETH contract but lost 1.25 on
                his actual token holdings offsetting the loss.
              </ContentWrapper>
              <ContentWrapper>
                If Trader A did not hedge his holdings with MARKET they would be
                exposed to the loss.
              </ContentWrapper>
              <ContentWrapper>
                Trader B never owned any SALT tokens but through the SALT/ETH
                MARKET contract bought the equivalent of 10 tokens which
                decreased from 0.5 ETH to 0.375 ETH and provided a loss of 1.25
                ETH. This which is the same as if they owned 10 SALT tokens
                without ever touching the original tokens.
              </ContentWrapper>
              <SubHeading>Scenario 2:</SubHeading>
              <ContentWrapper>
                SALT goes up from 0.5 to 0.625 and traders exit positions.
              </ContentWrapper>
              <div style={{ textAlign: 'center' }}>
                <ExampleIllustrationWrapper
                  src={ExampleBPostTradeScenario2}
                  alt="MarketProtocol Whitepaper"
                />
              </div>
              <ContentWrapper>
                Trader A loses 0.125 * 10 contracts = 1.25 ETH
              </ContentWrapper>
              <ContentWrapper>
                Trader B gains 0.125 * 10 contracts = 1.25 ETH
              </ContentWrapper>
              <ContentWrapper>Trader balances are updated.</ContentWrapper>
              <ContentWrapper>
                Trader A’s original SALT tokens were worth 5 ETH
              </ContentWrapper>
              <ContentWrapper>
                (0.5 * 10), they have since increased in value to 6.25 ETH
                (0.625 * 10).
              </ContentWrapper>
              <ContentWrapper>
                Trader A lost 1.25 on the SALT/ETH contract but gained 1.25 on
                his actual token holdings offsetting the loss.
              </ContentWrapper>
              <ContentWrapper>
                Trader B never owned any SALT tokens but through the SALT/ETH
                MARKET contract bought the equivalent of 10 tokens which
                increased from 0.5 ETH to 0.625 ETH and provided a gain of 1.25
                ETH which is the same as if they owned 10 SALT tokens without
                ever touching the original tokens.
              </ContentWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default MKTContract;
