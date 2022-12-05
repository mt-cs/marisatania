// define margin and svg size
const global_fashion_market_legend_margin = { top: 0, bottom: 10, left: 0, right: 10 }
const global_fashion_market_legend_width = 900;
const global_fashion_market_legend_height = 100;


// legends
const global_fashion_market_legend = d3
    .select('#global-fashion-market-legend')
    .append('svg')
    .attr(
        'width',
        global_fashion_market_legend_width +
        global_fashion_market_legend_margin.left +
        global_fashion_market_legend_margin.right
    )
    .attr('height', 30)
    .append('g')
    .attr(
        'transform',
        'translate(' + global_fashion_market_legend_width / 3 + ',' + 0 + ')'
    )

global_fashion_market_legend 
    .append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#8dd3c7')

global_fashion_market_legend 
    .append('text')
    .attr('x', 40)
    .attr('y', 23)
    .text('Ethical Fashion')

global_fashion_market_legend 
    .append('rect')
    .attr('x', 170)
    .attr('y', 10)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#80b1d3')

global_fashion_market_legend 
    .append('text')
    .attr('x', 190)
    .attr('y', 23)
    .text('Secondhand Apparel')

global_fashion_market_legend 
    .append('rect')
    .attr('x', 350)
    .attr('y', 10)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#fb8072')

global_fashion_market_legend 
    .append('text')
    .attr('x', 370)
    .attr('y', 23)
    .text('Fast Fashion')
    