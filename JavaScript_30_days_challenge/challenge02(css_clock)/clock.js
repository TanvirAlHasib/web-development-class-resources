// variable declaretion and intro

const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");


// main function

function watch(){

    const time = new Date();

    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hourr = time.getHours();

    const secdeg = ((sec/60)*360) +90;

    const mindeg =  ((min/60)*360) +90;

    const hourrdeg = ((hourr/12)*360) +90;

    second.style.transform = `rotate(${secdeg}deg) translate(1rem)`;

    minute.style.transform = `rotate(${mindeg}deg) translate(1rem)`;

    hour.style.transform = `rotate(${hourrdeg}deg) translate(1rem)`;

}


setInterval(watch,1000);