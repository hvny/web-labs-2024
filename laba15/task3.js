const initialArr = [
    {
        "title":"Приглашаем на День открытых дверей.",
        "source":"vyatsu"
    },
    {
        "title":"Искусство против коррупции.",
        "source":"vyatsu"
    },
    {
        "title":"Научно-практическая конференция «Управленческие образовательные практики в студенческих исследованиях» собрала около 80 участников.",
        "source":"vyatsu"
    },
    {
        "title":"Искусство против коррупции.",
        "source":"vyatsu"
    },
    {
        "title":"Приглашаем к участию во Всероссийском социологическом диктанте.",
        "source":"vyatsu"
    },
    {
        "title":"Улицы в кировском Урванцево построены на 75%.",
        "source":"yandex"
    },
    {
        "title":"В Кирове за 69 миллионов рублей отремонтируют автовокзал.",
        "source":"yandex"
    },
    {
        "title":"Шульгинов: власти обсуждают снятие запрета на экспорт Аи-92 и Аи95.",
        "source":"yandex"
    },
    {
        "title":"Православные верующие отмечают 8 ноября Дмитриев день.",
        "source":"yandex"
    }
]

const resultArr = [];

function checkTitle(str) {
    let lettersQuantity = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/^[a-zа-яё]+$/i)) {
            lettersQuantity++
        }
    }
    return lettersQuantity;
}
    
initialArr.forEach((elem) => {
    if (checkTitle(elem["title"]) >= 40) {
        resultArr.push(elem);
    }
});

console.log(resultArr);