document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { title: 'Movie 1', poster: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 2', poster: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 3', poster: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 4', poster: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 5', poster: 'https://via.placeholder.com/200x300' }
    ];

    const movieList = document.getElementById('movie-list');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieList.appendChild(movieDiv);
    });
});
