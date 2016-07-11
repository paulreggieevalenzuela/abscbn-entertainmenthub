function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
    function() {
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn) {
            tallestcolumn  = currentHeight;
            }
        }
    );
 columns.height(tallestcolumn);
}
var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
    };
})();
$(window).resize(function() {
    delay(function(){
        $('.panel-content').css('height','auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.panel-content'));
        $('.left-section').css("margin-bottom","50px");
    }, 100);
});
if(document.querySelector('.pinterest-grid')){
    var lengthHTML = 65;
    var headingCount = 40;
    var pinDescription = $(".pin-description").find("p");
    for(var x = 0; x < pinDescription.length; x++){
        var pinHTML = $(pinDescription[x]).html();
        $(pinDescription[x]).replaceWith('<p>' + pinHTML.substring(0,lengthHTML) + "..." + '</p>');
    }
    var headingDescription = $(".pin-description").find("h2");
    for(var x = 0; x < headingDescription.length; x++){
        var headingHTML = $(headingDescription[x]).html();
        $(headingDescription[x]).replaceWith('<h2>' + headingHTML.substring(0,headingCount) + "..." + '</h2>');
    }
    // console.log($(headingDescription).html().length);
}
if(document.querySelector(".result-page")){
    var lengthHTML = 57;
    var headingCount = 40;
    var pinDescription = $(".result-description").find("p");
    for(var x = 0; x < pinDescription.length; x++){
        var pinHTML = $(pinDescription[x]).html();
        //console.log(pinHTML.substring(0,lengthHTML));
        $(pinDescription[x]).replaceWith('<p>' + pinHTML.substring(0,lengthHTML) + "..." + '</p>');
    }
    var headingDescription = $(".result-description").find("h2");
    for(var x = 0; x < headingDescription.length; x++){
        var headingHTML = $(headingDescription[x]).html();
        $(headingDescription[x]).replaceWith('<h2>' + headingHTML.substring(0,headingCount) + "..." + '</h2>');
    }
}



