
// define margin and svg size
const global_fashion_market_margin = { top: 10, bottom: 40, left: 30, right: 20 };
const global_fashion_market_width = 200;
const global_fashion_market_height = 180;

// global fashion market small multiples lines
d3.csv("https://gist.githubusercontent.com/mt-cs/b96f60535299afcbebf3085302d450ba/raw/718f67fb7af31c886e0f892ba3c0a522eb331c15/global-fashion-market.csv", function(d) {
    return {
        ethical : d["Ethical"],
        secondhand: d["Secondhand"],
        fast: d["Fast"],
        year: d["Year"]
    };
}).then(function(data) {
    const global_fashion_market_dimensions = ["ethical", "secondhand", "fast"]
    const global_fashion_market_years = []
    for (let i = 0; i < data.length; i++) {
        global_fashion_market_years.push(data[i].year);
    }

    // create x-scale
    const global_fashion_market_x = d3
        .scaleBand()
        .range([0, global_fashion_market_width])
        .domain(global_fashion_market_years)
        .padding(0.1)

    // create y-scale for each dimension
    const global_fashion_market_y = []
    for (let i = 0; i < global_fashion_market_dimensions.length; i++) {
        const dimension = global_fashion_market_dimensions[i];
        global_fashion_market_y.push(
            d3
                .scaleLinear()
                .range([global_fashion_market_height, 0])
                .domain([0, d3.max(data, d => d[dimension]) * 2.3])
        );
    }

    // create small multiples
    d3.select("#global-fashion-market-small-multiples")
        .selectAll("global-market-svg")
        .data(global_fashion_market_dimensions)
        .enter()
        .append("svg")
        .attr(
            "width",
            global_fashion_market_width +
            global_fashion_market_margin.left +
            global_fashion_market_margin.right
        )
        .attr(
            "height",
            global_fashion_market_height +
            global_fashion_market_margin.top +
            global_fashion_market_margin.bottom
        )
        .append("g")
        .attr("class", d => "global-fashion-market-" + d)
        .attr(
            "transform",
            "translate(" +
            global_fashion_market_margin.left +
            "," +
            global_fashion_market_margin.top +
            ")"
        );

    const global_fashion_market_colors = [
        "Turquoise","CornflowerBlue","Salmon"
    ]

    for (let i = 0; i < global_fashion_market_dimensions.length; i++) {
        const dimension = global_fashion_market_dimensions[i]

        // y-axis
        d3.select(".global-fashion-market-" + dimension)
            .append("g")
            .call(
                d3
                    .axisLeft(global_fashion_market_y[i])
                    .ticks(5)
                    .tickSize(2)
            );

        // x-axis
        d3.select(".global-fashion-market-" + dimension)
            .append("g")
            .attr("transform", "translate(0, " + global_fashion_market_height + ")")
            .call(
                d3
                    .axisBottom(global_fashion_market_x)
                    .ticks(5)
                    .tickSize(2)
            );

        // add line path
        d3.select(".global-fashion-market-" + dimension)
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", global_fashion_market_colors[i])
            .attr("stroke-width", 2)
            .attr(
                "d",
                d3
                    .line()
                    .x(
                        d =>
                            global_fashion_market_x(d.year) +
                            global_fashion_market_x.bandwidth() / 2
                    )
                    .y(d => global_fashion_market_y[i](d[dimension]))
            );

        // a tooltip div that is hidden by default
        const tooltip = d3.select("#global-fashion-market-small-multiples")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "black")
            .style("border-radius", "5px")
            .style("padding", "10px")
            .style("color", "white")

        const mouseover = function(event,d) {
            tooltip
                .style("opacity", .7)
        }
        const mousemove = function(event,d) {
            tooltip
                .html(`
                    <span style="text-transform:uppercase;font-weight:bold">${d.year}</span>
                    <br>$${d[dimension]} billion
                `)
                .style("left", `${event.layerX+10}px`)
                .style("top", `${event.layerY}px`)
        }
        const mouseleave = function(event,d) {
            tooltip
                .style("opacity", 0)
        }


        // add circles
        d3.select(".global-fashion-market-" + dimension)
            .selectAll("global-fashion-market-circle-" + dimension)
            .data(data)
            .enter()
            .append("circle")
            .attr("class", d => "global-fashion-market-circle-" + i)
            .attr(
                "cx",
                d =>
                    global_fashion_market_x(d.year) +
                    global_fashion_market_x.bandwidth() / 2
            )
            .attr("cy", d => global_fashion_market_y[i](d[dimension]))
            .attr("r", 4)
            .attr("fill", global_fashion_market_colors[i])
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

        // add labels
        d3.select(".global-fashion-market-" + dimension)
            .append("text")
            .attr("x", global_fashion_market_width / 2 - 20)
            .attr("y", global_fashion_market_height + 30)
            .text(d => {
                if (d === "ethical") {
                    return "Ethical Fashion";
                } else if (d === "secondhand") {
                    return "Secondhand Apparel"
                } else {
                    return "Fast Fashion";
                }
            })
            .attr("font-size", "10px")
    }
})