"use strict";

var _this = void 0;

(function (data, ui) {
  $(function () {
    data.fetchShows(data.baseEndpoint, createHomepageCallback, ui.displayError);
    $(ui.selectors.searchInput).on("keyup", function () {
      var currentValueSearch = ui.searchByValueURL();
      data.fetchShows(currentValueSearch, createDropdownCallback, ui.displayError);
    });
    $(ui.selectors.searchInput).on("submit", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        data.fetchShows(currentValueSearch, createSearchPage, ui.displayError);
      }
    });
  }); // CALLBACK FUNCTIONS

  var createHomepageCallback = function createHomepageCallback(response) {
    var topShows = response.filter(function (element) {
      return parseFloat(element.rating.average) > 8.3;
    }).slice(0, 50);
    ui.createHomePage(topShows);
    $(ui.selectors.card).on("click", function () {
      var singleSearchUrl = ui.generateURL(this.id);
      createShowPageOnSelect(singleSearchUrl);
    });
  };

  var createSearchPage = function createSearchPage(response) {
    console.log(response);
    var resultShows = response.slice(0, 50);
    ui.createHomePage(resultShows);
    $(ui.selectors.card).on("click", function () {
      var singleSearchUrl = ui.generateURL(this.id);
      createShowPageOnSelect(singleSearchUrl);
    });
  };

  var createDropdownCallback = function createDropdownCallback(response) {
    ui.createDropDownList(response);
    $(".dropdown li").on("click", function (e) {
      e.stopPropagation();
      var singleSearchUrl = ui.generateURL(this.id);
      createShowPageOnSelect(singleSearchUrl);
    });
    $(ui.selectors.searchInput).on("blur", function () {
      setTimeout(function () {
        $(".dropdown").css("display", "none");
      }, 150);
    });
  };

  var createShowPageOnSelect = function createShowPageOnSelect(singleSearchUrl) {
    data.fetchShows(singleSearchUrl, pageCreationCallback, ui.displayError);
    ui.createShowPage(_this.id);
  };

  var pageCreationCallback = function pageCreationCallback(_ref) {
    var id = _ref.id,
        name = _ref.name,
        image = _ref.image,
        _embedded = _ref._embedded,
        summary = _ref.summary;
    // if (JSON.parse(localStorage.getItem(this.id))){
    //     const show = JSON.parse(localStorage.getItem(this.id));
    // } else {
    //     const show = data.createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
    // }
    var show = data.createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
    ui.createShowPage(show);
  };
})(dataModule, uiModule);