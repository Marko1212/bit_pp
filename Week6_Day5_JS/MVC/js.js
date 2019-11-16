


var dataModule = (function () {

    var data = { movies: [] }

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


    function createAndAddMovie(movieData) {
        var addMov = new Movie(movieData);
        data.movies.push(addMov);

        return data;

    }


    function calculateTotalLength() {


        var total = 0;

        for (var i = 0; i < data.movies.length; i++) {
            total += parseInt(data.movies[i].length);
        }

        return total;

    }

    function getTotalLength() {

        return calculateTotalLength();

    }


    return {
        data: data,
        createAndAddMovie: createAndAddMovie,
        getTotalLength: getTotalLength

    }

})();

    var uiModule = (function () {

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

        titleInput.value = "";
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

    

    }

    function displayTotalLength(totalLength) {

        document.querySelector("#totalLength").textContent = "Total movie length: " + totalLength + " min.";
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

   

    function onAddMovieClickHandler() {
        var movieData = uiModule.collectFormData();

        if (movieData === undefined) {return;}
      
        dataModule.createAndAddMovie(movieData);
        uiModule.displayMovies(dataModule.data.movies);
        uiModule.displayTotalLength(dataModule.getTotalLength());
    }


})(dataModule, uiModule);






