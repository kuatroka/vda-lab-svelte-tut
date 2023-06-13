<script>
  import { Chart } from 'svelte-echarts'
  export let data

  // const age1 = Math.max(...data.map(d => d.age));
  let amount = data.transactions.map((obj => obj.amount))
  let quarter = data.transactions.map((obj => obj.quarter))
  let rdate = data.transactions.map((obj => obj.rdate))
  let tr_id = data.transactions.map((obj => obj.tr_id))

  const options = {
    title: {
    text: "Main Title",
    subtext: "Sub Title",
    left: "center",
    top: "center",
    textStyle: {
      fontSize: 30
    },
    subtextStyle: {
      fontSize: 10
    }
  },
  legend: {},
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        }
    ],
    xAxis: {
      data: rdate,
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: amount,
        type: 'line',
      },
    ],
  }

  const options2 = {
    xAxis: {
      data: tr_id,
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: amount,
        type: 'bar',
      },
    ],
  }
</script>
<!-- <pre>
  {data.transactions.map((obj) => obj.tr_id)}
</pre> -->


<div class="app">
  <Chart {options} />
</div>

<div class="app">
  <Chart options={options2} />
</div>

<style>
  .app {
    width: 100vw;
    height: 50vh;
  }
</style>