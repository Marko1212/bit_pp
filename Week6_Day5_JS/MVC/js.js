


var dataModule = (function () {

    var data = { movies: [] }
    /* 
        class Movie {
    
            constructor(title, length, genre) {
                this.title = title;
                this.length = length;
                this.genre = new Genre(genre);
            }
    
            getDisplayText() {
                return `${this.title}, ${this.length} min, ${this.genre.getShortGenre()}`;
            }
    
        } */

    class Genre {

        constructor(name) {
            this.name = name;
        }

        getShortGenre() {

            return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();

        }
    }


    class Movie {

        constructor(movieData) {
            this.title = movieData.title;
            this.length = movieData.length;
            this.genre = new Genre(movieData.genre);
        }

        getDisplayText() {
            return `${this.title}, ${this.length} min, ${this.genre.getShortGenre()}`;
        }

    }


    function createAddMovie(movieData) {

        var addMov = new Movie(movieData);

        data.movies.push(addMov);

        return data;

    }


    function calculateTotalLength() {


        var total = 0;

        for (var i = 0; i < movies.length; i++) {
            total += parseInt(movies[i].length);
        }



    }

    function getTotalLength() {

        return calculateTotalLength();

    }

/*     function getGenreAbbrev(genre) {

        return genre.getShortGenre();

    } */


    return {
        data: data,
        createAddMovie: createAddMovie,
        getTotalLength: getTotalLength

    }

})();

    var uiModule = (function () {

 /*    var addMovieButton = document.querySelector("#button");
    var addDateButton = document.getElementById("date"); */

    var movieList = document.querySelector(".movieList");

    var titleInput = document.querySelector("#title");
    var lengthInput = document.querySelector("#length");
    var genreSelect = document.querySelector("#select");

    

    function collectFormData() {

        var movieData = {
            title: titleInput.value,
            length: lengthInput.value,
            genre: genreSelect.value
        }

        //validacija podataka
        if (!movieData.title) {
            displayError("Please enter title!");
            return;
        }

        if (!movieData.length) {
            displayError("Please enter duration!");
            return;
        }

        if (document.querySelector("#select").value === "select") {
            displayError("Please enter genre!");
            return;
        }

        if (movieData.title && movieData.length && movieData.genre) {
            document.querySelector(".error").textContent = "";
        }

        return movieData;

    }

    function clearInputFields() {

        titleInput.title = "";
        lengthInput.value = "";
        genreSelect.value = "select";

    }

    function displayMovies(movies) {

        for (var i = 0; i < movies.length; i++) {
            var item = document.createElement("li");
            item.textContent = movies[i].getDisplayText();

        }

        movieList.append(item);

        clearInputFields();

       /*  totalLengthOfMovies(movies); */

    }

    function displayTotalLength() {

        document.querySelector("#totalLength").textContent = "Total movie length: " + getTotalLength() + " min.";
    }

    function displayError(msg) {

        var errorElem = document.querySelector(".error");
        errorElem.textContent = msg;

    }

    return {collectFormData: collectFormData, displayMovies: displayMovies, displayTotalLength: displayTotalLength}

})();



var controllerModule = (function (data, ui) {

    var addMovieButton = document.querySelector("#button");

    addMovieButton.addEventListener("click", onAddMovieClickHandler);

   

    function onAddMovieClickHandler(event) {
        var movieData = uiModule.collectFormData();
        dataModule.createAddMovie(movieData);
        uiModule.displayMovies(dataModule.data);

    }


})(dataModule, uiModule);







    /*     //validacija podataka
        if (!movieData.title) {
            displayError("Please enter title!");
            return;
        }
    
        if (!movieData.length) {
            displayError("Please enter duration!");
            return;
        }
    
        if (document.querySelector("#select").value === "select") {
            displayError("Please enter genre!");
            return;
        }
    
    
        if (movieData.title && movieData.length && movieData.genre) {
            document.querySelector(".error").textContent = "";
        }
    
        var movie = new Movie(movieData.title, movieData.length, movieData.genre);
    
        movies.push(movie);
     */
    /*    displayMovies(movies); */







/*
function totalLengthOfMovies(movies) {


    var total = 0;

    for (var i = 0; i < movies.length; i++) {
        total += parseInt(movies[i].length);
    }

    document.querySelector("#totalLength").textContent = "Total movie length: " + total + " min.";

}
 */










