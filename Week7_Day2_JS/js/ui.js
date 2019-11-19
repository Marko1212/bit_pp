const UIModule = (function () {

    const $searchInput = document.querySelector(".inputText");
    const $searchResult = document.querySelector(".search-results");


    function displayUsers(users) {

        users.forEach(function (user) {
            const li = $(`<li>${user.username}</li>`);
            $($searchResult).append(li);
        })


    };



    function getSearchText() {

        return $searchInput.value;

    }




    return {
        getSearchText,
        displayUsers
    }



})();