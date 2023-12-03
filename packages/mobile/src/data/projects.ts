export interface Project {
  fromName: string;
  title: string;
  subject: string;
  date: string;
  status: number;
  id: number;
}

//'0.Por Aprobar', '1.Aprobado', '2.En ejecución','-1.Cancelado'

const projects: Project[] = [
  {
    fromName: 'Matt Chorsey',
    title: 'Project 1',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    status: 2,
    id: 0
  },
  {
    fromName: 'Lauren Ruthford',
    title: 'Project 2',
    subject: 'Long time no chat',
    date: '6:12 AM',
    status: 0,
    id: 1
  },
  {
    fromName: 'Jordan Firth',
    title: 'Project 3',
    subject: 'Report Results',
    date: '4:55 AM',
    status: 2,
    id: 2

  },
  {
    fromName: 'Bill Thomas',
    title: 'Project 4',
    subject: 'The situation',
    date: '9:00 AM',
    status: 1,
    id: 3
  },
  {
    fromName: 'John Doe',
    title: 'Project 5',
    subject: 'The statement',
    date: 'Yesterday',
    status: -1,
    id: 4
  }
];

export const getProjects = () => projects;

export const getProject = (id: number) => projects.find(p => p.id === id);
