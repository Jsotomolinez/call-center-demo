import { CallInfoType } from "../definitions";

export const callInfoMock: CallInfoType = {
    row: 1,
    basicInfo: [
        {
            field: 'Phone',
            value: '0412-1234567',
            isCorrect: true
        },{
            field: 'Name',
            value: 'Roselia Avalos',
            isCorrect: true,
        },{
            field: 'State',
            value: 'California',
            isCorrect: null
        },{
            field: 'City',
            value: 'Hanford',
            isCorrect: null
        },{
            field: 'Addres',
            value: 'Some addres',
            isCorrect: false
        },{
            field: 'Zip code',
            value: '2345',
            isCorrect: null,
        },{
            field: 'Status',
            value: 'APPT SET!'
        }
    ],
    notes: [
        {
            field: 'general notes',
            value: ''
        },{
            field: 'Owns a WS',
            value: 'iashdiuah',
        },{
            field: 'Languajes',
            value: '',
        },{
            field: 'Available at',
            value: null
        }
    ],
    calls: [
        {date: '07-08-2024', time: '16:00'},
        {date: '07-08-2024', time: '17:00'},
        {date: '07-08-2024', time: '18:00'},
        {date: '07-08-2024', time: '19:00'},
        {date: '07-08-2024', time: '20:00'},
    ]
}