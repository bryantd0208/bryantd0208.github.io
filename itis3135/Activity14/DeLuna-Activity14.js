$(document).ready(function() {
	
    $("#sorkin").click(function(){
        loadSpeaker("sorkin");
    });

    $("#chua").click(function(){
        loadSpeaker("chua");
    });

    $("#toobin").click(function(){
        loadSpeaker("toobin");
    });

    $("#sampson").click(function(){
        loadSpeaker("sampson");
    });

}); // end ready

function loadSpeaker(name){
    // Loads desired speaker file from folder
    $.getJSON("json_files/" + name + ".json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                // Gets infomation relating to specified person
                $('#month').text(value.month);
                $('#title').text(value.title);
                $('#name').text(value.speaker);
                $('#image').attr("src", value.image);
                $('#text').text(value.text);
            });
        });
    });
}