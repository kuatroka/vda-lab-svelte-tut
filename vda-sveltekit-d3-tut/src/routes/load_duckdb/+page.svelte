<!-- <script>
import * as duckdb from 'duckdb';

let db = new duckdb.Database(':memory:'); 

db.all('SELECT 42 AS fortytwo', function(err, res) {
if (err) {
    throw err;
    }
    console.log(res[0].fortytwo)
});

</script> -->

<script>
  export let data
// import duckdb from 'duckdb'
// const db = new duckdb.Database(':memory:');
// const conn = db.connect();
// const parquet_file = 'src/routes/load_duckdb/1762068-TICKER-2023-05-31.parquet'
// const query = `SELECT distinct(tr_id), SUM(value) as amount from read_parquet("${parquet_file}") group by tr_id`;

// export function executeQuery() {  
    
//   const result = conn.all(query, function (err, res){
//     if(err)
//       console.log(err)
//     else
//       console.log(res[0])
//       console.log(res.slice(0, 3))
//       return res; 
//     }); 
//     return { result }
//   };
//   $: values = executeQuery()
// export let result = conn.all(query, function (err, res){
//   if(err)
//     console.log(err)
//   else
//     // console.log(res[0])
//     console.log(res.slice(0, 3))
//     return res
//   });

// export let result
  //console.table(table.toArray())
  //console.log(typeof res) // object
  //console.log(res.toString())
</script>

<!-- <pre>
{JSON.stringify(data.entries, null, 2)}

</pre> -->
<h1>Transactions - Duckdb</h1>

{#each data.entries as entry}
 <ul>
  <li>{entry.tr_id} --- Value --- {entry.amount}</li>
 </ul>
  
{/each}