<script>
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

export let datapoints = []
export let x;
export let y;

export let selected_datapoint = undefined;

$: xScale = scaleLinear().domain(extent(datapoints.map((d) => { return d[x]}))).range([0,400])
$: yScale = scaleLinear().domain(extent(datapoints.map((d) => { return d[y]}))).range([0,400])
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
</style>
  
<p>{x} by {y}</p>
<svg width=400 height=400>
    {#each datapoints as datapoint}
        <circle cx={xScale(datapoint[x])} cy={yScale(datapoint[y])}
                r=5
                class:selected="{selected_datapoint && datapoint.id == selected_datapoint.id}"
                on:mouseover={function() {selected_datapoint = datapoint}}
                on:mouseout={function() {selected_datapoint = undefined}}/>
    {/each}
</svg>
  