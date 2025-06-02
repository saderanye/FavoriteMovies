const inputMovie = document.getElementById('inputMovie');
const addBtn = document.getElementById('addBtn');
const movieList = document.getElementById('movieList');


let movies = [];

addBtn.addEventListener('click', function() {
    movies.push(inputMovie.value);
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
        
        movieList.appendChild(li);
    });
};

removeBtn.addEventListener('click', () => {
    movies.splice(index, 1);
    renderMovies();
    li.appendChild(removeBtn);
})