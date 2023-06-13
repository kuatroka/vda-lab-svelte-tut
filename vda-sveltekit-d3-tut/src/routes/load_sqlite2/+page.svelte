<!-- this file throws an error,but all works fine -->
<script>
    export let data
</script>

<h1>Transactions - SQLite</h1>

{#each data.transactions as tr}
 <ul>
  <li>{tr.tr_id} --- Value --- {tr.amount}</li>
 </ul>
  
{/each}


