import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';
import { MarketHeader, MarketList } from '@src/Styles';

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

    .order {
      width: 100%;
    }
    .userNetPosition {
      width: 100%;
    }
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

class MKTToken extends React.Component {
  render() {
    return (
      <Section
        id="mkt"
        style={{
          background: '#ffffff',
          minHeight: '10vh'
        }}
      >
        <Row type="flex" align="left">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <TextWrapper>
              <Header>MKT Token</Header>
              <ContentWrapper>
                MKT will be the base token of the MARKET Protocol ecosystem and
                benefits from integration into all facets of MARKET Protocol.
                Peer-to-peer trading is free on MARKET Protocol and no fees are
                native to the protocol. Nodes providing order book hosting and
                management will have the option to set and collect transaction
                fees for offering this service.
              </ContentWrapper>
              <ContentWrapper>
                Orders submitted without the required transaction fee may be
                rejected by the node. These transaction fees will be collected
                by the nodes in MKT. MKT holders will also have a vote in
                protocol improvements and development. This ensures both users
                and projects using MARKET Protocol have a voice in the
                protocol’s future.
              </ContentWrapper>
              <SubHeading>Token Use</SubHeading>
              <MarketList>
                Contract Access: Initially, participants are required to post 25
                MKT tokens along with the appropriate base token (for
                collateral) to trade each user-defined contract. MKT posted in
                this way is returned to the user when they stop trading a
                specific contract or upon expiration. This value will float and
                be set by MKT stakeholders through protocol governance.
              </MarketList>
              <MarketList>
                Transaction fees: Nodes provide a service to users of MARKET
                Protocol and in exchange for this service, may charge a
                transaction fee denominated in MKT. Each node sets its own fee
                for the service.. Nodes are expected to differentiate themselves
                on the fees and services provided giving users many choices for
                execution.
              </MarketList>
              <MarketList>
                Dispute Resolution: For accuracy and autonomy, most contracts
                will automatically settle to publicly accessible oracle
                solutions. In the event of a settlement disagreement, or a
                disrupted settlement process, MARKET Protocol intends to a
                employ number of solutions including, backup oracles or a crowd
                sourced resolution pulled from the pool of MKT holders.
              </MarketList>
              <MarketList>
                Contract Creation: Initially, users will be required to hold a
                minimum of 500 MKT to create a new trading contract. The purpose
                of this arbitrary holding is to encourage thoughtful contract
                creation. This value will float and be set by MKT stakeholders
                through protocol governance.
              </MarketList>
              <MarketList>
                Governance: We expect MKT token holders to vote on protocol
                decisions and development. This will include things like number
                of MKT tokens required for contract access or creation as
                indicated above. The more MKT an account holds; the more
                influence it will have. At the onset, decision making will be
                more centralized. MKT holders represent the whole ecosystem,
                traders, nodes and speculators and each has a voice in protocol
                direction. Over time, our goal is to move towards a more
                community-based decision model.
              </MarketList>
            </TextWrapper>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default MKTToken;
