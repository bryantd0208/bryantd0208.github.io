$(function() {

    var picturesGallery = [
        
    ]
    var numPics = picturesGallery.length;
    var current = 1;
    var $images = newArray();
    for(var i = 0; i < numPics - 1; i++)
    {
        $images.push($('<img>')).attr('src', pics[i])
    }
    $("#pic_placeholder").append("<ul>");
    $("#pic_placeholder").css("width",(count)*990);

    for(var i = 0;i < numPics-1; i++)
    {
        var $li = $("<li>").append($images[i]);
        $("#pic_placeholder ul").append($li);
    }
    var $last_li = $("<li><img src='" + picturesGallery[numPics - 1] + "'>")
})