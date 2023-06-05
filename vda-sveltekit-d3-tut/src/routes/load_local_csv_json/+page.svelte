<script>
    export let data;
</script>

    <ul>
        {#each data.airports_json as airport_json}
        <li>airport name: {airport_json.name}</li>
        
        {/each}
    </ul>

    <ul>
        {#each data.airports_csv as airport_csv}
        <li>airport city: {airport_csv.city}</li>
        {/each}
    </ul>

