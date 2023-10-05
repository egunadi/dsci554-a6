// i would like to convert the following line-chart to a line chart

var bubbleChartData = [{"Year":2020,"Country":"Japan","Population":125244.761},{"Year":2019,"Country":"Japan","Population":125791.677},{"Year":2018,"Country":"Japan","Population":126255.866},{"Year":2017,"Country":"Japan","Population":126662.472},{"Year":2016,"Country":"Japan","Population":126993.857},{"Year":2015,"Country":"Japan","Population":127250.933},{"Year":2014,"Country":"Japan","Population":127476.735},{"Year":2013,"Country":"Japan","Population":127678.924},{"Year":2012,"Country":"Japan","Population":127853.688},{"Year":2011,"Country":"Japan","Population":128007.257},{"Year":2010,"Country":"Japan","Population":128105.431},{"Year":2009,"Country":"Japan","Population":128117.042},{"Year":2008,"Country":"Japan","Population":128077.633},{"Year":2007,"Country":"Japan","Population":128006.426},{"Year":2006,"Country":"Japan","Population":127902.167},{"Year":2005,"Country":"Japan","Population":127798.373},{"Year":2004,"Country":"Japan","Population":127671.288},{"Year":2003,"Country":"Japan","Population":127502.352},{"Year":2002,"Country":"Japan","Population":127301.75},{"Year":2001,"Country":"Japan","Population":127065.731},{"Year":2000,"Country":"Japan","Population":126803.861},{"Year":1999,"Country":"Japan","Population":126555.063},{"Year":1998,"Country":"Japan","Population":126308.39},{"Year":1997,"Country":"Japan","Population":126027.985},{"Year":1996,"Country":"Japan","Population":125726.223},{"Year":1995,"Country":"Japan","Population":125433.969},{"Year":1994,"Country":"Japan","Population":125119.269},{"Year":1993,"Country":"Japan","Population":124779.576},{"Year":1992,"Country":"Japan","Population":124444.693},{"Year":1991,"Country":"Japan","Population":124073.993},{"Year":1990,"Country":"Japan","Population":123686.321},{"Year":1989,"Country":"Japan","Population":123270.648},{"Year":1988,"Country":"Japan","Population":122798.302},{"Year":1987,"Country":"Japan","Population":122268.885},{"Year":1986,"Country":"Japan","Population":121710.305},{"Year":1985,"Country":"Japan","Population":121119.031},{"Year":1984,"Country":"Japan","Population":120470.727},{"Year":1983,"Country":"Japan","Population":119793.752},{"Year":1982,"Country":"Japan","Population":119098.142},{"Year":1981,"Country":"Japan","Population":118385.723},{"Year":1980,"Country":"Japan","Population":117624.196},{"Year":1979,"Country":"Japan","Population":116765.509},{"Year":1978,"Country":"Japan","Population":115809.525},{"Year":1977,"Country":"Japan","Population":114761.516},{"Year":1976,"Country":"Japan","Population":113624.865},{"Year":1975,"Country":"Japan","Population":112411.64},{"Year":1974,"Country":"Japan","Population":111100.023},{"Year":1973,"Country":"Japan","Population":109679.47},{"Year":1972,"Country":"Japan","Population":108220.404},{"Year":1971,"Country":"Japan","Population":106789.355},{"Year":1970,"Country":"Japan","Population":105416.839},{"Year":2020,"Country":"Korea","Population":51844.69},{"Year":2019,"Country":"Korea","Population":51803.829},{"Year":2018,"Country":"Korea","Population":51676.9},{"Year":2017,"Country":"Korea","Population":51511.639},{"Year":2016,"Country":"Korea","Population":51309.984},{"Year":2015,"Country":"Korea","Population":50994.401},{"Year":2014,"Country":"Korea","Population":50558.043},{"Year":2013,"Country":"Korea","Population":50098.229},{"Year":2012,"Country":"Korea","Population":49634.185},{"Year":2011,"Country":"Korea","Population":49169.878},{"Year":2010,"Country":"Korea","Population":48813.042},{"Year":2009,"Country":"Korea","Population":48588.019},{"Year":2008,"Country":"Korea","Population":48398.626},{"Year":2007,"Country":"Korea","Population":48220.601},{"Year":2006,"Country":"Korea","Population":48049.347},{"Year":2005,"Country":"Korea","Population":47889.573},{"Year":2004,"Country":"Korea","Population":47727.285},{"Year":2003,"Country":"Korea","Population":47539.738},{"Year":2002,"Country":"Korea","Population":47320.668},{"Year":2001,"Country":"Korea","Population":47064.79},{"Year":2000,"Country":"Korea","Population":46788.591},{"Year":1999,"Country":"Korea","Population":46520.444},{"Year":1998,"Country":"Korea","Population":46250.259},{"Year":1997,"Country":"Korea","Population":45962.393},{"Year":1996,"Country":"Korea","Population":45660.168},{"Year":1995,"Country":"Korea","Population":45393.418},{"Year":1994,"Country":"Korea","Population":45165.78},{"Year":1993,"Country":"Korea","Population":44932.861},{"Year":1992,"Country":"Korea","Population":44703.709},{"Year":1991,"Country":"Korea","Population":44487.412},{"Year":1990,"Country":"Korea","Population":44120.039},{"Year":1989,"Country":"Korea","Population":43567.512},{"Year":1988,"Country":"Korea","Population":42988.455},{"Year":1987,"Country":"Korea","Population":42405.253},{"Year":1986,"Country":"Korea","Population":41808.708},{"Year":1985,"Country":"Korea","Population":41232.709},{"Year":1984,"Country":"Korea","Population":40664.361},{"Year":1983,"Country":"Korea","Population":40053.748},{"Year":1982,"Country":"Korea","Population":39403.422},{"Year":1981,"Country":"Korea","Population":38731.905},{"Year":1980,"Country":"Korea","Population":38170.501},{"Year":1979,"Country":"Korea","Population":37737.918},{"Year":1978,"Country":"Korea","Population":37329.984},{"Year":1977,"Country":"Korea","Population":36911.298},{"Year":1976,"Country":"Korea","Population":36456.32},{"Year":1975,"Country":"Korea","Population":35930.694},{"Year":1974,"Country":"Korea","Population":35319.338},{"Year":1973,"Country":"Korea","Population":34659.713},{"Year":1972,"Country":"Korea","Population":33976.851},{"Year":1971,"Country":"Korea","Population":33288.369},{"Year":1970,"Country":"Korea","Population":32601.143},{"Year":2020,"Country":"Indonesia","Population":271857.97},{"Year":2019,"Country":"Indonesia","Population":269582.878},{"Year":2018,"Country":"Indonesia","Population":267066.843},{"Year":2017,"Country":"Indonesia","Population":264498.852},{"Year":2016,"Country":"Indonesia","Population":261850.182},{"Year":2015,"Country":"Indonesia","Population":259091.97},{"Year":2014,"Country":"Indonesia","Population":256229.761},{"Year":2013,"Country":"Indonesia","Population":253275.918},{"Year":2012,"Country":"Indonesia","Population":250222.695},{"Year":2011,"Country":"Indonesia","Population":247099.697},{"Year":2010,"Country":"Indonesia","Population":244016.173},{"Year":2009,"Country":"Indonesia","Population":240981.299},{"Year":2008,"Country":"Indonesia","Population":237936.543},{"Year":2007,"Country":"Indonesia","Population":234858.289},{"Year":2006,"Country":"Indonesia","Population":231797.427},{"Year":2005,"Country":"Indonesia","Population":228805.144},{"Year":2004,"Country":"Indonesia","Population":225938.595},{"Year":2003,"Country":"Indonesia","Population":223080.121},{"Year":2002,"Country":"Indonesia","Population":220115.092},{"Year":2001,"Country":"Indonesia","Population":217112.437},{"Year":2000,"Country":"Indonesia","Population":214072.421},{"Year":1999,"Country":"Indonesia","Population":210996.91},{"Year":1998,"Country":"Indonesia","Population":207855.486},{"Year":1997,"Country":"Indonesia","Population":204628.007},{"Year":1996,"Country":"Indonesia","Population":201373.791},{"Year":1995,"Country":"Indonesia","Population":198140.162},{"Year":1994,"Country":"Indonesia","Population":194928.533},{"Year":1993,"Country":"Indonesia","Population":191737.287},{"Year":1992,"Country":"Indonesia","Population":188558.416},{"Year":1991,"Country":"Indonesia","Population":185361.228},{"Year":1990,"Country":"Indonesia","Population":182159.874},{"Year":1989,"Country":"Indonesia","Population":178949.174},{"Year":1988,"Country":"Indonesia","Population":175694.647},{"Year":1987,"Country":"Indonesia","Population":172421.39},{"Year":1986,"Country":"Indonesia","Population":169135.273},{"Year":1985,"Country":"Indonesia","Population":165791.694},{"Year":1984,"Country":"Indonesia","Population":162331.962},{"Year":1983,"Country":"Indonesia","Population":158790.611},{"Year":1982,"Country":"Indonesia","Population":155228.658},{"Year":1981,"Country":"Indonesia","Population":151686.337},{"Year":1980,"Country":"Indonesia","Population":148177.096},{"Year":1979,"Country":"Indonesia","Population":144693.087},{"Year":1978,"Country":"Indonesia","Population":141250.964},{"Year":1977,"Country":"Indonesia","Population":137861.54},{"Year":1976,"Country":"Indonesia","Population":134521.025},{"Year":1975,"Country":"Indonesia","Population":131213.215},{"Year":1974,"Country":"Indonesia","Population":127945.196},{"Year":1973,"Country":"Indonesia","Population":124709.058},{"Year":1972,"Country":"Indonesia","Population":121504.145},{"Year":1971,"Country":"Indonesia","Population":118347.135},{"Year":1970,"Country":"Indonesia","Population":115228.394},{"Year":2020,"Country":"China","Population":1424929.781},{"Year":2019,"Country":"China","Population":1421864.031},{"Year":2018,"Country":"China","Population":1417069.4680000001},{"Year":2017,"Country":"China","Population":1410275.9569999999},{"Year":2016,"Country":"China","Population":1401889.6810000001},{"Year":2015,"Country":"China","Population":1393715.4480000001},{"Year":2014,"Country":"China","Population":1385189.6680000001},{"Year":2013,"Country":"China","Population":1376100.308},{"Year":2012,"Country":"China","Population":1366560.818},{"Year":2011,"Country":"China","Population":1357095.4809999999},{"Year":2010,"Country":"China","Population":1348191.368},{"Year":2009,"Country":"China","Population":1339125.595},{"Year":2008,"Country":"China","Population":1330167.148},{"Year":2007,"Country":"China","Population":1321513.2239999999},{"Year":2006,"Country":"China","Population":1313086.567},{"Year":2005,"Country":"China","Population":1304887.5619999999},{"Year":2004,"Country":"China","Population":1296816.7109999999},{"Year":2003,"Country":"China","Population":1288873.3670000001},{"Year":2002,"Country":"China","Population":1280926.1200000001},{"Year":2001,"Country":"China","Population":1272739.5819999999},{"Year":2000,"Country":"China","Population":1264099.0689999999},{"Year":1999,"Country":"China","Population":1255433.236},{"Year":1998,"Country":"China","Population":1246836.105},{"Year":1997,"Country":"China","Population":1237801.4480000001},{"Year":1996,"Country":"China","Population":1228298.8359999999},{"Year":1995,"Country":"China","Population":1218144.426},{"Year":1994,"Country":"China","Population":1207286.675},{"Year":1993,"Country":"China","Population":1195855.558},{"Year":1992,"Country":"China","Population":1183813.389},{"Year":1991,"Country":"China","Population":1170626.1710000001},{"Year":1990,"Country":"China","Population":1153704.2520000001},{"Year":1989,"Country":"China","Population":1134414.723},{"Year":1988,"Country":"China","Population":1115889.8019999999},{"Year":1987,"Country":"China","Population":1096851.8430000001},{"Year":1986,"Country":"China","Population":1077770.523},{"Year":1985,"Country":"China","Population":1060239.9790000001},{"Year":1984,"Country":"China","Population":1044172.197},{"Year":1983,"Country":"China","Population":1029226.907},{"Year":1982,"Country":"China","Population":1013483.166},{"Year":1981,"Country":"China","Population":997259.502},{"Year":1980,"Country":"China","Population":982372.466},{"Year":1979,"Country":"China","Population":968298.969},{"Year":1978,"Country":"China","Population":955138.943},{"Year":1977,"Country":"China","Population":942581.333},{"Year":1976,"Country":"China","Population":929375.924},{"Year":1975,"Country":"China","Population":915124.661},{"Year":1974,"Country":"China","Population":899367.64},{"Year":1973,"Country":"China","Population":881652.08},{"Year":1972,"Country":"China","Population":862840.403},{"Year":1971,"Country":"China","Population":843285.424},{"Year":1970,"Country":"China","Population":822534.45},{"Year":2020,"Country":"Singapore","Population":5909.869},{"Year":2019,"Country":"Singapore","Population":5866.405},{"Year":2018,"Country":"Singapore","Population":5814.537},{"Year":2017,"Country":"Singapore","Population":5764.487},{"Year":2016,"Country":"Singapore","Population":5711.933},{"Year":2015,"Country":"Singapore","Population":5650.018},{"Year":2014,"Country":"Singapore","Population":5570.502},{"Year":2013,"Country":"Singapore","Population":5478.055},{"Year":2012,"Country":"Singapore","Population":5381.005},{"Year":2011,"Country":"Singapore","Population":5281.344},{"Year":2010,"Country":"Singapore","Population":5163.59},{"Year":2009,"Country":"Singapore","Population":5010.704},{"Year":2008,"Country":"Singapore","Population":4838.402},{"Year":2007,"Country":"Singapore","Population":4663.256},{"Year":2006,"Country":"Singapore","Population":4486.583},{"Year":2005,"Country":"Singapore","Population":4344.637},{"Year":2004,"Country":"Singapore","Population":4270.401},{"Year":2003,"Country":"Singapore","Population":4226.413},{"Year":2002,"Country":"Singapore","Population":4176.794},{"Year":2001,"Country":"Singapore","Population":4121.337},{"Year":2000,"Country":"Singapore","Population":4053.602},{"Year":1999,"Country":"Singapore","Population":3966.481},{"Year":1998,"Country":"Singapore","Population":3866.293},{"Year":1997,"Country":"Singapore","Population":3760.649},{"Year":1996,"Country":"Singapore","Population":3651.903},{"Year":1995,"Country":"Singapore","Population":3543.875},{"Year":1994,"Country":"Singapore","Population":3438.613},{"Year":1993,"Country":"Singapore","Population":3334.131},{"Year":1992,"Country":"Singapore","Population":3228.231},{"Year":1991,"Country":"Singapore","Population":3120.62},{"Year":1990,"Country":"Singapore","Population":3022.209},{"Year":1989,"Country":"Singapore","Population":2945.693},{"Year":1988,"Country":"Singapore","Population":2880.504},{"Year":1987,"Country":"Singapore","Population":2814.742},{"Year":1986,"Country":"Singapore","Population":2749.727},{"Year":1985,"Country":"Singapore","Population":2685.994},{"Year":1984,"Country":"Singapore","Population":2624.37},{"Year":1983,"Country":"Singapore","Population":2564.773},{"Year":1982,"Country":"Singapore","Population":2507.219},{"Year":1981,"Country":"Singapore","Population":2451.722},{"Year":1980,"Country":"Singapore","Population":2400.729},{"Year":1979,"Country":"Singapore","Population":2358.229},{"Year":1978,"Country":"Singapore","Population":2323.251},{"Year":1977,"Country":"Singapore","Population":2292.166},{"Year":1976,"Country":"Singapore","Population":2261.936},{"Year":1975,"Country":"Singapore","Population":2232.425},{"Year":1974,"Country":"Singapore","Population":2202.329},{"Year":1973,"Country":"Singapore","Population":2168.363},{"Year":1972,"Country":"Singapore","Population":2131.565},{"Year":1971,"Country":"Singapore","Population":2095.9},{"Year":1970,"Country":"Singapore","Population":2061.831}];

