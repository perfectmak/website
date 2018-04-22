import styled from 'styled-components';
import {size} from "./breakpoints";

const MarketText = styled.h1`
  font-size: ${props => props.header ? '36px;' : '18px;'};
  font-weight: ${props => props.header ? '500;' : '300;'};
  
  @media (max-width: ${size.laptop})  {
    font-size: ${props => props.header ? '28px;' : '14px;'};
  }
`;


const MarketList = styled.li`
  font-size: 18px;
  padding: 10px 0;
  list-style: none;
  font-weight: 300;
  :before {
    content: "";
    line-height: 1em;
    width: 10px;
    height: 10px;
    background-color: #00E2C1;
    float: left;
    margin-top: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
  @media (max-width: ${size.laptop})  {
    font-size: 14px;
  }
`;

export {MarketList, MarketText};
