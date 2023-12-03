const project_status = [
    {
        id: 0, 
        name: 'Por Aprobar',
        color: 'yellow'
    },
    {
        id: 1, 
        name: 'Aprobado',
        color: 'dodgerblue'
    },
    {
        id: 2, 
        name: 'En progreso',
        color: 'green'
    },
    {
        id: -1,
        name: 'Cancelado',
        color: 'red'
    },
];

export const getStatus = (id: number) => project_status.find(s => s.id === id)?.name;
export const getStatusColor = (id: number) => project_status.find(s => s.id === id)?.color;