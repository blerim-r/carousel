function renderImage(file) {
    if (typeof file === 'undefined') {
        alert("ju nuk zgjodhet asnje file");
        return;
    }
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function (event) {
        the_url = event.target.result;
        // var image = document.getElementById('profImage');
        // image.src =  the_url;

        var image = $("#profImage");
        image.attr("src",the_url);
    }
}
function renderImage1(file) {
    if (typeof file === 'undefined') {
        alert("ju nuk zgjodhet asnje file");
        return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        the_url = event.target.result;
        var div = $("<div class='new-div'></div>");
        var element = $("#imagesss");
        element.append(div);
       var img = $("<img class='new-img'>");
        img.appendTo(div);
        img.attr("src",the_url);

        // var div = document.createElement("div");
        // div.classList.add("new-div")
        // var element = document.getElementById("imagesss");
        // element.appendChild(div);
        // var img = document.createElement("img");
        // img.classList.add("new-img");
        // div.appendChild(img);
        // img.src = the_url ;

        var imgContainer = $('.images-container');
        if (imgContainer.hasClass('slick-initialized')) {
            imgContainer.slick('unslick');
        }
        imgContainer.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,
            infinite: true,
            prevArrow: '#left',
            nextArrow: '#right',
        });
    }
}
$(".images-container").on("click","img", function(e) {
    var container = $("body");
    var div = $("<div class='full-container'></div>");
    container.append(div);
    var div1 = $("<div class='imgContainer'></div>");
    div.append(div1);
    var img = $("<img class='modal-images'>");
    img.attr("src", e.target.src);
    div1.append(img);
    var span = $("<span class='spn-close'>x</span>");
    div1.append(span);
    span.click(function () {
        $(".full-container")[0].remove();
    });
    // var container = document.getElementsByTagName("body")[0];
    // var div = document.createElement("div");
    // div.classList.add("full-container");
    // container.appendChild(div);
    // var div1 = document.createElement("div");
    // div1.classList.add("imgContainer");
    // div.appendChild(div1);
    // var img = document.createElement("img");
    // img.src = e.target.src;
    // img.classList.add("modal-images");
    // div1.appendChild(img);
    // var span = document.createElement("span");
    // span.innerHTML = "x";
    // span.classList.add("spn-close");
    // div1.appendChild(span);
    // span.addEventListener("click",function () {
    //     document.getElementsByClassName("full-container")[0].remove();
    // })
});
// $('#profImage').mouseover(function () {
//     var modal = $('#myModal');
//     modal.modal('show');
//     var content = modal.find('.modal-content');
//     if (modal.find('.modal-content img').length > 0) {
//         return;
//     }
//     $('<img id="photoHover" src="' + this.src + '">').appendTo(content);
    // $(modal).click(function () {
    //     debugger
    //     $("#myModal").remove();
    // })
// });
var biografi = $("#Biografi");
var lastText = $("#last-text");
biografi.mouseover(function () {
    lastText.show(2000);
    $([document.documentElement, document.body]).animate({
        scrollTop: biografi.offset().top
    }, 2000);
});
biografi.mouseleave(function () {
    if (lastText.width() !== 374 ) {
        return;
    }
    if (lastText.is(":hover")) {
        //kur te largohesh nga divi i poshtem fshije divin
        lastText.mouseleave(function () {
            if (!$(biografi).is(":hover")){
                lastText.hide(2000);
            }
        })
    }else {
        lastText.hide(2000);
    }
});
lastText.mouseleave(function () {
    if (!$(biografi).is(":hover")){
        lastText.hide(2000);
    }
})








