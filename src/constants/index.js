import {version, homepage} from '../../package.json';

export const APP_VERSION = version;
export const GITHUB_REPOSITORY = homepage;

export const EMOJI = {
    STAR: '&#11088;',
    CHECK: '&#9989;',
    LIGHT_BULB: '&#128161;',
    FLAG: '&#128681;',
    SIREN: '&#128680;',
}

export const FOOTER_DESCRIPTION = {
    PART_1: 'This project was made in React.js, inspired by an idea from ',
    PART_2: '. Made by ',
    APP_IDEAS: 'App Ideas Collection',
    APP_IDEAS_LINK: 'https://github.com/florinpop17/app-ideas',
    PROFILE: 'Eduardo Rotundaro.',
    PROFILE_LINK: 'https://github.com/EduardoRotundaro'
}

export const QRCODE_OPTIONS = {
    TYPE_NUMBER: [
        { value: 0, name: 'Auto Detect' },
        { value: 1, name: '1' },
        { value: 2, name: '2' },
        { value: 3, name: '3' },
        { value: 4, name: '4' },
        { value: 5, name: '5' },
        { value: 6, name: '6' },
        { value: 7, name: '7' },
        { value: 8, name: '8' },
        { value: 9, name: '9' },
        { value: 10, name: '10' },
        { value: 11, name: '11' },
        { value: 12, name: '12' },
        { value: 13, name: '13' },
        { value: 14, name: '14' },
        { value: 15, name: '15' },
        { value: 16, name: '16' },
        { value: 17, name: '17' },
        { value: 18, name: '18' },
        { value: 19, name: '19' },
        { value: 20, name: '20' },
        { value: 21, name: '21' },
        { value: 22, name: '22' },
        { value: 23, name: '23' },
        { value: 24, name: '24' },
        { value: 25, name: '25' },
        { value: 26, name: '26' },
        { value: 27, name: '27' },
        { value: 28, name: '28' },
        { value: 29, name: '29' },
        { value: 30, name: '30' },
        { value: 31, name: '31' },
        { value: 32, name: '32' },
        { value: 33, name: '33' },
        { value: 34, name: '34' },
        { value: 35, name: '35' },
        { value: 36, name: '36' },
        { value: 37, name: '37' },
        { value: 38, name: '38' },
        { value: 39, name: '39' },
        { value: 40, name: '40' },
    ],
    ERROR_CORRECTION_LEVEL: [
        { value: 'L', name: 'Low (7%)' },
        { value: 'M', name: 'Medium (15%)' },
        { value: 'Q', name: 'Quartile (25%)' },
        { value: 'H', name: 'High (30%)' }
    ],
    SIZE: [
        { value: 2, name: '82px' },
        { value: 4, name: '164px' },
        { value: 6, name: '246px' },
        { value: 12, name: '492px' },
        { value: 16, name: '656px' },
        { value: 20, name: '820px' }
    ]
}
