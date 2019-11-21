"use strict";

var dataModule = function () {
  var baseEndpoint = "http://api.tvmaze.com/shows";

  var fetchShows = function fetchShows(path, successCallback, errorCallback) {
    $.get(path).done(successCallback).fail(errorCallback); // axios.get(path)
    //     .then(successCallback)
    //     .catch(errorCallback);
  };

  var createShow = function createShow(id, name, posterURL, listOfSeasons, listOfActors, details) {
    var seasonsList = listOfSeasons.map(function (season) {
      return new Season(season.premiereDate, season.endDate);
    });
    var actorsList = listOfActors.map(function (actor) {
      return new Actor(actor.person.name);
    });
    var newShow = new Show(id, name, posterURL, seasonsList, actorsList, details);
    localStorage.setItem(id, JSON.stringify(newShow));
    return newShow;
  };

  return {
    createShow: createShow,
    fetchShows: fetchShows,
    baseEndpoint: baseEndpoint
  };
}();