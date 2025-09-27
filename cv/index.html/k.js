$(function(){
    $(".navbar a, footer a").on("click", function(event){
        event.preventDefaults();
        var hash=this.hash;
        $('body').antimate({scrolltop:$(hash) .offset() .top}, 900, function(){window.Location.hash=hash;})
    });
})    