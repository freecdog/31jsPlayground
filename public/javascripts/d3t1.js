/**
 * Created by jaric on 11.08.2014.
 */


window.onload = (function (d3){
    console.log("d3t1");
    var obj = d3.selectAll("p").data([1,3,5,7,9]).style("color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    }).append("p").text(function(d){return "number"+d});



    var obj2 = d3.selectAll("p");

        obj2.transition().duration(function(d, i){
            return i * 500;
        })
        .style("color", function() {
            return "hsl(" + Math.random() * 360 + ",100%,50%)";
        });


    //d3.select("body").transition().duration(2000).delay(1000)
    //    .style("background-color", "yellow");
})(d3);