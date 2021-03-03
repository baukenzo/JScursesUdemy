'use strict';

let numberOfFilms;

function start() {
    numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('один из last просмотренных фильмов?', ''),
              b = prompt('на сколько вы оцните?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);







/* let i = 0;
do {
    const a = prompt('Один и последних просмотренных фильмов', ''),
     b = prompt('На сколько оцените его', '');
     i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
    } else {
     console.log(error);
     i--;
    }
} while (i < 2); */

/* let i = 0;
while (i < 2) {
    const a = prompt('Один и последних просмотренных фильмов', ''),
     b = prompt('На сколько оцените его', '');
     i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                 personalMovieDB.movies[a] = b;
                 console.log('done');
            } else {
             console.log(error);
             i--;
            }
} */

// let countFilm = 0;
 
// do {
//     const a = prompt("Один из последних просмотренных фильмов?", ""), 
//           b = +prompt("На сколько оцените его?", "");
//           if (a != null && b != null &&  a != '' && b != '' && a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 countFilm++;
//                 console.log("Done!");
//             } else {
//                 console.log("error");
//                 continue;
//             }      
// }
// while (countFilm < 2);

// console.log(personalMovieDB);

// const logg = "baubek ayaulym kaliaskarova";

// console.log(logg.substr(7, 7));

