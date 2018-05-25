import React, { Component } from 'react';
import withGAPageView from '@containers/GoogleAnalyticsTracker';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Button, Col, Row } from 'antd';

import config, { PartnerProject } from './config';
import { HeroArt } from '@components/Hero';
import { MarketText } from '@src/Styles';
import NewsletterSubscribeBanner from '@components/NewsletterSubscribeBanner';
import PartnerImages from '@images/partners';
import { device, size } from '@src/breakpoints';
import { emailLink } from '@components/Cta';

const ContentWrapper = styled.section`
  padding: 50px;
  background-color: #f0f0f0;

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 60px;
  }
  @media ${device.tablet} {
    padding: 80px;
  }
  @media ${device.laptopL} {
    padding: 160px;
  }
`;

const HeroWrapper = styled.section`
  background-color: #181e26;
  min-height: 662px;
  overflow: hidden;
  @media (max-width: ${size.tablet}) {
    .hero > div:last-child {
      position: absolute;
      top: 0px;
      width: 100%;
      > div {
        opacity: 0.4;
        margin-top: -80px;
        z-index: -1;
      }
    }
  }
  @media (max-width: ${size.mobileL}) {
    .hero > div:last-child {
      top: 150px;
    }
  }
`;

const HeroText = styled.div`
  color: #f0f0f0;
  font-size: 50px;
  margin: 150px 50px 0 50px;
  @media ${device.mobileS} {
    font-size: 22px;
    margin: 70px 50px 0 50px;
  }
  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    font-size: 24px;
    margin: 170px 40px 0 40px;
    background-color: transparent;
  }
  @media ${device.tablet} {
    font-size: 38px;
    margin: 50px 0 0 50px;
  }
  @media (max-width: 900px) {
    margin-top: 50px;
  }
  @media (max-width: ${size.tablet}) {
    margin-top: 150px;
  }
  @media (max-width: ${size.mobileL}) {
    margin-top: 70px;
    margin-left: 40px;
    margin-right: 40px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
`;

const HeroHeaderText = styled.h1`
  color: #fff;
  line-height: 1;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
  @media (max-width: ${size.mobileL}) {
    font-size: 24px;
  }
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

const HeroParagraphText = styled.p`
  color: #fff;
  font-weight: 100;
  font-size: 24px;
  max-width: 540px;
  margin-bottom: 40px;
  @media (max-width: ${size.mobileL}) {
    font-size: 16px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

const PartnerBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 33%;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center
    justify-content: center;
    background-color: #fff;
    padding: 60px;
    text-align: center;
    height: 100%;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: ${size.laptop}) {
    width: 50%;

  }

  @media (max-width: ${size.tablet}) {
    padding: 20px;
    > a {
      padding: 30px;
    }
  }


  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }

`;

const PartnerBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 80px;
`;

const JoinCTAWrapper = styled.div`
  margin-left: -80px;
  margin-right: -80px;
  display: flex;
  justify-content: space-between;
  background-color: #00e2c1;
  padding: 40px;

  > div:first-child {
    flex: 60%;
    padding-right: 40px;
  }
  > div:last-child {
    padding: 40px;
    flex: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      color: #fff;
      border: 2px solid #fff;
    }
  }

  @media (max-width: ${size.tablet}) {
    margin-left: -60px;
    margin-right: -60px;
    flex-wrap: wrap;
    > div {
      flex: 1;
    }

    > div:last-child {
      padding: 20px;
    }
  }

  @media (max-width: ${size.mobileL}) {
    margin-left: -50px;
    margin-right: -50px;
    > div:first-child {
      padding-right: 0;
    }
  }
`;

class PartnersComponent extends Component {
  state: {};

  renderPartnerBlocks(partners: PartnerProject[]): null | JSX.Element[] {
    if (partners && partners.length) {
      return partners.map(p => {
        return (
          <PartnerBlock key={p.name}>
            <a href={p.url} target="_blank" className="partner-link">
              <img src={p.image} />
            </a>
          </PartnerBlock>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    const { partnerProjects } = config;

    return (
      <div>
        <Helmet>
          <title>MARKET Protocol - Partner Projects</title>
          <meta name="keywords" content="MARKET Protocol Partners" />
          <meta
            name="description"
            content="MARKET Protocol - Partner Projects"
          />
        </Helmet>
        <HeroWrapper>
          <Row type="flex" className="hero" align="middle">
            <Col xs={24} md={12}>
              <HeroText>
                <HeroHeaderText>
                  Build on top of <br /> MARKET Protocol
                </HeroHeaderText>
                <HeroParagraphText>
                  Teams all over the world are building applications and
                  exchanges on top of MARKET Protocol’s unique infrastructure.
                  We are looking for exceptional teams to help us build the
                  decentralized future! Join us.
                </HeroParagraphText>
                <Button
                  type="primary"
                  size={'large'}
                  href={emailLink}
                  style={{
                    color: '#000',
                    fontWeight: 'bold',
                    minWidth: 200
                  }}
                >
                  Become a Partner
                </Button>
              </HeroText>
            </Col>
            <Col xs={24} md={12}>
              <HeroArt>
                <img
                  style={{ maxHeight: 800 }}
                  alt="hero"
                  src={PartnerImages.HeroIllustration}
                />
              </HeroArt>
            </Col>
          </Row>
        </HeroWrapper>
        <ContentWrapper>
          <MarketText header={true}>Partner Projects</MarketText>
          <PartnerBlockWrapper>
            {this.renderPartnerBlocks(partnerProjects)}
          </PartnerBlockWrapper>
          <JoinCTAWrapper>
            <div className="join-cta-banner">
              <MarketText header={true}>Join our mission</MarketText>
              <p>
                Whether you’re an existing blockchain company or a traditional
                marketplace thinking about blockchain technology, we’d love to
                hear from you. Fill out the form below and we will get back to
                you shortly.
              </p>
            </div>
            <div>
              <Button href={emailLink}>Become a Partner</Button>
            </div>
          </JoinCTAWrapper>
        </ContentWrapper>
        <NewsletterSubscribeBanner />
      </div>
    );
  }
}

export default withGAPageView(PartnersComponent);
