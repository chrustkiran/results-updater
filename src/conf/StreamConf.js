export const streams = [
    {
        value: 'CombinedMathematics',
        label: 'Combined Mathematics',
        children: [
            {
                value: 'Normal',
                label: 'Normal',
            },
            {
                value: 'InformationTechnology',
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
                value: 'InformationTechnology',
                label: 'Information Technology',
            }
        ],
    },
    {
        value: 'Commerce',
        label: 'Commerce'
    },
    {
        value: 'Arts',
        label: 'Arts'
    },
    {
        value: 'EngineeringTechnology',
        label: 'Engineering Technology'
    },
    {
        value: 'BioTechnology',
        label: 'Bio Technology'
    },
]



export const subjects = {
    CombinedMathematics_Normal: ['Maths', 'Physics', 'Chemistry'],
    CombinedMathematics_InformationTechnology: ['Maths', 'Physics', 'Information Technology'],
    Biology_Normal: ['Biology', 'Physics', 'Chemistry'],
    Biology_InformationTechnology: ['Biology', 'Information Technology', 'Chemistry']
}
