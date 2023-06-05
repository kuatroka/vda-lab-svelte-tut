<script>
    export let data;
</script>

    <ul>
        {#each data.array as ar}

        <li>{ar}</li>
        {/each}
    </ul>

