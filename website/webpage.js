$(document).ready(function(){




function drawData() {
    $.getJSON('/all', finished)

    function finished(data) {
    for (var key in data) {
    
        $("#displayData").append("<ul><li>"+`${key} = ${data[key]}`+"</li></ul>")
 
        }
    }


}


$("#submit").on("click", function() {
    var player = $("#player").val()
    var number = $("#number").val()
    $("#displayData").empty()
    $.getJSON('add/' + player + '/'+ number, drawData)


})
drawData()




})