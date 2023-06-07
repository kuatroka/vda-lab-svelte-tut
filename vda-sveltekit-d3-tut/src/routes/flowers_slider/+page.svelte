<script>
    import { onMount } from "svelte";
    import Papa from 'papaparse';
    import Flower from '$lib/components/Flower.svelte';
    let datapoints = [];


onMount(() => {
    Papa.parse("https://vda-lab.github.io/assets/iris.csv", {
        header: true,
        download: true,
        complete: function(results) {
            datapoints = results.data
        }
    })
    });
    let slider_value = 20;
    $: get_xy = function(idx) {
        let y = 25 + (Math.floor(idx / slider_value) * 50)
        let x = 25 + ((idx % slider_value) * 50)
        return [x,y]
    }

    $: console.log(datapoints)                                        
</script>

<input type="range" min="10" max="20" bind:value={slider_value} /><br/> (4)
<svg width=1000 height=1000>
    {#each datapoints as datapoint,idx}
        <g transform="translate({get_xy(idx)[0]}, {get_xy(idx)[1]})">
            <Flower datapoint={datapoint} />
        </g>
    {/each}
</svg>
{console.log(datapoints)}
