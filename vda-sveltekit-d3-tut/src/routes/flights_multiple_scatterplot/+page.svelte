 <!-- `.range(["red","green"])` throws a type error,but still functions properly -->
 <!-- https://vda-lab.gitlab.io/datavis-technologies/_basic_data_visualisation_with_svelte.html#_data_subpages_and_slugs -->
<script>
    
    import { scaleLinear } from 'd3-scale'; 

    export let data

    const scaleX = scaleLinear().domain([-180,180]).range([0,800]); (2)
    const scaleY = scaleLinear().domain([-90,90]).range([400,0]); (2)
    const scaleColour = scaleLinear().domain([-180,180]).range(["red","green"]);
    const scaleRadius = scaleLinear().domain([1,15406]).range([2,10])
</script>

<style>
    svg {
    border: 1px;
    border-style: solid;
    }
    
circle {
    fill: steelblue;
    fill-opacity: 0.5;
}
circle.international {
    fill: red;
    }
</style>

<h2>Airport - From</h2>
<svg width="800" height="400">
{#each data.flights as datapoint}
    <circle cx={scaleX(datapoint.from_long)} 
            cy={scaleY(datapoint.from_lat)}            
            r={scaleRadius(datapoint.distance)}            
            class:international={datapoint.from_country != datapoint.to_country}/>
{/each}

</svg>

<h2>Airport - To</h2>
<svg width="800" height="400">
    {#each data.flights as datapoint}
        <circle cx={scaleX(datapoint.to_long)} 
                cy={scaleY(datapoint.to_lat)}            
                r={scaleRadius(datapoint.distance)}            
                class:international={datapoint.from_country != datapoint.to_country}/>
    {/each}
    
    </svg>

<!-- <pre>
{JSON.stringify(data, null, 2)}
</pre> -->