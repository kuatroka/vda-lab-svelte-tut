<script>
  let datapoints = [{x: 100, y: 100, value: 9},
                    {x: 150, y: 275, value: 11},
                    {x: 10, y: 101, value: 72},
                    {x: 80, y: 183, value: 2},
                    {x: 350, y: 45, value: 10},
                    {x: 201, y: 285, value: 109},
                    {x: 150, y: 306, value: 24},
                    {x: 90, y: 102, value: -4},
                    {x: 73, y: 39, value: 88},
                    {x: 332, y: 269, value: 8}]
</script>

<style>
    svg {
    background-color: whitesmoke;
}
circle {
    fill: steelblue;
}
rect {
    fill: red;
}
</style>


<svg width=400 height=400>
{#each datapoints as datapoint}
    {#if datapoint.value > 10}
    <circle cx={datapoint.x} cy={datapoint.y} r=10 />
    {:else}
    <rect x={datapoint.x} y={datapoint.y} width=10 height=10 />
    {/if}
{/each}
</svg>