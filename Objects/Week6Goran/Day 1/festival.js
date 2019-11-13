'use strict';

(function () {
    console.log("Hi");


    function Genre(genre) {
        this.genre = genre;
    };
    Genre.prototype.getData = function () {
        return (this.genre[0] + this.genre[this.genre.length - 1]).toUpperCase();
    };


    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    };
    Movie.prototype.getData = function () {
        return "\t" + this.title + ", " + this.length + ", " + this.genre.getData();
    };


    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumber = 0;
    };
    Program.prototype.addMovie = function (movie) {
        this.totalNumber = this.listOfMovies.push(movie);
    };
    Program.prototype.getData = function () {
        var programLength = 0;
        var result = "";
        for (var i = 0; i < this.listOfMovies.length; i++) {
            result += "\t " + this.listOfMovies[i].getData() + "\n";
            programLength += parseInt(this.listOfMovies[i].length)
        }
        return "\t" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", program length from all " + this.totalNumber + " movies:" + programLength + "min\n" + result;
    };


    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfPrograms = 0;
    };
    Festival.prototype.addProgram = function (program) {
        this.numberOfPrograms = this.listOfPrograms.push(program);
    };
    Festival.prototype.getData = function () {
        var numberOfMovies = 0;
        var result = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            result += this.listOfPrograms[i].getData() + "\n";
            numberOfMovies += this.listOfPrograms[i].totalNumber;
        }
        return this.name + " has " + numberOfMovies + " movie titles\n" + result;
    }


    function createMovie(title, length, genre) {
        var gen = new Genre(genre);
        return new Movie(title, gen, length)
    }

    function createProgram(date) {
        return new Program(date);
    }

    var festival = new Festival("Summer Festival");

    var program1 = createProgram("12.05.2019");
    var program2 = createProgram("05.05.2019");

    var movie1 = createMovie("Charlie's Angels", "130mn", "Action");
    var movie2 = createMovie("The Good Liar", "110mn", "Comedy");
    var movie3 = createMovie("All Rise", "90mn", "Crime");
    var movie4 = createMovie("Mickey and the Bear", "90min", "Fantasy");
    var movie5 = createMovie("Mickey and the Bear", "90min", "Fantasy");

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie5);


    program2.addMovie(movie3);
    program2.addMovie(movie4);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData());

}

)()