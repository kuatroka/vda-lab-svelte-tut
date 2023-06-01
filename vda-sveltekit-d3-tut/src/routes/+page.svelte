<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/about">About my site</a> -->

<!-- <script>
    export let data;
</script>

{JSON.stringify(data)} -->

<script>
    export let data;
</script>

    <ul>
        {#each data.flowers as flower}
        <li>sepalLength: {flower.sepalLength}</li>
        {/each}
    </ul>
