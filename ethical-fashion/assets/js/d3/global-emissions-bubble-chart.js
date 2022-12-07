function main() {

    // Set the dimensions and margins of the graph
    const global_emission_margin = {top: 10, right: 150, bottom: 50, left: 50},
        global_emission_width = 550 - global_emission_margin.left - global_emission_margin.right,
        global_emission_height = 300 - global_emission_margin.top - global_emission_margin.bottom;

    // Append the svg object to the body of the page
    const svg = d3.select("#global_emissions_bubble_chart")
        .append("svg")
        .attr("width", global_emission_width + global_emission_margin.left + global_emission_margin.right)
        .attr("height", global_emission_height + global_emission_margin.top + global_emission_margin.bottom)
        .append("g")
        .attr("transform", `translate(${global_emission_margin.left},${global_emission_margin.top})`);

    // Read the data
    d3.csv("https://gist.githubusercontent.com/mt-cs/af63c6fa10b442d81bb042ca15cdc152/raw/fa14ef07afb339fb7bc58075822eeef7065a3d53/global-emissions-bubble.csv").then( function(data) {

        // Add X axis --> it is a date format
        const global_emission_x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d3.timeParse("%Y")(d.Year); }))
            .range([0, global_emission_width]);

        // Gridlines in X axis function
        function make_x_gridlines() {
            return d3.axisBottom(global_emission_x)
        }

        svg.append("g")
            .attr("transform", `translate(0, ${global_emission_height})`)
            .attr("class", "grid")
            .call(make_x_gridlines()
                .tickSize(-global_emission_height)
                .tickFormat("")
            )
        svg.append("g")
            .attr("transform", `translate(0, ${global_emission_height})`)
            .call(d3.axisBottom(global_emission_x))

        // Add Y axis
        const global_emission_y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.Emission * 1.1; })])
            .range([ global_emission_height, 0]);
        svg.append("g")
            .call(d3.axisLeft(global_emission_y));

        // Add a scale for bubble size
        const global_emission_z = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.Consumption * 0.75; })])
            .range([ 1, 20]);

        // Add tooltip
        const global_emission_div = d3.select("#global_emissions_bubble_chart")
            .append("global_emission_div")
            .style("opacity", 0)
            .attr("class", "global_emission_tooltip")
            .style("background-color", "#fcefdd")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px")
            .style("position", "absolute")

        const global_emission_mouseover = function(event, d) {
            global_emission_div.transition()
                .duration(200)
                .style("opacity", 0.8);

            global_emission_div.html(`<span style="text-transform:uppercase;font-weight:bold">${d.Year}</span>
                    <br>Consumption: ${d.Consumption} billion pieces
                    <br>C02 Emissions: ${d.Emission} megatons`)
                .style("left", (event.x))
                .style("top", (event.y))
        }

        const global_emission_mousemove = function(event, d) {
            global_emission_div.html(`<span style="text-transform:uppercase;font-weight:bold">${d.Year}</span>
                    <br>Consumption: ${d.Consumption} billion pieces
                    <br>C02 Emissions: ${d.Emission} megatons`)
                .style("left", (event.x))
                .style("top", (event.y))
        }

        const global_emission_mouseleave = function(event,d) {
            global_emission_div
                .transition()
                .duration(200)
                .style("opacity", 0)
        }

        // Add dots
        svg.append('g')
            .selectAll("dot")
            .data(data)
            .join("circle")
            .attr("cx", d => global_emission_x(d3.timeParse("%Y")(d.Year)))
            .attr("cy", d => global_emission_y(d.Emission))
            .attr("r", d => global_emission_z(d.Consumption))
            .style("fill", "#fb8072")
            .style("opacity", "0.7")
            .attr("stroke", "white")
            .on("mouseover", global_emission_mouseover)
            .on("mousemove", global_emission_mousemove)
            .on("mouseleave", global_emission_mouseleave)

        // Add legend: circles
        const valuesToShow = [100, 150, 200]
        const xCircle = 400
        const xLabel = 480
        const yCircle = 220
        svg
            .selectAll("legend")
            .data(valuesToShow)
            .join("circle")
            .attr("cx", xCircle)
            .attr("cy", d => yCircle - global_emission_z(d) * 6 / 5)
            .attr("r", d => global_emission_z(d) * 6 / 5)
            .style("fill", "none")
            .attr("stroke", "black")

        // Add legend: segments
        svg
            .selectAll("legend")
            .data(valuesToShow)
            .join("line")
            .attr('x1', d => xCircle + global_emission_z(d) * 6 / 5)
            .attr('x2', xLabel)
            .attr('y1', d => yCircle - global_emission_z(d) * 8 / 5)
            .attr('y2', d => yCircle - global_emission_z(d) * 8 / 5)
            .attr('stroke', 'black')
            .style('stroke-dasharray', ('2,2'))

        // Add legend: labels
        svg
            .selectAll("legend")
            .data(valuesToShow)
            .join("text")
            .attr('x', xLabel)
            .attr('y', d => yCircle - global_emission_z(d) * 8 / 5)
            .text( d => d)
            .style("font-size", 9)
            .attr('alignment-baseline', 'middle')

        // Legend title
        svg.append("text")
            .attr('x', xCircle + 30)
            .attr("y", global_emission_height - 10)
            .text("Consumption (in billion)")
            .attr("text-anchor", "middle")
            .style("font-size", 10)
            .style("fill", "#635f5d")

        // Table labels
        svg.append("text")
            .attr("fill", "black")
            .attr("x", "100")
            .attr("y", "-70")
            .attr("transform", "translate(30, 300) rotate(270)")
            .attr("font-family", "sans-serif")
            .style("font-size", "13px")
            .text("C02 Emissions (in megatons)");

        svg.append("text")
            .attr("fill", "black")
            .attr("x", global_emission_width / 2)
            .attr("y", 280)
            .attr("font-family", "sans-serif")
            .style("font-size", "13px")
            .text("Year");

    })
}

main();