function createLineChart() {
    var marginLine = { top: 20, right: 20, bottom: 40, left: 60 };
    var widthLine = document.getElementById("line-chart").offsetWidth - marginLine.left - marginLine.right;
    var heightLine = 350 - marginLine.top - marginLine.bottom;

    var svgLine = d3.select("#line-chart")
        .html("") // Clear the existing chart
        .append("svg")
        .attr("width", widthLine + marginLine.left + marginLine.right)
        .attr("height", heightLine + marginLine.top + marginLine.bottom)
        .append("g")
        .attr("transform", "translate(" + marginLine.left + "," + marginLine.top + ")");

    var countriesData = d3.nest()
        .key(function(d) { return d.Country; })
        .entries(bubbleChartData);

    var xScaleLine = d3.scaleLinear()
        .domain([1970, 2020])
        .range([0, widthLine]);

    var yScaleLine = d3.scaleLinear()
        .domain([0, d3.max(bubbleChartData, function(d) { return d.Population; }) * 1.5])
        .range([heightLine, 0]);

    var line = d3.line()
        .x(function(d) { return xScaleLine(d.Year); })
        .y(function(d) { return yScaleLine(d.Population); });

    svgLine.selectAll(".line")
        .data(countriesData)
        .enter().append("path")
        .attr("class", "line")
        .style("fill", "none")  // Set fill to "none" to remove the area underneath the lines
        .attr("d", function(d) { return line(d.values); })
        .style("stroke", function(d) {
            // Set stroke color based on country
            if (d.key === "Japan") return "#E69F00";
            if (d.key === "Korea") return "#56B4E9";
            if (d.key === "Indonesia") return "#009E73";
            if (d.key === "China") return "#F0E442";
            if (d.key === "Singapore") return "#0072B2";
        });

    svgLine.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + heightLine + ")")
        .call(d3.axisBottom(xScaleLine).tickFormat(d3.format("d")));

    svgLine.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScaleLine).tickFormat(d3.format(".2s")));

    svgLine.append("text")
        .attr("class", "x-axis-title")
        .attr("x", widthLine / 2)
        .attr("y", heightLine + marginLine.bottom - 5)
        .style("text-anchor", "middle")
        .text("Year");

    svgLine.append("text")
        .attr("class", "y-axis-title")
        .attr("x", -heightLine / 2)
        .attr("y", -marginLine.left + 15)
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "middle")
        .text("Population");

    const legend = svgLine.append("g")
        .attr("transform", `translate(10, 10)`);

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "#E69F00");

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "#E69F00");

    legend.append("text")
        .attr("x", 30)
        .attr("y", 10)
        .text("Jpn");

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", 90)
        .attr("fill", "#56B4E9");

    legend.append("text")
        .attr("x", 120)
        .attr("y", 10)
        .text("Kor");

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("y", 30)
        .attr("fill", "#009E73");

    legend.append("text")
        .attr("x", 30)
        .attr("y", 40)
        .text("Ind");

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", 90)
        .attr("y", 30)
        .attr("fill", "#F0E442");

    legend.append("text")
        .attr("x", 120)
        .attr("y", 40)
        .text("Chn");

    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("y", 60)
        .attr("fill", "#0072B2");

    legend.append("text")
        .attr("x", 30)
        .attr("y", 70)
        .text("Sing");
}
