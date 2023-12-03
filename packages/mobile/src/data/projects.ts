export interface Project {
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

//'0.Por Aprobar', '1.Aprobado', '2.En ejecución','-1.Cancelado'

const projects: Project[] = [
  {
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
    status: 2,
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
    status: 0,
    id: 1
  },
  {
    ProjectName: "Biodiversity Conservation Initiative",
    Country: "Brazil",
    OrganizationName: "Amazon Preservation Society",
    Team: {
      TeamName: "BioGuardians",
      Integrants: [
        {
          name: "Carlos Silva",
          wallet: "0xAbC123...",
          aboutMe: "Passionate about rainforest conservation."
        },
        {
          name: "Ana Costa",
          wallet: "0xDeF456...",
          aboutMe: "Expert in biodiversity research."
        }
      ]
    },
    ProjectStartDate: "2023-07-12",
    Overview: "Our project focuses on protecting Amazonian biodiversity...",
    ImpactPlan: "Implementing sustainable land use practices...",
    ProfitPlan: "Eco-tourism and sustainable products...",
    LogoCID: "QmZaBcXyWv...",
    ProjectCategory: ["Biodiversity"],
    FundingGoals: "To secure R$1,500,000 for conservation efforts.",
    FullDescription: "The Amazon Preservation Society aims to safeguard the biodiversity...",
    status: 0,
    id: 2
  },
  {
    ProjectName: "Climate Change Awareness Campaign",
    Country: "Canada",
    OrganizationName: "Climate Visionaries",
    Team: {
      TeamName: "Climate Warriors",
      Integrants: [
        {
          name: "Olivia Smith",
          wallet: "0x1aBcDeF...",
          aboutMe: "Advocate for climate action and education."
        },
        {
          name: "Ethan Johnson",
          wallet: "0x3xYzAbC...",
          aboutMe: "Specializes in environmental policy."
        }
      ]
    },
    ProjectStartDate: "2023-09-05",
    Overview: "Our project aims to raise awareness about climate change...",
    ImpactPlan: "Educational workshops and community engagement...",
    ProfitPlan: "Funding through grants and sponsorships...",
    LogoCID: "QmMnOpQrSt...",
    ProjectCategory: ["Climatic Change"],
    FundingGoals: "To raise $300,000 for awareness campaigns.",
    FullDescription: "Climate Visionaries' mission is to create a sustainable future...",
    status: 0,
    id: 3
  },
  {
    ProjectName: "Sustainable Agriculture Development",
    Country: "India",
    OrganizationName: "GreenFields Initiative",
    Team: {
      TeamName: "AgriSustain",
      Integrants: [
        {
          name: "Raj Patel",
          wallet: "0xAbC123...",
          aboutMe: "Advocate for sustainable farming."
        },
        {
          name: "Priya Sharma",
          wallet: "0xDeF456...",
          aboutMe: "Expert in organic farming techniques."
        }
      ]
    },
    ProjectStartDate: "2023-11-18",
    Overview: "Our project focuses on promoting sustainable agricultural practices...",
    ImpactPlan: "Training farmers in eco-friendly techniques...",
    ProfitPlan: "Marketing organic produce...",
    LogoCID: "QmYxZaBcDd...",
    ProjectCategory: ["Agriculture"],
    FundingGoals: "To secure ₹2,000,000 for farmer education and infrastructure.",
    FullDescription: "GreenFields Initiative aims to revolutionize agriculture...",
    status: 0,
    id: 4
  }
];

export const getProjects = () => projects;

export const getProject = (id: number) => projects.find(p => p.id === id);
