<script>
    import { scaleLinear } from 'd3-scale';
    import { extent } from 'd3-array';
    import Flower from '$lib/components/Flower.svelte'

    import Papa from 'papaparse';
    import { onMount } from 'svelte';

    let datapoints = []
    let selected_datapoint = undefined

    let x = "sepal_length"
    let y = "sepal_width"

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

    $: xScale = scaleLinear().domain(extent(datapoints.map((d) => { return d[x]}))).range([0,400])
    $: yScale = scaleLinear().domain(extent(datapoints.map((d) => { return d[y]}))).range([0,400])

    let mouse_x, mouse_y;
    const setMousePosition = (e) => {
        mouse_x = e.clientX;
        mouse_y = e.clientY;
    }
</script>
  
<style>
svg {
    background-color: whitesmoke;
    margin: 5px;
    padding: 20px;
}
circle {
    fill: steelblue;
    fill-opacity: 0.3;
}
circle.selected {
    fill: red;
    fill-opacity: 1;
}
#tooltip {
    position: fixed;
    background-color: white;
    padding: 3px;
    border: solid 1px;
}
svg.tooltip {
    margin: 0px;
    padding: 0px;
}
</style>
  
  <svg width=500 height=500>
{#each datapoints as datapoint}
    <circle cx={xScale(datapoint[x])} cy={yScale(datapoint[y])}
            r=5
            class:selected="{selected_datapoint && datapoint.id == selected_datapoint.id}"
            on:mouseover={function(event) {selected_datapoint = datapoint; setMousePosition(event)}}
            on:mouseout={function() {selected_datapoint = undefined}}>
    </circle>
{/each}
</svg>
  
  {#if selected_datapoint != undefined}
  <div id="tooltip" style="left: {mouse_x + 10}px; top: {mouse_y - 10}px">
  <svg class="tooltip" width=20 height=20>
    <g transform="translate(10,10)">
    <Flower datapoint={selected_datapoint} />
    </g>
  </svg><br/>
  Species: {selected_datapoint.species}
  </div>
  {/if}
  