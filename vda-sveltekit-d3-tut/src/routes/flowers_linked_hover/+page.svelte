<script>
    import Papa from 'papaparse';
    import Scatterplot from '$lib/components/Scatterplot2.svelte'
    import { onMount } from 'svelte';
  
    let datapoints = []
    let selected_datapoint = undefined
  
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



</script>

<table>
<tr>
<td><Scatterplot bind:selected_datapoint={selected_datapoint}   
                    datapoints={datapoints}
                    x="sepal_length"
                    y="sepal_width" /></td>
<td><Scatterplot bind:selected_datapoint={selected_datapoint}
                    datapoints={datapoints}
                    x="petal_length"
                    y="petal_width" /></td>
</tr>
</table>