// set the dimensions and margins of the graph
const parallel_margin = {top: 30, right: 10, bottom: 60, left: 50},
    parallel_width = 550 - parallel_margin.left - parallel_margin.right,
    parallel_height = 460 - parallel_margin.top - parallel_margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#global_emissions_parallel_coordinate")
    .append("svg")
    .attr("width", parallel_width + parallel_margin.left + parallel_margin.right)
    .attr("height", parallel_height + parallel_margin.top + parallel_margin.bottom)
    .append("g")
    .attr("transform",
        `translate(${parallel_margin.left},${parallel_margin.top})`);

// Annotation
const annotations = [
    {
        note: {
            label: "There is a drop in 2020 due to COVID-19 pandemic",
            title: "2020"
        },
        x: 370,
        y: 370,
        dy: 0,
        dx: 60
    }
]

const makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotations)

// Parse the Data
d3.csv("https://gist.githubusercontent.com/mt-cs/a0ab1582a2fefb5b6bbe383f9fc414a2/raw/21457b586b075701fc4461dfcbfcc10f51cf1d2c/consumption-emissions.csv").then( function(data) {

    // Extract the list of dimensions we want to keep in the plot. Here I keep all except the column called Species
    const parallel_dimensions = Object.keys(data[0]).filter(function(d) { return d != "Year" })

    // For each dimension, I build a linear scale. I store all in a y object
    const y = {}
    for (i in parallel_dimensions) {
        name = parallel_dimensions[i]
        y[name] = d3.scaleLinear()
            .domain( d3.extent(data, function(d) { return +d[name]; }) )
            .range([parallel_height, 0])
    }

    // Build the X scale -> it find the best position for each Y axis
    x = d3.scalePoint()
        .range([0, parallel_width])
        .padding(0.5)
        .domain(parallel_dimensions);

    // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
    function path(d) {
        return d3.line()(parallel_dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
    }

    // color palette
    const parallel_color = d3.scaleOrdinal()
        .range(d3.schemeTableau10);

    // Draw the lines
    svg
        .selectAll("myPath")
        .data(data)
        .join("path")
        .attr("d",  path)
        .style("fill", "none")
        .attr("stroke", function(d){ return parallel_color(d.Year) })
        .style("opacity", 0.9)

    // Draw the axis:
    svg.selectAll("myAxis")
        // For each dimension of the dataset I add a 'g' element:
        .data(parallel_dimensions).enter()
        .append("g")
        // I translate this element to its right position on the X axis
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
        // And I build the axis with the call function
        .each(function(d) { d3.select(this).call(d3.axisLeft().scale(y[d])); })
        // Add axis title
        .append("text")
        .style("text-anchor", "middle")
        .style("font-size","13px")
        .attr("y", -9)
        .text(function(d) { return d; })
        .style("fill", "black")

    // Add legend
    const parallel_ordinal = d3.scaleOrdinal()
        .domain(["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"])
        .range(d3.schemeTableau10);

    svg.append("g")
        .attr("class", "legendOrdinal")
        .attr("transform", "translate(400,30)");

    const parallel_legendOrdinal = d3.legendColor()
        .shape("path", d3.symbol().type(d3.symbolCircle).size(70)())
        .shapePadding(10)
        // use cellFilter to hide the "e" cell
        .cellFilter(function(d){ return d.label !== "e" })
        .scale(parallel_ordinal);

    svg.select(".legendOrdinal")
        .call(parallel_legendOrdinal);

    // Annotation
    svg.append("g")
    .attr("class", "annotation-group")
    .call(makeAnnotations)
})
