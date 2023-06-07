
<script>
    import { scaleLinear } from 'd3-scale';
    import Papa from 'papaparse';
    import { onMount } from 'svelte';
    import { extent } from 'd3-array'

    let w = 400;
    let h = 400;

    let datapoints = []
    onMount(() => {
        Papa.parse("https://vda-lab.github.io/assets/iris.csv", {
            header: true,
            download: true,
            complete: function(results) {
                let counter = 0
                datapoints = results.data.slice(0,-1)
                datapoints.map((d) => d.sepal_length = +d.sepal_length)
                datapoints.map((d) => d.sepal_width = +d.sepal_width)
                datapoints.map((d) => d.petal_length = +d.petal_length)
                datapoints.map((d) => d.petal_width = +d.petal_width)
                datapoints.forEach((d) => {
                    d["id"] = counter
                    counter++;
                })
            }
        })
    })

    // slScale: sepal_length, swScale: sepal_width, plScale: petal_length
    $: slScale = scaleLinear().domain(extent(datapoints.map((d) => { return d.sepal_length}))).range([5,w-5])
    $: swScale = scaleLinear().domain(extent(datapoints.map((d) => { return d.sepal_width}))).range([h-5,5])
    $: plScale = scaleLinear().domain(extent(datapoints.map((d) => { return d.petal_length}))).range([h-5,5])

    let selectedDatapoints = [];
    // $: console.log(datapoints.filter((d) => { return selectedDatapoints.includes(d.id) }))

    let dragging = false;
    let startX = 0; let startY = 0;
    let startDataX = 0; let startDataY = 0;
    let brushWidth = 0; let brushHeight = 0;
    let mouseX = 0; let mouseY = 0;
    let mouseDataX = 0; let mouseDataY = 0;

    const startBrush = (e) => {
        startX = e.offsetX;
        startY = e.offsetY;

        startDataX = slScale.invert(startX)
        startDataY = swScale.invert(startY)
        mouseX = startX;
        mouseY = startY;
        dragging = true;
    };
    const updateBrush = (e) => {
        mouseX = e.offsetX;
        mouseY = e.offsetY;

        mouseDataX = slScale.invert(mouseX)
        mouseDataY = swScale.invert(mouseY)

        brushWidth = mouseX - startX;
        brushHeight = mouseY - startY;
        if (brushWidth < 0) { brushWidth = -brushWidth; }
        if (brushHeight < 0) { brushHeight = -brushHeight; }
    };

    const getBrushedDatapoints = () => {
        selectedDatapoints = datapoints
            .filter((d) => {
                return (
                    Math.min(startDataX, mouseDataX) < d.sepal_length && d.sepal_length < Math.max(startDataX, mouseDataX) &&
                    Math.min(startDataY, mouseDataY) < d.sepal_width && d.sepal_width < Math.max(startDataY, mouseDataY)
                )})
            .map((d) => d.id);
    };
</script>

<svg width={w*2} height={h}
    on:mousedown={(e) => { startBrush(e); }}
    on:mousemove={(e) => { if (dragging) { updateBrush(e); getBrushedDatapoints(); } }}
    on:mouseup={() => { dragging = false; }}
    on:dblclick={() => { brushWidth = 0; brushHeight = 0; }}
>
    <rect class="brush" x={Math.min(startX, mouseX)} y={Math.min(startY, mouseY)}
                        width={brushWidth} height={brushHeight} />
    <g>
    {#each datapoints as datapoint}
        <circle cx={slScale(datapoint.sepal_length)} cy={swScale(datapoint.sepal_width)} r="5"
            class:selected={selectedDatapoints.includes(datapoint.id)} />
    {/each}
    </g>

    <line x1={w} x2={w} y1=0 y2={h} />

    <g class="plot" transform="translate({w},0)">
    {#each datapoints as datapoint}
        <circle cx={slScale(datapoint.sepal_length)} cy={plScale(datapoint.petal_length)} r="5"
            class:selected={selectedDatapoints.includes(datapoint.id)} />
    {/each}
    </g>
</svg>

<style>
    line { stroke: black}
    circle { fill: steelblue; }
    circle.selected { fill: red; }
    rect.brush { fill: black; fill-opacity: 0.3; }
</style>