window.onload = function() {
    var availableHeight = d3.select(document.body.scrollHeight) - 30;
    var availableWidth = d3.select(document.body.scrollWidth) - 30;
    var svg = d3.select('#chart').append('svg').attr('height', availableHeight).attr('width', availableWidth);
    var data = [1, 2, 3, 5, 7, 9, 11, 13, 17, 19, 23, 29, 31, 37, 39, 41, 43, 47];
    var colorScale = d3.scale.linear();
    colorScale.domain([1, availableWidth]).range(['green', 'yellow']);

    var dataset = []; //Initialize empty array
    for (var i = 0; i < availableWidth; i++) {
        var newNumber = Math.round(Math.random() * availableWidth);
        dataset.push([newNumber, i]);
    }
    var randomScale = d3.scale.linear().domain([1, availableWidth]).range([1, availableHeight]);
    var circles = svg.selectAll('circle').data(dataset).enter().append('circle').attr('cx', function(d, i) {
            return d[0];
        }).attr('cy', function(d, i) {
            return randomScale(d[1]);
        }).attr('fill', function(d, i) {
            return colorScale(d[1]);
        }).attr('stroke', '#444').transition()
        .duration(1000)
        .each(slide);
    /*
			.on('mouseover', function() {
            var elt = d3.select(this);
            elt.transition().attr('fill', function(d, i) {
                return colorScale(availableWidth - d[0]);
            }).transition().attr('r', 30).duration(50).transition().attr('r', 10).duration(500);
        }).on('mouseout', function() {
            var elt = d3.select(this);
            elt.transition().attr('fill', function(d, i) {
                return colorScale(d[1]);
            });
        })
        */

    function slide() {
        var circle = d3.select(this);
        (function repeat() {
            function reset() {
                circle = circle.transition()
                    .attr("cy", function(d, i) {
                        return randomScale(d[1]);
                    })
                    .attr('r', function(d, i) {
                        return d[0] / 250;
                    })
                    .duration(function(d) {
                        return Math.random() * 10000;
                    })
                    .each("end", repeat);

            };
            circle = circle.transition()
                .attr("cy", function(d, i) {
                    return availableHeight;
                })
                .attr('r', function(d, i) {
                        return  d[0]/150;
                })
                .duration(function(d) {
                    return Math.random() * 20000;
                })
                .each("end", reset);
            /*
            .transition()
            .attr("cy", function(d, i) {
                return availableHeight;
            })
            .duration(function(d) {
                return 3000;
            })
            */
        })();
    };
    /*var autoCall = function() {
        var circles = d3.selectAll('circle');
        var duration = 1;
        circles.data(dataset).transition().attr('cy', function(d, i) {
            return randomScale(d[0]);
        }).duration(Math.random() * 5000).transition().attr('cy', function(d, i) {
            return randomScale(d[1]);
        }).duration(Math.random() * 2000).each('end',function(){
        	autoCall();
        });

    };
    autoCall();*/
    /*svg.selectAll('line').data(data).enter().append('line').attr('x1', function(d, i) {
        return 0;
    }).attr('y1', function(d, i) {
        return d * 5;
    }).attr('x2', function(d, i) {
        return d * 15;
    }).attr('y2', function(d, i) {
        return d * 5;
    }).attr('stroke', function(d, i) {
        return colorScale(d);
    }).on('mouseover', function(d, i) {
        d3.select(this).attr('stroke', 'maroon');
    }).on('mouseout', function(d, i) {
        d3.select(this).attr('stroke', colorScale(d));
    });*/


    /*var xScale = d3.scale.linear();
    xScale.domain([0, 100]).range([100, 3640]);

    var yScale = d3.scale.linear();
    yScale.domain([0, 20]).range([900, 100]);

    var xAxis = d3.svg.axis().scale(xScale).orient('botttom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left');

    svg.append('g').attr("transform", "translate(0,900)")
.attr('class', 'axis').call(xAxis);
    svg.append('g').attr("transform", "translate(100,0)").attr('class', 'axis').call(yAxis);*/

};
