<script>
    export let data;
</script>

<!-- if i want to be able to use the for loop , then in '+page.js' I need to remove the [0] -->
    <!-- <ul>
        {#each data.flowers as flower}
        <li>sepalLength: {flower.sepalLength}</li>
        <li>id:{flower.id} --- species:{flower.species}</li>
        {/each}
    </ul> -->
    <h1>ID: {data.flowers.species}</h1>
    <p>id : {data.flowers.id}</p>
    <p>Sepal Length: {data.flowers.sepalLength}</p>
