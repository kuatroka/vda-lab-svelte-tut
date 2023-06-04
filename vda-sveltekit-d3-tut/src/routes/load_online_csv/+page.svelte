<script>
    export let data;
</script>

    <ul>
        {#each data.flights as flight}

        <li>{flight.from_airport} to: {flight.to_airport} --- {flight.distance} km</li>
        {/each}
    </ul>