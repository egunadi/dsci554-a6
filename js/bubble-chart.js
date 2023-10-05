// Sample data for the bubble chart with different circle areas
var bubbleChartData = 
    [{"Year":2020,"Country":"Japan","Population":125244.761},{"Year":2019,"Country":"Japan","Population":125791.677},{"Year":2018,"Country":"Japan","Population":126255.866},{"Year":2017,"Country":"Japan","Population":126662.472},{"Year":2016,"Country":"Japan","Population":126993.857},{"Year":2015,"Country":"Japan","Population":127250.933},{"Year":2014,"Country":"Japan","Population":127476.735},{"Year":2013,"Country":"Japan","Population":127678.924},{"Year":2012,"Country":"Japan","Population":127853.688},{"Year":2011,"Country":"Japan","Population":128007.257},{"Year":2010,"Country":"Japan","Population":128105.431},{"Year":2009,"Country":"Japan","Population":128117.042},{"Year":2008,"Country":"Japan","Population":128077.633},{"Year":2007,"Country":"Japan","Population":128006.426},{"Year":2006,"Country":"Japan","Population":127902.167},{"Year":2005,"Country":"Japan","Population":127798.373},{"Year":2004,"Country":"Japan","Population":127671.288},{"Year":2003,"Country":"Japan","Population":127502.352},{"Year":2002,"Country":"Japan","Population":127301.75},{"Year":2001,"Country":"Japan","Population":127065.731},{"Year":2000,"Country":"Japan","Population":126803.861},{"Year":1999,"Country":"Japan","Population":126555.063},{"Year":1998,"Country":"Japan","Population":126308.39},{"Year":1997,"Country":"Japan","Population":126027.985},{"Year":1996,"Country":"Japan","Population":125726.223},{"Year":1995,"Country":"Japan","Population":125433.969},{"Year":1994,"Country":"Japan","Population":125119.269},{"Year":1993,"Country":"Japan","Population":124779.576},{"Year":1992,"Country":"Japan","Population":124444.693},{"Year":1991,"Country":"Japan","Population":124073.993},{"Year":1990,"Country":"Japan","Population":123686.321},{"Year":1989,"Country":"Japan","Population":123270.648},{"Year":1988,"Country":"Japan","Population":122798.302},{"Year":1987,"Country":"Japan","Population":122268.885},{"Year":1986,"Country":"Japan","Population":121710.305},{"Year":1985,"Country":"Japan","Population":121119.031},{"Year":1984,"Country":"Japan","Population":120470.727},{"Year":1983,"Country":"Japan","Population":119793.752},{"Year":1982,"Country":"Japan","Population":119098.142},{"Year":1981,"Country":"Japan","Population":118385.723},{"Year":1980,"Country":"Japan","Population":117624.196},{"Year":1979,"Country":"Japan","Population":116765.509},{"Year":1978,"Country":"Japan","Population":115809.525},{"Year":1977,"Country":"Japan","Population":114761.516},{"Year":1976,"Country":"Japan","Population":113624.865},{"Year":1975,"Country":"Japan","Population":112411.64},{"Year":1974,"Country":"Japan","Population":111100.023},{"Year":1973,"Country":"Japan","Population":109679.47},{"Year":1972,"Country":"Japan","Population":108220.404},{"Year":1971,"Country":"Japan","Population":106789.355},{"Year":1970,"Country":"Japan","Population":105416.839},{"Year":2020,"Country":"Korea","Population":51844.69},{"Year":2019,"Country":"Korea","Population":51803.829},{"Year":2018,"Country":"Korea","Population":51676.9},{"Year":2017,"Country":"Korea","Population":51511.639},{"Year":2016,"Country":"Korea","Population":51309.984},{"Year":2015,"Country":"Korea","Population":50994.401},{"Year":2014,"Country":"Korea","Population":50558.043},{"Year":2013,"Country":"Korea","Population":50098.229},{"Year":2012,"Country":"Korea","Population":49634.185},{"Year":2011,"Country":"Korea","Population":49169.878},{"Year":2010,"Country":"Korea","Population":48813.042},{"Year":2009,"Country":"Korea","Population":48588.019},{"Year":2008,"Country":"Korea","Population":48398.626},{"Year":2007,"Country":"Korea","Population":48220.601},{"Year":2006,"Country":"Korea","Population":48049.347},{"Year":2005,"Country":"Korea","Population":47889.573},{"Year":2004,"Country":"Korea","Population":47727.285},{"Year":2003,"Country":"Korea","Population":47539.738},{"Year":2002,"Country":"Korea","Population":47320.668},{"Year":2001,"Country":"Korea","Population":47064.79},{"Year":2000,"Country":"Korea","Population":46788.591},{"Year":1999,"Country":"Korea","Population":46520.444},{"Year":1998,"Country":"Korea","Population":46250.259},{"Year":1997,"Country":"Korea","Population":45962.393},{"Year":1996,"Country":"Korea","Population":45660.168},{"Year":1995,"Country":"Korea","Population":45393.418},{"Year":1994,"Country":"Korea","Population":45165.78},{"Year":1993,"Country":"Korea","Population":44932.861},{"Year":1992,"Country":"Korea","Population":44703.709},{"Year":1991,"Country":"Korea","Population":44487.412},{"Year":1990,"Country":"Korea","Population":44120.039},{"Year":1989,"Country":"Korea","Population":43567.512},{"Year":1988,"Country":"Korea","Population":42988.455},{"Year":1987,"Country":"Korea","Population":42405.253},{"Year":1986,"Country":"Korea","Population":41808.708},{"Year":1985,"Country":"Korea","Population":41232.709},{"Year":1984,"Country":"Korea","Population":40664.361},{"Year":1983,"Country":"Korea","Population":40053.748},{"Year":1982,"Country":"Korea","Population":39403.422},{"Year":1981,"Country":"Korea","Population":38731.905},{"Year":1980,"Country":"Korea","Population":38170.501},{"Year":1979,"Country":"Korea","Population":37737.918},{"Year":1978,"Country":"Korea","Population":37329.984},{"Year":1977,"Country":"Korea","Population":36911.298},{"Year":1976,"Country":"Korea","Population":36456.32},{"Year":1975,"Country":"Korea","Population":35930.694},{"Year":1974,"Country":"Korea","Population":35319.338},{"Year":1973,"Country":"Korea","Population":34659.713},{"Year":1972,"Country":"Korea","Population":33976.851},{"Year":1971,"Country":"Korea","Population":33288.369},{"Year":1970,"Country":"Korea","Population":32601.143}];

