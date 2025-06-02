const inputMovie = document.getElementById('inputMovie');
const addBtn = document.getElementById('addBtn');
const movieList = document.getElementById('movieList');
const savedMovies = JSON.parse(localStorage.getItem('movies'));



let movies = [];

addBtn.addEventListener('click', function () {
    movies.push(inputMovie.value);
    localStorage.setItem('movies', JSON.stringify(movies));
    inputMovie.value = '';
    renderMovies();
})

function renderMovies() {
    movieList.innerHTML = '';
    movies.forEach((movie, index) => {
        const li = document.createElement('li');
        li.textContent = movie;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', () => {
            movies.splice(index, 1);
            localStorage.setItem('movies', JSON.stringify(movies));
            renderMovies();
            li.appendChild(removeBtn);
        });

        movieList.appendChild(li);
    });
};



if (savedMovies) {
    movies = savedMovies;
    renderMovies();
}

