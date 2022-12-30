let name = prompt("Введите ваше имя")
if(name.length <= 3) {
    name = prompt("Вы некорректно ввели имя, попробуйте еще раз")
}

let age = +prompt ("Введите свой возраст")
while(age < 14 || age > 60) {
    if(age < 14){
        age = +prompt("Вы должны быть страше 14 лет, попробуйте еще раз")
    }
    else if(age > 60) {
        age = +prompt("Вы должны быть младше 60 лет, попробуйте еще раз")
    }
}

let student = prompt("Вы студент?")
if(student != "Да") {
    console.log(true)
}else{
    while(student != "Да"){
        student =prompt("Вы не можете посетить сайт, попробуйте еще раз")
    }
}

