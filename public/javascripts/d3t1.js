/**
 * Created by jaric on 11.08.2014.
 */

(function (d3){
    console.log("d3t1");
    d3.selectAll("p").data([1,3,5,7,9]).style("color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    }).append("p").text(function(d){return "number"+d});
})(d3);