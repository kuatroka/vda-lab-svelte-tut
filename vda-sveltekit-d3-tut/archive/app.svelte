<script>
    let individuals = [
    {"name":"Julia","gender":"F"},
    {"name":"John","gender":"M"},
    {"name":"Joe","gender":"M"},
    {"name":"Jane","gender":"F"}];
</script>

<ul>
    {#each individuals as individual}
        {#if individual.gender == "M"}
            <li>{individual.name} ({individual.gender})</li>
            {:else}
            <button>
                Log out
            </button>


            {/if}

    {/each}
</ul>