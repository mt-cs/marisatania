// define margin and svg size
const price_small_multiples_margin = { top: 10, bottom: 10, left: 50, right: 10 }
const price_small_multiples_width = 500
const price_small_multiples_height = 600

const price_small_multiples_single_width = 220
const price_small_multiples_single_height = 130

const small_multiples_dimensions = ['Tops','Bottom','Outerwear','Footwear'];

// male stats
d3.csv("https://gist.githubusercontent.com/mt-cs/7a7a015f377f35babfc698386dc2ec65/raw/e1d3b06b477815e502671ee32b4aa6fdbc7096d4/male-price.csv").then( function(data) {
    const small_multiples_y_scales = []
    for (let i = 0; i < small_multiples_dimensions.length; i++) {
        small_multiples_y_scales.push(
            d3
                .scaleLinear()
                .domain([0, +d3.max(data, d => +d[small_multiples_dimensions[i]])])
                .range([
                    (price_small_multiples_single_height / 4) * 3,
                    price_small_multiples_single_height / 4
                ])
        )
    }

    d3.select('#male-small-multiples')
        .selectAll('svg')
        .data(small_multiples_dimensions)
        .enter()
        .append('svg')
        .attr('width', price_small_multiples_single_width)
        .attr('height', price_small_multiples_single_height)
        .append('g')
        .attr('class', d => 'male-bar-' + d)
        .attr(
            'transform',
            'translate(' +
            price_small_multiples_margin.left +
            ',' +
            price_small_multiples_margin.top +
            ')'
        )

    for (let i = 0; i < small_multiples_dimensions.length; i++) {
        let dimension = small_multiples_dimensions[i]
        d3.select('.male-bar-' + dimension)
            .selectAll('male-bars-' + dimension)
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, c) => 60 * c + 10)
            .attr('y', d => small_multiples_y_scales[i](+d[dimension]))
            .attr('width', 45)
            .attr(
                'height',
                d =>
                    small_multiples_y_scales[i](0) -
                    small_multiples_y_scales[i](+d[dimension])
            )
            .attr('fill', (d, i) => {
                if (i === 0) {
                    return 'turquoise'
                }
                return 'salmon'
            })

        d3.select('.male-bar-' + dimension)
            .selectAll('male-text-' + dimension)
            .data(data)
            .enter()
            .append('text')
            .attr('x', (d, c) => 60 * c + 23)
            .attr('y', d => small_multiples_y_scales[i](+d[dimension]) - 10)
            .attr('width', 45)
            .text(d => d[dimension])
            .attr('font-size', '12px')

        d3.select('.male-bar-' + dimension)
            .append('text')
            .attr('x', 50)
            .attr('y', price_small_multiples_single_height - 15)
            .text(dimension)
            .attr('font-size', '14px')
    }

    // legends
    const male_small_multiples_legends = d3
        .select('#male-small-multiples-legends')
        .append('svg')
        .attr(
            'width',
            price_small_multiples_width +
            price_small_multiples_margin.left +
            price_small_multiples_margin.right
        )
        .attr('height', 30)
        .append('g')
        .attr(
            'transform',
            'translate(' + price_small_multiples_width / 3 + ',' + 0 + ')'
        )

    male_small_multiples_legends
        .append('rect')
        .attr('x', 10)
        .attr('y', 10)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', 'turquoise')

    male_small_multiples_legends
        .append('text')
        .attr('x', 40)
        .attr('y', 23)
        .text('Eco Clothing')

    male_small_multiples_legends
        .append('rect')
        .attr('x', 130)
        .attr('y', 10)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', 'salmon')

    male_small_multiples_legends
        .append('text')
        .attr('x', 160)
        .attr('y', 23)
        .text('Average Market')
})

// female stats
d3.csv("https://gist.githubusercontent.com/mt-cs/0769e3b43e00311427476811832c7d31/raw/eff45f007c8847b0dd8e6d4b853412c5fc36f060/female-price.csv").then( function(data) {
    
    const small_multiples_y_scales = []
    for (let i = 0; i < small_multiples_dimensions.length; i++) {
        small_multiples_y_scales.push(
            d3
                .scaleLinear()
                .domain([0, +d3.max(data, d => +d[small_multiples_dimensions[i]])])
                .range([
                    (price_small_multiples_single_height / 4) * 3,
                    price_small_multiples_single_height / 4
                ])
        )
    }

    d3.select('#female-small-multiples')
        .selectAll('svg')
        .data(small_multiples_dimensions)
        .enter()
        .append('svg')
        .attr('width', price_small_multiples_single_width)
        .attr('height', price_small_multiples_single_height)
        .append('g')
        .attr('class', d => 'female-bar-' + d)
        .attr(
            'transform',
            'translate(' +
            price_small_multiples_margin.left +
            ',' +
            price_small_multiples_margin.top +
            ')'
        )

    for (let i = 0; i < small_multiples_dimensions.length; i++) {
        let dimension = small_multiples_dimensions[i]
        d3.select('.female-bar-' + dimension)
            .selectAll('female-bars-' + dimension)
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, c) => 60 * c + 10)
            .attr('y', d => small_multiples_y_scales[i](+d[dimension]))
            .attr('width', 45)
            .attr(
                'height',
                d =>
                    small_multiples_y_scales[i](0) -
                    small_multiples_y_scales[i](+d[dimension])
            )
            .attr('fill', (d, i) => {
                if (i === 0) {
                    return 'turquoise'
                }
                return 'salmon'
            })

        d3.select('.female-bar-' + dimension)
            .selectAll('female-text-' + dimension)
            .data(data)
            .enter()
            .append('text')
            .attr('x', (d, c) => 60 * c + 23)
            .attr('y', d => small_multiples_y_scales[i](+d[dimension]) - 10)
            .attr('width', 45)
            .text(d => d[dimension])
            .attr('font-size', '12px')

        d3.select('.female-bar-' + dimension)
            .append('text')
            .attr('x', 50)
            .attr('y', price_small_multiples_single_height - 15)
            .text(dimension)
            .attr('font-size', '14px')
    }

    // legends
    const female_small_multiples_legends = d3
        .select('#female-small-multiples-legends')
        .append('svg')
        .attr(
            'width',
            price_small_multiples_width +
            price_small_multiples_margin.left +
            price_small_multiples_margin.right
        )
        .attr('height', 30)
        .append('g')
        .attr(
            'transform',
            'translate(' + price_small_multiples_width / 3 + ',' + 0 + ')'
        )

    female_small_multiples_legends
        .append('rect')
        .attr('x', 10)
        .attr('y', 10)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', 'turquoise')

    female_small_multiples_legends
        .append('text')
        .attr('x', 40)
        .attr('y', 23)
        .text('Eco Clothing')

    female_small_multiples_legends
        .append('rect')
        .attr('x', 150)
        .attr('y', 10)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill','salmon')

    female_small_multiples_legends
        .append('text')
        .attr('x', 180)
        .attr('y', 23)
        .text('Average Market')
})