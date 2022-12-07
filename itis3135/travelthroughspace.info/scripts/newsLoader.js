$(document).ready(function() {
  $.ajax({
      type: "get",
      url: "json/featuredArticles.json",
      beforeSend: function() {
          $("#featuredArticles").html("Loading...");
      },
      timeout: 10000,
      error: function(xhr, status, error) {
          alert("Error: " + xhr.status + " - " + error);
      },
      dataType: "json",
      success: function(data) {
          $("#featuredArticles").html("");
          $.each(data, function() {
              $.each(this, function(key, value) {
                  $("#featuredArticles").append(
                    "<div class='ct-blog col-sm-6 col-md-4'><div class='inner'><div class='fauxcrop'>" +
                    "<a href='" + value.link + "'><img alt='" + value.alt + "' src='" + value.image + "'></a>" +
                    "</div><div class='ct-blog-content'><div class='ct-blog-date'><span>" + value.month + "</span><strong>" + value.day + "</strong></div>" + 
                    "<h3 class='ct-blog-header'>" + value.headline + "</h3></div></div></div>"
                  );
              });
          });
      }
  });
  $.ajax({
    type: "get",
    url: "json/allArticles.json",
    beforeSend: function() {
        $("#otherNews").html("Loading...");
    },
    timeout: 10000,
    error: function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data) {
        $("#otherNews").html("");
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#otherNews").append(
                  "<div class='ct-blog col-sm-6 col-md-4'><div class='inner'><div class='fauxcrop'>" +
                  "<a href='" + value.link + "'><img alt='" + value.alt + "' src='" + value.image + "'></a>" +
                  "</div><div class='ct-blog-content'><div class='ct-blog-date'><span>" + value.month + "</span><strong>" + value.day + "</strong></div>" + 
                  "<h3 class='ct-blog-header'>" + value.headline + "</h3></div></div></div>"
                    );
                });
            });
            
        }
    });
    $( ".loadButton" ).click(function() {
        if($(this).hasClass("showAll")) {
            $(this).addClass("hideAll");
            $(this).removeClass("showAll");
            $(this).html("HIDE ALL NEWS");
            $("#otherNews").css("display","flex");

        } else if($(this).hasClass("hideAll")){
            $(this).addClass("showAll");
            $(this).removeClass("hideAll");
            $(this).html("VIEW ALL NEWS")
            $("#otherNews").css("display","none");
        }
    });
});
