import teamMemberImages from '@images/team';
import advisorImages from '@images/advisors';

export interface TeamMember {
  name: string;
  title: string;
  img: string;
  email: string;
  linkedin: string;
  bio: string;
}

export interface Advisor {
  name: string;
  title: string;
  img: string;
  email: string;
  linkedin: string;
  bio: string;
}

interface Config {
  teamMembers: TeamMember[];
  advisors: Advisor[];
}

const config: Config = {
  advisors: [
    {
      bio:
        'Patrick Charles has over twenty years of experience building software in\
        a variety of industries including finance, education, health care and computer security. He\
        has worked as a technology leader, consultant, software architect, engineer and\
        researcher. Patrick is an open source contributor, has authored a number of technical\
        papers, is an inventor with two US patents and is co-author of the opening chapter in the\
        soon to be published book “Frontiers of Cyberlearning”.',
      email: '',
      img: advisorImages.PatrickCharles,
      linkedin: 'https://www.linkedin.com/in/pchuck/',
      name: 'Patrick Charles',
      title: 'Data Science & Analytics Pipeline Architect'
    },
    {
      bio:
        'Josh started coding at the age of 10. Prior to Origin, he co-founded three\
        other venture-backed companies: EventVue, Torbit (acquired by Walmart Labs) & Forage.',
      email: '',
      img: advisorImages.JoshFraser,
      linkedin: 'https://www.linkedin.com/in/joshuafraser/',
      name: 'Josh Fraser',
      title: 'Co-Founder, Origin Protocol'
    },
    {
      bio:
        'As VP of Engineering, Dan oversees systems development for 1010data.\
        He focuses on making 1010data the fastest, most reliable big data discovery and sharing\
        platform on the web. He has been instrumental developing scaled solutions to gracefully\
        manage petabytes of data with world-class reliability and fast query response time.\
        During his 8-year tenure at 1010data, Dan has worked on numerous critical development\
        projects across the company including the Trillion-Row Spreadsheet and various MBS\
        data products. Before joining 1010data, Dan was a developer at Accenture on the\
        Global Architecture Team building custom enterprise management software. Dan holds a\
        BS in Computer Science from the University of Rochester.',
      email: '',
      img: advisorImages.DanHorowitz,
      linkedin: 'https://www.linkedin.com/in/danielhorowitznyc/',
      name: 'Dan Horowitz',
      title: 'Senior Vice President Engineering, 1010 Data'
    },
    {
      bio:
        'Based in Asia since 2004, Casper has worked as an investment banker,\
        tech entrepreneur, corporate executive and private equity investor. He is currently a\
        co-founder of Spartan Group, an investment management and advisory firm focusing on\
        blockchain technology. Casper co-heads Spartan’s advisory business, which works with\
        industry leaders in the blockchain and ICO space. Prior to Spartan, Casper spent 10 years\
        in the Investment Banking Division at Goldman Sachs in their London, Hong Kong, Beijing\
        and Singapore offices. Casper has been an active tech angel investor for over a decade,\
        and is an active blockchain and crypto investor.',
      email: '',
      img: advisorImages.CasperJohansen,
      linkedin: 'https://www.linkedin.com/in/casperbjohansen',
      name: 'Casper Johansen',
      title: 'Co-Founder, Spartan Group'
    },
    {
      bio:
        'Brian has over a decade of experience in debt and capital markets, digital\
        marketing, and technology entrepreneurship. A recognized innovator, he has a wealth of\
        business acumen developed through years of working with Fortune 500 and Inc. 500\
        companies, as well as early-stage startups. Brian acts as the venture mind for Coder,\
        leading sales, marketing, finance and strategy. Before founding Coder, Brian was an\
        Associate Director at Brafton, a digital marketing agency with offices in Boston, Chicago,\
        and San Francisco. Brian graduated with a Bachelor’s degree in finance from the\
        University of Illinois at Urbana-Champaign.',
      email: '',
      img: advisorImages.BrianShields,
      linkedin: 'https://www.linkedin.com/in/briandshields/',
      name: 'Brian Shields',
      title: 'Co-Founder, Coder Inc.'
    },
    {
      bio:
        'Brent has over 15 years of experience leading high impact growth\
        software companies, of which many have had successful exits. Brent is currently the\
        Chief Revenue Officer at Bread (BRD), one of the world\'s fastest growing crypto financial\
        platforms. Bread is considered a thought leader in the world of crypto, with over one\
        million users in over 140 countries. Prior to Bread, Brent worked in the Vista Equity\
        Partners portfolio where he helped drive two exits. Brent builds revenue engines and\
        helps develop growth strategies. When not at work, he helps advise a Silicon Valley \
        venture capital firm on early stage investments, and regularly speaks, mentors, and\
        attends global accelerator conferences.',
      email: '',
      img: advisorImages.BrentTraidman,
      linkedin: 'https://www.linkedin.com/in/btraidman/',
      name: 'Brent Traidman',
      title: 'Chief Revenue Officer, Bread'
    }
  ],
  teamMembers: [
    {
      bio: `Seth is involved in execution and development of the practical strategies
        incorporated into the MARKET protocol. Since starting his career as a derivatives trader in
        2005, he has grown and managed multiple algorithmic trading desks, operated as a
        registered market maker and participated in numerous product launches. He was first
        introduced to the crypto space in 2015 as a trader and focused later on the technology
        side. Seth, in conjunction with Collins and Phil, has developed and successfully
        implemented arbitrage and relative value crypto strategies. Seth has a strong
        understanding of centralized and decentralized trading and exchange infrastructures.`,
      email: 'seth@marketprotocol.io',
      img: teamMemberImages.SethRubin,
      linkedin: 'https://www.linkedin.com/in/seth-rubin-8887a891/',
      name: 'Seth Rubin',
      title: 'Co-Founder, CEO'
    },
    {
      bio:
        'Collins began his career at Transmarket Group and has almost 13 years\
        of experience trading various asset classes on global exchanges. He co-founded BRE\
        Trading in 2014. As a career trader, he understands the demands of an exchange user.\
        Collins believes it is important that MARKET embraces the strength and weaknesses of\
        both centralized and decentralized exchanges.\
        He has managed successful development groups solving complex problems. Collins has\
        directed crypto market microstructure trade and research projects. He also has\
        experience testing algorithms and software in QA and production.',
      email: 'collins@marketprotocol.io',
      img: teamMemberImages.CollinsBrown,
      linkedin: 'https://www.linkedin.com/in/collins-brown-2ab68126/',
      name: 'Collins Brown',
      title: 'Co-Founder'
    },
    {
      bio:
        'Phil has spent the last 7 years as the lead developer on a algorithmic\
        trading desk. Phil has led teams of developers focused on creating trading infrastructure,\
        user interfaces, execution platforms and quantitative trading analytics. Phil has the\
        skill-set, creativity and passion needed to implement technical solutions to solve the\
        challenges presented by a decentralized market place.\
        He has written low-latency connectivity and trading strategies to futures exchanges like\
        the CME, ICE, TOCOM, SGX and others. Leveraging his experience in the traditional\
        derivatives space, Phil has also written strategies to a number of crypto exchanges.\
        Phil is currently a technical and security advisor to a crypto assets hedge fund.',
      email: 'phil@marketprotocol.io',
      img: teamMemberImages.PhilElsasser,
      linkedin: 'https://www.linkedin.com/in/phil-elsasser-79208160/',
      name: 'Phil Elsasser',
      title: 'Co-Founder, CTO'
    },
    {
      bio:
        'As crypto trader and enthusiast Lazar has evaluated many new projects,\
        pursuing the technical side of more successful ones. He has been involved\
        with development strategy and community support for a number of blockchain based startups.',
      email: 'lazar@marketprotocol.io',
      img: teamMemberImages.LazarJovanovic,
      linkedin: 'https://www.linkedin.com/in/lazar-jovanovic/',
      name: 'Lazar Jovanovic',
      title: 'Marketing / Brand Ambassador'
    },
    {
      bio:
        'Maz has acted as a business consultant helping a number of startups. He has\
        experience developing and implementing successful online community outreach\
        programs. He joined the MARKET Protocol team to combine his experience in\
        crypto trading and asset management with his passion for helping others.\
        Maz hopes to help the community learn what MARKET is all about.',
      email: 'mauzy@marketprotocol.io',
      img: teamMemberImages.MauzyKeshavarzi,
      linkedin: '',
      name: 'Mauzy Keshavarzi',
      title: 'Community Manager'
    },
    {
      bio:
        'Perfect is passionate about building smart solutions related to Android,\
        AI and Smart Contracts in order\
        to make people’s lives better. He also has experience with machine learning,\
        image processing and web applications\
        (backends with PHP and Node.js).',
      email: 'perfect@marketprotocol.io',
      img: teamMemberImages.PerfectMakanju,
      linkedin: 'https://www.linkedin.com/in/perfectmak/',
      name: 'Perfect Makanju',
      title: 'Software Developer'
    },
    {
      bio:
        'Eswara Sai is a passionate Frontend Developer proficient working with\
        HTML, CSS & JavaScript. He is also experienced with JavaScript frameworks such as\
        ReactJS and AngularJS which are majorly used in building dynamic single-page web\
        applications. He works closely with Phil Elsasser and the rest of the team to build a Dapp\
        for the MARKET to be used for deploying and testing the MARKET Contracts',
      email: 'eswara@marketprotocol.io',
      img: teamMemberImages.EswaraSai,
      linkedin: 'https://www.linkedin.com/in/eswarasai/',
      name: 'Eswara Sai',
      title: 'Software Developer'
    },
    {
      bio:
        'When Przemyslaw was 9 years old his father bought him Commodore 64\
        with a 5.25\' floppy drive. There were not many books around on the subject at that time.\
        The only book he had was Commodore 64 Memory Map, which he read several times.\
        After he got his first 90 Mhz PC, Przemyslaw spent two years on the Internet without the\
        Internet connection. He was browsing offline mirror copies of the websites. Hyperlinks\
        sometimes worked as expected.\
        Years later and many projects later he is still a technology enthusiast. Worked with great\
        teams in multinational environments. Has an in-depth knowledge of Digital TV,\
        MPEG2/H.264, HDCP, embedded devices, navigation devices, advanced routing algorithms\
        and automotive projects that include bleeding edge hypervisors. Translated a book. \
        Wrote several articles on MQL5. Interested in blockchains and derivatives trading. Believes that\
        MARKET Protocol will have a bright future.',
      email: 'przemyslaw@marketprotocol.io',
      img: teamMemberImages.PrzemyslawSzulczynski,
      linkedin: 'https://www.linkedin.com/in/przemyslaw-szulczynski-2a96a41/',
      name: 'Przemyslaw Szulczynski',
      title: 'Software Developer'
    }
  ]
};

export default config;
