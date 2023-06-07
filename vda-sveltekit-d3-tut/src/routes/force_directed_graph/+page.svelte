<script>
    import { onMount } from 'svelte';
    import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force'
  
    let nodes = [
      {"id": 1,"name": "A"}, {"id": 2,"name": "B"},
      {"id": 3,"name": "C"}, {"id": 4,"name": "D"},
      {"id": 5,"name": "E"}, {"id": 6,"name": "F"},
      {"id": 7,"name": "G"}, {"id": 8,"name": "H"},
      {"id": 9,"name": "I"}, {"id": 10,"name": "J"}
    ]
    let links = [
      {"source": 1,"target": 2}, {"source": 1,"target": 5},
      {"source": 2,"target": 6}, {"source": 2,"target": 4},
      {"source": 2,"target": 7}, {"source": 3,"target": 4},
      {"source": 8,"target": 3}, {"source": 4,"target": 5},
      {"source": 4,"target": 9}, {"source": 5,"target": 10}
    ]
  
    let draggedNode = null;
    let simulation;
  
    function dragNode(event) {
      if ( draggedNode ) {
        draggedNode.x = event.offsetX;
        draggedNode.y = event.offsetY;
        draggedNode.cx = draggedNode.x
        draggedNode.cy = draggedNode.y
        ticked()
      }
    }
  
    onMount(runSimulation);
  
    function ticked() {
        nodes = nodes
        links = links
    }
  
    function runSimulation() {
        simulation = forceSimulation(nodes)
            .force("link", forceLink(links).id(d => d.id))
            .force("charge", forceManyBody().strength(-50))
            .force("center", forceCenter(200,200))
            .on('tick', ticked)
    }
</script>

<style>
circle {
fill: steelblue;
    visibility:visible;
}
circle:hover {
    fill: red;
}

line {
    stroke: #999;
    stroke-opacity: 0.6;
}
.selected {
    fill: red;
    r: 7;
}
</style>
  
<svg
width="600"
height="600"
on:mousemove={dragNode}
on:mouseup={() => { if ( draggedNode ) { runSimulation() }; draggedNode = null; }}>
{#each links as link}
<line x1='{link.source.x}' y1='{link.source.y}'
        x2='{link.target.x}' y2='{link.target.y}' >
</line>
{/each}

{#each nodes as point}
    <circle
        class:selected={point.selected}
        cx={point.x}
        cy={point.y}
        r="8"
        on:mousedown={() => { draggedNode = point ; runSimulation() } }
        >
        <title>{point.id}</title>
    </circle>
{/each}
</svg>