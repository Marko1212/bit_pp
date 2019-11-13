$(function () {
    var $listItems = $("li");
    var middle = ($listItems.length - 1) / 2;

    $('.nav li:first').addClass("border");
    $('.nav li').addClass("upper");
    $('.nav li.active').addClass("color");
    $listItems.eq(middle).addClass("bg");

    var sourceArray = ["https://i.pinimg.com/originals/20/a5/8f/20a58f0af4c1784e45dc15a26c041303.jpg", "http://www.inspiredluv.com/wp-content/uploads/2016/10/24-cool-wallpapers.jpg", "https://i.pinimg.com/originals/5f/10/77/5f107739ce1f1cbf166369f40628270f.jpg"];
    var image, gallery;
    gallery = $('<div>');
    $("<body>").append(gallery);
    for (var i = 0; i < sourceArray.length; i++) {
        image = $("<img>").attr("src", sourceArray[i]);
        gallery.append(image);
    }
    var galeryTitle = $("<h1>").text("Cool Pics Gallery");
    $()

})