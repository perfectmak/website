import styled, { injectGlobal } from 'styled-components';
import { device, size } from './breakpoints';

injectGlobal`
.bio-wrap {
  visibility: hidden;
  opacity: 0;
  transition: 250ms;

  &.visible {
    visibility: visible;
    opacity: 1;
    transition: 250ms;
  }
}

.become-opaque-on-hover {
  opacity: 1;
  transition: 250ms;

  &:hover {
    opacity: 0.75;
    transition: 250ms;
  }
}
`;

const MarketHeader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.1;

  @media (max-width: ${size.laptop}) {
    font-size: 18px;
  }

  @media ${device.desktopS} {
    font-size: 28px;
  }
`;

const MarketText = styled.div`
  font-size: 18px;
  font-weight: 300;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
  }

  @media ${device.desktopS} {
    font-size: 22px;
  }
`;

const MarketList = styled.li`
  font-size: 18px;
  padding: 10px 0;
  list-style: none;
  font-weight: 300;
  margin-left: 20px;
  :before {
    content: '';
    line-height: 1em;
    width: 10px;
    height: 10px;
    background-color: #00e2c1;
    float: left;
    margin-top: 10px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: -20px;
  }
  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    :before {
      margin-top: 5px;
    }
  }

  @media ${device.desktopS} {
    font-size: 22px;
  }
`;

const TeamDivWithResponsiveWidth = styled.div`
  width: 60%;

  @media (max-width: ${size.laptop}) {
    width: 80%;
  }

  @media (max-width: ${size.tablet}) {
    width: 92%;
  }
`;

const BioModalContentWrap = styled.div`
  width: 515px;

  @media (max-width: ${size.tablet}) {
    width: 350px;
  }
`;

export {
  MarketList,
  MarketHeader,
  MarketText,
  BioModalContentWrap,
  TeamDivWithResponsiveWidth
};