// Create the bubble chart
function createBubbleChart() {
    var marginBubble = { top: 20, right: 20, bottom: 40, left: 60 };
    var widthBubble = document.getElementById("bubble-chart").offsetWidth - marginBubble.left - marginBubble.right;
    var heightBubble = 350 - marginBubble.top - marginBubble.bottom;

    var svgBubble = d3.select("#bubble-chart")
        .html("") // Clear the existing chart
        .append("svg")
        .attr("width", widthBubble + marginBubble.left + marginBubble.right)
        .attr("height", heightBubble + marginBubble.top + marginBubble.bottom)
        .append("g")
        .attr("transform", "translate(" + marginBubble.left + "," + marginBubble.top + ")");

    // Add padding to the X-axis scale
    var xScaleBubble = d3.scaleLinear()
        .domain([1970, 2020]) // Set the year range with padding
        .range([0, widthBubble]);

    var yScaleBubble = d3.scaleLinear()
        .domain([0, d3.max(bubbleChartData, function (d) { return d.Population; }) * 1.5])
        .range([heightBubble, 0]);

    // Define the tick values for the X-axis
    var xAxisTicks = [1970, 1980, 1990, 2000, 2010, 2020];

    // Add X and Y axes
    svgBubble.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + heightBubble + ")")
        .call(d3.axisBottom(xScaleBubble).tickValues(xAxisTicks).tickFormat(d3.format("d"))); // Format X-axis as years

    svgBubble.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScaleBubble).tickFormat(d3.format(".2s")));

    var circles = svgBubble.selectAll("circle")
        .data(bubbleChartData)
        .enter()
        .append("circle");

    circles.attr("cx", function (d) { return xScaleBubble(d.Year); })
        .attr("cy", function (d) { return yScaleBubble(d.Population); })
        .attr("r", 1.5)
        .style("fill", function (d) { return (d.Country === "Japan") ? "steelblue" : "orange"; }); // Circle color based on data

    // Add X-axis title
    svgBubble.append("text")
        .attr("class", "x-axis-title")
        .attr("x", widthBubble / 2)
        .attr("y", heightBubble + marginBubble.bottom - 5) // Adjust the y-position
        .style("text-anchor", "middle")
        .text("Year");

    // Add Y-axis title with padding
    svgBubble.append("text")
        .attr("class", "y-axis-title")
        .attr("x", -heightBubble / 2)
        .attr("y", -marginBubble.left + 15) // Adjust the y-position for padding
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "middle")
        .text("Population");

    // Add legend (you can customize this)
    const legend = svgBubble.append("g")
        .attr("transform", `translate(10, 10)`); // Adjust the translation values

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "steelblue");

    legend.append("text")
        .attr("x", 30)
        .attr("y", 10)
        .text("Japan");

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", 90)
        .attr("fill", "orange");

    legend.append("text")
        .attr("x", 120)
        .attr("y", 10)
        .text("Korea");
}
