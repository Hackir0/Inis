let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let movieName, movieRating;

    do {
        movieName = prompt('Один из последних просмотренных фильмов?');
    } while (!movieName || movieName.length > 50 || movieName.trim() === "");

    do {
        movieRating = prompt('На сколько оцените его?');
    } while (!movieRating || movieRating.trim() === "");

    personalMovieDB.movies[movieName] = movieRating;
}

console.log(personalMovieDB);

function displayMoviesTable(movies) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    const headers = ["Фильм", "Оценка"];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (const [movie, rating] of Object.entries(movies)) {
        const row = document.createElement('tr');
        const movieCell = document.createElement('td');
        const ratingCell = document.createElement('td');

        movieCell.textContent = movie;
        ratingCell.textContent = rating;

        row.appendChild(movieCell);
        row.appendChild(ratingCell);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.getElementById('movies-table').appendChild(table);
}

displayMoviesTable(personalMovieDB.movies);