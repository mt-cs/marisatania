// set the dimensions and margins of the graph
const parallel_margin = {top: 30, right: 10, bottom: 10, left: 0},
    width = 500 - parallel_margin.left - parallel_margin.right,
    height = 400 - parallel_margin.top - parallel_margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#global_emissions_parallel_coordinate")
    .append("svg")
    .attr("width", width + parallel_margin.left + parallel_margin.right)
    .attr("height", height + parallel_margin.top + parallel_margin.bottom)
    .append("g")
    .attr("transform",
        `translate(${parallel_margin.left},${parallel_margin.top})`);

// Parse the Data
d3.csv("https://gist.githubusercontent.com/mt-cs/a0ab1582a2fefb5b6bbe383f9fc414a2/raw/21457b586b075701fc4461dfcbfcc10f51cf1d2c/consumption-emissions.csv").then( function(data) {

    // Extract the list of dimensions we want to keep in the plot. Here I keep all except the column called Species
    dimensions = Object.keys(data[0]).filter(function(d) { return d != "Year" })

    // For each dimension, I build a linear scale. I store all in a y object
    const y = {}
    for (i in dimensions) {
        name = dimensions[i]
        y[name] = d3.scaleLinear()
            .domain( d3.extent(data, function(d) { return +d[name]; }) )
            .range([height, 0])
    }

    // Build the X scale -> it find the best position for each Y axis
    x = d3.scalePoint()
        .range([0, width])
        .padding(1)
        .domain(dimensions);

    // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
    function path(d) {
        return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
    }

    // Draw the lines
    svg
        .selectAll("myPath")
        .data(data)
        .join("path")
        .attr("d",  path)
        .style("fill", "none")
        .attr("stroke", "salmon")
        .attr("stroke-width", 1.5)
        .style("opacity", 0.5)

    // Draw the axis:
    svg.selectAll("myAxis")
        // For each dimension of the dataset I add a 'g' element:
        .data(dimensions).enter()
        .append("g")
        // I translate this element to its right position on the x axis
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
        // And I build the axis with the call function
        .each(function(d) { d3.select(this).call(d3.axisLeft().scale(y[d])); })
        // Add axis title
        .append("text")
        .style("text-anchor", "middle")
        .style("font-size","11px")
        .attr("y", -9)
        .text(function(d) { return d; })
        .style("fill", "black")
})
