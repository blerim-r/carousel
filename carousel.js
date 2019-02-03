function renderImage(file) {
    if (typeof file === 'undefined') {
        alert("no file chosen");
        return;
    }
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function (event) {
        the_url = event.target.result;

        var image = $("#profImage");
        image.attr("src",the_url);
    }
}
function renderImage1(file) {
    if (typeof file === 'undefined') {
        alert("no file chosen");
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
        var spnX = document.createElement("span");
        spnX.classList.add("spnXCSS");
        spnX.innerHTML = "X";
        div.append(spnX);

        var imgContainer = $('.images-container');
        if (imgContainer.hasClass('slick-initialized')) {
            imgContainer.slick('unslick');
        }
        imgContainer.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,
            infinite: true,
            prevArrow: '#left',
            nextArrow: '#right',
        });

        div.hover(function () {
            $(spnX).css("visibility","visible");
        },function () {
            $(spnX).css("visibility","hidden");
        });

        spnX.addEventListener("click", function () {
            imgContainer.slick('unslick');
            div.remove();
            imgContainer.slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
                infinite: true,
                prevArrow: '#left',
                nextArrow: '#right',
            });
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
    span.on("click" ,function () {
        $(".full-container")[0].remove();
    });
});


$('#profImage').mouseover(function () {
    debugger
    var modal = $('#myModal').clone();
    modal.modal('show');
    var content = modal.find('.modal-content');
    if (modal.find('.modal-content img').length > 0) {
        return;
    }
    $('<img id="photoHover" src="' + this.src + '">').appendTo(content);
    $(modal).click(function () {
        debugger
        $("#myModal").remove();
        $(".modal-backdrop.in").css("opacity","0");
    });
});


var biografi = $("#Biografi");
var lastText = $("#last-text");
var mutex = 1;
biografi.hover(function () {
    if (mutex === 0) {
        return;
    }
    mutex = 0;
    lastText.show(2000, function () {
        if (lastText.is(":hover")) {
           lastText.mouseleave(leaveText);
        }else if (biografi.is(":hover")) {
                biografi.mouseleave(leaveH1);
        } else {
            lastText.hide(2000,function () {
                mutex = 1;
            });
        }
    });
    $([document.documentElement, document.body]).animate(
        {scrollTop: biografi.offset().top}
    ,2000);
});

function leaveH1() {
    $(this).off("mouseleave");
    if (lastText .is (":hover")) {
        lastText.mouseleave(leaveH1);
    } else {
        lastText.hide(2000,function () {
            mutex = 1;
        })
    }
}


function leaveText() {
    $(this).off("mouseleave");
    if (biografi.is(":hover")) {
        biografi.mouseleave(leaveText);
    }else {
        lastText.hide(2000,function () {
            mutex = 1;
        })
    }
}







