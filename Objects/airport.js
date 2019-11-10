"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        return this.name + ' ' + this.surname;
    }
}

function Seat(number, category) {
    this.number = number;
    this.category = category;

    this.getData = function () {
        return 'seat: ' + this.number + ', ' + this.category + ' class';
    }
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {
        return this.person.getData() + '\n' + this.seat.getData();
    }
}

function Flight(relation, date, listOfPassengers) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = listOfPassengers;

    this.addPassenger = function (passenger) {

        this.listOfPassengers.push(passenger);
    
    }

    this.getData = function () {

        return this.date + ', ' + this.relation + '\n' + this.listOfPassengers;
  
    }

}

/* Add getData method to Flight. It should return a formatted string 
containing a date, relation, all data related to the flight and list 
of passengers with their data.
25.10.2017, Belgrade - Paris
		1, B, John Snow
        2, E, Cersei Lannister */


function Airport(listOfFlights) {
    this.name = "Nikola Tesla";
    this.listOfFlights = listOfFlights;
    this.addFlight = function (flight) {

        this.listOfFlights.push(flight);
    
    }

}

var pera = new Person('Pera', 'Peric');
var zika = new Person('Zika', 'Zikic');

var a1 = new Seat(1, 'first');
var a2 = new Seat(2, 'first');

var p1 = new Passenger(pera, a1);
var p2 = new Passenger(zika, a2);

var res1 = p1.getData();
var res2 = p2.getData();

console.log(res1);
console.log(res2);

/* Create an anonymous immediately-invoking function that will hold the 
main execution of all program calls. Writing a simple command 
console.log(“Hi”) inside this function and running the code should 
output “Hi“ in the console. */

(function () {
    console.log("Hi");
})();


/* Add addPassenger method to Flight. It should receive Passenger and add
the passenger to the passenger list of a given flight.  */

/* Add addFlight method to Airport.
It should add the flight to the list of flights of the airport. */

/* Inside your immediately-invoking function, add createFlight function 
that receives a relation (ex. Belgrade - New York) and date as 
parameters and returns a created Flight.

Inside your immediately-invoking function, add createPassenger function 
that receives a first name, last name, seat number and category and 
returns a created Passenger. */

var flight1 = (function (relation, date, firstName, lastName, seatNumber, category) {
    console.log("Hi");

    function createFlight(relation, date) {

        return new Flight(relation, date, []);
    
    }

    function createPassenger(firstName, lastName, seatNumber, category){
        var newSeat = new Seat(seatNumber, category);
        var newPerson = new Person(firstName, lastName);

        return new Passenger(newPerson, newSeat);

    }

})("Belgrade - New York", "Oct 25 2019");

var flight2 = (function (relation, date, firstName, lastName, seatNumber, category) {
    console.log("Hi");

    function createFlight(relation, date) {

        return new Flight(relation, date, []);
    
    }

    function createPassenger(firstName, lastName, seatNumber, category){
        var newSeat = new Seat(seatNumber, category);
        var newPerson = new Person(firstName, lastName);

        return new Passenger(newPerson, newSeat);

    }

})("Barcelona - Belgrade", "Nov 11 2019");


/* In you main program function, create an instance of the Airport object.  */

var airport = new Airport ([]);


/* Create two instances of the Flight object using the createFlight function and the following data:
relation: "Belgrade - New York" 		date: "Oct 25 2017"
relation: "Barcelona - Belgrade" 		date: "Nov 11 2017" */

/* 
Create four instances of the Passenger object using the createPassenger function with the following data: 
Name: "John" 	surname: "Snow" 		seat number: 1		category: "b"
Name: "Cersei" 	surname: "Lannister" 	seat number: 2		category: "b"
Name: "Daenerys" 	surname: "Targaryen" 	seat number: 14	
Name: "Tyrion" 	surname: "Lannister" 	 */




