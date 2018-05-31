import React from 'react';
import { Link } from 'react-static';
import { MarketText } from '@styledComponents';
import BioIcon from '@images/icons/bio.svg';
import EmailIcon from '@images/icons/email.svg';
import LinkedInIcon from '@images/icons/linkedin.svg';
import { TeamMember } from '@containers/Team/config';

interface Props {
  data: TeamMember;
  focus: (event: React.MouseEvent<HTMLImageElement>) => void;
}

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
        marginTop: 30
      }}
    >
      {/* image */}
      <img
        className={bio ? 'become-opaque-on-hover' : ''}
        src={img}
        style={{
          cursor: bio ? 'pointer' : 'default',
          height: 100,
          width: 100
        }}
        onClick={() => (bio ? focus() : null)}
      />

      {/* name and title */}
      <MarketText
        style={{ textAlign: 'center', paddingTop: 10, fontWeight: 400 }}
      >
        {name}
      </MarketText>
      <p style={{ textAlign: 'center', fontWeight: '300' }}>{title}</p>

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
