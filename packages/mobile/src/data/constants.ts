const project_status = [
    {
        id: 0, 
        name: 'Pending for approval',
        color: 'yellow'
    },
    {
        id: 1, 
        name: 'Approved',
        color: 'dodgerblue'
    },
    {
        id: 2, 
        name: 'In progress',
        color: 'green'
    },
    {
        id: -1,
        name: 'Not Achieved',
        color: 'red'
    },
];

export const getStatus = (id: number) => project_status.find(s => s.id === id)?.name;
export const getStatusColor = (id: number) => project_status.find(s => s.id === id)?.color;