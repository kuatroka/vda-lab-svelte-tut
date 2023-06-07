<script>
    import { scaleLinear, extent } from 'd3';
    import { onMount } from 'svelte';
    let datapoints = [];


    onMount(() => {
        fetch("https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json")
      .then(res => res.json())
      .then(data => datapoints = data)
    });



    $: console.log(datapoints)
    let margins = {"left": 30, "top": 30, "bottom": 30, "right": 30}
    
    $: xDomain = extent(datapoints, (d) => d.sepalLength)
    $: yDomain = extent(datapoints, (d) => d.sepalWidth)
    $: xScale = scaleLinear().domain(xDomain).range([margins.left,300-margins.right])
    $: yScale = scaleLinear().domain(yDomain).range([margins.top,300-margins.bottom])
    
    $: console.log(xDomain)
    $: xTicks = [4.5,5,5.5,6,6.5,7,7.5]
    $: yTicks = [2,2.5,3,3.5,4]
    </script>
    
    <style>
    svg { background-color: whitesmoke }
    circle { opacity: 0.5; }
    line { stroke: black; }
    text { font-size: 12px; }
    text.x { text-anchor: middle; }
    text.y { text-anchor: end; }
    </style>
    
    <svg width=300 height=300>
    {#each datapoints as datapoint}
      <circle cx={xScale(datapoint.sepalLength)} cy={yScale(datapoint.sepalWidth)} r=5 />
    {/each}
    
    <!-- x axis -->
    <line x1={margins.left} y1={300-margins.bottom} x2={300-margins.right} y2={300-margins.bottom} />
    {#each xTicks as tick}
      <line x1={xScale(tick)} y1={300-margins.bottom-3} x2={xScale(tick)} y2={300-margins.bottom+3} />
      <text class="x" alignment-baseline="hanging" x={xScale(tick)} y={300-margins.bottom+5}>{tick}</text>
    {/each}
    
    <!-- y axis -->
    <line x1={margins.left} y1={margins.top} x2={margins.left} y2={300-margins.bottom} />
    {#each yTicks as tick}
      <line x1={margins.left-3} y1={yScale(tick)} x2={margins.left+3} y2={yScale(tick)} />
      <text class="y" alignment-baseline="middle" x={margins.left-5} y={yScale(tick)}>{tick}</text>
    {/each}
    </svg>