let ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let lang = en;

if (lang == en) {
    console.log(en.join(' '));
} else {
    console.log(ru.join(' '));
}

switch (lang) {
    case en:
        console.log(en.join(' '));
       break;
    case ru:
        console.log(ru.join(' '));
        break;
    default:
        console.log('Что- то пошло не так');
}

lang == en ? console.log(en.join(' ')) : console.log(ru.join(' '));


let namePerson = 'Артем';
namePerson == 'Артем' ? console.log('ДИРЕКТОР') : console.log('СТУДЕНТ');
namePerson == 'Александр' ? console.log('ПРЕПОДАВАТЕЛЬ') : console.log('СТУДЕНТ');