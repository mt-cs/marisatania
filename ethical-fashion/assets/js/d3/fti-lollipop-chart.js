// set the dimensions and margins of the graph
const fti_margin = {top: 10, right: 30, bottom: 40, left: 150},
    fti_width = 600 - fti_margin.left - fti_margin.right,
    fti_height = 670 - fti_margin.top - fti_margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#fti_lollipop_chart")
    .append("svg")
    .attr("width", fti_width + fti_margin.left + fti_margin.right)
    .attr("height", fti_height + fti_margin.top + fti_margin.bottom)
    .append("g")
    .attr("transform", `translate(${fti_margin.left}, ${fti_margin.top})`);

// Parse the Data
d3.csv("https://gist.githubusercontent.com/mt-cs/219b191cff5410314e52f0b842318410/raw/b507142e409cb37aaf70ddb6e0e01b0793b08103/fti-top-25.csv").then( function(data) {
    // Add X axis
    const x = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return d.Points * 1.1; })])
        .range([ 0, fti_width]);
    svg.append("g")
        .attr("transform", `translate(0, ${fti_height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleBand()
        .range([ 0, fti_height ])
        .domain(data.map(function(d) { return d.Brand; }))
        .padding(1);
    svg.append("g")
        .call(d3.axisLeft(y))


    // Lines
    svg.selectAll("myline")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", x(0))
        .attr("x2", x(0))
        .attr("y1", function(d) { return y(d.Brand); })
        .attr("y2", function(d) { return y(d.Brand); })
        .attr("stroke", "grey")

    // Circles
    svg.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", x(0))
        .attr("cy", function(d) { return y(d.Brand); })
        .attr("r", "4")
        .style("fill", "salmon")

    // Change the X coordinates of line and circle
    svg.selectAll("circle")
        .transition()
        .duration(2000)
        .attr("cx", function(d) { return x(d.Points); })

    svg.selectAll("line")
        .transition()
        .duration(2000)
        .attr("x1", function(d) { return x(d.Points); })
})
