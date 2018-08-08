import React from 'react';
import { Link } from 'react-static';
import { MarketText } from '@styledComponents';
import { TeamMember } from '@containers/Team/config';

interface Props {
  data: TeamMember;
}

const Person = ({ data }: Props) => {
  const { name, title, img, linkedin, email, bio } = data;

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      }}
    >
      <img
        className={bio ? 'become-opaque-on-hover' : ''}
        src={img}
        style={{
          cursor: bio ? 'pointer' : 'default',
          height: 100,
          width: 100
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '20px 10px'
        }}
      >
        <MarketText
          style={{
            fontSize: '16px',
            fontWeight: 400,
            marginBottom: 0
          }}
        >
          {name}
        </MarketText>
        <MarketText
          style={{
            fontSize: '15px'
          }}
        >
          {title}
        </MarketText>
        <MarketText
          style={{
            fontSize: '14px',
            marginBottom: 0,
            textDecoration: 'underline'
          }}
        >
          {email}
        </MarketText>
        {linkedin ? (
          <Link
            style={{
              color: '#000000',
              textDecoration: 'underline'
            }}
            to={linkedin}
            target={'_blank'}
          >
            Linkedin
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Person;
