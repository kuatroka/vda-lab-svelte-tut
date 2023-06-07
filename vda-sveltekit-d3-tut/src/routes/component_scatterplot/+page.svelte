<!-- /////////////////////////////////////////////// -->
<!-- in case the data fetching happens directly from +page.svelte the code is below -->
<script>
    import Scatterplot from '$lib/components/Scatterplot.svelte';
    import { onMount } from "svelte";

    let datapoints_from_app = [];

    onMount(() => {
        fetch("https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json")
        .then(res => res.json())
        .then(data => datapoints_from_app = data.slice(0, 5000))
        // console.log(datapoints_from_app.slice(0, 2))
    });

</script>

<!-- <h1>Airports</h1>
<Scatterplot datapoints={datapoints_from_app}/> -->


<h1>Airports</h1>
<Scatterplot datapoints={datapoints_from_app} long="from_long" lat="from_lat" /> 
<Scatterplot datapoints={datapoints_from_app} long="to_long" lat="to_lat" />



<!-- /////////////////////////////////////////////// -->
<!-- in case the data fetching happens  from +page.js the code is below -->

<!-- <script>
    /** @type {import('../$types').PageLoad} */
    import Scatterplot from '$lib/components/Scatterplot.svelte';
    export let data

</script>

<h1>Airports</h1>
<Scatterplot datapoints={data.flights}/> -->




