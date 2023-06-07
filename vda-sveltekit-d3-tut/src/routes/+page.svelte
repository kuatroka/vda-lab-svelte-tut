<!-- <pre>
{JSON.stringify(data, null, 2)}
</pre> -->

<script>
    
    export let data;
</script>

    <ul>
        {#each data.flowers as flower}
        <li>sepalLength: {flower.sepalLength}</li>
        <li>id:{flower.id} --- species:{flower.species}</li>
        {/each}
    </ul>
