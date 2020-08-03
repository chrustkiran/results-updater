export const streams = [
    {
        value: 'Combined_Mathematics',
        label: 'Combined Mathematics',
        children: [
            {
                value: 'Normal',
                label: 'Normal',
            },
            {
                value: 'Information_Technology',
                label: 'Information Technology',
            }
        ],
    },
    {
        value: 'Biology',
        label: 'Biology',
        children: [
            {
                value: 'Normal',
                label: 'Normal',
            },
            {
                value: 'Information_Technology',
                label: 'Information Technology',
            }
        ],
    },
    {
        value: 'Commerce',
        label: 'Commerce'
    }
];



export const subjects = {
    Combined_Mathematics_Normal: ['Maths', 'Physics', 'Chemistry'],
    Combined_Mathematics_Information_Technology: ['Maths', 'Physics', 'Information Technology'],
    Biology_Normal: ['Biology', 'Physics', 'Chemistry'],
    Biology_Information_Technology: ['Biology', 'Information Technology', 'Chemistry'],
    Commerce: ['Commerce', 'Business Studies', 'Accounting']
};


export const results = ['A', 'B', 'C', 'S', 'F'];
