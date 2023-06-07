<script>
	// export makes the variable a component property	
	export let value = 2;
</script>

<input type='range' bind:value min=0 max=10 step=1 />