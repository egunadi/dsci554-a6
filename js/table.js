// Create the table
function createTable() {
    var tableData = 
        [{"Attrib":"population_count","Year":151.0,"Japan":151.0,"Korea":151.0,"Indonesia":151.0,"China":151.0,"Singapore":151.0},{"Attrib":"population_mean","Year":2025.0,"Japan":105279.5585364239,"Korea":39395.6163443709,"Indonesia":241119.4448476822,"China":1100453.0504569535,"Singapore":4638.9389139073},{"Attrib":"population_std","Year":43.7340447097,"Japan":17333.8903876381,"Korea":9600.5433699364,"Indonesia":83581.8043003256,"China":258957.4247522522,"Singapore":1780.9912879681},{"Attrib":"population_min","Year":1950.0,"Japan":73644.064,"Korea":20104.01,"Indonesia":69567.619,"China":543979.233,"Singapore":1006.701},{"Attrib":"population_25%","Year":1987.5,"Japan":90345.8875,"Korea":31107.96,"Indonesia":174058.0185,"China":897163.946,"Singapore":2847.623},{"Attrib":"population_50%","Year":2025.0,"Japan":106674.353,"Korea":40877.006,"Indonesia":282004.306,"China":1144050.9169999999,"Singapore":5557.491},{"Attrib":"population_75%","Year":2062.5,"Japan":122114.6465,"Korea":48065.974,"Indonesia":312299.3925,"China":1337694.2515,"Singapore":6087.408},{"Attrib":"population_max","Year":2100.0,"Japan":128117.042,"Korea":51844.69,"Indonesia":319421.205,"China":1425893.4650000001,"Singapore":6409.441},{"Attrib":"gdp_count","Year":52.0,"Japan":52.0,"Korea":52.0,"Indonesia":52.0,"China":52.0,"Singapore":52.0},{"Attrib":"gdp_mean","Year":1995.5,"Japan":413399545733801.9375,"Korea":666082634615384.625,"Indonesia":3520078708044487.0,"China":22394941923076.921875,"Singapore":173421600000.0},{"Attrib":"gdp_std","Year":15.1547572289,"Japan":155536388068634.03125,"Korea":667730306277683.625,"Indonesia":5119500244754702.0,"China":32029974234146.58984375,"Singapore":164267968190.3059692383},{"Attrib":"gdp_min","Year":1970.0,"Japan":76539307651500.0,"Korea":2796600000000.0,"Indonesia":3787866716312.0,"China":227970000000.0,"Singapore":5879300000.0},{"Attrib":"gdp_25%","Year":1982.75,"Japan":292123425000000.0,"Korea":65381725000000.0,"Indonesia":86374883827147.5,"China":585902500000.0,"Singapore":37038800000.0},{"Attrib":"gdp_50%","Year":1995.5,"Japan":498961800000000.0,"Korea":463919850000000.0,"Indonesia":577351370960068.0,"China":6657675000000.0,"Singapore":130120250000.0},{"Attrib":"gdp_75%","Year":2008.25,"Japan":533179250000000.0,"Korea":1166999300000000.0,"Indonesia":5444017318552712.0,"China":32656325000000.0,"Singapore":276054825000.0},{"Attrib":"gdp_max","Year":2021.0,"Japan":558491200000000.0,"Korea":2071658000000000.0,"Indonesia":1.69707892e+16,"China":114366970000000.0,"Singapore":533351900000.0}];

    // Select the table container
    var tableContainer = d3.select("#table-container");

    // Create the table structure
    var table = tableContainer.append("table").attr("class", "table table-striped table-custom");
    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // Append table header
    thead.append("tr")
        .selectAll("th")
        .data(["Attrib", "Year", "Japan", "Korea", "Indonesia", "China", "Singapore"])
        .enter()
        .append("th")
        .text(function (column) { return column; });

    // Append table rows with data
    var rows = tbody.selectAll("tr")
        .data(tableData)
        .enter()
        .append("tr");

    // Append data cells within rows
    var cells = rows.selectAll("td")
        .data(function (row) {
            return ["Attrib", "Year", "Japan", "Korea", "Indonesia", "China", "Singapore"].map(function (column) {
                return { column: column, value: row[column] };
            });
        })
        .enter()
        .append("td")
        .text(function (d) { return d.value; });
}
