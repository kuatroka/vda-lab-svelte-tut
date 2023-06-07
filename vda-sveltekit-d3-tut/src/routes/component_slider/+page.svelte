<script>
	import Slider from '$lib/components/Slider.svelte';
	
	let score = 8;
    $: Slider

</script>

<!-- Slider has a property called "value". -->
<!-- Set that property to have the same value as the "score" -->
<!-- variable. This construction passes data down to a -->
<!-- child component.-->
<Slider bind:value={score}/>

<!-- This message does not change when the slider is moved. -->
<!-- Try to change the way you pass the value to the slider -->
<!-- so that it does change. This construction passes data -->
<!-- up from a child component. -->
<p>
	The score is: {score}
</p>