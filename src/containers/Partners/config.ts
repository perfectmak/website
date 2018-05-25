import partnerProjectImages from '@images/partners';

export interface PartnerProject {
  image: string;
  name: string;
  url: string;
}

interface Config {
  partnerProjects: PartnerProject[];
}

const config: Config = {
  partnerProjects: [
    {
      image: partnerProjectImages.Amadeus,
      name: 'Amadeus',
      url: 'http://www.amadeus.com/'
    },
    {
      image: partnerProjectImages.Haven,
      name: 'Haven',
      url: 'https://havenprotocol.com/'
    },
    {
      image: partnerProjectImages.Dg,
      name: 'DG',
      url: 'https://digix.global/'
    },
    {
      image: partnerProjectImages.Maker,
      name: 'Maker',

      url: 'https://makerdao.com/'
    },
    {
      image: partnerProjectImages.Virtuse,
      name: 'Virtuse',
      url: 'https://virtuse.exchange/'
    }
  ]
};

export default config;
