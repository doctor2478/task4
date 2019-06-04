let field = [                                                                                                           // массив шахматного поля 8х8
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

function print() {
    let box = '';                                                                                                       //переиенна box равная пустой строке
    let a = 0;                                                                                                          //счетчик для смещения шахматных полей

    for(let i=0;i<field.length;i++){                                                                                    //цицлом заполняем массив
        let arr = field[i];
        for(let j=0;j<arr.length;j++){
            if(a%2==0){                                                                                                 //если а деленная по модулю = 0 заполняем церным цветом
                box += '<div class="block black" data-row="' + j + '" data-coll="' + i + '"></div>'                     //data-row и data-coll  - это data элементы для определения
            }                                                                                                           //положения каждого box элемента
            else{
                box += '<div class="block" data-row="' + j + '" data-coll="' + i + '"></div>'                           //иначе оставляем без цвета
            }
         a++;
        }
        a++;                                                                                                            //после каждой итерации в цикле увеличиваем а на 1
    }
    document.querySelector('#pole').innerHTML = box;                                                           //pole присваивается вся разметка box
    document.querySelectorAll('.block').forEach(function (element) {                                 //каждому злементу block присваивается функция click
        element.onclick = click;
    })
}


function click() {                                                                                                      //фунуция
    document.querySelectorAll('.block').forEach(function (element) {                                 //перед каждым нажатием проверяем если block имеет blue или
        element.classList.remove('blue');                                                                        // position - то удаляем их их classList
        element.classList.remove('position');
    });
    let x = this.dataset.row;                                                                                           //x - data координата row
    let y = this.dataset.coll;                                                                                          //y - data координата coll
    this.classList.add('blue');                                                                                         //место нажатия делаем синим цветом
                                                                                                                        // достаем условия из 2 задачи и добавляем на место хода
                                                                                                                        //position цвет
    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector('.block[data-row="' + (+x + 2) + '"][data-coll="' + (+y + 1) + '"]').classList.add('position');
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector('.block[data-row="' + (+x + 2) + '"][data-coll="' + (+y - 1) + '"]').classList.add('position');
    }
    if (+x - 2 >=0 && +y + 1 < 8) {
        document.querySelector('.block[data-row="' + (+x - 2) + '"][data-coll="' + (+y + 1) + '"]').classList.add('position');
    }
    if (+x - 2 >= 0 && +y - 1 >= 0) {
        document.querySelector('.block[data-row="' + (+x - 2) + '"][data-coll="' + (+y - 1) + '"]').classList.add('position');
    }
    if (+x + 1 < 8 && +y + 2 < 8) {
        document.querySelector('.block[data-row="' + (+x + 1) + '"][data-coll="' + (+y + 2) + '"]').classList.add('position');
    }
    if (+x + 1 < 8 && +y - 2 >= 0) {
        document.querySelector('.block[data-row="' + (+x + 1) + '"][data-coll="' + (+y - 2) + '"]').classList.add('position');
    }
    if (+x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector('.block[data-row="' + (+x - 1) + '"][data-coll="' + (+y + 2) + '"]').classList.add('position');
    }
    if (+x - 1 >= 0 && +y - 2 >= 0) {
        document.querySelector('.block[data-row="' + (+x - 1) + '"][data-coll="' + (+y - 2) + '"]').classList.add('position');
    }
}

print();