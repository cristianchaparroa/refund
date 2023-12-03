export interface Message {
  subject: string;
  date: string;
  ProjectName: string;
  Country: string;
  OrganizationName: string;
  Team: {};
  ProjectStartDate: string;
  Overview: string;
  ImpactPlan: string;
  ProfitPlan: string;
  LogoCID: string;
  ProjectCategory: [string];
  FundingGoals: string;
  FullDescription: string;
  status: number;
  id: number;
}

const messages: Message[] = [
  {
    subject: 'PLEASE CHECK THIS STAGE: Stage 3: Installing resources',
    date: '2023-07-20 9:32 AM',
    ProjectName: "Regenerative Finance Initiative",
    Country: "Canada",
    OrganizationName: "Sustainable Futures Association",
    Team: {
      TeamName: "Impact Catalysts",
      Integrants: [
        {
          name: "Emily Rodriguez",
          wallet: "0x1a2b3c4d5e6f",
          aboutMe: "Passionate about sustainable finance and community development."
        },
        {
          name: "Michael Johnson",
          wallet: "0x9e8d7c6b5a4f",
          aboutMe: "Specializing in impact investment strategies and economic modeling."
        },
        {
          name: "Sophie Chen",
          wallet: "0xf1e2d3c4b5a6",
          aboutMe: "Expert in regenerative agriculture and environmental policy."
        }
      ]
    },
    ProjectStartDate: "2023-07-20",
    Overview: "The Regenerative Finance Project aims to revolutionize financial systems through regenerative principles.",
    ImpactPlan: "Creating financial instruments that support ecological regeneration and social equity.",
    ProfitPlan: "Developing sustainable business models that generate returns while fostering positive environmental and social impact.",
    LogoCID: "pqr789stu123vwx456",
    ProjectCategory: ["Climatic Change"],
    FundingGoals: "To secure $2 million in funding for the first phase of the project.",
    FullDescription: "The project aims to establish a paradigm shift in finance by integrating regenerative practices. It seeks to harness the power of finance to not only generate profits but also drive positive environmental and social change. The comprehensive plan involves collaborations with various stakeholders to create a sustainable financial ecosystem.",
    status: 1,
    id: 0
  },
  {
    ProjectName: "Cultural Heritage Preservation",
    Country: "Italy",
    OrganizationName: "Heritage Guardians",
    Team: {
      TeamName: "Cultural Preservationists",
      Integrants: [
        {
          name: "Giuseppe Rossi",
          wallet: "0x1aBcDeF...",
          aboutMe: "Dedicated to preserving cultural heritage."
        },
        {
          name: "Maria Bianchi",
          wallet: "0x3xYzAbC...",
          aboutMe: "Specializes in heritage site restoration."
        }
      ]
    },
    ProjectStartDate: "2023-05-22",
    Overview: "Our project aims to protect and restore cultural sites...",
    ImpactPlan: "The impact plan involves community engagement...",
    ProfitPlan: "Sustainable tourism initiatives...",
    LogoCID: "QmPqRsTuVw...",
    ProjectCategory: ["Cultural heritage reserve"],
    FundingGoals: "To raise $750,000 for site restoration and educational programs.",
    FullDescription: "Heritage Guardians is committed to preserving cultural heritage...",
    subject: 'PLEASE CHECK THIS STAGE: Stage 1: Buying resources',
    date: '2023-05-22 6:12 AM',
    status: 2,
    id: 1,
  },
  {
    ProjectName: "Cultural Heritage Preservation",
    Country: "Italy",
    OrganizationName: "Heritage Guardians",
    Team: {
      TeamName: "Cultural Preservationists",
      Integrants: [
        {
          name: "Giuseppe Rossi",
          wallet: "0x1aBcDeF...",
          aboutMe: "Dedicated to preserving cultural heritage."
        },
        {
          name: "Maria Bianchi",
          wallet: "0x3xYzAbC...",
          aboutMe: "Specializes in heritage site restoration."
        }
      ]
    },
    ProjectStartDate: "2023-05-22",
    Overview: "Our project aims to protect and restore cultural sites...",
    ImpactPlan: "The impact plan involves community engagement...",
    ProfitPlan: "Sustainable tourism initiatives...",
    LogoCID: "QmPqRsTuVw...",
    ProjectCategory: ["Cultural heritage reserve"],
    FundingGoals: "To raise $750,000 for site restoration and educational programs.",
    FullDescription: "Heritage Guardians is committed to preserving cultural heritage...",
    subject: 'PLEASE CHECK THIS STAGE: Stage 2: Buying resources',
    date: '2023-05-22 6:12 AM',
    status: 2,
    id: 1,
  },
  {
    ProjectName: "Cultural Heritage Preservation",
    Country: "Italy",
    OrganizationName: "Heritage Guardians",
    Team: {
      TeamName: "Cultural Preservationists",
      Integrants: [
        {
          name: "Giuseppe Rossi",
          wallet: "0x1aBcDeF...",
          aboutMe: "Dedicated to preserving cultural heritage."
        },
        {
          name: "Maria Bianchi",
          wallet: "0x3xYzAbC...",
          aboutMe: "Specializes in heritage site restoration."
        }
      ]
    },
    ProjectStartDate: "2023-05-22",
    Overview: "Our project aims to protect and restore cultural sites...",
    ImpactPlan: "The impact plan involves community engagement...",
    ProfitPlan: "Sustainable tourism initiatives...",
    LogoCID: "QmPqRsTuVw...",
    ProjectCategory: ["Cultural heritage reserve"],
    FundingGoals: "To raise $750,000 for site restoration and educational programs.",
    FullDescription: "Heritage Guardians is committed to preserving cultural heritage...",
    subject: 'PLEASE CHECK THIS STAGE: Stage 1: Quote resources',
    date: '2023-05-22 6:12 AM',
    status: 2,
    id: 1,
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
