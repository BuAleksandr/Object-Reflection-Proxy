import props from './modules/props';
import destructuring from './modules/destructuring';

/* ПРОВЕРКА ПЕРВОГО ЗАДАНИЯ */
const swordsman = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

const sort = ['name', 'level'];

console.log(props(swordsman, sort));

/* ПРОВЕРКА ВТОРОГО ЗАДАНИЯ */
const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
    },
  ],
};

console.log(destructuring(character));