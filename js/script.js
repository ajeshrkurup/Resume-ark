$(document).ready(function(){
    
    $("#project-1").mouseenter(function(){
        $("#project-1-details").css("visibility", "visible");
        $("#project-1-details").css("z-index", "100");
        $("#project-1 img").css("opacity",".7");
    });
    
    $("#project-1").mouseleave(function(){
        $("#project-1-details").css("visibility", "hidden");
        $("#project-1 img").css("opacity","1");
    });
    
    $("#project-2").mouseenter(function(){
        $("#project-2-details").css("visibility", "visible");
        $("#project-2-details").css("z-index", "100");
        $("#project-2 img").css("opacity",".7");
    });
    
    $("#project-2").mouseleave(function(){
        $("#project-2-details").css("visibility", "hidden");
        $("#project-2 img").css("opacity","1");
    });
    
    $("#project-3").mouseenter(function(){
        $("#project-3-details").css("visibility", "visible");
        $("#project-3-details").css("z-index", "100");
        $("#project-3 img").css("opacity",".7");
    });
    
    $("#project-3").mouseleave(function(){
        $("#project-3-details").css("visibility", "hidden");
        $("#project-3 img").css("opacity","1");
    });
});