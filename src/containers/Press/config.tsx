import { LinkInfo } from '@components/Press/SingleLink';
import {
  BitcoinExchangeGuide,
  CoinCrunch,
  CryptoNinja,
  FutureTechPodcast,
  PressureCast,
  Themerkle
} from '@images/press';
// import { LinkInfo } from '@components/Press/SingleLink';

// press page config, add more link will change press view
const linkInfos: LinkInfo[] = [
  {
    boxColor: 'white',
    imgSrc: CoinCrunch,
    link: 'https://coincrunch.io/marketprotocol/',
    paragraphs: [
      `In this episode of The Crunch we speak with Seth about derivatives, not 
      just in crypto context but Seth explains us a lot about how they work  and 
      what they are. We also discuss the future of crypto market, at what stage 
      it is compared to other asset classes and what kind of investors are there.`
    ],
    title: 'Seth Rubin On Understanding Crypto Derivatives'
  },
  {
    boxColor: 'white',
    imgSrc: PressureCast,
    link: 'https://pressurecast.simplecast.fm/9de17399',
    paragraphs: [
      `Price volatility is one factor limiting growth in the blockchain space.. 
      Currently [hodlers have] no effective way to manage their price exposure… 
      MARKET Protocol enables derivatives trading of crypto assets allowing 
      businesses and traders to hedge the price volatility associated with 
      these assets.`
    ],
    title: `Phil Elsasser (CTO @ Market Protocol) on Adding Complex Financial Instruments, 
      Concerns About Central Exchanges, and Decreasing Digital Asset Volatility 
      with Market Protocol`
  },
  {
    boxColor: 'darkgrey',
    imgSrc: Themerkle,
    link: 'https://themerkle.com/what-is-the-market-protocol/',
    paragraphs: [
      `There are many different trading-related protocols under development in the 
      cryptocurrency world. MARKET Protocol is trying to make a name for itself 
      in this regard, although doing so will not be easy. 
      What makes this concept so interesting is how it provides secure and 
      flexible trading of any asset on the Ethereum blockchain. This includes 
      real-world goods as well as commodities.`
    ],
    title: 'What Is the MARKET Protocol?'
  },
  {
    boxColor: 'darkgrey',
    imgSrc: FutureTechPodcast,
    link:
      'https://www.futuretechpodcast.com/podcasts/phil-elasser-cto-co-founder-market-protocol/',
    paragraphs: [
      `Market Protocol has been created to provide a 
      secure, flexible, open source foundation for 
      decentralized trading on the Ethereum blockchain. 
      They provide the pieces necessary to create a 
      decentralized exchange, including the requisite 
      clearing and collateral pool infrastructure, 
      enabling third parties to build applications 
      for trading. Market Protocol is a proud open 
      source product that encourages contributors to 
      help create change.`
    ],
    title:
      'Future Tech Podcast - Phil Elsasser CTO, Co-Founder of MARKET Protocol'
  },
  {
    boxColor: 'darkgrey',
    imgSrc: Themerkle,
    link: 'https://themerkle.com/top-four-upcoming-cryptocurrencies-sans-icos/',
    paragraphs: [
      `Prior to the explosion of the cryptocurrency sphere as 
      a whole in 2017, most new projects launched in the 
      absence of initial coin offerings. While this funding 
      method has become the norm throughout the community, 
      it has done so in the presence of massive controversy 
      in regards to the ethics and legitimacy of the ICO 
      model. While it seems as if every upcoming project 
      involves such a crowdsale, it’s important to recognize 
      that there are legitimate ventures operating sans ICOs. 
      Here are four to check out:`
    ],
    title: 'Top 4 Upcoming Cryptocurrencies Sans ICOs'
  },
  {
    boxColor: 'white',
    imgSrc: CoinCrunch,
    link: 'https://www.youtube.com/watch?v=iRipt7d5LPc',
    paragraphs: [
      `MARKET Protocol provides the interoperability necessary for order routing and other trading 
      activities on the blockchain.`,
      `Third party projects can build decentralized applications or “dApps” on top of the protocol, 
      giving the non-technical Trader the ability to easily interact with the underlying blockchain technology.`
    ],
    title: 'MARKET Protocol Interview - Empowering DEXs'
  },
  {
    boxColor: 'white',
    imgSrc: CryptoNinja,
    link:
      'https://www.cryptoninjas.net/2018/04/23/market-protocol-to-integrate-the-dgx-gold-backed-stablecoin/',
    paragraphs: [
      `Market Protocol, a decentralized derivatives 
      protocol designed to deliver on-chain, cross-chain 
      and off-chain trading relationships today announced 
      a newly formed partnership with Digix, an asset 
      tokenization company bringing digital gold onto the 
      Ethereum blockchain.`
    ],
    title: 'MARKET Protocol to integrate the DGX gold-backed stablecoin'
  },
  {
    boxColor: 'darkgrey',
    imgSrc: BitcoinExchangeGuide,
    link: 'https://bitcoinexchangeguide.com/market-protocol-ico/',
    paragraphs: [
      `Market Protocol provides the inoperability 
      necessary for order routing and other trading 
      activities on the blockchain. It’s an open 
      source protocol that powers decentralized 
      derivative trading and decentralized derivative 
      exchanges.`,
      `Developers can create decentralized applications 
      – dApps – on top of MARKET Protocol. That means 
      non-technical traders can easily interact with 
      the underlying blockchain technology through 
      the use of these dApps.`
    ],
    title: 'Market Protocol ICO: MKT Token Blockchain Trading Exchange?'
  }
];

export default linkInfos;
