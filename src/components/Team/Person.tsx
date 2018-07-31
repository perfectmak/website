import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import { MarketText } from '@styledComponents';
import BioIcon from '@images/icons/bio.svg';
import EmailIcon from '@images/icons/email.svg';
import LinkedInIcon from '@images/icons/linkedin.svg';
import { TeamMember } from '@containers/Team/config';

interface Props {
  data: TeamMember;
  focus: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export const ReadBioHover = styled.div`
  opacity: 0;
  background-color: rgba(24, 30, 38, 0.5);
  color: #ffffff;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

const Person = ({ data, focus }: Props) => {
  const { name, title, img, email, linkedin, bio } = data;

  return (
    <div
      /* width handled by PersonWrap styled component in src/Styles.tsx */
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 240,
        justifyContent: 'flex-start',
        marginTop: 30,
        position: 'relative'
      }}
    >
      <div
        onClick={() => (bio ? focus() : null)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {bio && <ReadBioHover id="readMore">Read Bio</ReadBioHover>}

        {/* image */}
        <img
          src={img}
          style={{
            cursor: bio ? 'pointer' : 'default',
            height: 100,
            width: 100
          }}
        />
      </div>

      {/* name and title */}
      <MarketText
        style={{
          fontWeight: 400,
          marginBottom: 0,
          paddingTop: 10,
          textAlign: 'center'
        }}
      >
        {name}
      </MarketText>
      <p style={{ fontWeight: '300', textAlign: 'center' }}>{title}</p>

      {/* social links */}
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 92
        }}
      >
        {/* bio */
        bio ? (
          <img
            className={'become-opaque-on-hover'}
            src={BioIcon}
            style={{ cursor: 'pointer' }}
            onClick={focus}
          />
        ) : null}

        {/* email */
        email ? (
          <Link to={`mailto:${email}`} target={'_blank'}>
            <img className={'become-opaque-on-hover'} src={EmailIcon} />
          </Link>
        ) : null}

        {/* linkedin */
        linkedin ? (
          <Link to={linkedin} target={'_blank'}>
            <img className={'become-opaque-on-hover'} src={LinkedInIcon} />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Person;
