// define margin and svg size
const price_legend_margin = { top: 0, bottom: 10, left: 0, right: 10 }
const price_legend_width = 700
const price_legend_height = 100

// legends
const price_legend = d3
    .select('#small-multiples-price-legend')
    .append('svg')
    .attr(
        'width',
        price_legend_width +
        price_legend_margin.left +
        price_legend_margin.right
    )
    .attr('height', 30)
    .append('g')
    .attr(
        'transform',
        'translate(' + price_legend_width / 3 + ',' + 0 + ')'
    )

price_legend 
    .append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#8dd3c7')

price_legend 
    .append('text')
    .attr('x', 40)
    .attr('y', 23)
    .text('Eco Clothing')

price_legend 
    .append('rect')
    .attr('x', 130)
    .attr('y', 10)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#fb8072')

price_legend 
    .append('text')
    .attr('x', 160)
    .attr('y', 23)
    .text('Average Market')
    