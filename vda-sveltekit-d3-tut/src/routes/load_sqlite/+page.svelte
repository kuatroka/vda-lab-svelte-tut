<!-- this file throws an error,but all works fine -->
<script>
    export let data
</script>

<h1>Employees</h1>

<ul>
{#each data.employees as employee}
    <li>{employee.FirstName} {employee.Title} - {employee.Phone}</li>
{/each}
</ul>

<h1>Artists</h1>

<ul>
{#each data.artists as artist}
    <li>{artist.Name}</li>
{/each}
</ul>
