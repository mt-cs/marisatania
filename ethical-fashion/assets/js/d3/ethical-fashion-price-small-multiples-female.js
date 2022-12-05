// define margin and svg size
const price_small_multiples_female_margin = { top: 10, bottom: 10, left: 20, right: 10 }
const price_small_multiples_female_width = 500;
const price_small_multiples_female_height = 600;

const price_small_multiples_female_single_width = 220;
const price_small_multiples_female_single_height = 130;

const small_multiples_female_dimensions = ['Top','Tops','Bottom','Outerwear','Footwear'];

// female stats
d3.csv("https://gist.githubusercontent.com/mt-cs/0769e3b43e00311427476811832c7d31/raw/09046611c32fd719d1760fe3ef8c850d4d5ce13e/female-price.csv").then( function(data) {
    const small_multiples_female_y_scales = []
    for (let i = 0; i < small_multiples_female_dimensions.length; i++) {
        small_multiples_female_y_scales.push(
            d3
                .scaleLinear()
                .domain([0, +d3.max(data, d => +d[small_multiples_female_dimensions[i]])])
                .range([
                    (price_small_multiples_female_single_height / 4) * 3,
                    price_small_multiples_female_single_height / 4
                ])
        )
    }

    d3.select('#female-small-multiples')
        .selectAll('svg')
        .data(small_multiples_female_dimensions)
        .enter()
        .append('svg')
        .attr('width', price_small_multiples_female_single_width)
        .attr('height', price_small_multiples_female_single_height)
        .append('g')
        .attr('class', d => 'female-bar-' + d)
        .attr(
            'transform',
            'translate(' +
            price_small_multiples_female_margin.left +
            ',' +
            price_small_multiples_female_margin.top +
            ')'
        )

    for (let i = 0; i < small_multiples_female_dimensions.length; i++) {
        let female_dimension = small_multiples_female_dimensions[i]
        d3.select('.female-bar-' + female_dimension)
            .selectAll('female-bars-' + female_dimension)
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, c) => 60 * c + 10)
            .attr('y', d => small_multiples_female_y_scales[i](+d[female_dimension]))
            .attr('width', 45)
            .attr(
                'height',
                d =>
                    small_multiples_female_y_scales[i](0) -
                    small_multiples_female_y_scales[i](+d[female_dimension])
            )
            .attr('fill', (d, i) => {
                if (i === 0) {
                    return '#8dd3c7'
                }
                return '#fb8072'
            })

        d3.select('.female-bar-' + female_dimension)
            .selectAll('female-text-' + female_dimension)
            .data(data)
            .enter()
            .append('text')
            .attr('x', (d, c) => 60 * c + 23)
            .attr('y', d => small_multiples_female_y_scales[i](+d[female_dimension]) - 10)
            .attr('width', 45)
            .text(d => "$" + d[female_dimension])
            .attr('font-size', '12px')

        d3.select('.female-bar-' + female_dimension)
            .append('text')
            .attr('x', 40)
            .attr('y', price_small_multiples_female_single_height - 15)
            .text(female_dimension)
            .attr('font-size', '14px')
    }
})
