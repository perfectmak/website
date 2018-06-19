import React from 'react';
import { Link } from 'react-static';
import { BioModalContentWrap, MarketText } from '@styledComponents';
import CloseIcon from '@images/icons/close.svg';
import EmailIcon from '@images/icons/email.svg';
import LinkedInIcon from '@images/icons/linkedin.svg';
import colors from '@styles/json/colors';
import { TeamMember } from '@containers/Team/config';

interface Props {
  data: Partial<TeamMember>;
  unfocus: () => void;
}

class Bio extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onEscKeyPress = (e: KeyboardEvent) => {
    e.keyCode === 27 ? this.props.unfocus() : null;
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.onEscKeyPress);
    }
  }

  render() {
    const { name, title, img, email, linkedin, bio } = this.props.data;

    return (
      <div
        style={{
          alignItems: 'center',
          backgroundColor: colors.darkGreyOpaque,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          left: 0,
          position: 'fixed',
          right: 0,
          top: 0
        }}
      >
        {/* clicking bg hides modal */}
        <div
          onClick={this.props.unfocus}
          style={{
            bottom: 0,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1
          }}
        />

        {/* white bg modal */}
        <BioModalContentWrap
          style={{
            alignItems: 'center',
            backgroundColor: colors.white,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 2
          }}
        >
          {/* close icon */}
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              height: 30,
              justifyContent: 'flex-end',
              width: '100%'
            }}
          >
            <div
              className={'become-opaque-on-hover'}
              onClick={this.props.unfocus}
              style={{
                alignItems: 'center',
                backgroundColor: colors.medGrey,
                display: 'flex',
                height: 32,
                justifyContent: 'center',
                width: 32
              }}
            >
              <img src={CloseIcon} style={{ width: 26, height: 26 }} />
            </div>
          </div>

          {/* image */}
          <img src={img} style={{ width: 100, height: 100, marginTop: 10 }} />

          {/* name and title */}
          <MarketText
            style={{ textAlign: 'center', paddingTop: 10, fontWeight: 400 }}
          >
            {name}
          </MarketText>
          <p style={{ fontWeight: '300' }}>{title}</p>

          {/* bio */}
          <MarketText
            style={{ textAlign: 'left', padding: '0px 40px 0px 40px' }}
          >
            {bio}
          </MarketText>

          {/* social links */}
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: '30px 0px 30px 0px'
            }}
          >
            {/* email */
            email ? (
              <Link
                style={{ margin: '0px 5px 0px 5px' }}
                to={`mailto:${email}`}
                target={'_blank'}
              >
                <img className={'become-opaque-on-hover'} src={EmailIcon} />
              </Link>
            ) : null}

            {/* linkedin */
            linkedin ? (
              <Link
                style={{ margin: '0px 5px 0px 5px' }}
                to={linkedin}
                target={'_blank'}
              >
                <img className={'become-opaque-on-hover'} src={LinkedInIcon} />
              </Link>
            ) : null}
          </div>
        </BioModalContentWrap>
      </div>
    );
  }
}

export default Bio;
