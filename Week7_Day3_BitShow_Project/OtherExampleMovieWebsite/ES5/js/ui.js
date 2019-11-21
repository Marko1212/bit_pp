var uiModule = function () {
    var selectors = {
      searchInput: ".search-input",
      card: ".card",
      row: ".row"
    };
  
    var generateSingleSearchURL = function generateSingleSearchURL(showID) {
      return "http://api.tvmaze.com/shows/".concat(showID, "?embed[]=seasons&embed[]=cast");
    };
  
    var searchByValueURL = function searchByValueURL() {
      var searchValue = $(selectors.searchInput).val();
      return "http://api.tvmaze.com/search/shows?q=".concat(searchValue);
    };
  
    var displayError = function displayError() {
      alert("something went wrong");
    };
  
    var createHomePage = function createHomePage(listOfShows) {
      var row = $(".row");
      listOfShows.forEach(function (_ref) {
        var name = _ref.name,
            image = _ref.image,
            id = _ref.id;
        row.append("\n            <div class=\"col-lg-4 col-sm-6 portfolio-item\">\n                <div class=\"card h-100\" id=\"".concat(id, "\">\n                    <img class=\"card-img-top\" src=").concat(image.medium, " alt=\"").concat(name, "\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">").concat(name, "</h4>\n                    </div>\n                </div>\n            </div>\n          "));
      });
    };
  
    var createShowPage = function createShowPage(_ref2) {
      var seasons = _ref2.seasons,
          name = _ref2.name,
          posterURL = _ref2.posterURL,
          details = _ref2.details,
          cast = _ref2.cast;
      $(selectors.row).children().remove();
      $("h1").text(name).css("text-align", "center");
      var seasonsList = seasons.map(function (season) {
        return "<li>".concat(season.getInfo(), "</li>");
      }).join("");
      var castList = cast.map(function (actor) {
        return "<li>".concat(actor.name, "</li>");
      }).join("");
      $(selectors.row).append("\n            <img src=".concat(posterURL, " class=\"col-sm-6\">\n            <div class=\"row col-sm-6\">\n                <h2 class=\"col-sm-12\">Seasons (").concat(seasons.length, ")</h2>\n                <ul class=\"col\">\n                    ").concat(seasonsList, "\n                </ul>\n                <h2 class=\"col-sm-12\">Cast:</h2>\n                <ul class=\"col\">\n                    ").concat(castList, "\n                </ul>\n            </div>\n            <div col>\n                <h2 col>Show Details</h2>\n                ").concat(details, "\n            </div>\n        "));
    };
  
    var createDropDownList = function createDropDownList(searchResults) {
      var listOfShows = searchResults.map(function (_ref3) {
        var show = _ref3.show;
        return "<li id=\"".concat(show.id, "\">").concat(show.name, "</li>");
      }).join("");
      $(".dropdown ul").children().remove();
      $(".dropdown").css("display", "block");
      $(".dropdown ul").append(listOfShows);
    };
  
    return {
      selectors: selectors,
      generateURL: generateSingleSearchURL,
      searchByValueURL: searchByValueURL,
      displayError: displayError,
      createHomePage: createHomePage,
      createShowPage: createShowPage,
      createDropDownList: createDropDownList
    };
  }();