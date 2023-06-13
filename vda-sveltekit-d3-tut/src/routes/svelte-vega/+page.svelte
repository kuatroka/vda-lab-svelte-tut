<script>
    import createChart  from 'vega-embed';
    import { onMount } from 'svelte';

  const data = [
    { category: 'A', value: 28 },
    { category: 'B', value: 55 },
    { category: 'C', value: 43 },
    { category: 'D', value: 91 },
    { category: 'E', value: 81 },
    { category: 'F', value: 53 },
    { category: 'G', value: 19 },
    { category: 'H', value: 87 },
    { category: 'I', value: 52 }
  ];

  let chart;

  onMount(async () => {
    chart = await createChart(
      '#chart',
      {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        data: {
          values: data
        },
      //   config: {
		  //   view: {
		  //     height: 400,
		  //     width: 550
		  //   }
		  // },
        "width": "container",
        "height": "container",
        mark: 'bar',
        encoding: {
          x: {
            field: 'category',
            type: 'nominal'
          },
          y: {
            field: 'value',
            type: 'quantitative'
          }
        }
      },
      
      { actions: false }
      
    );
    

  });


</script>

<style>
    /* #chart { width: 500px; height: 200px; } */
    .bar-chart { width: 100%; height: 300px; }
</style>    

<div style="float: centre;">
    <h3>Bar Chart</h3>
    <div class='bar-chart' id='chart'></div>
</div>  


