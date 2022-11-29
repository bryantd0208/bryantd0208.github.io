"use strict"
$(document).ready( () => {

    let imageGallery = [];
    $("#slides img").each( (index, img) => {
        const image = new Image;
        image.src = $(img).attr("src");
        image.title = $(img).attr("alt");
        imageGallery[index] = image;
    });
    $("#image_list img").each( (index, img) => {
        img.src = imageGallery[index].src;
        img.title = imageGallery[index].title;
        img.alt = imageGallery[index].alt;
    })
    let nextSlide = imageGallery[0];
    let imageCounter = 0;
    // the function for running the slide show
    const runSlideShow = (imageIndex) => {
        imageIndex = (imageGallery.length + (imageIndex % imageGallery.length)) % imageGallery.length;
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {
                nextSlide = imageGallery[imageIndex];
                
                const nextSlideSource = nextSlide.src;
                const nextCaption = nextSlide.title;
                $("#caption").text(nextCaption).fadeIn(1000);
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
            });
            $(".imageLink").attr("href", imageGallery[imageIndex].src);
    };
    // Begins Slideshow
    setTimeout( () => {
        runSlideShow(0);
        clearTimeout();
    }, 3000)

    $("#right_button").click( () => {
        imageCounter++;
        runSlideShow(imageCounter);
    });

    // the click event handler for the left button
    $("#left_button").click( () => {
        imageCounter--;
        runSlideShow(imageCounter);
    });

    $("#image_list img").click( (e) => {
        let source = $(e.target).attr("src");
        let index;
        for(var i = 0; i < imageGallery.length; i++) { 
            if(imageGallery[i].src == source) {index = i;console.log(imageGallery[i].src)} 
        }
        imageCounter = index;
        runSlideShow(imageCounter);
    })

    $("#image_list li").hover(
        evt => $(evt.currentTarget).stop(true).animate({ top: 5 }, "fast"),
        evt => $(evt.currentTarget).stop(true).animate({ top: 0 }, "fast")
    );
});