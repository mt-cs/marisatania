// Resources: https://d3-graph-gallery.com/graph/scatter_tooltip.html

function main() {
    const margin = {top: 20, right: 30, bottom: 50, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#global_emissions_scatterplot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            `translate(${margin.left}, ${margin.top})`);

    //Read the data
    d3.csv("https://gist.githubusercontent.com/mt-cs/89d001bcf619ef775dc1597bf6f17887/raw/a3df9c34b8993c3f9d2d41954749820b1273a742/global-emissions.csv").then( function(data) {

        // X axis
        const x = d3.scaleLinear()
            .domain([0, 0])
            .range([0, width]);
        svg.append("g")
            .attr("class", "global-emissions-x-axis")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        // Y axis
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.Emissions * 1.1; })])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        let staticColor = "salmon";

        const div = d3.select("#global_emissions_scatterplot")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "black")
            .style("border-radius", "5px")
            .style("padding", "10px")
            .style("color", "white")

        const mouseover = function(event, d) {
            div.transition()
                .duration(200)
                .style("opacity", 0.8);

            div.html(`<span style="text-transform:uppercase;font-weight:bold">${d.Year}</span>
                    <br>Consumption: ${d.Consumption} billion pieces
                    <br>C02 Emissions: ${d.Emissions} megatons`)
                .style("left", (event.x) / 2 + "px")
                .style("top", (event.y) / 2 + "px")
        }

        const mousemove = function(event, d) {
            div.html(`<span style="text-transform:uppercase;font-weight:bold">${d.Year}</span>
                    <br>Consumption: ${d.Consumption} billion pieces
                    <br>C02 Emissions: ${d.Emissions} megatons`)
                .style("left", (event.x) / 2 + "px")
                .style("top", (event.y) / 2 + "px")
        }

        const mouseleave = function(event,d) {
            div
                .transition()
                .duration(200)
                .style("opacity", 0)
        }

        // Plot dots
        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return x(d.Consumption); })
            .attr("cy", function (d) { return y(d.Emissions); })
            .attr("r", 7)
            .style("fill", staticColor)
            .style("opacity", 0.8)
            .style("stroke", "white")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)

        // New X-axis
        x.domain([0, d3.max(data, function(d) { return +d.Consumption * 1.1; })])
        svg.select(".global-emissions-x-axis")
            .transition()
            .duration(2000)
            .attr("opacity", "1")
            .call(d3.axisBottom(x));
        svg.selectAll("circle")
            .transition()
            .delay(function(d,i){return(i*3)})
            .duration(2000)
            .attr("cx", function (d) { return x(d.Consumption); } )
            .attr("cy", function (d) { return y(d.Emissions); } )

        // Labels
        svg.append("text")
            .attr("fill", "black")
            .attr("x", "80")
            .attr("y", "-70")
            .attr("transform", "translate(30, 300) rotate(270)")
            .attr("font-family", "sans-serif")
            .style("font-size", "12px")
            .text("C02 Emissions (in megatons)");

        svg.append("text")
            .attr("fill", "black")
            .attr("x", width / 3)
            .attr("y", 375)
            .attr("font-family", "sans-serif")
            .style("font-size", "12px")
            .text("Consumption (in billion pieces)");
    })
}

main()