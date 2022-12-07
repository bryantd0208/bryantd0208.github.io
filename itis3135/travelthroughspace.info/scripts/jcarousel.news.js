$(document).ready(function() {
    let listOfText = [];
    let currentSlide = 0;
    let numSlides = 0;
    $(function() {
        $('.jcarousel').jcarousel();
        
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });
        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
                currentSlide = $(this).attr("data-item") - 1;
                $('#imgCaption').html(listOfText[currentSlide])
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
                perPage: 1,
                item: function (page) {
                    return '<a data-item="' + page + '" class="slider_ce_text" href="#' + page + '"><div class="grey_dot"></div></a>';
                },
            });
    });
    $('.jcarousel-control-next').click( function() {
        const isInactive = $(".jcarousel-control-next").hasClass("inactive");
        const isInvalidValue = currentSlide >= numSlides - 1;
        if(isInactive || isInvalidValue){currentSlide+=0;}
        else{currentSlide++;$('#imgCaption').html(listOfText[currentSlide])}
    })
    $('.jcarousel-control-prev').click( function() {
        const isInactive = $(".jcarousel-control-next").hasClass("inactive");
        const isInvalidValue = currentSlide < 0;
        if(isInactive || isInvalidValue){currentSlide+=0;}
        else{currentSlide--;$('#imgCaption').html(listOfText[currentSlide])}
    })

    $.ajax({
        type: "get",
        url: "json/mainArticles.json",
        beforeSend: function() {
            $("#mainNews").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        async: false,
        success: function(data) {
            $("#mainNews").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#mainNews").append(
                        "<li><a href='" + value.link + "' target='_blank'><img src='" + value.image + "' width='900' height='600' alt='" + value.alt + "'></a></li>"
                    );
                    numSlides++;
                    listOfText.push(String(value.text));
                });
            });
        }
    });
});
