import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';
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

const WhitepaperMarketList = MarketList.extend`
  font-size: 16px !important;
`;

class MKTToken extends React.Component {
  render() {
    return (
      <TextWrapper id="mkt">
        <Header>MKT Token</Header>
        <ContentWrapper>
          MKT will be the base token of the MARKET Protocol ecosystem and
          benefits from integration into all facets of MARKET Protocol.
          Peer-to-peer trading is free on MARKET Protocol and no fees are native
          to the protocol. Nodes providing order book hosting and management
          will have the option to set and collect transaction fees for offering
          this service.
        </ContentWrapper>
        <ContentWrapper>
          Orders submitted without the required transaction fee may be rejected
          by the node. These transaction fees will be collected by the nodes in
          MKT. MKT holders will also have a vote in protocol improvements and
          development. This ensures both users and projects using MARKET
          Protocol have a voice in the protocol’s future.
        </ContentWrapper>
        <SubHeading>Token Use</SubHeading>
        <WhitepaperMarketList>
          Contract Access: Initially, participants are required to post 25 MKT
          tokens along with the appropriate base token (for collateral) to trade
          each user-defined contract. MKT posted in this way is returned to the
          user when they stop trading a specific contract or upon expiration.
          This value will float and be set by MKT stakeholders through protocol
          governance.
        </WhitepaperMarketList>
        <WhitepaperMarketList>
          Transaction fees: Nodes provide a service to users of MARKET Protocol
          and in exchange for this service, may charge a transaction fee
          denominated in MKT. Each node sets its own fee for the service.. Nodes
          are expected to differentiate themselves on the fees and services
          provided giving users many choices for execution.
        </WhitepaperMarketList>
        <WhitepaperMarketList>
          Dispute Resolution: For accuracy and autonomy, most contracts will
          automatically settle to publicly accessible oracle solutions. In the
          event of a settlement disagreement, or a disrupted settlement process,
          MARKET Protocol intends to a employ number of solutions including,
          backup oracles or a crowd sourced resolution pulled from the pool of
          MKT holders.
        </WhitepaperMarketList>
        <WhitepaperMarketList>
          Contract Creation: Initially, users will be required to hold a minimum
          of 500 MKT to create a new trading contract. The purpose of this
          arbitrary holding is to encourage thoughtful contract creation. This
          value will float and be set by MKT stakeholders through protocol
          governance.
        </WhitepaperMarketList>
        <WhitepaperMarketList>
          Governance: We expect MKT token holders to vote on protocol decisions
          and development. This will include things like number of MKT tokens
          required for contract access or creation as indicated above. The more
          MKT an account holds; the more influence it will have. At the onset,
          decision making will be more centralized. MKT holders represent the
          whole ecosystem, traders, nodes and speculators and each has a voice
          in protocol direction. Over time, our goal is to move towards a more
          community-based decision model.
        </WhitepaperMarketList>
      </TextWrapper>
    );
  }
}

export default MKTToken;
