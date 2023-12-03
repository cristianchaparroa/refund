const project_status = [
    {
        id: 0, 
        name : 'Por Aprobar'
    },
    {
        id: 1, 
        name : 'Aprobado'
    },
    {
        id: 2, 
        name : 'En progreso'
    },
    {
        id: -1,
        name : 'Cancelado'
    },
];

export const getStatus = (id: number) => project_status.find(s => s.id === id)?.name;