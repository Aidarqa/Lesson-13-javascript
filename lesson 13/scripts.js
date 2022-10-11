// const num1 = 5
// const num2 = +prompt('Введите число')
// if (num2 > num1) {
//     alert('Число больше 5')
// } 
// else if (num2 === num1) {
// alert('Числа равны')
// } 
// else {
//     alert('Число меньше 5')
// }

// if (!0){
//     console.log("message")
// }
// else {
//     console.log('message2');
// }

// const a = confirm('Вы совершеннолетний?')
// if (a) {
// alert('Доступ разрешен')
// }
// else {
//     alert('Иди гуляй')
// }
// && // и
// ||// или
// const num = +prompt ('Введите число')
// const num2 = +prompt ('Введите число2')

// if(num == 10 && num2 == 20) {
//     alert('и 10 и 20')
// }
let a = prompt('Как тебя зовут?')
if (!a) {
    alert('Вы отменили действие')
}
else {
    const b = confirm("Вы Уверены?")
    if (b) {
        alert('Ваше Имя - ' + a)
    }
    else {
        alert("Попробуйте вспомнить")
    }
}

