<script>
import { onMount } from 'svelte';
import vegaEmbed from 'vega-embed';
export let data

let amount = data.transactions.map((obj) => obj.amount)
let quarter = data.transactions.map((obj) => obj.quarter)


const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart with hardcoded data.",
    // "width": "10000%",
    "data": {
      "values": data.transactions
      // [
      //   {"quarter": "A", "amount": 10},
      //   {"quarter": "B", "amount": 20},
      //   {"quarter": "C", "amount": 30},
      // ]
    },
    "mark": "line",
    "encoding": {
      "x": {"field": "quarter", "type": "nominal"},
      "y": {"field": "amount", "type": "quantitative"}
    }
  };

  onMount(() => {
    vegaEmbed('#chart', spec);
  });
</script>


<div id="chart"></div>


<style>

  #chart {
    width: 100%;
    height: 100vh;
  }
</style>





